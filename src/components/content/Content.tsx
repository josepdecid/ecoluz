import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import { IRatesData } from '../../helpers/interfaces';
import { updatePricesData } from '../../redux/actions/pricesActions';
import { useAppDispatch, useAppSelector } from '../../redux/reducers/store';
import InformationContainer from './info/InformationContainer';
import RatesContainer from './tables/RatesContainer';

const Content: FunctionComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const currentDay = useAppSelector(({ rates }) => rates.currentDay) as number;

  useEffect(() => {
    // Fetch today's date
    const date = new Date();

    const day = date.getDate();
    const dayAux = day < 10 ? '0' : '';

    const month = date.getMonth() + 1;
    const monthAux = month < 10 ? '0' : '';

    const year = date.getFullYear();

    const baseUrl =
      'https://raw.githubusercontent.com/josepdecid/ecoluz/main/data/processed';
    const fileName = `${dayAux}${day}_${monthAux}${month}_${year}`;
    const fileUrl = `${baseUrl}/${fileName}.json`;

    const ratesDay = localStorage.getItem('ratesDay');
    if (fileName === ratesDay) {
      console.log(
        'Rates for today fetched previously. Not necessary to download the data again.'
      );
      const rates = JSON.parse(localStorage.getItem('rates')!) as IRatesData[];
      dispatch(updatePricesData(rates));
      setLoaded(true);
    } else {
      console.log('Rates are not stored locally, downloading from ' + fileUrl);
      axios
        .get(fileUrl)
        .then(res => {
          const rates = res.data;

          localStorage.setItem('rates', JSON.stringify(rates));
          localStorage.setItem('ratesDay', fileName);

          dispatch(updatePricesData(rates));
          setLoaded(true);
        })
        .catch(err => {
          console.log(err);
          // TODO: Set message error if connection unavailable
        });
    }
  }, [currentDay]);

  if (!loaded) return <span className="animate-spin">Loading</span>;
  else {
    return (
      <div className="w-screen pt-20 pb-4">
        <InformationContainer />
        <RatesContainer />
      </div>
    );
  }
};

export default Content;
