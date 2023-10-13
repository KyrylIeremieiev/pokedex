"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import styles from './page.module.css'
import Type from './components/type';

import {useState, useClient} from 'react';
// useClient();

function Home() {
  const [pokemon, setPokemon] = useState(0);
  function search(){
    console.log(pokemon)
  }
  return (
    <main>
      <form className='search'>
        <input className='search__input' onChange={(e)=>{
          setPokemon(e.target.value);
        }}/>
        <input type='button' className='search__button' onClick={search} value={'search'}/>
        
      </form>
        <Type name={pokemon}></Type>
    </main>
  )
}
export default Home;