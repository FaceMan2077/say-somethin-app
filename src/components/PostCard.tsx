import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  upvotes: number;
  commentCount: number;
  content?: string;
  isUpvoted?: boolean;
  isDownvoted?: boolean;
  showFullContent?: boolean;
}

const PostCard = ({
  id,
  title,
  author,
  createdAt,
  upvotes,
  commentCount,
  content,
  isUpvoted = false,
  isDownvoted = false,
  showFullContent = false
}: PostCardProps) => {
  const handleUpvote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Upvoting post", id);
  };

  const handleDownvote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Downvoting post", id);
  };

  const CardContent = () => (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <div className="flex">
        {/* Vote section */}
        <div className="flex flex-col items-center p-2 bg-muted/30 border-r min-w-[60px]">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleUpvote}
            className={`p-1 h-8 w-8 ${isUpvoted ? 'text-upvote' : 'text-voteText hover:text-upvote'}`}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          
          <span className={`text-sm font-medium ${isUpvoted ? 'text-upvote' : isDownvoted ? 'text-downvote' : 'text-voteText'}`}>
            {upvotes}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownvote}
            className={`p-1 h-8 w-8 ${isDownvoted ? 'text-downvote' : 'text-voteText hover:text-downvote'}`}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Content section */}
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold mb-2 hover:text-primary">
            {title}
          </h3>
          
          <div className="text-sm text-muted-foreground mb-2">
            Posted by <span className="font-medium">u/{author}</span> • {createdAt}
          </div>
          
          {content && showFullContent && (
            <div className="text-foreground mb-4 whitespace-pre-wrap">
              {content}
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{commentCount} comments</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  if (showFullContent) {
    return <CardContent />;
  }

  return (
    <Link to={`/post/${id}`}>
      <CardContent />
    </Link>
  );
};

export default PostCard;