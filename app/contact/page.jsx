"use client"
import { useState } from 'react'
import { FaStar, FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
    hover: 0
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'nirajpingale4@gmail.com'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          message: '',
          rating: 0,
          hover: 0
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Thank you! Your message has been sent.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Feedback (Rating)
            </label>
            <div className="flex">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setFormData({...formData, rating: ratingValue})}
                      className="hidden"
                    />
                    <FaStar
                      className="cursor-pointer text-2xl"
                      color={ratingValue <= (formData.hover || formData.rating) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setFormData({...formData, hover: ratingValue})}
                      onMouseLeave={() => setFormData({...formData, hover: 0})}
                    />
                  </label>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}