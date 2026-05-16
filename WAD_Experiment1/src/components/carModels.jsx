import { Link } from 'react-router-dom';

function CarModels() {
  const cars = [
    { id: 1, name: "Sedan 200", price: "$25,000", image: "img1.jpg" },
    { id: 2, name: "SUV Sport", price: "$36,000", image: "img2.jpg" },
    { id: 3, name: "Green Sabre", price: "$48,000", image: "img3.jpg" }
  ];

  return (
    <div className="container mt-5">
      <h2>Our Car Models</h2>
      <div className="row mt-4">
        {cars.map(car => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={car.image} alt={car.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Price: {car.price}</p>
                <Link className="btn btn-dark" to="/booking">Go to Booking</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarModels;