import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">About Recipe Sharing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Recipe Sharing is a community-driven platform dedicated to bringing food lovers together. Our mission is to create a space where people can discover new recipes, share their culinary creations, and connect with fellow cooking enthusiasts.
          </p>
          <p className="mb-4">
            Founded in 2024, our website has grown into a vibrant community of home cooks, professional chefs, and food bloggers from around the world. We believe that cooking is not just about nourishment, but also about creativity, culture, and connection.
          </p>
          <p className="mb-4">
            Our team is passionate about food and technology. We continuously work to improve the platform, making it easier for you to find inspiration, share your recipes, and engage with other members of the community.
          </p>
          <p>
            Whether you're a seasoned chef or just starting your culinary journey, Recipe Sharing is here to support and inspire you. Join us in celebrating the joy of cooking and the power of shared experiences through food.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;