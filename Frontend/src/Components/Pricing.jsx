import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  // Define the pricing array directly
  const pricing = [
    {
      imgUrl: '/pricing.jpg',
      title: 'QUARTERLY',
      price: 16000,
      length: 3,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'HALF_YEARLY',
      price: 34000,
      length: 6,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'YEARLY',
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>XTREME FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map((element) => (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} months</p>
              </div>
              <div className="description">
                <p><Check /> Equipment</p>
                <p><Check /> All day free training</p>
                <p><Check /> Free Restroom</p>
                <p><Check /> 24/7 Skilled Support</p>
                <p><Check /> 20 Days Freezing Option</p>
                <Link to="/">Join Now</Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Pricing;
