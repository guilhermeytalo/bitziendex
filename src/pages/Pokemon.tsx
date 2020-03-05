import { IonContent, 
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonHeader, 
  IonPage, 
  IonTitle,
  IonCardTitle, 
  IonCardContent,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton, 
  IonIcon
   } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
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
  }, [])

  
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
      <img src="..." alt="..."/>
      <IonCardHeader>
        <IonCardTitle>{pokemonData['name']}</IonCardTitle>
      </IonCardHeader>
      <IonButton color="primary">HP: {pokemonData['stats'][5]['base_stat']}</IonButton>
      <IonButton color="secondary">Defense: {pokemonData['stats'][3]['base_stat']}</IonButton>
      <IonButton color="tertiary">Speed: {pokemonData['stats'][0]['base_stat']}</IonButton>
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
        <IonLabel>Status: </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Moves</IonLabel>
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
