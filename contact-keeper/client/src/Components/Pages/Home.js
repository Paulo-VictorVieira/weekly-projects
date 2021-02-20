import React from 'react';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';
import ContactFilter from '../Contacts/ContactFilter';
import AuthContext from '../../Context/Auth/AuthContext';

const Home = () => {
  const authContext = React.useContext(AuthContext);
  const { loadUser } = authContext;

  React.useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2 animeLeft">
      <div>
        <ContactForm />
      </div>
      <div className="ps">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
