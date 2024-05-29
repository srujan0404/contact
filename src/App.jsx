import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; // Import onSnapshot
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import useDisclouse from "./hooks/useDisclouse";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const contactRef = collection(db, "contacts");
    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // hiihasfdg
      setContacts(contactLists);
      return contactLists;
    });
  }, []);

const filterContacts = (e) => {
  const value = e.target.value.toLowerCase(); 

  if (!value) {
    setContacts(contacts);
    return;
  }
// asfgsdfgadfgsdf
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value)
  );

  setContacts(filteredContacts);
};


  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
              onChange={filterContacts}
              type="text"
              className="bg-transparent text-white pl-10 border border-white rounded-md h-10 flex-grow"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
