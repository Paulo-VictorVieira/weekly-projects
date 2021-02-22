import React from 'react';
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts !== null && contacts.length === 0)
    return (
      <h4 className="text-center lead text-dark">Please, add a contact !</h4>
    );
  return (
    <div>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </div>
  );
};

export default Contacts;
