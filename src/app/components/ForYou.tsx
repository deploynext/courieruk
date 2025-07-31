import Image from "next/image";
import Link from "next/link";


type Article = {
  image: string;
  title: string;
  slug: string;
  category: string;
};
interface ForYouProps {
  articles: Article[];
}

export default function ForYou({ articles }: ForYouProps) {
  return (
    <div className="bg-[#f3f3f3] py-6 px-4">
      <h4 className="font-semibold text-xl mb-4 ml-1">Tailored just for you</h4>
      <div className="flex flex-wrap -mx-2">
        {articles.slice(0, 4).map((article, index) => (
          <Link
            href={`/${article.category}/${article.slug}`}
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 h-full px-2 mb-4 !no-underline"
          >
            <div className="bg-white rounded-xl shadow transition-shadow duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full min-h-[180px]"> 
              <div className="relative aspect-[7/5] w-full"> 
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-grow">
                <p className="text-base text-gray-700 overflow-hidden transition-all duration-300 ease-in-out line-clamp-3">
                  {article.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

