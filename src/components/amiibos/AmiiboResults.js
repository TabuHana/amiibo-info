import { useContext } from "react";
import Spinner from '../layouts/Spinner';
import AmiiboItem from './AmiiboItem';
import AmiiboContext from "../../context/amiibo/AmiiboContext";


const AmiiboResults = () => {

  const { amiibos, loading } = useContext(AmiiboContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
        { amiibos.map((amiibo) => (
          <AmiiboItem key={ amiibo.tail } amiibo={ amiibo } />
        )) }
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default AmiiboResults;