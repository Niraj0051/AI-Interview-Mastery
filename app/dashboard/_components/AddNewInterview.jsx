"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();

  const {user} = useUser();

  const onSubmit = async(e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt = "Job role : "+jobPosition+ ", Job Description/Tech stack : "+jobDesc+" , Years of Experience : "+jobExperience+". Based on the above information please give me "+process.env.NEXT_PUBLIC_InterviewQuestions_Count+" interview questions with answer in json format and give questions and answers as fields in JSON"
    
    const result = await chatSession.sendMessage(InputPrompt);
    const responseText = await result.response.text();
    let MockJsonResp = responseText.replace(/```json/g, "").replace(/```/g, "").trim();

    setJsonResponse(MockJsonResp);

    if(MockJsonResp){
      const res = await db.insert(MockInterview)
      .values({
        mockId:uuidv4(),
        jsonMockResp : MockJsonResp,
        jobPosition : jobPosition,
        jobDesc : jobDesc,  
        jobExperience : jobExperience,
        createdBy : user?.primaryEmailAddress?.emailAddress,
        createdAt : moment().format('DD-MM-YYYY'),
      }).returning({mockId : MockInterview.mockId});

      if(res){
        setOpenDialog(false);
        router.push('/dashboard/interview/'+res[0]?.mockId)
      }
    }
    else {
      console.log("Error");
    }
    setLoading(false);
  }

  return (
    <div>
      <div
        className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-8 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all'
        onClick={() => setOpenDialog(true)}
      >
        <h2 className='text-lg text-center'>🔥 Ready? Start Your Mock Interview!</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about your job interviewing</DialogTitle>
            {/* Removed DialogDescription to avoid hydration errors */}
            <div className="space-y-4 pt-2">
              <h2 className='font-semibold mb-3'>
                Add Details about your job position/role, Job Description, and Years of Experience
              </h2>

              <form onSubmit={onSubmit}>
                <div className='mt-7 my-2'>
                  <label className='block font-medium mb-1'>Job Role/Job Position</label>
                  <Input 
                    placeholder="Ex. Full Stack Developer" 
                    required 
                    onChange={(event) => setJobPosition(event.target.value)}
                  />
                </div>

                <div className='my-3'>
                  <label className='block font-medium mb-1'>Job Description/Tech stack in short</label>
                  <Textarea 
                    placeholder='Ex. React, Angular, NodeJs, MongoDB, MySQL, etc.' 
                    required 
                    onChange={(event) => setJobDesc(event.target.value)}
                  />
                </div>

                <div className='my-3'>
                  <label className='block font-medium mb-1'>No. of Years of Experience</label>
                  <Input 
                    placeholder="Ex. 2" 
                    type="number" 
                    required 
                    onChange={(event) => setJobExperience(event.target.value)}
                  />
                </div>

                <div className='flex gap-5 justify-end mt-5'>
                  <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <> <LoaderCircle className='animate-spin'/> Generating from AI </> : 'Start Interview'}
                  </Button>
                </div>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
