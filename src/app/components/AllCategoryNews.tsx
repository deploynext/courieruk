
type Category = 'politics' | 'business' | 'technology' | 'sports' | 'science' | 'health';

interface PageProps {
  params: { category: Category };
}

export default function AllCategoryNews({ params }: PageProps) {
  const { category } =  params;

    return(
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center pb-1">
            <span className="text-white text-xl font-bold leading-none">•••</span>
          </div>
          <h2 className="text-[28px] font-semibold text-gray-800">
           <span className="text-[#005a9e]">All</span> <span className="text-[#003d73]">{category.charAt(0).toUpperCase() + category.slice(1)}</span> <span className="text-[#005a9e]">Posts</span> 
          </h2>
        </div>
    )
}