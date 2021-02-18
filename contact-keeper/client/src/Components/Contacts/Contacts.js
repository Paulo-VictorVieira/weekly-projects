import React from 'react';
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <div className="p-1 h-y">
      {contacts !== null && contacts.length === 0 ? (
        <h4 className="text-center lead text-dark">Please, add a contact !</h4>
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default Contacts;
