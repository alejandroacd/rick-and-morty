
type PropType = {
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    inputValue: string
}

const Input: React.FC<PropType> = ({ inputValue, setInputValue }) => {

    return (
        <input onChange={e => setInputValue(e?.target?.value)} value={inputValue} className="absolute lg:w-1/2 top-16 mt-5 md:mt-32 border border-slate-800 lg:p-3 lg:top-16 lg:mt-20  bg-transparent rounded-xl p-2 w-4/5 shadow-xl text-slate-300" placeholder="Search some Rick and Morty character..." />

    )
}

export default Input