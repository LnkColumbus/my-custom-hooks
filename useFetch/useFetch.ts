import { useEffect, useState } from 'react'
import { IQuotes } from '../interfaces/quotes';

interface Props {
    data: IQuotes[];
    isLoading: boolean;
    hasError: string | null;
}

export const useFetch = ( url: string ) => {

    const [state, setState] = useState<Props>({
        data: [{
            quote: '',
            author: '',
            series: '',
        }],
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({ ...state, isLoading: true });

        const res = await fetch(url);
        const data = await res.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
      getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
