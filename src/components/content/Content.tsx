import { useEffect, useState } from 'react';

import CurrentTimeInfo from './CurrentTimeInfo';
import ExtremeHour from './ExtremeHour';
import MeanPrice from './MeanPrice';
import RatesContainer from './tables/RatesContainer';
import TableTimes from './tables/TableTimes';
import Tabs from '../misc/Tabs';
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

    if (!loaded) return (
        <span className="animate-spin">Loading</span>
    );

    else {
        return (
            <div className="w-screen px-4 pt-20 pb-4">
                <div className="lg:flex lg:space-x-6">
                    <div className="flex-2">
                        <CurrentTimeInfo />
                    </div>

                    <div className="md:hidden mt-4">
                        <Tabs tabs={[
                            {
                                title: 'Mean',
                                content: <MeanPrice />
                            },
                            {
                                title: 'Min',
                                content: <ExtremeHour extreme="min" />
                            },
                            {
                                title: 'Max',
                                content: <ExtremeHour extreme="max" />
                            }
                        ]} />
                    </div>

                    <div className="hidden md:flex flex-1 space-x-4">
                        <div className="mt-10 flex-1">
                            <MeanPrice />
                        </div>
                        <div className="mt-10 flex-1">
                            <ExtremeHour extreme="min" />
                        </div>
                        <div className="mt-10 flex-1">
                            <ExtremeHour extreme="max" />
                        </div>
                    </div>
                </div>

                <RatesContainer />
            </div>
        )
    }
}
