export default function CommentBubble({ comment }) {
  return (
    <div className="bg-indigo-600 rounded-lg py-4 px-3">
      <p className="font-medium text-white text-lg">{comment}</p>
      <a href="#" className="mt-4 text-white text-xs">
        @author
      </a>
    </div>
  );
}
