import ChatMessage from './ChatMessage';

const LiveChat = () => {
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-gray-300 bg-slate-100 rounded-lg">
      <ChatMessage
        name="Dwight Shrute"
        message="Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
      />
    </div>
  );
};

export default LiveChat;