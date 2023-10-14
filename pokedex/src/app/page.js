"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import styles from './page.module.css'
import Type from './components/type';
import Stats from './components/stats';
import Sprite from './components/sprite';
import Disc from './components/disc';

import {useState, useClient, useEffect} from 'react';
// useClient();

function Home() {
  const [pokemon, setPokemon] = useState('greninja');
  const [data, setData] = useState(0)
  const [loading, setLoading] = useState(true);
  const [discPokemon, setDiscPokemon] = useState('greninja');
  const [fetchError, setError] = useState(true);
  useEffect(() => {
    async function start(){
      await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(response =>{
          return response.json();
          
      }).then(data =>{
          setData(data);
          setLoading(false);
      }).catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    }

    start();
    
  }, []);

  async function search(){
    setError(true);
      await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(response =>{
          return response.json();
      }).then(data =>{
          setData(data);
          setDiscPokemon(pokemon);
      }).catch(error => {
        console.error('Error fetching data:', error);
        setError(false);
      });
  }
  return (
    <main>
      <form className='search'>
        <label className='search__label'>Pokemon Search</label>
        <div className='search__wrapper'>
          <input className='search__input' onChange={(e)=>{
          setPokemon(e.target.value);
        }}/>
        <input type='button' className='search__button' onClick={search} value={'search'}/>
        {fetchError ?(<div></div>): (
          <p className='search__error'>*Pokemon Not Found</p>
        )}
        </div>
        
      </form>
      {loading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
          <div>
            <h1 className='title'>{data.name}</h1>
            <section className='mainSection'>
              <Sprite data={data}></Sprite>
              <section className='leftSection'>
              <Disc pokemon={discPokemon}></Disc>
                <Type name={data}></Type>
                <Stats data={data}></Stats>
              </section>
            </section>
            
          </div>
      )}
        
    </main>
  )
}
export default Home;