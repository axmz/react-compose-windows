import React, { useState, useRef } from 'react';
import Windows from './components/Windows/'
import './styles.scss'
import data from './data.js'

const Github = () => {
   return <a className={"link"} href="https://github.com/axmz/react-compose-windows.git">github</a>
}

const App = () => {
   const [windows, setWindows] = useState([])
   const len = useRef(data.length)

   // adds windows that are not already open
   const addWindows = () => {
      setWindows(p => {
         const l = p.length
         if (l < len.current) {
            const found = data.find((w) => {
               const res = p.find((wd) => {
                  return wd.uuid === w.uuid
               })
               return !res
            })
            return [...p, found]
         } else {
            return [...p]
         }
      })
   }

   return (
      <div style={{ fontFamily: "arial" }}>
         <Github />
         <h1>Gmail-like windows.</h1>
         <p>It is a React Portal, attach it to #windows-root.</p>
         <p>Pls adjust styles to your needs.</p>
         <button onClick={addWindows}>add windows</button>
         <Windows
            windows={windows}
            setWindows={setWindows}
         />
      </div>
   );
}

export default App;