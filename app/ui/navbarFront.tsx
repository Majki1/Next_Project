'use client';
import '@/app/globals.css';
import { useState } from 'react';
import { Input, TextInput, Button, Text, Title } from '@mantine/core';
import {Avatar} from "@nextui-org/avatar";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
  } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconMan, IconSettings, IconEdit, IconDoorExit } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function NavbarFront() {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const router = useRouter();
    const [auth, setAuth] = useState(true);
    const items = [
        {
          key: "Profile",
          label: "Profile",
        },
        {
          key: "Sign out",
          label: "Sign out",
        },
      ];

    return (
        <>
        <div className="flex flex-col justify-between items-center border-b border-neutral-700 bg-neutral-900">
            <div className="flex justify-between w-full items-center mt-2">
                <Link href='/' className='w-20%'>
                <Title order={1} className="flex-auto text-white ml-20 login-gradient font-['Payton_One']">ReserveMe</Title>
                </Link>
                {isSmallScreen ? (
                        <Dropdown className='bg-neutral-900' backdrop='blur'>
                            <DropdownTrigger>
                                <Button variant='transparent' className='text-white mr-2'>Menu</Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions" items={items} className='text-white'>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='Profile' href='/profile' className='text-medium'><p>Following</p></Link> 
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='Profile' href='/profile' className='text-medium'><p>Feed</p></Link> 
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='Profile' href='/profile' className='text-medium'><p>Posts</p></Link> 
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='UserProfile' href='/userProfile' className='text-medium'><p>Profile</p></Link> 
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='Settings' href='/settings' className='text-medium'><p>Settings</p></Link>
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1'>
                                        <Link key='Account preferences' href='/prefs' className='text-medium'><p>Account Preferences</p></Link>
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <div className='flex items-center gap-1' onClick={() => {setAuth(false); router.push('/')}}>
                                        <Text>Sign out</Text>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
            <>
            <div className='flex flex-col lg:mr-[150px]'>
                <div className="flex justify-between w-80 mt-2 mr-[10.2%]">
                    <Button variant='filled' color='white' className="button-gradient py-5px" radius='xl'>Following</Button>
                    <Button variant='' color='white' className="button-gradient" radius='xl'>Feed</Button>
                    <Button variant='' color='white' className="button-gradient py-5px" radius='xl'>Posts</Button>
                </div>
                <div className={`flex items-center w-80 mt-3 ${!auth ? 'mr-[1.5%]' : 'mr-[0.5%]'}`}>
                    <TextInput placeholder='Search...' className='mt-3 mb-3 w-full' radius='xl' classNames={{input: 'remove-placeholder border-gradient bg-neutral-900', }} rightSection={
                    <button className='hover:text-cyan-500'>
                        <svg className='mt-3 mb-3 ml-1' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </button>
                    }/>
                </div>
            </div>
                <div className='mt-1 mr-[10%]'>
                    {auth ? (
                    <Dropdown className='bg-neutral-900' backdrop='blur'>
                        <DropdownTrigger>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" alt='Avatar' className='mr-2 hover:cursor-pointer'/>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dynamic Actions" items={items} className='text-white'>
                            <DropdownItem>
                                <div className='flex items-center gap-1'>
                                <IconEdit />
                                <Link key='UserProfile' href='/userProfile' className='text-medium'><p>Profile</p></Link> 
                                </div>
                            </DropdownItem>
                            <DropdownItem>
                                <div className='flex items-center gap-1'>
                                <IconSettings />
                                <Link key='Settings' href='/settings' className='text-medium'><p>Settings</p></Link>
                                </div>
                            </DropdownItem>
                            <DropdownItem>
                                <div className='flex items-center gap-1'>
                                <IconMan />
                                <Link key='Account preferences' href='/prefs' className='text-medium'><p>Account Preferences</p></Link>
                                </div>
                            </DropdownItem>
                            <DropdownItem>
                                <div className='flex items-center gap-1' onClick={() => {setAuth(false); ; router.push('/')}}>
                                <IconDoorExit />
                                <Text>Sign out</Text>
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    ) : <Link href='/login'><p className='login-gradient font-bold mr-3 text-lg'>Login</p></Link>}
                </div>
            </>
                )}
            </div>
        </div>
        </>
    );
}