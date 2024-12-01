import React, { useRef, useState } from 'react'

const Prueba = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const countClicked = () => {
        setCount((count) => count + 1);
        countRef.current++;

        console.log('Count: ', count)
        console.log('CountRef: ', countRef.current)
    }

  return (
    <div className='h-dvh'>
       
        <button onClick={countClicked}>incremetn</button>
        <span> {count}</span>
       
    </div>
  )
}

export default Prueba