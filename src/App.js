// App.js
import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [serviceToEdit, setServiceToEdit] = useState(null); // Holds the service that is being edited

  // Add a new service
  const addService = (service) => {
    setServices([...services, service]);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === serviceToEdit.index ? updatedService : service
    );
    setServices(updatedServices);
    setServiceToEdit(null); // Reset after editing
  };

  // Delete a service from the list
  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  // Set the service to be edited
  const handleEdit = (index) => {
    setServiceToEdit({ service: services[index], index });
  };

  return (
    <div className="container">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        serviceToEdit={serviceToEdit}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
