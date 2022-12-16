import { Link } from "react-router-dom";

const AmiiboItem = ({ amiibo: { head, tail, image }}) => {

  const amiiboID = head+tail;


  return (
    <div className="card shadow-xl bg-base-300 flex justify-between py-3">
      <figure>
        <img style={{'objectFit':'contain', 'width':'180px', 'height':'180px'}} src={ image } alt="amiibo" />
      </figure>
      <div className="mx-auto pt-2">
        <Link to={`amiibo/${amiiboID}`}>View More Info</Link>
      </div>
    </div>
  );
};
export default AmiiboItem;