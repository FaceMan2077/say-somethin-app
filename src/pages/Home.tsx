import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

const Home = () => {
  // Mock data - this will be replaced with real data later
  const mockPosts = [
    {
      id: "1",
      title: "Welcome to SaySomethin! Share your thoughts here",
      author: "admin",
      createdAt: "2 hours ago",
      upvotes: 42,
      commentCount: 8,
      content: "This is the first post on our new platform. Feel free to share anything that's on your mind!"
    },
    {
      id: "2",
      title: "What's your favorite programming language and why?",
      author: "coder123",
      createdAt: "4 hours ago",
      upvotes: 156,
      commentCount: 23,
      content: "I've been coding for years and I'm curious about everyone's preferences. Let's discuss!"
    },
    {
      id: "3",
      title: "Just had the best coffee of my life",
      author: "coffeeaddict",
      createdAt: "6 hours ago",
      upvotes: 78,
      commentCount: 12,
      content: "Found this amazing local roaster downtown. The Ethiopian blend is incredible!"
    },
    {
      id: "4",
      title: "Tips for staying productive while working from home?",
      author: "remoteworker",
      createdAt: "8 hours ago",
      upvotes: 203,
      commentCount: 45,
      content: "Been struggling with distractions lately. What strategies work for you?"
    },
    {
      id: "5",
      title: "This sunset tonight was absolutely breathtaking",
      author: "naturelover",
      createdAt: "10 hours ago",
      upvotes: 89,
      commentCount: 7,
      content: "Sometimes you just have to stop and appreciate the beauty around us."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Latest Posts</h1>
          <div className="text-sm text-muted-foreground">
            {mockPosts.length} posts
          </div>
        </div>
        
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              createdAt={post.createdAt}
              upvotes={post.upvotes}
              commentCount={post.commentCount}
            />
          ))}
        </div>
        
        {mockPosts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No posts yet</h2>
            <p className="text-muted-foreground">Be the first to share something!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;