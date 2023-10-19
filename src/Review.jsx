import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { dataList } from "./data";
import useReview from "./useReview";

const Review = () => {
  const { items, currentIndex, handleNext, handlePrev, handleSurprise } = useReview(dataList);

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={items.image} alt={items.name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{items.name}</h4>
        <p className="job">{items.job}</p>
        <p className="info">{items.text}</p>

        <div className="btn-container">
          <button onClick={handlePrev} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={handleSurprise} className="btn btn-hipster">
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Review;
