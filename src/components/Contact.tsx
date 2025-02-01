import React, { useState } from "react";

interface Review {
  name: string;
  recipe: string;
  message: string;
}

const Contact: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Alice",
      recipe: "Chocolate Cake",
      message: "Loved the moist texture and flavor!",
    },
    {
      name: "Bob",
      recipe: "Lasagna",
      message: "Best lasagna I've ever had!",
    },
    {
      name: "Charlie",
      recipe: "Pancakes",
      message: "They turned out super fluffy, thanks for the recipe!",
    },
  ]);

  // State for new review
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview: Review = { name, recipe, message };
    setReviews([...reviews, newReview]);

    // Reset form fields
    setName("");
    setRecipe("");
    setMessage("");
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact</h2>
      <p className="text-center mb-6">
        If you’d like to send me an email, click here:{" "}
        <a
          href="mailto:your-moms-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-moms-email@example.com
        </a>
      </p>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 font-medium text-gray-700"
          >
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="recipe"
            className="block mb-1 font-medium text-gray-700"
          >
            Recipe Name:
          </label>
          <input
            id="recipe"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-medium text-gray-700"
          >
            Message:
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit Review
        </button>
      </form>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">All Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet. Be the first!</p>
      ) : (
        reviews.map((review, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded shadow-sm"
          >
            <div className="font-semibold">{review.name}</div>
            <div className="italic text-sm text-gray-600 mb-2">
              {review.recipe}
            </div>
            <p className="text-gray-700">{review.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Contact;
