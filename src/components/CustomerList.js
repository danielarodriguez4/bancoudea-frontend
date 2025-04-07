import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api/api';

const CustomerList = ({ onSelect }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {customers.map(c => (
          <li key={c.id} onClick={() => onSelect(c.id)}>
            {c.firstName} {c.lastName} — {c.accountNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
