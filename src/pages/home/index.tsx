import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center p-6 ">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Task Flow
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your personal task management solution.
        </p>

        <Link to={"/auth/signup"}>
          <Button className="w-44">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
