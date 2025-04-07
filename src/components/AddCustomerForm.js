import React, { useState } from 'react';
import { createCustomer } from '../api/api';

const AddCustomerForm = () => {
  const [form, setForm] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    accountNumber: '',
    balance: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer({...form, balance: parseFloat(form.balance)}).then(res => {
      alert("Cliente creado con ID: " + res.data.id);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Cliente</h3>
      <input name="firstName" placeholder="Nombre" onChange={handleChange} />
      <input name="lastName" placeholder="Apellido" onChange={handleChange} />
      <input name="accountNumber" placeholder="Cuenta" onChange={handleChange} />
      <input name="balance" placeholder="Saldo" type="number" onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AddCustomerForm;
