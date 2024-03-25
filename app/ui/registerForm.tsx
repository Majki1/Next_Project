import { useState } from 'react';
import { Stepper, Button, Group, Input, TextInput, PasswordInput, Space, Select, Notification, rem } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { dropdown } from '@nextui-org/react';
import Link from 'next/link';
import { date, set, z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { IconCheck, IconX } from '@tabler/icons-react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const UserSchema = z.object({
    firstName: z.string({
        invalid_type_error: 'First name must be at least 2 characters long',
    }).min(2, "First name must be at least 2 characters long"),
    lastName: z.string({
        invalid_type_error: 'Last name must be at least 2 characters long',
    }).min(2, "Last name must be at least 2 characters long"),
    dateOfBirth: z.date({
        invalid_type_error: 'Date of birth must be a valid date',
    }),
    email: z.string({
        invalid_type_error: 'Email must be a valid email address',
    }).email({
        message: 'Email must be a valid email address',
    }),
    password: z.string({
        invalid_type_error: 'Password must be at least 6 characters long',
    }).min(6),
    confirmPassword: z.string({
    }).min(6),
    city: z.string({
        invalid_type_error: 'City must be at least 2 characters long',
    }).min(2),
    country: z.string({
        invalid_type_error: 'Country must be at least 2 characters long',
    }).min(2),
    accountType: z.string({
        invalid_type_error: 'Please select your account type',
    }).min(2),
});

export default function RegisterForm() {
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
    const IconError = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const [notification, setNotification] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        country: '',
        accountType: '',
    });

    const validate = () => {
      const result = UserSchema.safeParse(user);

      if (!result.success) {
        setNotification(2);
        setErrorMessage(result.error.errors[0].message);
      } else if (user.password != user.confirmPassword) {
        setNotification(3);
        setTimeout(() => {
          setNotification(0);
        }, 3000);
      } else {
        setNotification(1);
        setUser({
          firstName: '',
          lastName: '',
          dateOfBirth: null,
          email: '',
          password: '',
          confirmPassword: '',
          city: '',
          country: '',
          accountType: '',
        });
      }
    }
    const handleUserChange = (e:any) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
      };

      const handleDateChange = (value:any, name:any) => {
        setUser({
          ...user,
          [name]: value,
        });
      }

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
      <Stepper active={active} onStepClick={setActive} className='text-white'>
        <Stepper.Step label="Step 1" description="Basic information">
          <TextInput label="First Name" name='firstName' placeholder="Enter your first name" value={user.firstName} onChange={handleUserChange} required/>
          <Space h='sm'/>
          <TextInput label="Last Name" name='lastName' placeholder="Enter your last name" value={user.lastName} onChange={handleUserChange} required/>
          <Space h='sm'/>
          <DateInput label="Date of birth" placeholder="Enter your date of birth" value={user.dateOfBirth} onChange={(value) => handleDateChange(value, 'dateOfBirth')} required/>  
        </Stepper.Step>
        <Stepper.Step label="Step 2" description="Account information">
            <TextInput label="Email" name='email' placeholder="Enter your email" value={user.email} onChange={handleUserChange} required/>
            <Space h='sm'/>
            <PasswordInput label="Password" name='password' placeholder="Enter your password" value={user.password} description="Password must be at least 6 characters long" onChange={handleUserChange} required/>
            <Space h='sm'/>
            <PasswordInput label="ConfirmPassword" name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} placeholder="Confirm your password" required/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Preferences">
            <TextInput label="City" name='city' placeholder="Enter your city" value={user.city} onChange={handleUserChange} required/>
            <Space h='sm'/>
            <TextInput label="Country" name='country' placeholder="Enter your country" value={user.country} onChange={handleUserChange} required/>
            <Space h='sm'/>
            <Select
            onChange={(value) => setUser({...user, accountType: value ? value : ''})}
            name='accountType'
            value={user.accountType}
            classNames={{option: 'hover:text-black'}}
            label="Select your account type"
            placeholder="Pick the type"
            data={['Customer', 'Employee', 'CEO']}
            description={`Select your account type, this cannot be changed later.`}
            clearable
            allowDeselect
            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
            required
            />
        </Stepper.Step>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="outline" color='white' onClick={prevStep}>Back</Button>
        {active === 2 ? <Button variant='outline' color='cyan' onClick={validate}>Register</Button> :
        <Button variant='outline' color='cyan' onClick={nextStep}>Next step</Button>
        }
      </Group>
      {notification === 1 && (<Notification icon={checkIcon} color="teal" mt="md" className='top-5' withCloseButton={false}>
        You have successfully registered!
        <Link href='/'>
          <Button className='text-white ml-[30%]' variant='filled'>Go to feed</Button>
        </Link>
      </Notification>)}
      {notification === 2 && (<Notification icon={IconError} color="red" title="Error!" mt="md" withCloseButton={false} className='absolute'>
        {errorMessage}
        <Space h='sm'/>
        <Button onClick={() => setNotification(0)} color='red' variant='filled' className='bg-red-500'>Dismiss</Button>
      </Notification>)}
      {notification === 3 && (<Notification icon={IconError} color="red" title="Error!" mt="md" withCloseButton={false}>
        Passwords do not match.
      </Notification>)}
    </>
    );
}