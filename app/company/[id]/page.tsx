'use client';
import CompanyCard from "../../ui/companyCard";
import Footer from "../../ui/footer";
import Navbar from "../../ui/navbar";
import { Text, Space, Image } from '@mantine/core';
import { IconStar } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <>
            <Navbar />
            <div className="bg-neutral-800 h-screen">
                <div className="grid grid-cols-3 border-white mt-5">
                    <div className="col-span-1">
                        <CompanyCard id={id}/>
                    </div>
                    <div className="col-span-2 mr-4">
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}