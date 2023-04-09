import React, { useState } from "react";
import "./ReviewPage.css";

const ReviewPage = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: name,
      comment: comment,
      rating: rating,
    };

    setReviews([...reviews, newReview]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="review-page">
      <h1 className="review-heading">Product Reviews</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <label className="review-label">
          Name
          <input
            className="review-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="review-label">
          Comment
          <textarea
            className="review-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <label className="review-label">
          Rating
          <select
            className="review-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={0}>-- Select rating --</option>
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </label>
        <button className="review-button" type="submit">
          Submit Review
        </button>
      </form>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3 className="review-item-heading">{review.name}</h3>
            <div className="review-item-rating">{`${review.rating} stars`}</div>
            <p className="review-item-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
