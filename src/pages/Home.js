import React from 'react'
import  "../styles/Navbarstyles.css";
import  "../styles/home.css";
import SubscriptionCard from '../components/SubscriptionCard';

const plans = [
  { name: 'Basic Plan', price: 'rs.100' },
  { name: 'Standard Plan', price: 'rs.100' },
  { name: 'Premium Plan', price: 'rs.100'}
];

const Home = () => {
  return (
    <div className="home">
      <h1>Subscription Plans</h1>
      <div className="subscription-cards-container">
        {plans.map((plan, index) => (
          <SubscriptionCard 
            key={index} 
            name={plan.name} 
            price={plan.price} 
            description={plan.description} 
          />
        ))}
      </div>
    </div>
  );
};


export default Home