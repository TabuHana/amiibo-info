import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AmiiboContext from "../context/AmiiboContext";
import Spinner from "../components/layouts/Spinner";


const Amiibo = () => {

  const { amiibo: { amiibo }, getAmiiboInfo, loading } = useContext(AmiiboContext);

  const params = useParams();

  useEffect(() => {
    getAmiiboInfo(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const {
  //   amiiboSeries,
  //   character,
  //   gameSeries,
  //   image,
  //   name,
  //   release,
  //   type
  // } = amiibo;

  console.log(amiibo)

  if (loading) {
    return <Spinner />;
  }


  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost text-neutral-content'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={ amiibo.image } alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0 text-neutral-content'>{ amiibo.name }</h2>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title text-info'>
                { amiibo.name }
                <div className='ml-2 mr-1 badge badge-success'>{ amiibo.type }</div>
                  <div className='mx-1 badge badge-info'>{amiibo.type}</div>
              </h1>
              <p className='text-neutral-content'>{ amiibo.gameSeries }</p>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats text-neutral-content'>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default Amiibo

