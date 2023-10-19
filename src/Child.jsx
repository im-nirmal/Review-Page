import React from 'react'
import { dataList } from './data';
import useReview from './useReview';

const Child = () => {

    const { items,  handleSurprise } = useReview(dataList);

  return (
    <main>
    <article className="review">
      <div className="img-container">
        <img src={items.image} alt={items.name} className="person-img" />
        <span className="quote-icon">
         
        </span>
      </div>
      <h4 className="author">{items.name}</h4>
      <p className="job">{items.job}</p>
      <p className="info">{items.text}</p>

      
      <button onClick={handleSurprise} className="btn btn-hipster">
        surprise me
      </button>
    </article>
  </main>
  )
}

export default Child
