require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";

class HumidityPrecipCloudShortTerm extends Component{

  createCloudData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].cloudCover * 100)})
    }
    return dataArray;
  }

  createPrecipData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].precipProbability * 100)})
    }
    return dataArray;
  }

  createHumidityData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].humidity * 100), fillOpacity: array[i].humidity});
    }
    return dataArray;
  }

  render() {

    let precipCloudLineSeries = [
      {
        name: 'Precip probability',
        data: this.createPrecipData(this.props.value),
      },
      {
        name: 'Cloud cover',
        data: this.createCloudData(this.props.value),
      }
    ];

    let humidityColumnSeries = [
      {
        name: 'Humidity',
        data: this.createHumidityData(this.props.value),
      }
    ];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__labels'}>
            <div>Humidity</div>
            <div>Cloud Cover</div>
            <div>Precip probalbility</div>
          </div>
          <div className={'card__data__content'}>
            <XYChart valueAxisMin={0} valueAxisMax={100} divId={'humidity-precip-cloud-short-term'} valueAxisDesc={`Probability (%)`} lineSeries={2} lineSeriesArray={precipCloudLineSeries} columnSeries={1} columnSeriesArray={humidityColumnSeries}/>
          </div>
        </div>
      </>
    );
  }

}

export {HumidityPrecipCloudShortTerm}