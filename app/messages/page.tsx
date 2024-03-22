'use client';
import Navbar from "../ui/navbar";
import '@/app/globals.css';
import { useState, useEffect, useRef } from "react";
import { TextInput, UnstyledButton, Button, Modal } from "@mantine/core";
import { IconSend, IconX, IconPencil, IconStarFilled, IconList } from "@tabler/icons-react";



export default function MessagesPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ sender: 'you' | 'other', text: string, timestamp: Date, edited: boolean }[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    
    function formatTimestamp(timestamp: Date) {
        const now = new Date();
        const diffMinutes = Math.floor((now.getTime() - timestamp.getTime()) / 60000);
        if (diffMinutes < 60) {
            return `${diffMinutes} minutes ago`;
        } else {
            return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
    }
    
    const handleClick = () => {
        console.log('Clicked');
    }
    
    const handleSend = () => {
        if (editingIndex !== null) {
            const newMessages = [...messages];
            newMessages[editingIndex] = { ...newMessages[editingIndex], text: message, edited: true };
            setMessages(newMessages);
            setEditingIndex(null);
        } else {
            setMessages([...messages, { sender: 'you', text: message, timestamp: new Date(), edited: false }]);
        }
        setMessage('');
    }
    
    const handleEdit = (event: React.MouseEvent, index: number) => {
        event.stopPropagation();
        setEditingIndex(index);
        setMessage(messages[index].text);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    const handleDelete = (index: number) => {
            const newMessages = [...messages];
            newMessages.splice(index, 1);
            setMessages(newMessages);
    }
 
    const handleFavorite = (index: number) => {
        if (favorites.includes(index)) {
            setFavorites(favorites.filter(favoriteIndex => favoriteIndex !== index));
        } else {
            setFavorites([...favorites, index]);
        }
    }
    
    const OptionsModal = ({ onEdit, onDelete, onFavorite }: { onEdit: (event: React.MouseEvent) => void, onDelete: () => void, onFavorite: () => void }) => {
        return (
            <Modal opened onClose={() => {}} title="Message options" className="text-white" centered size="auto" 
            classNames={{root: 'neutral-800',}}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
              }}
              transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}>
                        <Button variant='transparent' color='white' onClick={(event) => { onEdit(event); setOpenedIndex(null); }} rightSection={<IconPencil/>} className="hover:bg-cyan-500">Edit</Button>
                        <Button variant="transparent" color="white" onClick={onFavorite} rightSection={<IconStarFilled/>} className="hover:bg-cyan-500">Favorite</Button>
                        <Button variant='transparent' color="white" onClick={onDelete} rightSection={<IconX />} className="hover:bg-cyan-500">Delete</Button>
                        <Button 
                        variant='transparent' 
                        color="white" 
                        onClick={(event) => {
                            event.stopPropagation();
                            setIsFavoritesOpen(!isFavoritesOpen);
                        }} 
                        className="hover:bg-cyan-500" 
                        rightSection={<IconList />}
                        >
                        Show Favorite Messages
                        </Button>
                    {isFavoritesOpen && (
                        <div className="mt-4 ml-4 text-white">
                            <h2 className="font-bold mb-2">Favorite Messages:</h2>
                            {favorites.map(favoriteIndex => (
                                <p key={favoriteIndex}>{messages[favoriteIndex].text}</p>
                            ))}
                        </div>
                    )}

            </Modal>
        );
    }


    return (
    <>
        <Navbar />
        <div className="h-[94vh] bg-neutral-800 text-white flex">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border-r border-white p-4">
                <h1 className="font-bold text-xl mb-4">Inbox</h1>
                <div className="space-y-4">
                <div onClick={handleClick} className="group rounded flex items-center space-x-2 hover:bg-cyan-500 cursor-pointer" style={{ transition: 'background-color 0.2s ease-in-out' }}>
                    <div className="w-10 h-10 ml-1 rounded-full bg-gray-700"></div>
                    <div>
                            <div className="font-bold">John Doe</div>
                            <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-0 ease-in-out">Hello, how are you?</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-end p-4">
                <div className="space-y-4 flex flex-col overflow-auto mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`${msg.sender === 'you' ? 'text-right' : ''}`}>
                        <UnstyledButton onClick = {() => {setOpenedIndex(openedIndex === index ? null : index)}} className={`${msg.sender === 'you' ? 'text-right' : ''} bg-neutral-800`}>
                            <div className="font-bold">{msg.sender === 'you' ? 'You' : 'John Doe'}</div>
                            <div className={`bg-${msg.sender === 'you' ? 'neutral-900 border border-white' : 'cyan-500'} text-white rounded-lg px-4 py-2 inline-block max-w-xs`}>
                            <div className="flex justify-between items-center">
                                {favorites.includes(index) && <IconStarFilled size={12} className="text-gray-400 mr-1" />}
                                <p className="text-xs text-right text-gray-400">{formatTimestamp(msg.timestamp)}</p>
                            </div>
                                <p className="rounded">{msg.text}</p>
                                {msg.edited && <p className="text-xs text-gray-400">Edited</p>}
                            </div>
                            {openedIndex === index && <OptionsModal onEdit={(event: React.MouseEvent) => handleEdit(event, index)} onDelete={() => handleDelete(index)} onFavorite={() => handleFavorite(index)} />}
                        </UnstyledButton>
                    </div>
                ))}
                </div>
                <TextInput 
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                rightSection={<button onClick={handleSend} className="text-cyan-500 px-4 py-2 rounded"><IconSend size={20}/></button>}
                classNames={{input: 'remove-placeholder bg-neutral-800 text-white focus:border-cyan-500 focus:outline-none',}}
                className="w-full py-6 rounded bg-neutral-800 text-white focus:border-cyan-500 focus:outline-none" type="text" placeholder="Type a message" />
        </div>
          <div>
        </div>
      </div>
    </>
  );
}