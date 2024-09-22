// ServiceForm.js
import React, { useState, useEffect } from 'react';

function ServiceForm({ addService, updateService, serviceToEdit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Populate the form fields when a service is selected for editing
  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.service.name);
      setDescription(serviceToEdit.service.description);
      setPrice(serviceToEdit.service.price);
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = { name, description, price };

    // If editing, update the service, otherwise add a new one
    if (serviceToEdit) {
      updateService(service);
    } else {
      addService(service);
    }

    // Reset form fields
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">
        {serviceToEdit ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
}

export default ServiceForm;
