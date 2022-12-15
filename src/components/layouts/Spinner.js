import mario_spinner from './assests/mario_spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img width={ 180 } className='text-center mx-auto' src={ mario_spinner } alt="Loading..." />
    </div>
  );
};
export default Spinner;