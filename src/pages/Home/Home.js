import React from 'react'
import api from '../../services/api'
import { useEffect } from 'react';


const Home = () => {

    async function listarUsuarios() {
        try {
            const response = await api.get('');
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        listarUsuarios();
    }, []);


    return (
        <div>Home</div>

    )
}

export default Home