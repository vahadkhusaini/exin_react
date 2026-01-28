import React from 'react'
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

function Card() {
  return (
    <section>
        <div className='rounded-2xl shadow-md max-w-sm mx-auto mt-6 p-6 bg-blue-exin'>
            <div className='flex gap-2'>
            <Wallet className='h-5 w-5 text-white opacity-80'/>
            <p className='text-white text-sm opacity-90'> Saldo Total</p>
            </div>
            <h1 className='text-white font-bold text-2xl mt-2 mb-2'>Rp. 5.575.000</h1>
            <p className='text-white text-sm opacity-80'>Keuangan anda dalam kondisi baik</p>
        </div>

        <div className='flex flex-row gap-3 mt-3'>
            <div className='w-1/2 rounded-2xl shadow-md max-w-sm mx-auto px-4 py-3 bg-green-exin'>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-xs opacity-90'> Pemasukan</p>
                    <div className='bg-green-exin-blur rounded-md p-0.5 inset-shadow-sm'>
                        <ArrowUpRight className='h-5 w-5 text-white opacity-80'/>
                    </div>
                </div>
                <h1 className='text-white font-bold text-lg mt-2 mb-2'>Rp. 5.575.000</h1>
            </div>

            <div className='w-1/2 rounded-2xl shadow-md max-w-sm mx-auto px-4 py-3 bg-red-exin'>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-xs opacity-90'> Pengeluran</p>
                    <div className='bg-red-exin-blur rounded-md p-0.5 inset-shadow-sm'>
                        <ArrowDownRight className='h-5 w-5 text-white opacity-80'/>
                    </div>
                </div>
                <h1 className='text-white font-bold text-lg mt-2 mb-2'>Rp. 5.575.000</h1>
            </div>
        </div>
    </section>
        
  )
}

export default Card