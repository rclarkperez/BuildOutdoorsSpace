import React from "react";
import reviewOne from "../../photos/Review 1.jpg";
import reviewTwo from "../../photos/Review 2.jpg";
import reviewThree from "../../photos/Review 3.jpg";
import "../../style/PagesStyle/Reviews.css";

const Reviews = () => {
  const divStyle = {
    fontFamily: "Arial, sans-serif",
    // padding: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
  };

  const liStyle = {
    // margin: "10px 0",
    // padding: "10px",
    // border: "1px solid #ddd",
    // borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };

  // return reviewList.map((item, index) => (
  //   <li key={index} style={liStyle}>
  //     "{item.review}" - {item.reviewer}
  //     <div style={ratingStyle}>
  //       <img src={reviewOne} alt="Review 1" />

  //       <span style={starStyle}>&#9733;</span>
  //       <span style={starStyle}>&#9733;</span>
  //       <span style={starStyle}>&#9733;</span>
  //       <span style={starStyle}>&#9733;</span>
  //       <span style={starStyle}>&#9733;</span>
  //     </div>
  //   </li>
  // ));
  const renderReviews = () => {
    return (
      <div>
        <li style={liStyle}>
          <div>
            <img id="review-photo" src={reviewOne} alt="Review 1" />
          </div>
        </li>
        <li style={liStyle}>
          <div>
            <img id="review-photo" src={reviewTwo} alt="Review 2" />
          </div>
        </li>
        <li style={liStyle}>
          <div>
            <img id="review-photo" src={reviewThree} alt="Review 3" />
          </div>
        </li>
      </div>
    );
  };

  return (
    <div style={divStyle}>
      <br />
      <h1 style={titleStyle}>Customer Reviews</h1>
      <br />
      <div>
        <ul>{renderReviews()}</ul>
      </div>
    </div>
  );
};

export default Reviews;
