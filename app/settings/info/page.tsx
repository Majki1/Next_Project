'use client';
import { useForm } from '@mantine/form';
import { Button, TextInput, PasswordInput, Box, Text, Tabs, Breadcrumbs, Anchor, Paper } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Navbar from '../../ui/navbar';
import { IconMan, IconLock, IconActivity } from '@tabler/icons-react';

const Settings = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('activeTab');

  const form = useForm({
    initialValues: {
      username: 'Jane Doe',
      email: 'jane@doe.com',
      password: '',
    },
  });

  const handleSubmit = async () => {
    console.log(form.values);
    revalidatePath('/settings');
    redirect('/');
  };

  return (
<>
  <Navbar />
  <div className='h-screen flex justify-center items-center w-full'>
    <div className='flex justify-center mt-[-25%] ml-[-30%] w-full'>
      <Tabs orientation="vertical" classNames={{tab: 'text-large hover:bg-neutral-800 hover:text-cyan-500', panel: 'w-full', root: 'ml-[20%] w-[70%]'}} value='info'
      onChange={(value) => router.push(`/settings/${value}`)}>
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
          <Button onClick={handleSubmit} color="cyan" variant="outline" radius="md" className='mt-2 button-gradient'>
            Save
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