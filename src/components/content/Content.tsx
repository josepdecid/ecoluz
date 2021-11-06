import { useAppDispatch, useAppSelector } from '../../reducers/store';
import { useEffect, useState } from 'react';

import InformationContainer from './info/InformationContainer';
import RatesContainer from './tables/RatesContainer';
import axios from 'axios';
import { updatePricesData } from '../../actions/pricesActions';

export default function Content() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const currentDay = useAppSelector(({ rates }) => rates.currentDay) as number;

    useEffect(() => {
        // Fetch today's date
        const date = new Date()

        const day = date.getDate()
        const dayAux = (day < 10) ? '0' : ''

        const month = date.getMonth() + 1
        const monthAux = (month < 10) ? '0' : ''

        const year = date.getFullYear()

        const baseUrl = 'https://raw.githubusercontent.com/josepdecid/ecoluz/main/data/processed'
        const fileUrl = `${baseUrl}/${dayAux}${day}_${monthAux}${month}_${year}.json`

        axios.get(fileUrl)
            .then(res => {
                const rates = res.data;
                localStorage.setItem('rates', JSON.stringify(rates))
                dispatch(updatePricesData(rates));
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                // setError(JSON.stringify(err));
            });
    }, [currentDay]);

    if (!loaded) return (
        <span className="animate-spin">Loading</span>
    );

    else {
        return (
            <div className="w-screen px-4 pt-20 pb-4">
                <InformationContainer />
                <RatesContainer />
            </div>
        )
    }
}
