import { useState } from "react";
import { images } from "../src/components/images";
import "./App.css";
function App() {
  const [modal, setModal] = useState(null);
  function modalImg(img) {
    setModal(img);
  }
  return (
    <>
      {images.map((img, index) => (
        <span key={index} onClick={()=>modalImg(img)} className="img-box">
          <img  src={img.fullSize} />
        </span>
      ))}
      <h1>testing</h1>
      {
       modal && <img src ={modal.fullSize}/>
      }
    
    </>
  );
}
export default App;
