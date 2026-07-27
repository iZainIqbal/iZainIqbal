import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
    <div className="text-center space-y-6">
      <p className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="text-gray-400 max-w-md mx-auto">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to home</span>
      </Link>
    </div>
  </section>
);

export default NotFound;
