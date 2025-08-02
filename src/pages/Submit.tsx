import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Submit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // This will be replaced with actual API call later
      console.log("Submitting post:", { title, content });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate back to home after successful submission
      navigate("/");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Failed to submit post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Create a new post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                type="text"
                placeholder="An interesting title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={300}
                required
              />
              <div className="text-sm text-muted-foreground text-right">
                {title.length}/300
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Text (optional)</Label>
              <Textarea
                id="content"
                placeholder="Text (optional)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                maxLength={10000}
              />
              <div className="text-sm text-muted-foreground text-right">
                {content.length}/10,000
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                type="submit" 
                disabled={isSubmitting || !title.trim()}
                className="min-w-[100px]"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
              
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">Posting Guidelines</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Be respectful and civil in your posts</li>
            <li>• Use descriptive titles</li>
            <li>• Check if your topic has been posted recently</li>
            <li>• Follow community guidelines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submit;