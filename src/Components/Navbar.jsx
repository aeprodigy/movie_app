

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute">
      <h1 className="text-blue-600 font-bold text-2xl cursor-pointer">
        NEP<span className="text-gray-400">TUNE🔵</span>
      </h1>
      <div>
        <button className=" py-2 px-6 rounded border border-gray-300  text-white pr-4">
          Sign In
        </button>
        <button className="bg-blue-600 ml-2 py-2 px-6 rounded text-white cursor pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar