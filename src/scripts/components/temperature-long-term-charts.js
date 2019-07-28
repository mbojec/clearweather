require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";


class TemperatureLongTermCharts extends Component{

  createDayData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperatureHigh})
    }
    return dataArray;
  }

  createNightData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperatureLow})
    }
    return dataArray;
  }

  render() {
    let temperatureLineSeries = [
      {
        name: 'Day time temperature',
        data: this.createDayData(this.props.value),
      },
      {
        name: 'Night temperature',
        data: this.createNightData(this.props.value),
      }
    ];

    let colorArray = ['#dc3545','#fd7e14'];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Temperature</div>
          <div className={'card__data__content'}>
            <XYChart divId={'temperature'} valueAxisDesc={`Temperature(${String.fromCharCode(176)}C)`} lineSeries={2} lineSeriesArray={temperatureLineSeries} colorArray={colorArray}/>
          </div>
        </div>
      </>
    );
  }

}

export {TemperatureLongTermCharts}