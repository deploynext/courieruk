import { HomeIcon } from "@heroicons/react/16/solid";
import { ChevronRight} from "lucide-react";
import Link from "next/link";


interface Article{
    
    category:string;
}

interface CategoryHeaderProps {
  article: Article
}

export default function CategoryHeader({ article }: CategoryHeaderProps) {
  return (
    <div >
        <div className="flex flex-row items-center space-x-2 text-gray-600 mb-2">
            <div>
                <Link href="/"><HomeIcon className="w-5 h-5 text-gray-600"/></Link>
                
            </div>
            <div>
                <ChevronRight size={12} strokeWidth={2}/>
            </div>
            <div> <span className="text-capitalize">{article.category}</span></div>
        </div>
      <div>       
          <h1  className=" text-capitalize text-dark fw-semibold" style={{fontSize:'30px'}}>
            <span >
              {article.category}
            </span>
          </h1>
      </div>
    </div>
  );
}
