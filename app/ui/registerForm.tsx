import { useState } from 'react';
import { Stepper, Button, Group, Input, TextInput, PasswordInput, Space, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { dropdown } from '@nextui-org/react';
import Link from 'next/link';

export default function RegisterForm() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
      <Stepper active={active} onStepClick={setActive} className='text-white'>
        <Stepper.Step label="Step 1" description="Basic information">
          <TextInput label="First name" placeholder="Enter your first name" required/>
          <Space h='sm'/>
          <TextInput label="Last name" placeholder="Enter your last name" required/>
          <Space h='sm'/>
          <DateInput label="Date of birth" placeholder="Enter your date of birth" required/>  
        </Stepper.Step>
        <Stepper.Step label="Step 2" description="Account information">
            <TextInput label="Email" placeholder="Enter your email" required/>
            <Space h='sm'/>
            <PasswordInput label="Password" placeholder="Enter your password" required/>
            <Space h='sm'/>
            <PasswordInput label="Confirm password" placeholder="Confirm your password" required/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Preferences">
            <TextInput label="City" placeholder="Enter your city" required/>
            <Space h='sm'/>
            <TextInput label="Country" placeholder="Enter your country" required/>
            <Space h='sm'/>
            <Select
            classNames={{option: 'hover:text-black'}}
            label="Select your account type"
            placeholder="Pick the type"
            data={['Customer', 'Employee', 'CEO']}
            clearable
            allowDeselect
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
            />
        </Stepper.Step>
        <Stepper.Completed>
            <div>
                <h1 className='text-4xl font-bold mb-4'>You are registered!</h1>
                <p className='text-lg font-bold'>Thank you for registering</p>
                <Space h='sm'/>
            </div>
            <Link href='/'> <Button variant='outline' color='cyan'>Go to Feed</Button></Link>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="outline" color='white' onClick={prevStep}>Back</Button>
        <Button variant='outline' color='cyan' onClick={nextStep}>Next step</Button>
      </Group>
    </>
    );
}