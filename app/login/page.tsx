'use client';
import React from 'react'; // Add missing import for React
import LoginForm from "../ui/loginForm";
import backgroundImage from '@/public/Eternal-Constance.jpg';
import RegisterForm from '../ui/registerForm';

export default function Page() {
    const [register, setRegister] = React.useState(false);
    return (
        <>
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-600 to-black">
            {register ? (
                <div>
                    <RegisterForm />
                </div>
            ) : (
                <LoginForm register={register} setRegister={setRegister}/>
            )}
        </div>
        </>
    );
}
