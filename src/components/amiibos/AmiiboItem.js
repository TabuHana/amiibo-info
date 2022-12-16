import { Link } from "react-router-dom";

const AmiiboItem = ({ amiibo: { head, tail, image }}) => {

  const amiiboID = head+tail;


  return (
    // <div className='card shadow-md bg-base-100'>
    //   <div className="space-x-4 ">
    //     <div className="flex justify-center">
    //       <div className="">
    //         <div className="shadow w-36 h-36">
    //           <img width={120} src={ image } alt="amiibo" />
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       {/* <Link className='text-white text-opacity-40' to={ `/user/${ login }` }>Visit Profile</Link> */}
    //       Learn More
    //     </div>
    //   </div>
    // </div>


    <div className="card shadow-xl bg-base-300 flex justify-between py-3">
      <figure>
        <img style={{'objectFit':'contain', 'width':'180px', 'height':'180px'}} src={ image } alt="amiibo" />
      </figure>
      <div className="mx-auto pt-2">
        <Link to={'/'}>View More Info</Link>
      </div>
    </div>
  );
};
export default AmiiboItem;