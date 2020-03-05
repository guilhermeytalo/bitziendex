import React, {useState, useEffect, useCallback} from 'react';
import { 
  IonCard,
  IonRow, 
  IonCardTitle, 
  IonCol,
  IonList,
  IonModal, 
  IonButton,
  IonContent} from '@ionic/react';
import './ExploreContainer.css';
import axios from "axios";
import {Link} from 'react-router-dom';
interface ContainerProps { }


const ExploreContainer: React.FC<ContainerProps> = () => {
  const [pokemonData, setPokemonData]  = useState([]);
  

  
  const renderLista = useCallback(() => {
    return pokemonData.map((pokemon, key) => {
      if (key === 0) console.log(pokemon)
      return (
        <div key={key} className="grid-full">    
          <IonRow>
            <IonCol>
            <IonCard>
              <img src="..." alt="pokePic" />
              <IonCardTitle>{pokemon['name']}</IonCardTitle>
              <Link to={`/pokemon?pokemon=${pokemon['url']}`}>See Details</Link>

              <IonList>
                  teste3
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
