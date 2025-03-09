import CharacterCardSkeleton from "./CharacterCardSkeleton";

const CharacterSkeletonGrid = () => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1">
    {Array.from({ length: 12 }).map((_, index) => (
      <CharacterCardSkeleton key={index} />
    ))}
  </div>
);

export default CharacterSkeletonGrid;
