import { Card, Image, Group, Text, Badge, Button, Space } from '@mantine/core';
import { IconStar } from "@tabler/icons-react";

export default function CompanyCard() {

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
                        <Text size="lg">Rijeka</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Description</Text>
                        <Text size="lg">We are a company that offers a variety of services. We are here to help you with your needs.</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Work Hours</Text>
                        <Text size="lg">Monday - Friday 8:00 - 16:00</Text>
                        <Space h='md'/>
                        <Text size="xl" fw={700} td='underline'>Contact</Text>
                        <Text size="lg">+385 91 123 4567</Text>
                <Space h='md'/>
            </Card>
        );
}
