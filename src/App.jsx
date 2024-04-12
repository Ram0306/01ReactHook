import { useCallback, useState } from 'react'
import'./child'
import Child from './child';

function App() {
  //const [count, setCount] = useState(0);
  const[add,setAdd]=useState(0);
  const[count,setCount]=useState(0);
  const Learning = useCallback(()=>{

  },[count])

  return (
    <>
    
    <div className='App'>
           <h1 className='text-3xl font-bold text-center px-3 py-8 text-emerald-300'> counter value </h1>
           <Child Learning={Learning} count={count}/>  /** passing func as a prop */
           <h1 className='text-3xl font-bold text-center px-3 py-8 text-emerald-300'>{add}</h1>
           <button onClick={() => setAdd(add + 1)} className='block mx-auto text-3xl font-bold bg-blue-500 text-white px-8 py-4 rounded-lg'>
            Addition
           </button>
          
           <h1 className='text-3xl font-bold text-center px-3 py-8 text-emerald-300'>{count}</h1>
           <button onClick={() => setCount(add + 2)} className='block mx-auto text-3xl font-bold bg-blue-500 text-white px-8 py-4 rounded-lg'>
            Count
           </button>


     </div>
     </>
  )
}

export default App
