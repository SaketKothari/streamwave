import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../../slices/chatSlice';
import {
  generateRandomMessage,
  generateRandomName,
} from '../../utils/chatData';

import ChatInputForm from './ChatInputForm';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log('API polling');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-[#121212]">
        <div className="mt-0.5 flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0  md:h-[calc(100vh-83px)]">
          {/* Mobile chatlist toggle button */}
          <button
            className="peer fixed h-full w-full md:hidden"
            aria-label="mobile-chatlist-toggler"
            aria-details="Remove when using in your project. Following button is only to toggle chatlist sidebar"
          ></button>

          <ChatSidebar />

          <div className="h-full w-full md:w-[70%]">
            <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
              <div className="flex w-full items-center justify-start gap-3">
                <p className="font-semibold text-white">Live Chat</p>
              </div>
            </div>
            <div className="w-full h-[600px] ml-2 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse">
              <div>
                {chatMessages.map((c, i) => (
                  <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ChatInputForm dispatch={dispatch} />
      </div>
    </>
  );
};

export default LiveChat;
