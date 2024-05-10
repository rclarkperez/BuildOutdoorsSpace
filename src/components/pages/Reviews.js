import React from "react";

const Reviews = () => {
  const divStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
  };

  const headingStyle = {
    marginLeft: "50px",
    color: "#555",
  };

  const liStyle = {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };

  const ratingStyle = {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  };

  const starStyle = {
    color: "gold",
  };

  const reviewList = [
    {
      review: "Excellent work on our outdoor kitchen! Highly recommended!",
      reviewer: "John Doe",
    },
    {
      review: "Amazing craftsmanship and attention to detail. Very satisfied!",
      reviewer: "Jane Smith",
    },
    {
      review:
        "Professional and efficient service for our commercial excavation needs!",
      reviewer: "David Johnson",
    },
    {
      review:
        "Highly skilled team for our residential excavation project. Great job!",
      reviewer: "Sarah Williams",
    },
    {
      review:
        "Exemplary work on our excavation. Timely and precise. Highly recommended!",
      reviewer: "Michael Brown",
    },
  ];

  const renderReviews = () => {
    return reviewList.map((item, index) => (
      <li key={index} style={liStyle}>
        "{item.review}" - {item.reviewer}
        <div style={ratingStyle}>
          <span style={starStyle}>&#9733;</span>
          <span style={starStyle}>&#9733;</span>
          <span style={starStyle}>&#9733;</span>
          <span style={starStyle}>&#9733;</span>
          <span style={starStyle}>&#9733;</span>
        </div>
      </li>
    ));
  };

  return (
    <div style={divStyle}>
      <h2 style={titleStyle}>Customer Review Page Coming Soon!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <div>
                <h3 style={headingStyle}>Outdoor Kitchen Reviews</h3>
                <ul>{renderReviews().slice(0, 2)}</ul>
            </div>

            <div>
                <h3 style={headingStyle}>Excavation Reviews</h3>
                <ul>{renderReviews().slice(2)}</ul>
            </div> */}
    </div>
  );
};

export default Reviews;
