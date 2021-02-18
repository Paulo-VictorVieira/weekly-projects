import React from 'react';
import addUser from '../../Assets/addUser.svg';
import ContactContext from '../../Context/Contact/ContactContext';

const ContactForm = () => {
  const contactContext = React.useContext(ContactContext);
  const { addContact } = contactContext;

  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(contact);
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };

  return (
    <form className="form p" onSubmit={handleSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
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
          Add a Contact
        </button>
      </div>
      <div className="p-1 m-1 h animeSlideLeft">
        <img src={addUser} alt="Add a User" />
      </div>
    </form>
  );
};

export default ContactForm;
