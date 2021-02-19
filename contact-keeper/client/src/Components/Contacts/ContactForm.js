import React from 'react';
import addUser from '../../Assets/addUser.svg';
import edit from '../../Assets/edit.svg';
import ContactContext from '../../Context/Contact/ContactContext';

const ContactForm = () => {
  const contactContext = React.useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  React.useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current]);

  const { name, email, phone, type } = contact;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };

  return (
    <form className="form p" onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {current ? 'Update Contact' : 'Add Contact'}
      </h2>
      <input
        type="text"
        className="input"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        className="input"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="input"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        id="personal"
        value="personal"
        checked={type === 'personal'}
        onChange={handleChange}
      />{' '}
      <label htmlFor="personal">Personal</label>{' '}
      <input
        type="radio"
        name="type"
        id="professional"
        value="professional"
        checked={type === 'professional'}
        onChange={handleChange}
      />{' '}
      <label htmlFor="professional">Professional</label>{' '}
      <div>
        <button type="submit" className="btn btn-primary btn-block">
          {current ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>
      <div>
        {current && (
          <button className="btn btn-light btn-block my" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>
      <div className="p-1 m-1 h">
        <img
          src={current ? edit : addUser}
          alt={current ? 'Update a Contact' : 'Add a Contact'}
        />
      </div>
    </form>
  );
};

export default ContactForm;
