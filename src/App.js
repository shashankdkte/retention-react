import { useEffect, useState } from 'react';
import Header from './components/Header';
import NewFactForm from './components/NewFactForm';
import FactList from './components/FactList';
import CategoryFilter from './components/CategoryFilter';
import Loader from './components/Loader';
import supabase from './supabase';



function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);
      let query = supabase.from('retention_table').select('*');
      if (currentCategory !== 'all')
      {
        
        query = query.eq('category', currentCategory);
      }
      const { data: facts, error } = await query.order('votesInteresting',
        { ascending: false }).limit(1000);
      
      console.log(facts)
      if (!error) setFacts(facts);
        
      else alert('There was a problem getting data');
      setIsLoading(false);
    }
    
    getFacts()
},[currentCategory])


  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm}/>
      {showForm && <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />}
      
      <main className="main">
      <CategoryFilter setCurrentCategory={setCurrentCategory}/>
      {isLoading ? <Loader/> : <FactList facts={facts}  setFacts={setFacts}/>}
      
      </main>
    </>
  );
}

export default App;
