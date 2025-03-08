import { Comic } from "../types/comicTypes.ts";
import ErrorMessage from "./ErrorMessage.tsx";
import ComicSkeleton from "./ComicSkeleton.tsx";

interface ComicCarrouselProps {
  comics?: Comic[];
  isLoading?: boolean;
  isError?: true | false;
}

const ComicCarrousel = ({ comics = [], isLoading, isError }: ComicCarrouselProps) => {
  return (
    <div className="w-full px-4 sm:px-8 py-8 sm:py-12 bg-white text-black flex justify-center">
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-left">COMICS</h2>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-custom pb-6">
          {isLoading &&
            Array.from({ length: 5 }).map((_, index) => <ComicSkeleton key={index} isLoading={isLoading} />)}
          {isError && <ErrorMessage message={"Error while loading chapters"} />}
          {!isLoading && !isError && comics.length === 0 && <p className="text-center">No comics available.</p>}
          {comics.map((comic) => (
            <div key={comic.resourceURI} className="w-36 sm:w-44 flex-shrink-0">
              <div className="h-56 sm:h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-semibold">{comic.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComicCarrousel;
