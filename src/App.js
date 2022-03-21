import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Informacion from './Componentes/Informacion/Informacion';

function App() {
  
  const [datos, setDatos] = useState ( { 
    firstname: '',
    lastname: '',
    email:'',
    password: '',
    confirmPassword: ''
  });

  const cambiarDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
 
  return (
    <div className="App">
      <h1>
        Formulario
      </h1>
      <form>
        <div>
          <label htmlFor='firstname'>First Name:</label>
          <input  type="text" name="firstname"
                  value={datos.firstname}
                  onChange ={(e)=>cambiarDatos(e)}></input>
        </div>
        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input  type="text" name="lastname"
                  value={datos.lastname}
                  onChange ={(e)=>cambiarDatos(e)}></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input  type="text" name="email"
                  value = {datos.email}
                  onChange ={(e)=>cambiarDatos(e)}></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input  type="password" name="password"
                  value = {datos.password}
                  onChange ={(e)=>cambiarDatos(e)}></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input  type="password" name="confirmPassword"
                  value={datos.confirmPassword}
                  onChange ={(e)=>cambiarDatos(e)}></input>
        </div>
      </form>
      <Informacion datos = {datos}></Informacion>
    </div>
  );
}

export default App;
