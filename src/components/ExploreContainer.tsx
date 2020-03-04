import React, {useState, useEffect, useCallback} from 'react';

import './ExploreContainer.css';
import axios from "axios";
// require('bootstrap');
// import readline from "readline-sync";
interface ContainerProps { }


const ExploreContainer: React.FC<ContainerProps> = () => {
  const [pokemonData, setPokemonData]  = useState([]);
  // const [nextUrl, setNextUrl] = useState('');
  // const [prevUrl, setPrevUrl] = useState('');
  // const [loading, setLoading] = useState(true);
  // const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  
  const renderLista = useCallback(() => {
    return pokemonData.map(item => {
      return (
        <div key={item['name']}>
          <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item['name']}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      )
    });
  }, [pokemonData]);
  
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => {
        console.log(response.data);
        setPokemonData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="container">
      <strong>Pokemons Cards</strong>
      <p>Using<a target="_blank" rel="noopener noreferrer" href="https://pokeapi.co/">Pokemon API</a></p>
          
      <table id="example" className="display" style={{width: "100%"}}></table>
      {renderLista()}
    </div>

  );
};

export default ExploreContainer;
