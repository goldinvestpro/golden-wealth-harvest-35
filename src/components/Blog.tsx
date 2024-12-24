import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Gold Investment in 2024",
      date: "March 15, 2024",
      excerpt: "As global markets evolve, gold remains a cornerstone of wealth preservation. Discover how technological advances and market trends are shaping the future of gold investment.",
      imageUrl: "/lovable-uploads/7e2790ff-1e0f-4dd6-9880-7a22be7bb381.png",
      readTime: "5 min read",
      category: "Market Analysis"
    },
    {
      id: 2,
      title: "Understanding Gold IRA Investment Options",
      date: "March 12, 2024",
      excerpt: "Explore the benefits and considerations of including gold in your retirement portfolio through a Gold IRA, and learn about the various options available.",
      imageUrl: "/lovable-uploads/8cea0754-5101-4f52-b47b-eb63b647a036.png",
      readTime: "4 min read",
      category: "Investment Guide"
    },
    {
      id: 3,
      title: "Why Physical Gold Matters in Your Portfolio",
      date: "March 10, 2024",
      excerpt: "Physical gold offers unique advantages in portfolio diversification. Learn why investors are increasingly turning to tangible assets for wealth protection.",
      imageUrl: "/lovable-uploads/afbac699-1c61-46ae-aa14-cdad00f12e75.png",
      readTime: "6 min read",
      category: "Investment Strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-500 mb-4">Latest Insights & Market Analysis</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our expert analysis and insights on gold markets, investment strategies, and wealth preservation techniques.
          </p>
        </div>
        
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
                  <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-navy-500 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest insights and analysis delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-300"
            />
            <Button className="bg-gold-300 hover:bg-gold-400 text-navy-500">
              Subscribe
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;