import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {

    const navigate  = useNavigate()

    return (
        <div className="min-h-screen bgParch bg-cover bg-center borderImg">
            <div className="p-3 flex items-center justify-center gap-3 bg-[#6b1b1b] border-b-4 border-b-yellow-500 cursor-pointer select-none" onClick={()=>navigate('/')}>
                <img  
                    src='/images/Logo4.png'
                    className='w-7 md:w-10'
                />
                <h1 className="text-3xl md:text-5xl text-[#D4AF37]">The Gita</h1>
            </div>
            <Outlet />
        </div>
    )
}
