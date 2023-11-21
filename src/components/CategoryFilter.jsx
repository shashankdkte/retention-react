import React from 'react'
import { CATEGORIES } from '../Categories'
function CategoryFilter({setCurrentCategory}) {
  return (
      <aside>
          <ul className="category-list">
        <li className="category"><button className="btn btn-all-categories"
        onClick={() => setCurrentCategory('all')}>All</button>
        </li>
         {CATEGORIES.map((cat) => (
          <li key={cat.name} className='category'>
            <button
              className='btn btn-category'
               style={{ backgroundColor: cat.background, color: cat.color }}
               onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
 
          </ul>
        </aside>
  )
}

export default CategoryFilter