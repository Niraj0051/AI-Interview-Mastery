// "use client"
// import Link from 'next/link'
// import { FaGithub, FaTwitter, FaHeart, FaInstagram } from 'react-icons/fa'

// function Footer() {
//   return (
//     <footer className="bg-secondary py-6 mt-auto">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Logo and copyright */}
//         <div className="flex items-center gap-2 mb-4 md:mb-0">
//           <Link href="/" className="text-lg font-bold text-primary">
//             AI-Interview-Mastery
//           </Link>
//           <span className="text-sm text-gray-500">© {new Date().getFullYear()}</span>
//         </div>

//         {/* Quick links */}
//         <div className="flex gap-6 mb-4 md:mb-0">
//           {/* <Link href="/privacy" className="text-sm hover:text-primary transition">
//             Privacy
//           </Link>
//           <Link href="/terms" className="text-sm hover:text-primary transition">
//             Terms
//           </Link> */}
//           <Link href="/contact" className="text-base hover:text-primary transition">
//             Contact Us
//           </Link>
//         </div>

//         {/* Social links */}
//         <div className="flex gap-4 text-xl">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
//              className="hover:text-primary transition">
//             <FaGithub />
//           </a>
//           <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
//              className="hover:text-primary transition">
//             <FaInstagram />
//           </a>
//         </div>
//       </div>

//       {/* Made with love */}
//       <div className="text-center text-sm text-gray-500 mt-4">
//         Made with <FaHeart className="inline text-red-500" /> by Team-16
//       </div>
//     </footer>
//   )
// }

// export default Footer

"use client"
import Link from 'next/link'
import { FaGithub, FaHeart, FaInstagram, FaUsers, FaRegLightbulb, FaRegComments } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-primary py-4 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-2">
          {/* Left - Branding */}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white hover:text-yellow-300 transition">
            <span className="bg-red-600 text-white px-2 py-1 rounded">AI</span>
            Interview-Mastery
          </Link>

          {/* Center - Links with Icons */}
          <div className="flex gap-6 text-sm text-white">
            <Link href="/our-team" className="flex items-center gap-1 hover:text-yellow-300 transition">
              <FaUsers className="text-secondary" /> Our Team
            </Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-yellow-300 transition">
              <FaRegComments className="text-secondary" /> Contact Us
            </Link>
            <Link href="/dashboard/how" className="flex items-center gap-1 hover:text-yellow-300 transition">
              <FaRegLightbulb className="text-secondary" /> How It Works
            </Link>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4 text-white">
            <span className="text-sm hidden sm:block">Connect Us</span>
            <div className="flex gap-3 text-xl">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-yellow-300 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Made With Love */}
        <div className="text-center text-xs text-gray-300 mt-2">
          Made with <FaHeart className="inline text-red-500" /> by Team-16
        </div>
      </div>
    </footer>
  )
}

export default Footer