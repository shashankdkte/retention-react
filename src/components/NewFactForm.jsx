import React, { useState } from 'react'
import { CATEGORIES } from '../Categories';
import { isValidHttpUrl } from '../utils';
import supabase from '../supabase';

function NewFactForm({setFacts, setShowForm }) {
   const [text, setText] = useState('');
  const [source, setSource] = useState('http://example.com');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);
        // 2. Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200)
    {
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from('retention_table')
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false)
      if (!error) setFacts((facts) => [newFact[0], ...facts])
      setText('');
      setSource('');
      setCategory('');

      // 6. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}> 
      <input type="text" placeholder="Share a fact with world..."
        value={text}
      onChange={(e)=>setText(e.target.value)} disabled={isUploading}/>
        <span>{200 - textLength}</span>
      <input type="text" placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
         value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
          <option value="">Choose category:</option>
         {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
        </select>
        <button className="btn btn-large"  disabled={isUploading}>Post</button>
  </form>
  )
}

export default NewFactForm