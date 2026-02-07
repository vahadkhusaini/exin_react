import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, Plus } from 'lucide-react'

function DesktopNav() {
    return (
        <nav className="hidden md:block fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto px-4">
                <ul className="flex items-center justify-between h-16">
                    <li className="flex gap-5">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `flex rounded-2xl items-center gap-4 transition-colors ${
                                    isActive ? 'rounded-2xl bg-blue-exin text-white px-4 py-2 flex items-center gap-4 transition-colors shadow-lg' : 'text-gray-700 px-4 py-2 hover:bg-white hover:rounded-2xl hover:px-4 hover:py-2 transition-colors'
                                }`
                            }
                        >
                            <Home className='h-5 w-5'/>
                            <span>Home</span>
                        </NavLink>
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => 
                                `flex rounded-2xl items-center gap-4 transition-colors ${
                                    isActive ? 'rounded-2xl bg-blue-exin text-white px-4 py-2 flex items-center gap-4 transition-colors shadow-lg' : 'text-gray-700 px-4 py-2 hover:bg-white hover:rounded-2xl hover:px-4 hover:py-2'
                                }`
                            }
                        >
                            <User className="h-5 w-5"/>
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-4">
                        <NavLink 
                            to="/transaction" 
                            className="rounded-3xl bg-blue-exin text-white px-4 py-2 flex items-center gap-4 hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            <Plus className='h-5 w-5 text-white opacity-80'/>
                            <span>Tambah Transaksi</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default DesktopNav
