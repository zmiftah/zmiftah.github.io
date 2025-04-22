
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: "Hello World",
    date: "2024-04-19",
    slug: "hello-world",
    excerpt: "Welcome to my blog where I share my thoughts and experiences in software development..."
  }
];

const BlogList = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest Posts</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="text-[#1EAEDB] hover:text-[#157b9b]">
                {post.title}
              </Link>
            </h3>
            <time className="text-gray-500 text-sm mb-4 block">{post.date}</time>
            <p className="text-gray-600">{post.excerpt}</p>
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-block mt-4 text-[#1EAEDB] hover:text-[#157b9b]"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
