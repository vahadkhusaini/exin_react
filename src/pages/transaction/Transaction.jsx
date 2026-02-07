import React, { useState }  from 'react'
import Select from 'react-select';


function Transaction() {
    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 6,
            backgroundColor: state.isSelected ? '#BFC6C4' : state.isFocused ? 'rgb(222, 235, 255)' : null, // Change colors here
            color: state.isSelected ? 'black' : 'black', // Change text color for contrast
            '&:hover': {
            backgroundColor: state.isSelected ? 'null' : 'null', // Ensure hover color is consistent
            },
        }),
        // You can also style the control container
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'grey', // Example of changing border color on focus
        }),
        };

    const options = [
       { value: 'chocolate', label: 'Chocolate' },
       { value: 'strawberry', label: 'Strawberry' },
       { value: 'vanilla', label: 'Vanilla' },
     ];
return (
    <div className='justify-center h-screen items-center'>
        <div className='rounded-xl shadow-lg max-w-sm mx-auto p-4 mt-10 bg-bg-exin'>
            <div className='text-center'>
                <p className='text-lg text-bold'>Tambah Transaksi Baru</p>
                <p className='text-md font-thin'>Catat pemasukan atau pengeluaran anda</p>
            </div>
            <form className="w-full mx-auto mt-10">
                <div className="mt-10 space-y-4">
                    <div className="sm:col-span-4">
                        <label for="keterangan" className="block text-sm/6 font-medium">Tipe</label>
                        <div className="mt-2">
                            <div className='flex flex-row gap-4'>
                                <button className='w-1/2 mx-auto rounded-xl bg-gray-200 hover:bg-green-exin hover:text-white p-4'>Pemasukan</button>
                                <button className='w-1/2 mx-auto rounded-xl bg-gray-200 hover:bg-red-exin hover:text-white p-4'>Pengeluaran</button>
                            </div> 
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="tanggal" className="block text-sm/6 font-medium">Tanggal</label>
                            <div className="mt-2">
                            <div
                                className="flex items-center rounded-md bg-gray-200 pl-3 outline-1 -outline-offset-1 outline-gray-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-exin">
                                    <input type="date" className="block min-w-0 grow bg-transparent py-4 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="categories" className="block mb-2.5 text-sm font-medium text-heading">Kategori</label>
                                <Select
                                    styles={customStyles}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                placeholder="Kategori"
                                // Use classNamePrefix to apply Tailwind styles
                                classNamePrefix="react-select" 
                                className="mt-1"
                                // You would need custom CSS or a styling function to fully integrate Tailwind classes
                                // (see react-select documentation for advanced styling with emotion/styled-components)
                                />
                    </div>
                    <div className="sm:col-span-4">
                        <label for="keterangan" className="block text-sm/6 font-medium">Jumlah</label>
                        <div className="mt-2">
                            <div
                                className="flex items-center rounded-md bg-gray-200 pl-3 outline-1 -outline-offset-1 outline-gray-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-exin">
                                <input id="jumlah" type="number" name="jumlah" placeholder="Masukkan jumlah..."
                                    className="block min-w-0 grow bg-transparent py-4 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label for="keterangan" className="block text-sm/6 font-medium">Keterangan (Opsional)</label>
                        <div className="mt-2">
                            <div
                                className="flex items-center rounded-md bg-gray-200 pl-3 outline-1 -outline-offset-1 outline-gray-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-exin">
                                <input id="keterangan" type="text" name="keterangan" placeholder="Tambahkan keterangan..."
                                    className="block min-w-0 grow bg-transparent py-4 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <button className="w-full bg-blue-exin hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl">
                            Simpan Transaksi
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>
)
}

export default Transaction