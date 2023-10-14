import {useState, useEffect} from 'react';

const Disc= (props)=>{
    const { pokemon } = props;
    const [disc, setDisc] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getDiscription(){
          await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemon)
          .then(response =>{
              return response.json();
              
          }).then(data =>{
              setDisc(data);
              setLoading(false);
          }).catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
        }
        getDiscription()
      }, []);
    return (
        <div>

            <h2 className='types__title'>Discription</h2>
            
            {loading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
        <p>{disc.flavor_text_entries[6].flavor_text}</p>
      )}
        </div>
    

    
    );
  };
  
  export default Disc;