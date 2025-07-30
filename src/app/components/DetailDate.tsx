interface Article {
  date?: string;
  author?: string;
}

interface DetailDateProps {
  article: Article;
}

const reporter = "Reporter";

export default function DetailDate({ article }: DetailDateProps) {
  return (
    <div className="border-t border-b border-t-gray-400 border-b-gray-400 my-2 pt-1 text-base text-gray-800">
      <div className="py-2 px-1 flex justify-between items-center flex-wrap gap-2">
        <div className="flex flex-row">
          <p>By:</p><p className=" ml-2 font-bold text-pink-900">{article.author || reporter}</p>
        </div>
        <div className="text-right">
          
          <p>
            <span className="text-sm">{article.date || "N/A"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
