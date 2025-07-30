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
    <div className="bg-[#f3f3f3] py-4 px-2">
      <h4 className="font-semibold text-xl mb-4 ml-1">Tailored just for you</h4>
      <div className="flex flex-wrap gap-4">
        {articles.slice(0, 4).map((article, index) => (
          <Link
            href={`/${article.category}/${article.slug}`}
            key={index}
            className="w-1/4 flex-1  bg-white rounded-xl shadow transition-shadow duration-300 hover:shadow-xl cursor-pointer flex flex-col overflow-hidden !no-underline"
            style={{ minHeight: 150 }}
          >
            <div>
              <Image
                src={article.image}
                alt={article.title}
                width={250}
                height={140}
                className="object-cover rounded-t-xl"
                style={{ minHeight: 100, maxHeight: 140 }}
              />
            </div>
            <div className="p-1 flex flex-col justify-between h-full">
              <p className="text-gray-700 hover:text-gray-800 text-sm leading-snug font-[500] ">
                {article.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
