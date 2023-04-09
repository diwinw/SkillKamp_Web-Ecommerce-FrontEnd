import React, { useEffect, useState } from "react";
import "./ReviewPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Great product!",
      rating: 5,
      comment:
        "I absolutely love this product. It exceeded my expectations and I would definitely recommend it to anyone looking for a high-quality option.",
    },
    {
      id: 2,
      title: "Good value for the price",
      rating: 4,
      comment:
        "This is a solid product for the price. It may not be the best option out there, but it gets the job done and I'm happy with my purchase.",
    },
    {
      id: 3,
      title: "Disappointing",
      rating: 3,
      comment:
        "I had high hopes for this product, but it ended up falling short. It didn't work as well as I expected and I wouldn't recommend it.",
    },
  ]);

  //   useEffect(() => {
  //     fetch("/api/reviews")
  //       .then((response) => response.json())
  //       .then((data) => setReviews(data));
  //   }, []);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    }
    return stars;
  };

  return (
    <div className="container-review">
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <p className="title">{review.title}</p>
          {/* <p className="rating">{review.rating}</p> */}
          <div className="rating">{renderStars(review.rating)}</div>
          <p className="comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
