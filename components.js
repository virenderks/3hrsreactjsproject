import React from 'react';
import { useInventory } from './InventoryContext';

// Component to display medicine details
const MedicineDetails = ({ name, description, price, quantity }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

// Component to add a product to the inventory
const AddProduct = ({ name, description, price, quantity }) => {
  const { addProduct } = useInventory();

  const handleAddProduct = () => {
    const product = { name, description, price, quantity };
    addProduct(product);
  };

  return (
    <div>
      <MedicineDetails
        name={name}
        description={description}
        price={price}
        quantity={quantity}
      />
      <button onClick={handleAddProduct}>Add to Inventory</button>
    </div>
  );
};

// Component to display the inventory and cart
const InventoryManagement = () => {
  const { inventory, removeProduct } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>
      {inventory.map((product) => (
        <div key={product.id}>
          <MedicineDetails
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
          />
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export { AddProduct, InventoryManagement };
