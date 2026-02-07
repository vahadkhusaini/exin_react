import React from 'react'
import TransactionItem from '../../components/TransactionItem';

function History() {

// Sample data for initial display
    const transactions = [
    {
        id: "1",
        type: "income",
        amount: 5000000,
        category: "Gaji",
        description: "Gaji Bulan Januari",
        date: new Date(2026, 0, 5).toISOString(),
    },
    {
        id: "2",
        type: "expense",
        amount: 150000,
        category: "Makanan",
        description: "Belanja bulanan",
        date: new Date(2026, 0, 5).toISOString(),
    },
    {
        id: "3",
        type: "expense",
        amount: 500000,
        category: "Tagihan",
        description: "Listrik dan Air",
        date: new Date(2026, 0, 4).toISOString(),
    },
    {
        id: "4",
        type: "expense",
        amount: 75000,
        category: "Transport",
        description: "Bensin",
        date: new Date(2026, 0, 4).toISOString(),
    },
    {
        id: "5",
        type: "income",
        amount: 1500000,
        category: "Freelance",
        description: "Project Web Design",
        date: new Date(2026, 0, 3).toISOString(),
    },
    {
        id: "6",
        type: "expense",
        amount: 200000,
        category: "Hiburan",
        description: "Nonton Bioskop",
        date: new Date(2026, 0, 3).toISOString(),
    },
    {
        id: "7",
        type: "expense",
        amount: 200000,
        category: "Hiburan",
        description: "Liburan Akhir Pekan",
        date: new Date(2026, 0, 3).toISOString(),
    },
    ];

    return (
        <div className='rounded-xl shadow-lg w-full px-6 py-4 bg-bg-exin min-h-80 md:min-h-100'>
            <p className='text-lg font-bold md:text-2xl mb-4'>Riwayat Transaksi</p>
            <div className='space-y-3 overflow-y-auto max-h-[calc(100%-3rem)]'>
                {transactions.map((trans) => (
                    <TransactionItem 
                        type={trans.type}
                        amount={trans.amount}
                        category={trans.category}
                        description={trans.description}
                        date={trans.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default History