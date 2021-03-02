import React from 'react';
import { v4 } from 'uuid';
import SignUpForm from './SignUpForm';
import NameItem from './NameItem';

const Names = ({ initialData }) => {
  const [names, setNames] = React.useState(initialData);

  const addName = (name) => {
    name.id = v4();
    setNames([name, ...names]);
  };

  return (
    <div className="grid-2 animeLeft">
      <div>
        <SignUpForm addName={addName} />
        <p className="p-1 m-1 text-center">
          {names.length > 1
            ? `${names.length} usuários registrados !`
            : `${names.length} usuário registrado !`}
        </p>
      </div>

      <div className="ps h-1" style={{ overflowY: 'auto' }}>
        {names && names.map((name) => <NameItem key={name.id} name={name} />)}
      </div>
    </div>
  );
};

export default Names;
