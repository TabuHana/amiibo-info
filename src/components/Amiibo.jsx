import { useEffect } from "react";


// const searchAmiibo = async (search) => {
//   let characterName = search.search.toUpperCase();
//   let amiiboAPI = await fetch(`https://amiiboapi.com/api/amiibo/?character=${ characterName }`);

//   if (amiiboAPI.status === 200) {
//     let data = await amiiboAPI.json();
//     let amiiboData = data.amiibo;
//     setAmiibo(amiiboData);
//     setTitle(characterName);

//   } else if (amiiboAPI.status === 404) {
//     console.log('invald');
//     setTitle('Error');
//   } else {
//     console.log("Something didn't go right... I just don't know what");
//     setTitle('Wha...');
//   }



// }

const Amiibo = () => {

  useEffect(() => {
    console.log('hello world');
  }, []);


  return (
    <div>Amiibo</div>
  );
};
export default Amiibo;