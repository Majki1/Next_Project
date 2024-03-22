'use client';
import { useForm } from '@mantine/form';
import { Button, TextInput, PasswordInput, Box, Text, Tabs, Breadcrumbs, Anchor } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Navbar from '../../ui/navbar';
import { IconMan, IconLock, IconActivity } from '@tabler/icons-react';

const Settings = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('activeTab');
    const items = [
        { title: 'Home', href: '/'},
        { title: 'Settings', href: '/settings'},
        { title: 'Activity', href: '/settings/activity' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
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
    <div className='mt-6 ml-[10%]'>
        <Breadcrumbs separator="→" separatorMargin="sm" mt="xs">
            {items}
        </Breadcrumbs>
    </div>
  <div className='h-screen flex justify-center items-center w-full'>
    <div className='flex justify-center mt-[-25%] ml-[-30%] w-full text-white'>
      <Tabs orientation="vertical" classNames={{tab: 'text-large hover:bg-neutral-800 hover:text-cyan-500', panel: 'w-full', root: 'ml-[20%] w-[70%]'}} value='security' onChange={(value) => router.push(`/settings/${value}`)}>
        <Tabs.List>
          <Tabs.Tab value="info" leftSection={<IconMan />}>Account Info</Tabs.Tab>
          <Tabs.Tab value="privacy" leftSection={<IconLock />}>Privacy and Security</Tabs.Tab>
          <Tabs.Tab value="activity" leftSection={<IconActivity/>}>Activity</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="security" className='ml-[20%]'>Activity tab content</Tabs.Panel>
      </Tabs>
    </div>
  </div>
</>
  );
};

export default Settings;