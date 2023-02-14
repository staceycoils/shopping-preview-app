import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollOnChange() {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        })
    }, [location])
}
