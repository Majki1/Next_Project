import { IconMessage } from '@tabler/icons-react';
import Link from 'next/link';

export default function MessageIcon() {
    return (
        <>
        <div className="size-auto sticky flex items-end justify-end right-5 bottom-5 m-5 hover:size-18">
            <Link href="/messages">
            <div className="size-16 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-300 hover:size-18">
            <IconMessage className="text-white" size={30}/>
            </div>
            </Link>
        </div>
        </>
    );
    }