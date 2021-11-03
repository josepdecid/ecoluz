import { useEffect, useState } from 'react';

import CurrentTimeInfo from './CurrentTimeInfo';
import ExtremeHour from './ExtremeHour';
import MeanPrice from './MeanPrice';
import axios from 'axios';
import { updatePricesData } from '../../actions/pricesActions';
import { useDispatch } from 'react-redux';

export default function Content() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch today's date
        const baseUrl = 'https://raw.githubusercontent.com/josepdecid/eco-luz/main/data/processed';
        const [month, day, year] = new Date().toLocaleDateString().split('/');
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
    }, []);

    if (!loaded) return <></>;

    else {
        return (
            <>
                <div className="flex space-x-6 m-6">
                    <div className="flex-2">
                        <CurrentTimeInfo />
                    </div>
                    <div className="flex-1 flex space-x-4">
                        <div className="flex-1">
                            <MeanPrice />
                        </div>
                        <div className="flex-1">
                            <ExtremeHour extreme="min" />
                        </div>
                        <div className="flex-1">
                            <ExtremeHour extreme="max" />
                        </div>
                    </div>
                </div>
                {/*<TableTimes />*/}
                {/*<ExtremesInfo />*/}
            </>
        );
    }
};
