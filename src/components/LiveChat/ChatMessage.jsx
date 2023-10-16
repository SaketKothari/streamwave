import { CgUserlane } from 'react-icons/cg';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 bg-white dark:bg-black dark:text-white rounded-lg mb-2">
      <CgUserlane className="h-5 w-5 rounded-full mr-2" />
      <div>
        <span className="font-semibold">{name}</span>
        <p className="dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
