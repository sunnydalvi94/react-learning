import { useState, useCallback, useEffect, useRef } from 'preact/hooks'
import './app.css'

export function App() {
  let [length, setLength] = useState(8);
  let [numberallowed, setNumberallowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [password, setPassword] = useState("hjgjjh");


  // use ref hook

   const passref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "012345689"
    if (charAllowed) str += "~`{}[]+_-&*$#"

     for (let index = 1; index <= length; index++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char)
     }
 
     setPassword(pass)
  }, [length, numberallowed, charAllowed, setPassword]);

 const copytoclickboard = useCallback(()=>{
   passref.current.select();
   window.navigator.clipboard.writeText(password);
 },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-900 p-5 mt-11'>
        <h1 className="text-white text-4xl text-center mb-4">
          Password Generator
        </h1>
        <div className='flex'>
          <input type="text" className='online w-full py-1 px-3 rounded text-orange-700' ref={passref} value={password} placeholder='Password' readOnly name="" id="" />
          <button onClick={copytoclickboard} className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 '>Copy</button>
        </div>
        <div className='flex justify-between mt-2'>
          <div className="flex text-sm gap-x-2 ">
            <input type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} className='cursor-pointer' name="" id="" />
            <label className='text-orange-700'>{length} Length</label>
          </div>
          <div className="flex text-sm gap-x-2 ms-4">
            <input type="checkbox" defaultChecked={numberallowed} onChange={() => { setNumberallowed((prev) => !prev) }} className='' name="number" id="1" />
            <label className='text-orange-700'> Number</label>
          </div>
          <div className="flex text-sm gap-x-2 ms-4">
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setcharAllowed((prev) => !prev) }} className='' name="char" id="2" />
            <label className='text-orange-700'> Character</label>
          </div>
        </div>
      </div>
    </>
  )
}