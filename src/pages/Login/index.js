import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../Services/api';
import Axios from 'axios';
export default function Login() {
  const history = useHistory();
  const handleSubmit = values => {
    history.push('/detail');
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" className="src alt" />
        <form onSubmit={handleSubmit}>
          <input placeholder="Seu Email" />
          <input placeholder="Senha" type="password" name="password" />
          <button className="button" type="submit">
            Entrar
          </button>
          <a href="">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
    </div>
  );
}
