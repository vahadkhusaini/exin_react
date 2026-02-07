import React from 'react'
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";
import History from './History'

function Card() {
  return (
    <section>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='md:col-span-2 space-y-4'>
                    <div className='rounded-2xl shadow-md w-full mx-auto h-32 md:h-40 mt-6 p-6 bg-blue-exin'>
                        <div className='flex gap-2 md:gap-3 items-center'>
                        <Wallet className='h-5 w-5 md:h-10 md:w-10 text-white opacity-80'/>
                        <p className='text-white text-sm md:text-lg opacity-90'> Saldo Total</p>
                        </div>
                        <h1 className='text-white font-bold text-2xl md:text-4xl mt-2 mb-2'>Rp. 5.575.000</h1>
                        <p className='text-white text-sm opacity-80'>Keuangan anda dalam kondisi baik</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3 lg:gap-4'>
                        {/* Card Pemasukan */}
                        <div className='h-25 lg:h-30 rounded-2xl shadow-md px-4 py-3 bg-green-exin'>
                            <div className='flex items-center justify-between'>
                                <p className='text-white text-xs lg:text-lg opacity-90'>Pemasukan</p>
                                <div className='bg-green-exin-blur rounded-md p-0.5 inset-shadow-sm'>
                                    <ArrowUpRight className='h-5 w-5 lg:h-7 lg:w-7 text-white opacity-80'/>
                                </div>
                            </div>
                            <h1 className='text-white font-bold text-lg md:text-sm lg:text-3xl md:mt-4 mt-2 mb-2'>Rp. 5.575.000</h1>
                        </div>

                        {/* Card Pengeluaran */}
                        <div className='h-25 lg:h-30 rounded-2xl shadow-md px-4 py-3 bg-red-exin'>
                            <div className='flex items-center justify-between'>
                                <p className='text-white text-xs lg:text-lg opacity-90'>Pengeluaran</p>
                                <div className='bg-red-exin-blur rounded-md p-0.5 inset-shadow-sm'>
                                    <ArrowDownRight className='h-5 w-5 md:h-7 lg:w-7 text-white opacity-80'/>
                                </div>
                            </div>
                            <h1 className='text-white font-bold text-lg md:text-sm lg:text-3xl lg:mt-4 mt-2 mb-2'>Rp. 5.575.000</h1>

                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                    <History/>
                </div>
            </div>
        </div>
    </section>
        
  )
}

export default Card