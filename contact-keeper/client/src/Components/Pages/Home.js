import React from 'react';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';

const Home = () => {
  return (
    <div className="grid-2 animeLeft">
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default Home;
