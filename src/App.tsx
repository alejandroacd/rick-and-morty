import './App.css'
import useCard from './hooks/useCard'
import Card from './components/card'
import Input from './components/card/input'
import { FiRefreshCcw } from "react-icons/fi";

function App() {
  const { character, inputValue, setInputValue, loading, setRandomNumber} = useCard()
  return (
    <>
      <section className='main bg-gradient-to-tr  from-gray-950 to-gray-800  border-gray-950 h-screen sm:h-auto lg:h-screen md:h-screen w-screen flex justify-center flex-col items-center'>
       <header className='lg:w-1/6 lg:absolute lg:top-0 w-1/2'>
        <img src="./rickandmorty.png" className='w-15' />
       </header>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        {loading ? <h1 className='text-white'>Loading...</h1> : <Card character={character} />}
        {!loading && <FiRefreshCcw  onClick={() => {inputValue ? setInputValue('') : setRandomNumber(Math.floor(Math.random() * 671))}} className='text-white text-3xl lg:mt-10 hover:text-slate-300 cursor-pointer' />
        }
        {!loading && <p className='text-white  mb-2'>Get a random one!</p>}
         </section>
    </>

  )
}

export default App
