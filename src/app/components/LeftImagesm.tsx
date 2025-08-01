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
  articles: Article;
}

export default function LeftImagesm({ articles }: LeftImageProps) {
  return (
    <div className="w-full">
      
        <div  className="flex items-start gap-3 mb-2 pt-3">
          
          <Link href={`/${articles.category}/${articles.slug}`} className="shrink-0">
            <Image
              src={articles.image}
              alt={articles.title}
              width={150}
              height={100}
              className="w-[60px] h-[60px] md:w-[120px] md:h-[80px] object-cover "
            />
          </Link>

         
          <div className="flex flex-col">
            
            <span className="text-[14px] font-semibold text-blue-700 uppercase font-sans hover:text-black">
              {articles.category}
            </span>
            <Link
              href={`/${articles.category}/${articles.slug}`}
              className="leftimagetitle text-justify"
            >
              {articles.title}
            </Link>
            <span className="text-sm text-black mt-1">{articles.date}</span>
          </div>
        </div>
     
    </div>
  );
}
