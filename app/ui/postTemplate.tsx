import { Paper, Group, Text, Badge, Space, Image } from "@mantine/core";
import { IconStarFilled, IconHeart, IconChartBubble, IconSend } from "@tabler/icons-react";


export default function PostTemplate() {
    return (
        <>
        <Paper shadow="xs" radius="md" className="w-50% m-7 bg-neutral-900 border border-gray-500">
            <Group className="mb-4">
                <Image 
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" 
                alt="User avatar" 
                className="w-20 h-20 object-fit border-1 border-neutral-700 rounded-full shadow-xs m-2 mr-0"
                />
                <Text size='xl' className="text-start text-white mt-2 font-bold">UserName</Text>
            </Group>
            <div className="border-t border-gray-500">
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    alt="User avatar"
                    className='w-full h-80 object-fit border-b-0.5 border-neutral-700 shadow-xs'
                />
            </div>
            <Group className="mt-2 ml-2">
                <IconHeart size={26} className="text-white"/>
                <IconChartBubble size={26} className="text-white"/>
                <IconSend size={26} className="text-white"/>
            </Group>
            <Space h="sm" />
            <Group>
                <Text size='lg' className="text-start text-white ml-2">Post Description</Text>
            </Group>
        </Paper>
        </>
    );
}