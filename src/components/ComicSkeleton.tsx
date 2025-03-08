interface SkeletonProps {
  isLoading?: boolean;
}

const ComicSkeleton = ({ isLoading }: SkeletonProps) => {
  return (isLoading && <div className="w-44 flex-shrink-0 animate-pulse">
    <div className="h-64 bg-gray-300 rounded-lg"></div>
    <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
    <div className="h-3 bg-gray-300 rounded mt-2 w-1/2"></div>
  </div>);
};
export default ComicSkeleton;
