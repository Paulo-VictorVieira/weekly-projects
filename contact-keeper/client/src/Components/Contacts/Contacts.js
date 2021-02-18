import React from 'react';
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <div className="p-1">
      {contacts &&
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </div>
  );
};

export default Contacts;
