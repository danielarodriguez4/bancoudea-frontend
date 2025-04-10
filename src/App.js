import React, { useState } from 'react';
import CustomerDetail from './components/CustomerDetail';
import AddCustomerForm from './components/AddCustomerForm';
import TransferForm from './components/TransferForm';
import TransactionList from './components/TransactionList';
import CustomerManager from './components/CustomerManager';

function App() {
  const [selectedCustomerId] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Banco UdeA</h1>
      <AddCustomerForm />
      <TransferForm />
      <TransactionList />
      
      <CustomerDetail id={selectedCustomerId} />
      <CustomerManager />
    </div>
  );
}

export default App;
