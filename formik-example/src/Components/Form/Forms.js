import React from 'react';
import { v4 } from 'uuid';
import NameItemForm from './NameItemForm';
import NamesForm from './NamesForm';

const Forms = ({ initialData }) => {
  const [names, setNames] = React.useState(initialData);

  const addName = (name) => {
    name.id = v4();
    setNames([name, ...names]);
  };

  return (
    <div className="grid-2 animeLeft">
      <div>
        <NamesForm addName={addName} />
        <p className="p-1 m-1 text-center">
          {names.length > 1
            ? `${names.length} usuários registrados !`
            : `${names.length} usuário registrado !`}
        </p>
      </div>

      <div className="ps h-1" style={{ overflowY: 'auto' }}>
        {names &&
          names.map((name) => <NameItemForm key={name.id} name={name} />)}
      </div>
    </div>
  );
};

export default Forms;
