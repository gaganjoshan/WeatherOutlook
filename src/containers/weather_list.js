import React, {Component} from 'react';
import { connect } from 'react-redux';
import  Chart  from '../components/chart';
import GoogleMap from '../components/googlemap';

// import { bindActionCreators } from 'redux';
// import { FetchWeather } from '../actions/index';

class WeatherList extends Component {

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CITY</th>
            <th>TEMPERATURE(K)</th>
            <th>PRESSURE(Hpa)</th>
            <th>HUMIDITY(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord;
    console.log(temps);
    return(
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat}></GoogleMap></td>
        <td><Chart data={temps} color="orange" units = "K"/></td>
        <td><Chart data={pressures} color="green" units = "Hpa"/></td>
        <td><Chart data={humidities} color="black" units = "%"/></td>
      </tr>
    )
  }
}

function mapStateToProps({weather}){
  return { weather };  //{weather} === {weather:weather}  === {weather : state.weather} as per es6
}

export default connect(mapStateToProps)(WeatherList);
