import { BiSolidUserCircle } from 'react-icons/bi';

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="relative p-2 md:p-3 text-[10px] md:text-xs">
        <div className="flex items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
          <BiSolidUserCircle className="h-5 w-5 text-black dark:text-white" />
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <p className="text-black dark:text-white">
              <span className="font-semibold">{name}</span>
              <span className="text-gray-800 dark:text-gray-400 ml-2">2 minutes ago</span>
            </p>
            <div className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-2 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
              {message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
