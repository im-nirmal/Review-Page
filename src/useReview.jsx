import { useState } from "react";

const useReview = (initialData) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = initialData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? initialData.length - 1 : prev - 1));
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * initialData.length);
    setCurrentIndex(randomIndex);
  };

  return {
    items,
    currentIndex,
    handleNext,
    handlePrev,
    handleSurprise,
  };
};

export default useReview;
