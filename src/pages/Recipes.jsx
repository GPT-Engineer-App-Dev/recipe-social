import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Recipes = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "Classic Italian pasta dish" },
    { id: 2, title: "Chicken Tikka Masala", description: "Flavorful Indian curry" },
    { id: 3, title: "Caesar Salad", description: "Fresh and crispy salad" },
    { id: 4, title: "Beef Stroganoff", description: "Creamy Russian dish" },
    { id: 5, title: "Vegetable Stir Fry", description: "Quick and healthy meal" },
    { id: 6, title: "Chocolate Brownies", description: "Rich and fudgy dessert" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader>
              <img src="/placeholder.svg" alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mr-2">Previous</Button>
        <Button variant="outline" className="ml-2">Next</Button>
      </div>
    </div>
  );
};

export default Recipes;