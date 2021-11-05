import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import InformationContainer from './info/InformationContainer';
import RatesContainer from './tables/RatesContainer';
import axios from 'axios';
import { updatePricesData } from '../../actions/pricesActions';

export default function Content() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const currentDay = useSelector(({ prices }) => prices.currentDay) as number;

    useEffect(() => {
        // Fetch today's date
        const baseUrl = 'https://raw.githubusercontent.com/josepdecid/eco-luz/main/data/processed';
        const [month, day, year] = new Date().toLocaleDateString().split('/');
        // TODO: Revert when data is properly generated
        // const fileUrl = `${baseUrl}/${day}_${month}_${year}.json`;
        const fileUrl = baseUrl + '/01_11_21.json'

        axios.get(fileUrl)
            .then(res => {
                dispatch(updatePricesData(res.data));
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
