import React from 'react'
import { TrendingUp, TrendingDown, ShoppingBag, Utensils, Car, Home, Heart, Film, Briefcase, Wallet }from "lucide-react";

function TransactionItem({type, amount, category, description, date}) {
const total = type == 'income' ? ` + Rp ${amount}` : ` - Rp ${amount}`;

const categoryIcons = {
  "Makanan": <Utensils className="h-4 w-4" />,
  "Transport": <Car className="h-4 w-4" />,
  "Belanja": <ShoppingBag className="h-4 w-4" />,
  "Tagihan": <Home className="h-4 w-4" />,
  "Hiburan": <Film className="h-4 w-4" />,
  "Kesehatan": <Heart className="h-4 w-4" />,
  "Gaji": <Briefcase className="h-4 w-4" />,
  "Freelance": <Wallet className="h-4 w-4" />,
  "Investasi": <TrendingUp className="h-4 w-4" />,
  "Lainnya": <Wallet className="h-4 w-4" />,
};

const categoryColors = {
  "Makanan": "bg-orange-400 to-amber-400",
  "Transport": "bg-blue-400 to-cyan-400",
  "Belanja": "bg-purple-400 to-pink-400",
  "Tagihan": "bg-slate-400 to-zinc-400",
  "Hiburan": "bg-fuchsia-400 to-purple-400",
  "Kesehatan": "bg-red-400 to-rose-400",
  "Gaji": "bg-emerald-400 to-green-400",
  "Freelance": "bg-teal-400 to-cyan-400",
  "Investasi": "bg-lime-400 to-green-400",
  "Lainnya": "bg-gray-400 to-slate-400",
};

    return (
        <div className='rounded-2xl shadow-md max-w-sm px-4 py-3 mt-2'>
            <div className='flex flex-row gap-3 items-center justify-between'>
                <div className={`${categoryColors[category]} rounded-xl p-2 text-white inset-shadow-sm`}>
                    {categoryIcons[category]}
                </div>
                <div className='grow'>
                    <p className='text-sm text-bold'>{category}</p>
                    <p className='text-xs opacity-90'>{description }</p>
                </div>
                <div>
                    <p className={`text-sm text-bold ${type == 'income' ? 'text-red-exin' : 'text-green-exin'}`}>{ total }</p>
                </div>

            </div>
        </div>
    )
}

export default TransactionItem