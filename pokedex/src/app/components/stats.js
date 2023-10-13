import {React} from 'react';

const Stats = (props) => {
    const { data } = props;
    let stats = data.stats
    return (
        <div>
            <h2 className='types__title'>Stats</h2>
            {stats.map((stat, index) => (
            <li key={index}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
            </li>
        ))}
        </div>
    );
  };
  
  export default Stats;