import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetail from './components/CustomerDetail';
import AddCustomerForm from './components/AddCustomerForm';
import TransferForm from './components/TransferForm';
import TransactionList from './components/TransactionList';

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Banco React</h1>
      <AddCustomerForm />
      <TransferForm />
      <TransactionList />
      <CustomerList onSelect={setSelectedCustomerId} />
      <CustomerDetail id={selectedCustomerId} />
    </div>
  );
}

export default App;
