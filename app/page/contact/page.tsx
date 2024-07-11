// components/Chat.js
'use client';
import Footer from '@/app/Footer';
import React, { useState, useEffect } from 'react';
import { FaHome,  } from "react-icons/fa"; // Fix import statement for FaPhoneVolume
import { MdEmail } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";

interface formPf {
  name: string;
  email: string;
  message: string;
}
interface Message {
  sender: string;
  content: string;
  options?: string[];
}

const Chat = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<formPf>();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); // Provide correct type annotation for messages state
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<string[]>([]); // Provide correct type annotation for options state
  const [greetingsDisplayed, setGreetingsDisplayed] = useState(false);

  useEffect(() => {
    // Display initial greetings when the chat opens
    if (isOpen && !greetingsDisplayed) {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', content: 'Hello! How can I assist you today?' },
      ]);
      setGreetingsDisplayed(true);
    }
  }, [isOpen, greetingsDisplayed]);

  const toggleChat = () => {
    if (!isOpen) {
      // Clear the conversation when reopening the chat
      setMessages([]);
      setInput('');
      setOptions([]);
    }
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;

    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'user', content: input },
    ]);
    setInput('');

    // Simulate a bot response with options (replace this with your chatbot logic)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', content: 'Choose an option:', options: ['message', 'help', 'Option 1', 'Option 2', 'Option 3'] },
      ]);
      setOptions(['message', 'help', 'Option 1', 'Option 2', 'Option 3']);
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'user', content: ` ${option}` },
    ]);

    // Simulate a bot response based on the selected option (replace this with your chatbot logic)
    setTimeout(() => {
      let botResponse = '';

      switch (option) {
        case 'message':
          botResponse = 'If you have any additional questions, please contact me at 09925342414.';
          break;
        case 'help':
          botResponse = 'Sure, I am able to assist you. Please select the option below to learn more about my services.';
          break;
        case 'Option 1':
          botResponse = 'You selected Option 1. Here is the response for Option X.';
          break;
        case 'Option 2':
          botResponse = 'You selected Option 2. Here is the response for Option Y.';
          break;
        case 'Option 3':
          botResponse = 'You selected Option 3. Here is the response for Option Z.';
          break;
        default:
          botResponse = `You chose: ${option}. I'll provide a response for ${option} shortly.`;
      }

      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', content: botResponse },
      ]);

      setOptions([]); // Clear options after selection
    }, 500);
  };

  return (
    
    <main>
  <div  className='flex flex-col min-h-screen'>
  <div className="flex items-center justify-center p-6 xl:p-10">
        <h1 className="text-4xl font-bold text-center w-full ">Get in Touch</h1>
      </div>
  <div className="w-full gap-10 lg:grid lg:grid-cols-3 lg:gap-0 ">
      <div className="flex items-center justify-center p-6 xl:p-10">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <FaHome className="h-6 w-6 mx-auto " />
            <h1 className="text-2xl font-bold ">My Address</h1>
            <p className="text-gray-500 dark:text-gray-400">San Francisco Binan, Laguna</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 xl:p-10">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <FaPhone className="h-6 w-6 mx-auto " />
            <h1 className="text-2xl font-bold ">Phone Number</h1>
            <p className="text-gray-500 dark:text-gray-400">+63 9925342414

</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 xl:p-10">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <MdEmail className="h-6 w-6 mx-auto " />
            <h1 className="text-2xl font-bold ">Email Address</h1>
            <p className="text-gray-500 dark:text-gray-400">bertangelo21@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold ">Feedback</h1>
        <form className="space-y-4"
         onSubmit={handleSubmit(async (data) => { 
          try {
              await axios.post('/api/formpf', data); 
              router.push('/formpf');
              
          } catch (error) {
              console.log(error)
          }
        })}
        
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 " htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"  {...register('name')}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 " htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           
              placeholder="Enter your email" {...register('email')}
              type="email"
            />
          </div>
      
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 " htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-[100px] mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your feedback"  {...register('message')}
            />
          </div>
          <button
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Submit Feedback
          </button>
        </form>
      </div>
      <div className="hidden lg:block">
      

        <Image src={'/cont.jfif'} alt={'bgcont'} 
        height={500}
        width={500}  
        className='aspect-square object-cover'
        /> 
          </div>
    </div>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
        >
          {isOpen ? 'Close Chat' : 'Open Chat'}
        </button>

        {isOpen && (
          <div className="fixed bottom-16 right-4 w-80 bg-slate-800 p-4 rounded shadow-md overflow-hidden">
            <div className="flex-1 overflow-y-auto mb-4 max-h-48">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 text-${
                    message.sender === 'user' ? 'right' : 'left'
                  }`}
                >
                  <span
                    className={`inline-block px-2 py-1 rounded ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            {options.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto">
                {options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionClick(option)}
                    className="px-3 py-1 bg-blue-500 text-white rounded whitespace-nowrap"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-16 resize-none border rounded p-2 bg-gray-500 hover:bg-white mt-2"
              placeholder="Type your message..."
            ></textarea>
            <button
              onClick={sendMessage}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Send
            </button>
          </div>
        )}
      </div>
      </div>
<Footer />
    </main>
    
  );
};


export default Chat;
