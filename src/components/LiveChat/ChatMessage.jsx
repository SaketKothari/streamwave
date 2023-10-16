import { CgUserlane } from 'react-icons/cg';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <CgUserlane className="w-6 h-6 mr-3 rounded-full" />
      <div>
        <span className="font-semibold">{name}</span>
        <p className="dark:text-black">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
