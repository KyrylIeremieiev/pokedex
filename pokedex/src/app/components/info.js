import {React} from 'react';

const Info = (props) => {
    const { data } = props;
    return (
        <div>
            <h2>{data.name}</h2>
        </div>
    );
  };
  
  export default Info;