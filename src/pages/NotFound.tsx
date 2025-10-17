import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center  px-6">
      <h1 className="text-6xl font-bold text-fuchsia-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Button
        className="flex items-center gap-2 bg-fuchsia-800 hover:bg-fuchsia-700"
        onClick={() => navigate("/")}
      >
        <Home className="w-4 h-4" />
        Back to Home
      </Button>
    </div>
  );
};
