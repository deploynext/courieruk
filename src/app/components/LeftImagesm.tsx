import Image from "next/image";
import Link from "next/link";

type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date?: string;
  author?: string;
};

interface LeftImageProps {
  articles: Article[];
}

export default function LeftImagesm({ articles }: LeftImageProps) {
  return (
    <div className="w-full">
      {articles.map((item, index) => (
        <div key={index} className="flex items-start gap-3 mb-5">
          
          <Link href={`/${item.category}/${item.slug}`} className="shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={100}
              className="w-[60px] h-[60px] md:w-[120px] md:h-[80px] object-cover "
            />
          </Link>

         
          <div className="flex flex-col">
            
            <span className="text-[14px] font-semibold text-blue-700 uppercase hover:text-black">
              {item.category}
            </span>
            <Link
              href={`/${item.category}/${item.slug}`}
              className="leftimagetitle"
            >
              {item.title}
            </Link>
            <span className="text-sm text-black mt-1">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
