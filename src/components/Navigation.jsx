import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, Plus } from 'lucide-react'
import DesktopNav from './Navigation/DesktopNav'   
import MobileNav from './Navigation/MobileNav'

export default function Navigation() {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}