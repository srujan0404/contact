import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";

const ContactCard = ({ contact }) => {

  const {isOpen,onClose,onOpen} = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-2 rounded-lg bg-yellow flex justify-between items-center">
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="text-white">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
            <p>Added icons<p/>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            className="text-orange cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isOpen={isOpen} onClose={onClose} isUpdate/>
    </>
  );
};

export default ContactCard;
