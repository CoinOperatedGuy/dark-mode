import {UseLocalStorage} from './UseLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [someValue, setValue] = UseLocalStorage('darkmode');
    console.log(someValue);
    useEffect(() => {
        if(someValue) {
            window.document.body.classList.add('dark-mode')
        } else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [someValue])
    return [someValue, setValue];
};