import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData) {

        const cityName = cityData.city.name;
        const tempsArray = cityData.list.map(weather => (weather.main.temp - 273.15));  //to celcious
        const pressureArray = cityData.list.map(weather => weather.main.pressure);
        const humidityArray = cityData.list.map(weather => weather.main.humidity);

        console.log(tempsArray);
        return (
            <tr key={cityName}>
                <td >
                    {cityName}
                </td>
                <td>
                    <Chart type="line" data={tempsArray} color="blue" units="C" />
                </td>
                <td>
                    <Chart type="bar" data={pressureArray} color="green" units="hPa" />
                </td>
                <td>
                    <Chart type="bar" data={humidityArray} color="brown" units="%" />
                </td>
            </tr>
        )

    }


    render() {
        return (
            <div>
                <h5>Average in the last 7 days</h5>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Tempeture</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.weather.map(this.renderWeather)}

                    </tbody>
                </table>

            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
// above same as ES6 bellow
function mapStateToProps({ weather }) {
    return { weather };        //same  as weather: weather 
}

export default connect(mapStateToProps)(WeatherList);
