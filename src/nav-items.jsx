import { Home, Book, PenTool, Info, Mail } from "lucide-react";
import Index from "./pages/Index";
import Recipes from "./pages/Recipes";
import SubmitRecipe from "./pages/SubmitRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Recipes",
    to: "/recipes",
    icon: <Book className="h-4 w-4" />,
    page: <Recipes />,
  },
  {
    title: "Submit Recipe",
    to: "/submit-recipe",
    icon: <PenTool className="h-4 w-4" />,
    page: <SubmitRecipe />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
];