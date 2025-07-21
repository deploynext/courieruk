import ArticleCard from "./ArticleCard";

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

interface NewsBarProps {
  articles: Article[];
}

export default function NewsBar({ articles }: NewsBarProps) {
  const slicedArticles = articles.slice(3, 6); // Get 3 articles (index 3, 4, 5)

  return (
    <div className="row">
      {slicedArticles.map((article, index) => (
        <div key={article.slug ?? index} className="col-md-4 border-end border-gray-200">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
}
