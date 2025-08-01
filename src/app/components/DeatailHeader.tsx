import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { HomeIcon } from "@heroicons/react/16/solid";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
interface Article {
  category: string;
  title: string;
  slug: string;
}

interface DetailHeaderProps {
  article: Article;
}

export default function DetailHeader({ article }: DetailHeaderProps) {
    return(
        <>
        <div className="w-full px-2 md:px-5 py-6">
        <nav className="flex text-gray-400 items-center space-x-2 text-[16px]  mb-2 whitespace-nowrap overflow-x-auto">
          <Link href="/" >
            <HomeIcon className="w-5 fill-gray-800"/>
          </Link>
          <span><ChevronRight size={16}/></span>
          <Link href={`/${article.category}`} className="!no-underline">
            <span className="font-sans capitalize text-gray-600 hover:text-gray-800">
              {article.category}
            </span>
          </Link>
        </nav>

        <h1 className="text-3xl fw-bold text-gray-900  capitalize mb-1">{article.title}</h1>
      </div>
      <div className="flex flex-row items-center  pb-2 border-b border-gray-300 mb-2 ml-2">
        <div className="capitalize me-3 font-sans">
            {article.category}
        </div>
        <div className="group border border-blue-950 shadow-sm rounded-full  items-center justify-center w-20    hover:bg-[#003366]   p-1 cursor-pointer me-2">
            <Link href="#" className="!no-underline !text-blue-950 hover:!text-white font-semibold flex flex-row px-1"><PlusCircleIcon className="w-5"/>  Follow</Link>
        </div>
      </div>
      </>
    )
}