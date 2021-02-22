import React from 'react';
import ContactContext from '../../Context/Contact/ContactContext';

const ContactFilter = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts, filtered, filterContacts, clearFilter } = contactContext;

  const text = React.useRef('');

  React.useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const handleChange = ({ target }) => {
    if (text.current.value !== '') {
      filterContacts(target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form style={{ marginBottom: '-1rem' }}>
      <input
        ref={text}
        type="text"
        className="input"
        placeholder="Filter Contacts..."
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
