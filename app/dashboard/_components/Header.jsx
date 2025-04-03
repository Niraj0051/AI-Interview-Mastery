// "use client"
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// function Header() {

//     const path=usePathname();
//     useEffect(()=>{
//         console.log(path)
//     },[])

//   return (
//     <div className='flex p-4 items-center justify-between bg-secondary shadow-small'>
//       <Image src={'/logo1.png'} width={160} height={100} alt='logo' />
//       <ul className='hidden md:flex gap-6'>
//         <Link href="/dashboard" className='hover:text-primary hover:font-bold transition cursor-pointer'>Dashboard</Link>
//         <Link href="/dashboard/questions" className='hover:text-primary hover:font-bold transition cursor-pointer'>Questions</Link>
//         <Link href="/dashboard/analytics" className='hover:text-primary hover:font-bold transition cursor-pointer'>Analytics</Link>
//         <Link href="/dashboard/how" className='hover:text-primary hover:font-bold transition cursor-pointer'>How it works?</Link>
//       </ul>
//       <UserButton/>
//     </div>
//   )
// }

// export default Header

// "use client"
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'

// function Header() {
//   const pathname = usePathname()

//   // Define navigation items
//   const navItems = [
//     { path: '/dashboard', name: 'Dashboard', icon: '📊' },
//     { path: '/dashboard/questions', name: 'Questions', icon: '❓' },
//     { path: '/dashboard/analytics', name: 'Analytics', icon: '📈' },
//     { path: '/dashboard/how', name: 'How it works?', icon: 'ℹ️' }
//   ]

//   return (
//     <div className='flex p-4 items-center justify-between bg-secondary shadow-small'>
//       <Image src={'/logo1.png'} width={160} height={100} alt='logo' />
      
//       <nav className='hidden md:flex gap-6'>
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             href={item.path}
//             className={`hover:text-primary hover:font-bold transition ${
//               pathname === item.path 
//                 ? 'text-primary font-bold' 
//                 : 'text-current'
//             }`}
//           >
//             <span className="text-lg">{navItems.icon}</span>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
      
//       <UserButton/>
//     </div>
//   )
// }

// export default Header

"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { useState } from 'react'

function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/dashboard/questions', name: 'Questions', icon: '❓' },
    { path: '/dashboard/analytics', name: 'Analytics', icon: '📈' },
    { path: '/dashboard/how', name: 'How it works?', icon: 'ℹ️' }
  ]

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-small'>
      {/* Left side - Mobile menu button and logo */}
      <div className='flex items-center gap-4'>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        
        {/* Logo */}
        <Image 
          src={'/logo1.png'} 
          width={160} 
          height={100} 
          alt='logo' 
        />
      </div>
      
      {/* Desktop Navigation (hidden on mobile) */}
      <nav className='hidden md:flex gap-6'>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-primary hover:font-bold transition ${
              pathname === item.path 
                ? 'text-primary font-bold' 
                : 'text-current'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* Right side - User button */}
      <UserButton/>
      
      {/* Mobile Navigation (appears when button is clicked) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 right-0 bg-secondary p-4 flex flex-col gap-4 z-50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-primary hover:font-bold transition ${
                pathname === item.path 
                  ? 'text-primary font-bold' 
                  : 'text-current'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}

export default Header