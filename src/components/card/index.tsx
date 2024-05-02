import { Character } from '../../types/types'
type PropType = {
    character: Character | null
}
const Card = ({ character }: PropType) => {
    return (
            <section className="md:h-2/3 lg:h-2/4 h-5/6 mt-20 mb-5 lg:w-2/4 w-5/6 z-0 bg-gradient-to-tr from-slate-300/5  to-slate-600/5 rounded-xl shadow-slate-600/15  shadow-xl flex flex-col lg:flex-row ">
                <div className='md:h-full flex flex-col justify-center items-center lg:w-2/4 pb-5 bg-gradient-to-tr from-slate-100/5  to-slate-600/200'>
                    <div className='rounded-full h-52 w-52 mx-auto mt-5 lg:mx-10'>
                        <img src={character?.image} alt={character?.name} className='rounded-full' />
                    </div>
                    <h1 className='text-white text-2xl font-bold mt-5'>{character?.name}</h1>
                </div>

                <div className=' md:h-full md:justify-center  md:items-center md:text-xl text-white flex flex-col justify-center lg:ml-1 p-3 mt-5 lg:bg-gradient-to-tr from-slate-300/5  to-slate-600/5  lg:h-full lg:w-3/4 lg:mt-0 lg:items-center h-full'>
                    <h1 className='mt-2'><span className='font-bold mx-1'>STATUS:</span> {character?.status} </h1>
                    <h1 className='mt-2'><span className='font-bold mx-1'>SPECIES:</span> {character?.species}</h1>
                    <h1 className='mt-2'><span className='font-bold mx-1'>ORIGIN:</span> {character?.origin.name}</h1>
                    <h1 className='mt-2'><span className='font-bold mx-1'>GENDER:</span> {character?.gender}</h1>
                    <h1 className='mt-2'><span className='font-bold mx-1'>TYPE:</span> {character?.type}</h1>
                    <h1 className='mt-2'><span className='font-bold mx-1'>LOCATION:</span> {character?.location.name} </h1>
                </div>

            </section>

    )
}

export default Card