import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, Plus } from 'lucide-react'

function Navigation() {
    return (
        <nav className="py-9 px-4">
            <div className="z-50 fixed bottom-0 right-0 left-0 p-3 bg-white border border-gray-300 md:hidden">
                <ul className="flex justify-between mx-8">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `flex justify-center flex-col items-center gap-1 ${
                                    isActive ? 'text-blue-exin' : 'opacity-50'
                                }`
                            }
                        >
                            <Home className='text-base'/>
                            <span className="font-sm">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/transaction"
                        >
                            <div className="shadow-md bg-blue-exin text-white rounded-full p-5 -mt-5">
                                <Plus className="text-3xl"/>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                `flex justify-center flex-col items-center gap-1 ${
                                    isActive ? 'text-blue-exin' : 'opacity-50'
                                }`
                            }
                        >
                            <User className="text-base"/>

                            <span className="font-xs">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation