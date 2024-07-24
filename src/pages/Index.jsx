import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gray-900 text-white py-20">
        <img src="/placeholder.svg" alt="Cooking background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Recipe Sharing</h1>
          <p className="text-xl mb-8">Discover, share, and create delicious recipes</p>
          <Button asChild size="lg">
            <Link to="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <img src="/placeholder.svg" alt={`Recipe ${i}`} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Delicious Recipe {i}</CardTitle>
                  <CardDescription>A short description of this amazing recipe that will make your mouth water.</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;