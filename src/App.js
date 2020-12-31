import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/header';
import Character from './components/characters/character';
import Search from './components/ui/search';
import './App.css';


function App() {

  const[items,setitems] = useState([])
  const[isLoading,setisLoading] = useState(true)
  const[query,setQuery] = useState('')


  useEffect(() => {
   const fetchitems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data);
      setitems(result.data);
      setisLoading(false);
   }
   fetchitems(); 
  }, [query])


  return (
    <div className="container">
         <Header/>
         <Search getQuery={(q) => setQuery(q)} />
         <Character setisLoading={isLoading} items={items}/>

    </div>
  );
}

export default App;
