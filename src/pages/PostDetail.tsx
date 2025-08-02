import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import CommentCard from "@/components/CommentCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const PostDetail = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");

  // Mock data - this will be replaced with real data later
  const mockPost = {
    id: id || "1",
    title: "Welcome to SaySomethin! Share your thoughts here",
    author: "admin",
    createdAt: "2 hours ago",
    upvotes: 42,
    commentCount: 8,
    content: "This is the first post on our new platform. Feel free to share anything that's on your mind!\n\nWe're excited to see what kind of discussions will emerge here. Remember to be respectful and follow our community guidelines."
  };

  const mockComments = [
    {
      id: "c1",
      author: "user1",
      content: "Great initiative! Looking forward to being part of this community.",
      createdAt: "1 hour ago",
      upvotes: 12
    },
    {
      id: "c2",
      author: "user2",
      content: "The interface looks really clean and modern. Nice work on the design!",
      createdAt: "45 minutes ago",
      upvotes: 8
    },
    {
      id: "c3",
      author: "user3",
      content: "Will there be mobile apps available in the future?",
      createdAt: "30 minutes ago",
      upvotes: 5
    }
  ];

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Post */}
        <PostCard
          id={mockPost.id}
          title={mockPost.title}
          author={mockPost.author}
          createdAt={mockPost.createdAt}
          upvotes={mockPost.upvotes}
          commentCount={mockPost.commentCount}
          content={mockPost.content}
          showFullContent={true}
        />

        {/* Comment form */}
        <Card className="mb-6">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Add a comment</h3>
            <Textarea
              placeholder="What are your thoughts?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mb-3"
              rows={4}
            />
            <Button onClick={handleCommentSubmit} disabled={!newComment.trim()}>
              Post Comment
            </Button>
          </div>
        </Card>

        {/* Comments */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            Comments ({mockComments.length})
          </h3>
          
          {mockComments.map((comment) => (
            <CommentCard
              key={comment.id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              createdAt={comment.createdAt}
              upvotes={comment.upvotes}
            />
          ))}
          
          {mockComments.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;