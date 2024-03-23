import { Tabs, Text, Group, ScrollArea } from '@mantine/core';
import PostTemplate from './postTemplate';
import { Container } from 'postcss';

export default function ProfileTabs() {

    const content = [
        <PostTemplate />,
        <PostTemplate />,
        <PostTemplate />,
        <PostTemplate />,
        <PostTemplate />,
        <PostTemplate />,
    ];

    return (
        <Tabs defaultValue='posts' className='w-full text-xl font-bold max-h-screen mb-5'>
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
                    <ScrollArea.Autosize mah={600} miw={'50%'} mx="auto" scrollbars="y" offsetScrollbars scrollbarSize={4} scrollHideDelay={500}>
                        {content}
                    </ScrollArea.Autosize>
                </Group>
            </Tabs.Panel>
            <Tabs.Panel value='news'>
                <Group>
                    <Text size='lg' className="text-start text-white">News:</Text>
                    <Text size='lg' className="text-start text-white">0</Text>
                </Group>
            </Tabs.Panel>
        </Tabs>
    );
}