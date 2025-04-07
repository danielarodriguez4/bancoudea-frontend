import React, { useState } from 'react';
import { transferMoney } from '../api/api';

const TransferForm = () => {
  const [form, setForm] = useState({
    senderAccountNumber: '',
    receiverAccountNumber: '',
    amount: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transferMoney({...form, amount: parseFloat(form.amount)}).then(res => {
      alert("Transferencia realizada con ID: " + res.data.id);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Transferencia</h3>
      <input name="senderAccountNumber" placeholder="Cuenta origen" onChange={handleChange} />
      <input name="receiverAccountNumber" placeholder="Cuenta destino" onChange={handleChange} />
      <input name="amount" placeholder="Monto" type="number" onChange={handleChange} />
      <button type="submit">Transferir</button>
    </form>
  );
};

export default TransferForm;
