import { Fieldset, TextInput, Button, Group, Space, Input } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';

interface LoginFormProps {
    register: boolean;
    setRegister: (register: boolean) => void;
  }

const LoginForm: React.FC<LoginFormProps> = ({ register, setRegister}) => {

    return (
        <div className="flex items-center justify-center h-screen bg-transparent text-white">
        <div className="w-96 bg-transparent rounded-lg p-4">
            <h1 className='text-4xl font-bold mb-4'>Login</h1>
            <Fieldset className='' variant='unstyled'>
            <TextInput
                leftSectionPointerEvents="none"
                leftSection={<IconAt size={16} />}
                label="Email"
                placeholder="Enter your email..."
            />
            </Fieldset>
            <Space h='sm'/>
            <Fieldset className='text-large font-bold' variant='unstyled'>
                <PasswordInput
                leftSection={<IconLock size={16} />}
                label="Password"
                description=""
                placeholder="Enter your password..."
                />
            </Fieldset>
            <Group justify="flex-end" mt="md">
                <Button color="cyan" variant="outline" className='font-bold'>Login</Button>
                <Button color="cyan" variant="outline" className='font-bold' onClick={() => setRegister(true)}>Register</Button>
            </Group>
        </div>
        </div>
    );
    }

    export default LoginForm;