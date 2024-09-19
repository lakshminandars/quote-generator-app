import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  // Fetch initial quote on component load
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center',backgroundColor:'plum' ,width:"400px" ,borderRadius:"20px", marginTop:"120px",marginLeft:"550px"}}>
      <h1>Random Quote Generator</h1>
      <p style={{ fontStyle: 'italic' }}>"{quote}"</p>
      <h4>- {author}</h4>
      <button onClick={fetchQuote} style={{ marginTop: '20px', padding: '10px',backgroundColor:"white",borderRadius:"12px",borderColor:"plum",outlineColor:"plum",fontWeight:"bold"}}>
        Get Another Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
