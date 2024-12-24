import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Blog = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    toast({
      title: "Search Initiated",
      description: `Searching for "${searchTerm}"...`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch} className="ml-2">
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Post Title 1</CardTitle>
              <CardDescription>Short description of the blog post.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a brief overview of the blog post content.</p>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Post Title 2</CardTitle>
              <CardDescription>Short description of the blog post.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a brief overview of the blog post content.</p>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Post Title 3</CardTitle>
              <CardDescription>Short description of the blog post.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a brief overview of the blog post content.</p>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
