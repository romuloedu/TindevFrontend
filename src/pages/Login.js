import React, { useState } from 'react';

import api from '../services/api';

import './Login.css';

import logo from '../assets/tinder.svg';

export default function Login({ history }) {

    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        // Chama a API.
        const response = await api.post('/devs', { username });

        // Pega o ID do usuário logado.
        const { _id } = response.data;

        console.log(_id);

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    type="text"
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}