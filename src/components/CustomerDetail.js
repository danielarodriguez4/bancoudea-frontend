import React, { useEffect, useState } from 'react';
import { getCustomerById } from '../api/api';

const CustomerDetail = ({ id }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (id) {
      getCustomerById(id).then(res => setCustomer(res.data));
    }
  }, [id]);

  if (!customer) return <p>Selecciona un cliente</p>;

  return (
    <div>
      <h3>Detalle del Cliente</h3>
      <p><strong>Nombre:</strong> {customer.firstName} {customer.lastName}</p>
      <p><strong>Número de cuenta:</strong> {customer.accountNumber}</p>
      <p><strong>Saldo:</strong> {customer.balance}</p>
    </div>
  );
};

export default CustomerDetail;
