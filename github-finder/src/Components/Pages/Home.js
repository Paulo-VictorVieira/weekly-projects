import React from 'react';
import Search from '../User/Search';
import User from '../User/Users';

const Home = ({
  users,
  loading,
  setSearchUsers,
  clearUsers,
  setAlert,
  showClear,
}) => {
  return (
    <>
      <Search
        setSearchUsers={setSearchUsers}
        clearUsers={clearUsers}
        setAlert={setAlert}
        showClear={showClear}
      />
      <User users={users} loading={loading} />
    </>
  );
};

export default Home;
