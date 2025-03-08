import heart_union from "../assets/heart_union.svg";
const CharacterCardSkeleton = () => {
  return (
    <div className="pb-6 overflow-hidden cursor-pointer animate-pulse">
      <div className="w-full h-64 bg-gray-100 rounded-md"></div>
      <div className="w-full h-1 bg-gray-200 mt-1"></div>
      <div className="relative w-full h-12 bg-gray-200 mt-2 flex items-center px-2">
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <img className={'w-6 h-6  rounded ml-auto'} src={heart_union} alt={'like'}/>
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
