import Navbar from "../ui/navbar";
import { Paper, Select, TextInput } from "@mantine/core";

export default function PrefsPage() {

    const user = {
        city: 'New York',
        country: 'USA',
        language: 'English',
        type: 'Customer'
    }

    const languages = [
        'English',
        'Spanish',
        'French',
        'German',
        'Croatian',
    ]

    return (
        <>
        <Navbar />
        <div className="h-screen">
        <Paper shadow="md" radius="md" withBorder p="xl" m="md" className='bg-neutral-800 text-white'>
            <h1 className='mb-4 text-large font-bold'>Preferences</h1>
            <TextInput label="City" placeholder="Your city" value={user.city} classNames={{input: 'bg-neutral-900'}} required />
            <TextInput label="Country" placeholder="Your country" value={user.country} classNames={{input: 'bg-neutral-900'}} required />
            <Select label="Language" defaultValue={user.language} data={languages} classNames={{input: 'bg-neutral-900', dropdown: 'text-white', option: 'hover:text-black'}} required />
            <TextInput label="Type" disabled placeholder="Your account type" value={user.type} classNames={{input: 'bg-neutral-900'}} required />
        </Paper>
        </div>
        </>
    );
}
