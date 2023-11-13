import Modal from "./Modal";
import { Field,Form,Formik } from "formik"; 
import {db} from "../config/firebase";
import { toast } from "react-toastify";
import {addDoc,collection,doc,updateDoc} from "firebase/firestore";
const AddAndUpdateContact = ({isOpen,onClose,isUpdate,contact}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact);
            onClose();
            toast.success("Contact added successfully");
        } catch (error) {
            console.log(error);
        }
    } 
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db,"contacts",id);
            await updateDoc(contactRef,contact);
            onClose();
            toast.success("Contact updated successfully");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? 
          updateContact(values, contact.id) :
          addContact(values);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlfor="name">Name</label>
            <Field name="name" className="border h-10" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlfor="email">Email</label>
            <Field type="email" name="email" className="border h-10" />
          </div>
          <button className="bg-black px-3 py-1.5 text-white  border self-end" >
            {isUpdate ? "update" : "add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}

export default AddAndUpdateContact;