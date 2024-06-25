import React from 'react';

const SubscriptionCard = ({ name, price, description }) => {
  return (
    <div className="subscription-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <button>Subscribe</button>
    </div>
  );
};

export default SubscriptionCard;