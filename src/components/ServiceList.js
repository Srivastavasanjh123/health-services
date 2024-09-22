// ServiceList.js
import React from 'react';

function ServiceList({ services, deleteService, handleEdit }) {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available. Add a service to get started.</p>
      ) : (
        services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-info">
              <div>
                <p className="service-name">{service.name}</p>
                <p className="service-description">{service.description}</p>
              </div>
              <p className="service-price">₹ {service.price}</p>
            </div>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteService(index)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ServiceList;
