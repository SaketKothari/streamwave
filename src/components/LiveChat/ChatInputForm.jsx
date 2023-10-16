import { useState } from 'react';
import { addMessage } from '../../slices/chatSlice';

const ChatInputForm = ({ dispatch }) => {
  const [liveMessage, setLiveMessage] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Bruce Wayne',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
        className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]"
      >
        <img
          className="hidden aspect-square h-5 w-5 flex-shrink-0 rounded-full object-cover md:flex md:h-10 md:w-10"
          src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar"
        />
        <input
          placeholder="Message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
        />
        <button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            ></path>
          </svg>
        </button>
        <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center p-1 md:h-10 md:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            ></path>
          </svg>
        </button>
        <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#ae7aff] p-1 md:h-10 md:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-black"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
          </svg>
        </button>
      </form>
    </>
  );
};

export default ChatInputForm;
