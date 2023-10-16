import Comment from './Comment';

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black dark:border-l-white ml-5">
        {/* Recursing the component in itself */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
