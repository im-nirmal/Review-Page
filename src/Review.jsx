import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { dataList } from "./data";

const Review = () => {
  // const [items, setItems] = useState(dataList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex);

  const items = dataList[currentIndex];
  // console.log(items);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      return (prev = (prev + 1) % dataList.length);

      // prevIndex + 1 === images.length ? 0 : prevIndex + 1
    });
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      return (prev = prev - 1 < 0 ? dataList.length - 1 : prev - 1);

      // prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    });
  };

  const handleSurprise = () => {
    let randomIndex = Math.floor(Math.random() * dataList.length);
    // const randomElement = dataList[randomIndex]
    // console.log(randomElement);

    setCurrentIndex(randomIndex);

    // return dataList[Math.floor(Math.random() * dataList.length )]
  };

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
