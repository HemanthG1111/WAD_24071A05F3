function EMIDetails() {
  return (
    <div className="container mt-5">
      <h2>EMI Details</h2>
      <p>Estimated EMI for cars available:</p>
      <table className="table table-bordered mt-4">
        <thead className="bg-light">
          <tr>
            <th>Car Model</th>
            <th>Interest Rate</th>
            <th>Monthly EMI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sedan 200</td>
            <td>7.5%</td>
            <td>$450</td>
          </tr>
          <tr>
            <td>SUV Sport</td>
            <td>8.0%</td>
            <td>$620</td>
          </tr>
          <tr>
            <td>Green Sabre</td>
            <td>8.5%</td>
            <td>$810</td>
          </tr>
        </tbody>
      </table>
      
      <p className="text-info">*Final EMI can vary. Visit the nearest branch for detailed information.</p>
      
      
    </div>
  );
}

export default EMIDetails;