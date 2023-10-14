import {React} from 'react';

const Type = (props) => {
    const { name } = props;
    let types = name["types"];
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