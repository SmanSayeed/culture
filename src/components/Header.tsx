import Link from "next/link";

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <a className="text-lg font-bold">Home</a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/admin">
          <a>Admin Dashboard</a>
        </Link>
        <Link href="/add">
          <a>Add Culture Data</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
