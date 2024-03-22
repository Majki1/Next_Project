'use client';
import CompanyCard from "../ui/companyCard";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import { Text, Space, Image } from '@mantine/core';
import { IconStar } from "@tabler/icons-react";

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="bg-neutral-800 h-screen">
                <div className="grid grid-cols-3 border-white mt-5">
                    <div className="col-span-1">
                        <CompanyCard />
                    </div>
                    <div className="col-span-2 mr-4">
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}