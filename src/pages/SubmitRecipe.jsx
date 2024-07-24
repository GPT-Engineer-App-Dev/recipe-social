import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Submit Your Recipe</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="title">Recipe Title</Label>
              <Input id="title" placeholder="Enter recipe title" />
            </div>
            <div>
              <Label htmlFor="ingredients">Ingredients</Label>
              <Textarea id="ingredients" placeholder="List ingredients, one per line" rows={5} />
            </div>
            <div>
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea id="instructions" placeholder="Describe the cooking process" rows={8} />
            </div>
            <div>
              <Label htmlFor="image">Recipe Image</Label>
              <Input id="image" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full">Submit Recipe</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitRecipe;