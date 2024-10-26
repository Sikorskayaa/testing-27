import { useState } from "react";
import user from "../users.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  const [users, setUsers] = useState(user);
  const [inputValue, setInputValue] = useState("");

  const onAddContact = (newContact) => {
    setUsers([newContact, ...users]);
  };

  const handleChange = (e) => {
    const values = e.target.value;
    setInputValue(values);
  };

  //   const filteredContacts = users.filter((user) =>
  //     user.name.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={users} />
    </>
  );
};

export default App;
