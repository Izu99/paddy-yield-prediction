import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4 fixed w-full top-0 flex justify-between items-center">
      <div className="text-white font-bold text-lg">Paddy Yield Prediction</div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:bg-green-700 hover:bg-opacity-60 px-3 py-2 rounded">Home</Link>
        <Link to="/predict" className="text-white hover:bg-green-700 hover:bg-opacity-60 px-3 py-2 rounded">Predict</Link>
        <Link to="/about" className="text-white hover:bg-green-700 hover:bg-opacity-60 px-3 py-2 rounded">About</Link>
        <Link to="/contact" className="text-white hover:bg-green-700 hover:bg-opacity-60 px-3 py-2 rounded">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
