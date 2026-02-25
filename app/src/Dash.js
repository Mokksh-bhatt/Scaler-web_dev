import React, { useState, useEffect } from 'react';
import './App.css';

const Dash = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState(() => {
    const saved = localStorage.getItem("likedQuotes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Failed to fetch quote. Please try again.");
      setAuthor("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLikeToggle = () => {
    const isLiked = likedQuotes.some((q) => q.quote === quote);

    if (isLiked) {
      setLikedQuotes(likedQuotes.filter((q) => q.quote !== quote));
    } else {
      setLikedQuotes([...likedQuotes, { quote, author }]);
    }
  };

  const isCurrentlyLiked = likedQuotes.some((q) => q.quote === quote);

  return (
    <div className="container">
      <h2>Daily Motivation Dashboard</h2>

      <div className="card">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="quote-text">"{quote}"</p>
            <p className="author-text">- {author}</p>
          </>
        )}

        <div style={{ marginTop: "15px" }}>
          <button
            onClick={fetchQuote}
            disabled={isLoading}
            className="btn"
          >
            New Quote
          </button>
          <button
            onClick={handleLikeToggle}
            disabled={isLoading || !quote}
            className="btn"
          >
            {isCurrentlyLiked ? "Unlike 💔" : "Like ❤️"}
          </button>
        </div>
      </div>

      <div className="liked-section">
        <h3>Total Liked: {likedQuotes.length}</h3>
        {likedQuotes.length > 0 && (
          <ul className="liked-list">
            {likedQuotes.map((item, index) => (
              <li key={index} className="liked-item">
                "{item.quote}" - <strong>{item.author}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dash;
