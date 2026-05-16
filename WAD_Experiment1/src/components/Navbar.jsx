import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <Link className="navbar-brand" to="/">CarShowroom</Link>
      <div className="navbar-nav">
        <Link className='navbar-brand px-3' to='/'>CarModels</Link>
        <Link className='navbar-brand px-3' to='/booking'>Booking</Link>
        <Link className='navbar-brand px-3' to='/emi'>EMI Details</Link>
        <Link className='navbar-brand px-3' to='/contact'>Contact</Link>
        <Link className='navbar-brand px-3' to='/login'>Login</Link>  
      </div>
    </nav>
  );
}

export default Navbar;
