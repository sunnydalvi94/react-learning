function QuoteBox({ quote, author }) {
  return (
    <>
      <div className="quote-box">
        <p className="quote-text">{quote}</p>
        <p className="quote-author">{author}</p>
      </div>
    </>
  );
}

export default QuoteBox;
