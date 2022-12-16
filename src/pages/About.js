import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

const About = () => {
  return (
    <div className="text-info-content">
      <h1 className="text-6xl mb-4">Amiibo Info</h1>
      <p>Amiibo Info is a <strong><a href="https://bsandfer.github.io/amiibo-locator/" target='_blank' rel='noreferrer'>revamp</a></strong> of a project I did in school, with the goal of <u>making it easy to
        find information about your character's Amiibos</u>.
      </p>
      <p>This app allows you to search by <u>game series or character name</u> to view all possible Amiibo's.</p>
      <p>Powered by <strong><a href="https://www.amiiboapi.com/" target='_blank' rel='noreferrer'>AmiiboAPI</a></strong>!</p>
      <p><small>PS~ The bold bits are clickable! 😉</small></p>
      <Link to='/' className='btn btn-secondary btn-sm my-5'>
        <FaHome className='mr-2' />
        Return Home
      </Link>
    </div>
  );
};
export default About;