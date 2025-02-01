import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to LMS</h1>
      <p className="text-lg text-gray-700 mb-6">Your gateway to quality learning</p>
      
      <div className="flex space-x-4">
        <Link to="/courses" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Explore Courses
        </Link>
        <Link to="/login" className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600">
          Login
        </Link>
      </div>
    </div>
  );
}
