import { FaUser } from 'react-icons/fa';

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex mt-5 bg-gray-100 p-2 rounded-lg my-2">
      <FaUser className="w-4 h-10 rounded-full mr-4" />
      <div className="flex-grow">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
