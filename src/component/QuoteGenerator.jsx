import React, { useEffect, useState } from 'react';

const QuoteGenerator = (props) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://quote-api-tnzt.onrender.com/api/');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); 

  return (
    <div>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteGenerator;
