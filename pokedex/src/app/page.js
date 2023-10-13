"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import styles from './page.module.css'
import Type from './components/type';

import {useState, useClient, useEffect} from 'react';
// useClient();

function Home() {
  const [pokemon, setPokemon] = useState('greninja');
  const [data, setData] = useState(0)
  const [loading, setLoading] = useState(true);
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
        setLoading(false); // Set loading to false even if there's an error
      });
    }

    start();
    
  }, []);
  async function search(){
      await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(response =>{
          return response.json();
      }).then(data =>{
          setData(data);
      });
  }
  return (
    <main>
      <form className='search'>
        <input className='search__input' onChange={(e)=>{
          setPokemon(e.target.value);
        }}/>
        <input type='button' className='search__button' onClick={search} value={'search'}/>
        
      </form>
      {loading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
          <Type name={data}></Type>
      )}
        
    </main>
  )
}
export default Home;