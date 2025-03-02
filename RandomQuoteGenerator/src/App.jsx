import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import QuoteButton from "./components/QuoteButton";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([{ text: "", author: "" }]);
  const quoteGenerate = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const randIndex= Math.floor(Math.random() * data.quotes.length);
      const result = data.quotes[randIndex];
      setQuote({ text: result.quote, author: result.author });
      
    } catch (error) {
      console.error("error is: ", error);
    }
  };
  useEffect(()=>{
    quoteGenerate()
  },[])
  return (
    <>
       
      <QuoteBox quote={quote.text} author={quote.author} />
      <QuoteButton quoteGenerate={quoteGenerate} />
    </>
  );
}

export default App;
