import React from 'react'
import { User, Mail, Key, Lock, Sun, LogOut } from "lucide-react";

function InformationCard() {
  return (
    <div>
      <div className='rounded-3xl shadow-md max-w-lg mx-auto mt-6 p-5 bg-white'>
            <p className='text-lg text-bold'>Informasi Akun</p>

            <div className='flex gap-2 items-center mt-6'>
              <div className='rounded-xl bg-blue-400'>
                <User className='h-5 w-5 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-sm opacity-60'> Nama Lengkap</p>
                  <p className='text-sm'> John Doe</p>
              </div>
            </div>
            <hr className='text-gray-300 opacity-50 mt-5' />
            <div className='flex gap-2 items-center mt-6'>
              <div className='rounded-xl bg-purple-500'>
                <Mail className='h-5 w-5 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-sm opacity-60'> Email</p>
                  <p className='text-sm'> john.doe@gmail.com</p>
              </div>
            </div>
            <hr className='text-gray-300 opacity-50 mt-5' />
        </div>

      <div className='rounded-3xl shadow-md max-w-lg mx-auto mt-6 p-5 bg-white'>
        <div className="flex justify-between items-center mb-4">
            <p className='text-lg text-bold'>Keamanan</p>
            <button className='outline-blue-400 outline-2 outline-offset-2 rounded-sm px-2 hover:bg-blue-100 transition'>        
                <div className='flex items-center'>
                    <Lock className='h-4 w-4 mr-2 text-blue-400'/>
                    <span className='text-sm text-blue-400'>  
                    Ganti Password</span>
                </div>
          
            </button>
        </div>
        <div className='flex gap-2 items-center mt-6 mb-5'>
              <div className='rounded-xl bg-blue-400'>
                <Lock className='h-5 w-5 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-sm opacity-60'> Password</p>
                  <p className='text-sm'> ......</p>
              </div>
            </div>
        </div>

        <div className='rounded-3xl shadow-md max-w-lg mx-auto mt-6 p-5 bg-white'>
            <p className='text-lg text-bold'>Pengaturan Tampilan</p>

            <div className='flex gap-2 items-center mt-6'>
              <div className='rounded-xl bg-gray-600'>
                <Sun className='h-5 w-5 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-sm'> Mode Gelap</p>
                  <p className='text-sm opacity-60'> Tema Terang Aktif</p>
              </div>
            </div>
        </div>

        <div className='rounded-3xl shadow-md max-w-lg mx-auto mt-6 p-5 bg-white'>
            <div className='flex gap-2 items-center py-4'>
              <div className='rounded-xl bg-red-400'>
                <LogOut className='h-5 w-5 m-2 text-white'/>
              </div>
              <div className='flex-row ml-3'>
                  <p className='text-sm'> Keluar</p>
                  <p className='text-sm opacity-60'> Keluar dari akun Anda</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default InformationCard