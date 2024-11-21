import { useState, useCallback } from 'preact/hooks'
import './app.css'

export function App() {
  let [length, setLength] = useState(8);
  let [numberallowed, setNumberallowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "012345689"
    if (charAllowed) str += "~`{}[]+_-&*$#"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt[char]

    }
    setPassword(pass)


  }, [length, numberallowed, charAllowed, setPassword]);


  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-900 p-3 mt-11'>
        <h1 className="text-white text-4xl text-center mb-4">
          Password Generator
        </h1>
        <div className='flex'>
          <input type="text" className='online w-full py-1 px-3 rounded' value={password} placeholder='Password' readOnly name="" id="" />
          <button className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 '>Copy</button>
        </div>
        <div className='flex'>
          <div className="flex text-sm gap-x-2 justify-between">
            <input type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} className='cursor-pointer' name="" id="" />
            <label className='text-white'>{length} Length</label>
          </div>
          <div className="flex text-sm gap-x-2 ms-4">
            <input type="checkbox"  defaultChecked={numberallowed} onChange={(e) => { setNumberallowed(e.target.value) }} className='' name="" id="" />
            <label className='text-white'> Number</label>
          </div>
          <div className="flex text-sm gap-x-2 ms-4">
            <input type="checkbox"  defaultChecked={numberallowed} onChange={(e) => { setNumberallowed(e.target.value) }} className='' name="" id="" />
            <label className='text-white'> Character</label>
          </div>
        </div>
      </div>
    </>
  )
}
