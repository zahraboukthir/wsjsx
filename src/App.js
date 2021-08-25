// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Comments from "./Components/Comments";
// import MainVideo from "./Components/MainVideo";
// import Navigation from "./Components/Navigation";
// import { Footer, Suggestions } from "./Components/Suggestions";

// function App() {
//   return (
//     <div className="Container">
//       {/* <Navigation />
//       <div className="row">
//         <div className="col-md-8">
//           <MainVideo />
//           <Comments />
//         </div>
//         <div className="col-md-4">
//        <Suggestions/>
       
//         </div>
//       </div>
//       <Footer/> */}
//     </div>
//   );
// }
import { useState } from 'react';
import './App.css';
const App = () => {
  //ma liste des donnees
  let movies = [
    { title: "Joker", image: "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg ", Rating: 5 },
    { title: "Rumble", image: "https://media.senscritique.com/media/000016232379/240/Rumble.jpg", Rating: 4 },
    { itle: "La convocation", image: "https://www.onippam.fr/posters/pics/La-Convocation-Film-2020.jpg", Rating: 4 },
  ];
  const [inputa, setinputa] = useState("")
  //handle change action de input
  const handlChange=(e)=>{
    e.preventDefault();
    setinputa(e.target.value);
  };
//filtre de recherche
// console.log(inputa)
// if(inputa.length>0)
// {
//   movies= movies.filter((i) =>{return i.title.match(inputa);});
// }
  return (
    <div className="App">
      {/* search box */}

      <input type="text" placeholde="search" onChange={handlChange} value={inputa}/>

      {/* mapping de la liste */}

      {
        movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(inputa.toLocaleLowerCase().trim())).map((elt) =>

          <div >
            <ul>
              <li>{elt.title} ,{elt.image},{elt.Rating}</li>
            </ul>
          </div>

        )
      }

    </div >
  );
}
export default App;
// export default App;
