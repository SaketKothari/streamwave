import CommentList from './CommentList';
import { commentsData } from '../../utils/commentData';

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 mt-10">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        Comments
      </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
