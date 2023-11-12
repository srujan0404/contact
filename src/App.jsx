import Navbar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
export const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect


  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="bg-transparent text-white pl-10  border border-white rounded-md h-10 flex-grow"
          />
        </div>
          <AiFillPlusCircle className="text-white text-5xl cursor-pointer" />
      </div>
    </div>
  );
}

export default App;