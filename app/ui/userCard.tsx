'use-client';
import { Paper, Group, Image, Space, Text, Tabs, Button, Badge } from '@mantine/core';
import { IconCheck, IconPencil, IconStar, IconStarFilled, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import ProfileTabs from './profileTabs';

export default function UserCard() {
    const[isFollowing, setIsFollowing] = useState(false);

    return (

        <div className="flex justify-left items-start w-full min-h-screen">
        <Paper shadow="xs" radius="md" className="w-full mx-7 mt-5 h-auto bg-neutral-900 border border-gray-500 max-h-screen">

            <div className='relative group'>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="User avatar"
                    className='w-full h-40 object-fit border-b-2 border-neutral-700 rounded-t-md shadow-xs'
                />
                <Button 
                    variant="filled"
                    className="absolute right-0 top-0 rounded-full size-12 opacity-0 group-hover:opacity-100 m-1 transition-opacity duration-200 hover:bg-black bg-black bg-opacity-50 p-1"
                    >
                    <IconPencil size={24} className="text-white"/>
                </Button>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="User avatar"
                    className="absolute top-12 left-5 m-2 border-2 border-neutral-900 rounded-full shadow-xs size-[125px]"
                />
            </div>
            <div className="flex justify-between items-start">
            <div className="w-1/3 ">
            <Group>
            <Text size='xl' className="text-start text-white ml-2 mt-[36px] font-bold">John Doe</Text>
            </Group>
            <Text size='sm' className="text-start text-gray-400 ml-2">@jondoe</Text>
            <Space h="md" />
            <Text size='lg' className="text-start text-white ml-2">Short desc</Text>
            <Space h="md" />
            <Group>
                <Badge className="m-2 bg-cyan-500">Random</Badge>
                <Badge className="m-2 bg-cyan-500">Rewards</Badge>
                <Badge className="m-2 bg-cyan-500">Maybe</Badge>
                <Badge className="m-2 bg-cyan-500">Idea</Badge>
            </Group>
            <Space h="sm" />
            <Group className='gap-1'>
                <Text size='lg' c='dimmed' className="text-start text-white ml-2">Followers:</Text>
                <Text size='lg' className="text-start text-white font-bold mr-3">100</Text>
                <Text size='lg' c='dimmed' className="text-start text-white">Likes:</Text>
                <Text size='lg' className="text-start text-white font-bold mr-3">100</Text>
                <Text size='lg' c='dimmed' className="text-start text-white">Rating:</Text>
                <Text size='lg' className="text-start text-white font-bold">4.8<IconStarFilled style={{display: 'inline-block'}} size={15.7} className='ml-1 mb-[3px] text-yellow-500'/></Text>
            </Group>
            <Space h="md" />
            <Group className='gap-1'>
            <Text size='lg' c='dimmed' className="text-start text-white ml-2">Posts:</Text>
            <Text size='lg' className="text-start text-white font-bold">5</Text>
            </Group>
            </div>
            <div className="w-2/3 flex justify-between items-center text-white">
                <ProfileTabs />
            </div>
            </div>
        </Paper>
        </div>

    );
}