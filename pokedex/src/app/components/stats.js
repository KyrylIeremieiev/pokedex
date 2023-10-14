import {React} from 'react';

const Stats = (props) => {
    const { data } = props;
    let stats = data.stats
    return (
        <div>
            <h2 className='types__title'>Stats</h2>
            <section className='stat'>
            {stats.map((stat, index) => (
            <li key={index} className='stat__card'>
                <p className='stat__name'>{stat.stat.name}</p>
                <p className='stat__stat'>{stat.base_stat}</p>
            </li>
        ))}
            </section>
        </div>
    );
  };
  
  export default Stats;