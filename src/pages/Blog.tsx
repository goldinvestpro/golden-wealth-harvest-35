import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Invest in Gold? A Guide for Beginners",
      date: "March 15, 2024",
      excerpt: "Gold has been a cornerstone of wealth preservation for centuries, prized not only for its beauty but also for its unique ability to maintain value over time...",
      imageUrl: "/lovable-uploads/7e2790ff-1e0f-4dd6-9880-7a22be7bb381.png",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Gold IRA vs. Traditional IRA: Which Is Right for You?",
      date: "March 10, 2024",
      excerpt: "When planning for retirement, choosing the right investment vehicle is crucial. Traditional IRAs are well-known options, but Gold IRAs are gaining popularity...",
      imageUrl: "/lovable-uploads/8cea0754-5101-4f52-b47b-eb63b647a036.png",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "The Future of Gold Investment in 2024",
      date: "March 5, 2024",
      excerpt: "As we navigate through 2024, the gold market continues to evolve with new technologies and investment opportunities emerging...",
      imageUrl: "/lovable-uploads/afbac699-1c61-46ae-aa14-cdad00f12e75.png",
      readTime: "6 min read",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy-500 mb-8">Latest Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-navy-500 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-gold-400 hover:text-gold-500 font-semibold">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;