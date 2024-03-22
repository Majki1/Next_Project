import { Card, Image, Group, Text, Badge, Button, Space } from '@mantine/core';
import { IconStar } from "@tabler/icons-react";


export default function CompanyCard({id}: {id: any}) {

    const location = 'Nairobi, Kenya';
    const description = 'We offer the best hair services in town.';
    const time = '8:00 AM - 6:00 PM';
    const phone = '+254 712 345 678';

        return (
                <Card shadow="sm" padding="lg" radius="md" withBorder className='bg-neutral-900 ml-1'>
                <Card.Section>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={40}
                        alt="Norway"
                    />
                </Card.Section>
    
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={700} td='underline'>Nives Hair</Text>
                    <Badge 
                    variant="gradient"
                    gradient={{ from: 'yellow', to: 'gold', deg: 90 }} 
                    className="flex items-center"
                    rightSection={<IconStar size={10}/>}>
                    4.5
                    </Badge>
                </Group>

                <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Location</Text>
                        <Text size="lg">{location}</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Description</Text>
                        <Text size="lg">{description}</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Work Hours</Text>
                        <Text size="lg">{id}</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Contact</Text>
                        <Text size="lg">{phone}</Text>
                <Space h='md'/>
            </Card>
        );
}
