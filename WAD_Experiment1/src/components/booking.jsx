function Booking() {
  const handleBooking = (e) => {
    e.preventDefault();
    const car = e.target.car.value;
    alert("Booking confirmed for " + car +"!");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2> -- Book Your Car</h2>
      <form onSubmit={handleBooking} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Select Car Model</label>
          <select name="car" className="form-select" required>
            <option value="Sedan 200">Sedan 200</option>
            <option value="SUV Sport">SUV Sport</option>
            <option value="Green Sabre">Green Sabre</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input type="tel" name="phone" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea name="address" className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;