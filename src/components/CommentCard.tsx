import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CommentCardProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  upvotes: number;
  isUpvoted?: boolean;
  isDownvoted?: boolean;
}

const CommentCard = ({
  id,
  author,
  content,
  createdAt,
  upvotes,
  isUpvoted = false,
  isDownvoted = false
}: CommentCardProps) => {
  const handleUpvote = () => {
    console.log("Upvoting comment", id);
  };

  const handleDownvote = () => {
    console.log("Downvoting comment", id);
  };

  return (
    <Card className="mb-3 ml-4">
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-2">
          <span className="font-medium">u/{author}</span> • {createdAt}
        </div>
        
        <div className="text-foreground mb-3 whitespace-pre-wrap">
          {content}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleUpvote}
            className={`p-1 h-7 w-7 ${isUpvoted ? 'text-upvote' : 'text-voteText hover:text-upvote'}`}
          >
            <ArrowUp className="h-3 w-3" />
          </Button>
          
          <span className={`text-sm ${isUpvoted ? 'text-upvote' : isDownvoted ? 'text-downvote' : 'text-voteText'}`}>
            {upvotes}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownvote}
            className={`p-1 h-7 w-7 ${isDownvoted ? 'text-downvote' : 'text-voteText hover:text-downvote'}`}
          >
            <ArrowDown className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CommentCard;