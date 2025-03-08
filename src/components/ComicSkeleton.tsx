const ComicSkeleton = () => {
  return <div className="w-44 flex-shrink-0 animate-pulse">
    <div className="h-64 bg-gray-300 rounded-lg"></div>
    <div className="h-4 bg-gray-300 rounded mt-3"></div>
  </div>;
};
export default ComicSkeleton;
