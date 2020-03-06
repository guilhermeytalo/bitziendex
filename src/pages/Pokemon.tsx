import { IonContent, 
  IonCard,
  IonCardHeader,
  IonHeader, 
  IonPage, 
  IonTitle,
  IonCardTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton  } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { useLocation} from 'react-router-dom';

import './Pokemon.css';
import axios from 'axios';

const Pokemon: React.FC = () => {
const query = new URLSearchParams(useLocation().search);
const pokemon = query.get("pokemon") || '';
const [pokemonData, setPokemonData] = useState<any>(null);






  useEffect(() => {
    axios
      .get(pokemon)
      .then(response => {
        console.log(response.data);
        setPokemonData(response.data)
      })
      .catch(error => {
        console.log(error);
        setPokemonData(false);
      });
  }, [pokemon])


  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>bitzen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {pokemonData  ? 
      <IonCard>
      <div className="poke-pic">
      <img src={pokemonData['sprites']['front_default']} alt="poke-pic: {pokemonData['name']}"/>
      </div>
      <IonCardHeader>
        <IonCardTitle>{pokemonData['name']}</IonCardTitle>
      </IonCardHeader>
      <div className="ion-buttons">
      <IonButton color="success">HP: {pokemonData['stats'][5]['base_stat']}</IonButton>
      <IonButton color="secondary">Defense: {pokemonData['stats'][3]['base_stat']}</IonButton>
      <IonButton color="tertiary">Speed: {pokemonData['stats'][0]['base_stat']}</IonButton>
      </div>
      <IonList>
     
        
       <IonItem>
        <IonLabel>
          Type: {
            pokemonData['types'].map((type: any, ind: number) => {
              return (ind) ? `, ${type['type']['name']}` : type['type']['name']; 
            }).join('')
          }
        </IonLabel>
      </IonItem>
      
      <IonItem>
        <IonLabel>Weight: {pokemonData['weight']}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Height: {pokemonData['height']}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          Type: {
            pokemonData['moves'].map((move: any, ind: number) => {
              return (ind) ? `, ${move['move']['name']}` : move['move']['name']; 
            }).join('')
          }</IonLabel>
      </IonItem>
    </IonList>
    </IonCard>  
    : <></>
    }
    
        
      </IonContent>
    </IonPage>
  );
};



export default Pokemon;