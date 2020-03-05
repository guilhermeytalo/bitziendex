import React, {useState, useEffect, useCallback} from 'react';
import { 
  IonCard,
  IonRow, 
  IonCardTitle, 
  IonCol,
  IonList} from '@ionic/react';
import './ExploreContainer.css';
import axios from "axios";
// require('bootstrap');
// import readline from "readline-sync";
interface ContainerProps { }


const ExploreContainer: React.FC<ContainerProps> = () => {
  const [pokemonData, setPokemonData]  = useState([]);
  const renderLista = useCallback(() => {
    return pokemonData.map(pokemon => {
      return (
        <div className="grid-full">    
          <IonRow>
            <IonCol>
            <IonCard>
              <img src="..." alt="pokePic" />
              <IonCardTitle>{pokemon['name']} : {pokemon['url']}</IonCardTitle>
              <IonList>
                  teste
              </IonList>
            </IonCard>
            </IonCol>
          </IonRow>
    </div>
      )
    });
  }, [pokemonData]);
  
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=8')
      .then(response => {
        console.log(response.data);
        setPokemonData(response.data.results);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  // function renderLista(pokemonData){
  //   let url = response.data 
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(function(pokeData){
  //     console.log(pokeData)  
  //   })
  }

  return (
    <div className="container">
      <strong>Pokemons Cards</strong>
      <p>Using <a target="_blank" rel="noopener noreferrer" href="https://pokeapi.co/">Pokemon API</a></p>
          
      <table id="example" className="display" style={{width: "100%"}}></table>
      {renderLista()}
    </div>

  );
};

export default ExploreContainer;
