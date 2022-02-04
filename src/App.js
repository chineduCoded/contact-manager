import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AddContact } from './contactComp/AddContact';
import { ContactDetail } from './contactComp/ContactDetail';
import { ContactList } from './contactComp/ContactList';
import { EditContact } from './contactComp/EditContact';
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts"
import { Header } from './contactComp/Header';
import { UserAuth } from './contactComp/UserAuth';
import { LogIn } from './contactComp/LogIn';

const App = () => {

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  // Retrieve Contacts
  const retrieveContacts = async () => {
    const res = await api.get("/contacts")
    return res.data
  }

  const addContactHandler = async (contact) => {

    const request = {
      id: uuidv4(),
      ...contact
    }

    const res = await api.post("/contacts", request)

    setContacts([...contacts, res.data])
  }

  const updateContactHandler = async (contact) => {
      const res = await api.put(`/contacts/${contact.id}`, contact)
      const { id } = res.data;
      setContacts(contacts.map(contact => {
        return contact.id === id ? {...res.data} : contact
      }))
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts)
    }

    getAllContacts()
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserAuth>
          <ContactList
            contacts={searchTerm.length < 1 ? contacts : searchResults} 
            getContactId={removeContactHandler}
            term={searchTerm}
            searchKeyword={searchHandler} />
        </UserAuth>} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
        <Route path="contact/:id" element={<ContactDetail />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </Router>
  )
};

export default App;

