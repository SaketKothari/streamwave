import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../../slices/chatSlice';
import {
  generateRandomMessage,
  generateRandomName,
} from '../../utils/chatData';
import ChatMessage from './ChatMessage';

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
    <div className="w-full h-[600px] ml-2 p-2 border border-gray-300 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
