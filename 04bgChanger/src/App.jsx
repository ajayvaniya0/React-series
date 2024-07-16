import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-5 py-2 rounded-3xl text-white">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "grey"}}>grey</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
