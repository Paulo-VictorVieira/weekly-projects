import React from 'react';
import Search from '../User/Search';
import Users from '../User/Users';

const Home = ({
  users,
  loading,
  getUsers,
  clearUsers,
  setAlert,
  showClear,
}) => {
  return (
    <>
      <Search
        getUsers={getUsers}
        clearUsers={clearUsers}
        setAlert={setAlert}
        showClear={showClear}
      />
      <Users users={users} loading={loading} />
    </>
  );
};

export default Home;
