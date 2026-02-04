import React from 'react'
import { ArrowUpRight, ArrowDownRight, Wallet, User } from "lucide-react";

function ProfileCard() {
  return (
      <div className='rounded-3xl shadow-md max-w-sm mx-auto mt-6 p-6 bg-blue-exin'>
            <div className='flex gap-2 items-center'>
              <div className='rounded-full p-3 bg-blue-400'>
                <User className='h-10 w-10 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-white text-2xl font-bold'> John Doe</p>
                  <p className='text-white text-sm opacity-80'>john.doe@gmail.com</p>
              </div>
            </div>
            <hr className='text-white opacity-50 mt-5' />
            <p className='text-white text-sm opacity-90 mt-4'>Member Sejak : Januari 2025</p>
        </div>
  )
}

export default ProfileCard