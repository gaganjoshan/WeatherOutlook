import React, {Component} from 'react';
import { connect } from 'react-redux';
import  Chart  from '../components/chart';

// import { bindActionCreators } from 'redux';
// import { FetchWeather } from '../actions/index';

class WeatherList extends Component {

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CITY</th>
            <th>TEMPERATURE</th>
            <th>PRESSURE</th>
            <th>HUMIDITY</th>
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
    console.log(temps);
    return(
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    )
  }
}

function mapStateToProps({weather}){
  return { weather };  //{weather} === {weather:weather}  === {weather : state.weather} as per es6
}

export default connect(mapStateToProps)(WeatherList);
