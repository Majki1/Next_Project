'use-client';
import { Paper, Group, Image, Space, Text, Tabs, Button, Badge } from '@mantine/core';
import { IconCheck, IconPencil, IconStar, IconStarFilled, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function UserCard() {
    const[isFollowing, setIsFollowing] = useState(false);

    return (

        <div className="flex justify-left items-center w-auto">
        <Paper shadow="xs" radius="md" className="w-full m-7 bg-neutral-900 border border-gray-500 min-h-screen">
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
                </div>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="User avatar"
                    className="absolute left-8 m-2 border-2 bottom-[60%] border-neutral-900 rounded-full shadow-xs size-[125px]"
                />
            <div className="flex justify-between items-start">
            <div className="w-1/3 border-r border-gray-500 min-h-screen">
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
                <Tabs defaultValue='posts' className='w-full text-xl font-bold'>
                    <Tabs.List grow justify="space-between">
                        <Tabs.Tab value='location'>Location</Tabs.Tab>
                        <Tabs.Tab value='posts'>Posts</Tabs.Tab>
                        <Tabs.Tab value='news'>News</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value='location'>
                        <Group>
                            <Text size='lg' className="text-start text-white">Location:</Text>
                            <Text size='lg' className="text-start text-white">New York, NY</Text>
                        </Group>
                    </Tabs.Panel>
                    <Tabs.Panel value='posts'>
                        <Group>
                            <Text size='lg' className="text-start text-white">Posts:</Text>
                            <Text size='lg' className="text-start text-white">5</Text>
                        </Group>
                    </Tabs.Panel>
                    <Tabs.Panel value='news'>
                        <Group>
                            <Text size='lg' className="text-start text-white">News:</Text>
                            <Text size='lg' className="text-start text-white">0</Text>
                        </Group>
                    </Tabs.Panel>
                </Tabs>
            </div>
            </div>
        </Paper>
        </div>

    );
}