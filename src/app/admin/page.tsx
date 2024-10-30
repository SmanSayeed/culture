'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus !== "true") {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Optionally, show a loading spinner here
  }
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
  Logout
</button>
      {/* Your Admin Dashboard Content Here */}
    </div>
  );
};

export default Admin;
