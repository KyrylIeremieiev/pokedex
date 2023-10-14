import {React} from 'react';

const Type= ()=>{
    const [data, setData] = useState(0)
    const [disc, setDisc] = useState(0);
    useEffect(() => {
        async function getDiscription(){
          await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemon)
          .then(response =>{
              return response.json();
              
          }).then(data =>{
              setData(data);
          }).catch(error => {
            console.error('Error fetching data:', error);
     // Set loading to false even if there's an error
          });
        }
        getDiscription()
      }, []);
    return (
        <div>
            <h2 className='types__title'>Type</h2>
            <section className='types__sec'>
                {types.map((type, index) => (
          <li key={index} className={type.type.name + " type"}>{type.type.name}</li>
        ))}
            </section>
            
        </div>
    );
  };
  
  export default Type;