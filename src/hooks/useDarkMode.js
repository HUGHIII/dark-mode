
import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';


 const useDarkMode = (key, initialValue) => {
    const [mode,setMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
   mode === true?document.body.classList.add('dark-mode'):
   document.body.classList.remove('dark-mode');

    }, [mode]);

    return [mode,setMode]
}

export default useDarkMode