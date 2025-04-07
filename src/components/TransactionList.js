import React, { useState } from 'react';
import { getTransactions } from '../api/api';

const TransactionList = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    getTransactions(accountNumber).then(res => setTransactions(res.data));
  };

  return (
    <div>
      <h3>Transacciones</h3>
      <input
        placeholder="Número de cuenta"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button onClick={fetchTransactions}>Buscar</button>

      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.senderAccountNumber} → {t.receiverAccountNumber} : ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
