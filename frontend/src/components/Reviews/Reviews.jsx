import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import { message } from "antd";

function Reviews({ active, singleProduct, setSingleProduct }) {
  const [users, setUsers] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisReview = [];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        console.log("RESPONSEW", response);

        if (response.ok) {
          const data = await response.json();

          setUsers(data);
        } else message.error("Veri getirme işlemi başarısız");
      } catch (err) {
        console.log("Veri hatası:", err);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  singleProduct.reviews.forEach((review) => {
    const matchingUser = users?.filter((user) => user._id === review.user);
    matchingUser.forEach((matchingUser) =>
      thisReview.push({
        review,
        user: matchingUser,
      })
    );
  });

  console.log("rewviewww", thisReview);

  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct.reviews.length > 0 ? (
        <>
          <h3>
            {singleProduct.reviews.length} reviews for Basic Colored Sweatpants
            With Elastic Hems
          </h3>
          <div className="comments">
            <ol className="comment-list">
              {thisReview.map((item, index) => (
                <ReviewItem key={index} item={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}

      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
}

export default Reviews;
