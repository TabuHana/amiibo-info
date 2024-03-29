import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='hero'>
      <div className="text-centent hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 text-white">
            404
          </h1>
          <p className="text-5xl mb-8 text-white">
            Page Not Found
          </p>
          <Link to='/' className='btn btn-secondary btn-lg my-5'>
            <FaHome className='mr-2' />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;