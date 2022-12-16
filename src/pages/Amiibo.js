import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AmiiboContext from "../context/amiibo/AmiiboContext";
import Spinner from "../components/layouts/Spinner";


const Amiibo = () => {

  const { amiibo, getAmiiboInfo, loading, clearAmiibo } = useContext(AmiiboContext);

  const params = useParams();

  useEffect(() => {
    getAmiiboInfo(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    amiiboSeries,
    character,
    gameSeries,
    image,
    name,
    release,
    type
  } = amiibo;

  const handleClear = () => clearAmiibo();

  if (loading) {
    return <Spinner />;
  }


  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link onClick={ handleClear } to='/' className='btn btn-secondary text-white'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='card image-full'>
              <figure>
                <img src={ image } alt={ name } />
              </figure>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className="text-xl text-info-content">
                <u>{ gameSeries }</u>
                <div className='ml-2 badge badge-base-300'>{ type }</div>
              </h1>
              <h2 className='text-4xl card-title text-info-content'>
                { name }
              </h2>
            </div>

            <h1 className="text-xl">Releases</h1>
            <div className='w-full rounded-lg shadow-md bg-base-300 stats text-neutral-content text-center'>
              <div>
                JP
                <div>
                  { release?.jp ? release.jp : 'No Releases' }
                </div>
              </div>
              <div>
                NA
                <div>
                  { release?.na ? release.na : 'No Releases' }
                </div>
              </div>
              <div>
                EU
                <div>
                  { release?.eu ? release.eu : 'No Releases' }
                </div>
              </div>
              <div>
                AU
                <div>
                  { release?.au ? release.au : 'No Releases' }
                </div>
              </div>
            </div>

            <h1 className="mt-5 text-xl">Info</h1>
            <div className='w-full rounded-lg shadow-md bg-base-300 stats text-neutral-content text-center'>
              <div>
                Game Series
                <div>
                  { gameSeries }
                </div>
              </div>
              <div>
                Amiibo Series
                <div>
                  { amiiboSeries }
                </div>
              </div>
              <div>
                Character
                <div>
                  { character }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default Amiibo

