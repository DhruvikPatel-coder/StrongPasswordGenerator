import React from 'react';
import './App.css';
import FormContainer from './Containers/Formcontainer'

function App() {
  return (
    <div className="row h-100">
      <div className="col-md-8 center-container offset-md-2">
        <h3 className="title">Random Password Generetor</h3>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
