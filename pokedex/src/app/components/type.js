import {React} from 'react';

const Type = (props) => {
    const { name } = props;
    let types = name["types"];
    return (
        <div>
            <h2 className='types__title'>Type</h2>
            {types.map((type, index) => (
          <li key={index} className={type.type.name}>{type.type.name}</li>
        ))}
        </div>
    );
  };
  
  export default Type;