import axios from 'axios'
import { useEffect, useState } from 'react'
import { Character } from '../types/types'
const useCard = () => {
const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 671))
const [inputValue, setInputValue] = useState<string>('')
const [character, setCharacter] = useState<Character | null>(null)
const [loading, setLoading] = useState<boolean>(false)

useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true)
    if (!inputValue ) {
        axios.get(`https://rickandmortyapi.com/api/character/${randomNumber}`, {signal})
        .then(res => setCharacter(res?.data))
        .catch(err => {
            if (err?.name === 'AbortError') {
                console.log('Aborted')
        } else {
            console.log(err)
        }})
        .finally(() => setLoading(false))
    } else {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`, {signal})
        .then(res => setCharacter(res?.data?.results[0]))
        .catch(err => {
            if (err?.name === 'CancelledError') {
                console.log('Aborted')
            } else {
                console.log(err)
            }
        })
        .finally(() => setLoading(false))
    }

    return () => {
        abortController.abort();
      };
}, [inputValue, randomNumber])

    return {
        character,
        setInputValue,
        loading,
        setRandomNumber,
        inputValue,
    }
}

export default useCard