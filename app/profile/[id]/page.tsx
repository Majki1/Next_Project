'use client';
import { User } from "@nextui-org/react";
import Navbar from "../../ui/navbar";
import Footer from "../../ui/footer";
import UserCard from "../../ui/userCard";
import { Card } from "@mantine/core";

export default function Page() {
    return (
        <>
        <div className="sticky top-0 z-40">
        <Navbar />
        </div>
        <div className="bg-neutral-800 h-auto">
        <div className="flex justify-left items-center">
            <UserCard />
        </div>
        </div>
        <Footer />
        </>
    );
    }