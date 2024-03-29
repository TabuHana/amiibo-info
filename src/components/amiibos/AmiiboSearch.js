import { useState, useContext } from "react";
import AmiiboContext from "../../context/amiibo/AmiiboContext";
import AlertContext from "../../context/alert/AlertContext";

const AmiiboSearch = () => {
  const [text, setText] = useState('');
  const { amiibos, clearAmiibos, searchAmiibos } = useContext(AmiiboContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleClear = () => clearAmiibos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter a Name', 'error');
    } else {
      searchAmiibos(text);
      setText('');
    }
  };


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={ handleSubmit }>
          <div className="form-control">
            <div className="relative">
              <input type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search by Name..."
                value={ text }
                onChange={ handleChange } />
              <button type="submit"
                className="button absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      { amiibos.length > 0 && (
        <div>
          <button onClick={ handleClear } className="btn btn-ghost btn-lg text-neutral-content">Clear</button>
        </div>
      ) }
    </div>
  );
};
export default AmiiboSearch;