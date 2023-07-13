import React from 'react';
import { InventoryProvider } from './InventoryContext';
import { AddProduct, InventoryManagement } from './components';

const App = () => {
  return (
    <InventoryProvider>
      <div>
        <h1>Chemist Shop</h1>
        <h2>Add Product</h2>
        <AddProduct
          name="Product 1"
          description="Product 1 description"
          price={9.99}
          quantity={10}
        />
        <h2>Inventory Management</h2>
        <InventoryManagement />
      </div>
    </InventoryProvider>
  );
};

export default App;
