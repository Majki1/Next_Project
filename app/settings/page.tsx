'use client';
import { Button, TextInput, Text, Tabs, Paper, Switch, Space, createTheme, MantineProvider } from '@mantine/core';
import Navbar from '../ui/navbar';
import { IconMan, IconLock, IconActivity, IconMessage, IconUsers, IconSearch, IconThumbUp } from '@tabler/icons-react';

const theme = createTheme({
  cursorType: 'pointer',
});


const Settings = () => {


  return (
<>
  <Navbar />
  <div className='h-screen flex justify-center items-center w-full'>
    <div className='flex justify-center mt-[-25%] ml-[-30%] w-full'>
      <Tabs orientation="vertical" classNames={{tab: 'text-large hover:bg-neutral-800 hover:text-cyan-500', panel: 'w-full', root: 'ml-[20%] w-[70%]'}} defaultValue='info'>
        <Tabs.List className='text-white'>
          <Tabs.Tab value="info" leftSection={<IconMan />}>Account Info</Tabs.Tab>
          <Tabs.Tab value="privacy" leftSection={<IconLock />}>Privacy and Security</Tabs.Tab>
          <Tabs.Tab value="activity" leftSection={<IconActivity/>}>Activity</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="info" className='ml-[20%]'>    
        <Paper shadow="md" radius="md" withBorder p="xl" className='bg-neutral-800 text-white'>
          <Text className='mb-4 text-large font-bold'>Account information</Text>
          <TextInput label="FirstName" placeholder="Your name" classNames={{input: 'bg-neutral-900'}} required />
          <TextInput label="LastName" placeholder="Your lastname" classNames={{input: 'bg-neutral-900'}} required />
          <TextInput label="Username" placeholder="Your username" classNames={{input: 'bg-neutral-900'}} required />
          <TextInput label="Email" placeholder="Your email" classNames={{input: 'bg-neutral-900'}} required />
          <Button color="cyan" variant="outline" radius="md" className='mt-2 button-gradient'>
            Save
          </Button>
        </Paper>
        </Tabs.Panel>
        <Tabs.Panel value="privacy" className='ml-[20%]'>
        <Paper shadow="md" radius="md" withBorder p="xl" className='bg-neutral-800 text-white'>
          <Text className='mb-4 text-large font-bold'>Privacy and Security settings</Text>
          <TextInput label="Password" placeholder="Your Password" classNames={{input: 'bg-neutral-900'}} required />
          <Space h="md" />
          <MantineProvider theme={theme}>
          <Switch
            color="cyan"
            labelPosition="left"
            label="Toggle private account"
            description="A private account allows you to choose if people can follow your account adding an additional level of privacy "
          />
          </MantineProvider>
          <Button color="cyan" variant="outline" radius="md" className='mt-2 button-gradient'>
            Save
          </Button>
        </Paper>
        </Tabs.Panel>
        <Tabs.Panel value="activity" className='ml-[20%]'>    
        <Paper shadow="md" radius="md" withBorder p="xl" className='bg-neutral-800 text-white'>
          <Text className='mb-4 text-large font-bold'>Account information</Text>
          <Button justify="start" fullWidth leftSection={<IconMessage/>} variant="default" mt="md" className='text-white'>
            Comment history
          </Button>
          <Button justify="start" fullWidth leftSection={<IconUsers/>} variant="default" mt="md" className='text-white'>
            Follower list
          </Button>
          <Button justify="start" fullWidth leftSection={<IconSearch/>} variant="default" mt="md" className='text-white'>
             Search history
          </Button>
          <Button justify="start" fullWidth leftSection={<IconThumbUp/>} variant="default" mt="md" className='text-white'>
             Likes and interests
          </Button>
        </Paper>
        </Tabs.Panel>
      </Tabs>
    </div>
  </div>
</>
  );
};

export default Settings;