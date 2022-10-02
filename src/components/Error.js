import { Link } from 'react-router-dom';
import '../styling/error.css';

const Error = () => {
  return (
    <section className='container'>
      <h2>404</h2>
      <p>page not found</p>
      <Link className="error-link" to='/'>Back on a Main Page</Link>
    </section>
  );
};
export default Error;