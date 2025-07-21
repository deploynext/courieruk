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


interface LeftImageProps{
    articles:Article[]
}

export default function LeftImagesm ({articles}:LeftImageProps){
    return(
        <div>
        <div className="w-full ">
          {articles.slice(0, 3).map((item, index) => (
            <div key={index} className="flex gap-4 mb-5">
              <Link href={`/${item.category}/${item.slug}`} className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={182}
                  height={103}
                  className="w-44 h-28 object-cover rounded-md"
                />
              </Link>
              <div className="flex flex-col font-semibold">
                <Link
                  href={`/${item.category}/${item.slug}`}
                  className="ArticleCard-title "
                >
                    <span >{item.title}</span>
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    )
}