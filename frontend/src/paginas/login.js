import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const login=()=>{
    const[correo,setCorreo]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const Loguearse=async(e)=>{
        e.preventDefault();
        try{
            const respuesta=await axios.post('https://localhost:5000/api/usuarios/login'{coreo,password});
            const{token}=respuesta.data;
            localStorage.setItem('token',token);
            alert('Inicio de sesion exitoso');
            navigate('/productos');
        }catch(error){
            console.error('Error al iniciar sesion:', error);
            alert('No se logro iniciar sesion');
        }
    };
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">Digite su cuenta</h2>
            <form className="mt-8 space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Your email</label>
              <input
              
    )
}