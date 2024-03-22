import { Card, Image, Text, Badge, Button, Group, CardSection, Space } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function CardComponent({companyName, description, href}: {companyName: string, description: string, href: string}) {
  const[isFollowing, setIsFollowing] = useState(false);

    return (
        <Card
          shadow="sm"
          padding="xl"
          className='bg-neutral-900 hover:cursor-pointer hover:bg-neutral-800 hover:text-white'
        >
          <Card.Section>
            <Image src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" 
            className='rounded-full absolute bottom-[38%] left-1 border-4 border-neutral-900'
            h={90}
            w={90} 
            />
            <Image
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              h={160}
              alt="No way!"
            />
            {isFollowing && 
              <Button size='sm' radius='xl' className='absolute bottom-[38%] right-0 m-2 bg-cyan-500 unfollow hover:bg-red-500' onClick={() => {setIsFollowing(false)}}>
                <span className="flex items-center text text-white">Following<IconCheck className='ml-1' style={{ display: 'inline-block' }} size={16}/></span>
                <span className="flex items-center hover-text text-white">Unfollow<IconX className='ml-1' style={{ display: 'inline-block' }} size={16}/></span>
              </Button>
            }
            {!isFollowing && <Button size='sm' radius='xl' className='absolute bottom-[38%] right-0 m-2 bg-cyan-500 text-white hover:text-white hover:bg-cyan-300' onClick={() => {setIsFollowing(true)}}>Follow</Button>}
          </Card.Section>

          <Card.Section 
          className='text-start p-2'
          component="a"
          href={href}>
          <Space h="md" />
          <Text fw={500} size="lg" mt="md">
            {companyName}
          </Text>

          <Text mt="xs" c="dimmed" size="sm">
            {description}<br />
            Click to view more and book an appointment.
          </Text>
          <Space h="xl" />
        </Card.Section>
        </Card>
      );
    }