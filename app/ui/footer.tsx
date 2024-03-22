import React, { useEffect, useState } from 'react';
import { IconBrandInstagram, IconBrandX, IconBrandFacebook } from '@tabler/icons-react';
import { Space, Divider } from '@mantine/core';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);
    useEffect(() => {
    const getCurrentYear = () => {
         return new Date().getFullYear();
    }

    setCurrentYear(getCurrentYear());
    }
    , []);

    return (
        <>
        
        <footer className="flex flex-col items-center justify-between h-100% bg-gradient-to-tr from-neutral-800 to-black opacity-80 font-bold border-t-1 border-neutral-900 text-white">
            <div className="w-full flex justify-content">
            <div className="w-full flex justify-start">
                <h1 className="ml-10 mt-4 border-b-2 border-white">Contact info</h1>
            </div>
            <div className="w-full flex justify-end">
                <h1 className="mr-10 mt-4 border-b-2 border-white">Legal</h1>
            </div>
            </div>
            <div className="flex justify-between w-full">
            <div className="flex flex-col justify-center items-start ml-10">
            <Space h='sm'/>
            <div className="h-5 flex items-center">
                <IconBrandInstagram size={24} /><a className='hover:cursor-pointer hover:underline'>Instagram</a>
            </div>
            <Space h='sm'/>
            <div className="h-5 flex items-center">
                <IconBrandX size={24} /><a className='hover:cursor-pointer hover:underline'>Twitter</a>
            </div>
            <Space h='sm'/>
            <div className="h-5 flex items-center">
                <IconBrandFacebook size={24} /><a className='hover:cursor-pointer hover:underline'>Facebook</a>
            </div>
            <Space h='sm'/>
            </div>
            <div className="flex flex-col justify-center items-end mr-10">
            <div className="h-5 flex items-end">
                <a className='hover:cursor-pointer hover:underline'>Terms of Service</a>
            </div>
            <Space h='sm'/>
            <div className="h-5 flex items-end">
                <a className='hover:cursor-pointer hover:underline'>Privacy Policy</a>
            </div>
            <Space h='sm'/>
            <div className="h-5 flex items-end">
                <a className='hover:cursor-pointer hover:underline'>Cookie Policy</a>
            </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Space h='sm'/>
            <p className="text-white">©{currentYear} ReserveMe</p>
            <Space h='sm'/>
        </div>
        </footer>
        </>
    );
}
