import React from 'react';

const Search = ({ getUsers, clearUsers, showClear, setAlert }) => {
  const [inputText, setInputText] = React.useState({ text: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputText({ ...inputText, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.text === '') {
      setAlert('Please enter something', 'light');
    } else {
      getUsers(inputText.text);
      setInputText({ text: '' });
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={inputText.text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
