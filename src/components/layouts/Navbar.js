import { Link } from "react-router-dom";
import { useContext } from "react";
import AmiiboContext from "../../context/amiibo/AmiiboContext";


const Navbar = () => {

  const { reset } = useContext(AmiiboContext);


  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 btn-ghost rounded-btn">
          <Link onClick={ () => reset() } to='/' className='text-lg font-bold'>
            Amiibo Info
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn' >
              About
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;