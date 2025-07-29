import Image from "next/image";
import Link from "next/link";

type Article = {
  title: string;
  image: string;
 category:string;
 slug:string;
};

interface MostReadProps {
  articles: Article;
}

export default function MostRead({ articles }: MostReadProps) {
  return (
    <div className="w-full">
      
        <div  className="flex items-start gap-3 mb-3 pb-2 border-b border-gray-300">
          
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
            <Link
              href={`/${articles.category}/${articles.slug}`}
              className="mostreadtitle"
            >
              {articles.title}
            </Link>
            
          </div>
        </div>
   
    </div>
  );
}
