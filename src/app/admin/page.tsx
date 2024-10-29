import Header from "@/components/Header";
import Login from "@/components/Login";
import { useState } from "react";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "1234") {
      setAuthenticated(true);
    }
  };

  if (!authenticated) {
    return <Login 
    // onLogin={login}
     />
  }

  return (
    <div>
      <Header />
      <h1>Admin Dashboard</h1>
    </div>
  );
};

export default Admin;
