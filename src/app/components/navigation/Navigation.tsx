'use client'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <header className='shadow-1g shadow-gray-100'>
        <div className='contaner mx-auto flex max-w-screen-sm items-center justify-between'>
            <Link href="/" className='cursor-pointer text-xl font-bold'>
                FullStackChannel
            </Link>
        </div>
    </header>
  )
}

export default Navigation