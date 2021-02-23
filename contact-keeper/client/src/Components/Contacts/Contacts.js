import React from 'react';
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';
import Spinner from '../Layout/Spinner';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts, filtered, loading } = contactContext;

  if (contacts !== null && contacts.length === 0 && !loading)
    return (
      <h4 className="text-center lead text-dark">Please, add a contact !</h4>
    );
  return (
    <div>
      {contacts !== null && !loading ? (
        <>
          {' '}
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Contacts;
