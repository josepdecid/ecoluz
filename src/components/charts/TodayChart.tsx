import { ChartData, ChartOptions } from 'chart.js'

import { Line } from 'react-chartjs-2'
import { getColorByIndex } from '../../helpers/time'
import { useAppSelector } from '../../reducers/store'

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from 'tailwind.config.js'


export default function TodayChart() {
    const state = useAppSelector(({ rates, settings }) => ({
        hourlyRates: rates.slots,
        locationCode: settings.location
    }))

    const labels = Array.from(Array(24).keys())
    const hourlyRates = state.hourlyRates.map(rates => rates.price[state.locationCode])

    // const themeColors = resolveConfig(tailwindConfig).theme.colors
    const themeColors = {
        'red': { 500: '#ff4c30'},
        'yellow': { 500: '#fde69c'},
        'green': { 500: '#70ad46'}
    } as any

    const ratesByPrice = [...state.hourlyRates].sort((a, b) => a.price[state.locationCode] > b.price[state.locationCode] ? 1 : -1)
    const ratesColors = state.hourlyRates.map(rate => {
        const colorName = getColorByIndex(ratesByPrice.indexOf(rate))
        return themeColors[colorName][500]
    })

    const data = {
        labels,
        datasets: [{
            data: hourlyRates,
            fill: false,
            backgroundColor: ratesColors,
            borderColor: 'black',
            tension: 0.2
        }]
    } as ChartData<"line">

    const options = {
        scales: {
            x: {
                ticks: {
                    callback: function (value: any, index: number, values: any[]) {
                        const secondDigit = value < 10 ? '0' : '';
                        return secondDigit + value.toString() + 'h';
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: '€/kWh'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    } as ChartOptions<'line'>


    return (
        <Line data={data} options={options} />
    )
}