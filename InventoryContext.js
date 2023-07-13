import React, { createContext, useState, useContext } from 'react';

// Create the context
const InventoryContext = createContext();

// Custom hook to access the context
const useInventory = () => useContext(InventoryContext);

// InventoryProvider component to wrap the app
const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  // Function to add a product to the inventory
  const addProduct = (product) => {
    setInventory((prevInventory) => [...prevInventory, product]);
  };

  // Function to remove a product from the inventory
  const removeProduct = (productId) => {
    setInventory((prevInventory) =>
      prevInventory.filter((product) => product.id !== productId)
    );
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryProvider, useInventory };
