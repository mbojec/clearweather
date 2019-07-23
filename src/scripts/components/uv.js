require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class Uv extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    let chart = am4core.create("chartdiv77", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(90);

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 12;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(89);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 35;
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return `${text}`;
    });

    let colorSet = new am4core.ColorSet();

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 12;
    axis2.renderer.innerRadius = 10;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = false;
    axis2.renderer.grid.template.disabled = false;

    let range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 12;
    range0.axisFill.fillOpacity = 0.5;
    range0.axisFill.fill = am4core.color("#007bff");
    range0.axisFill.zIndex = -1;

    // let range1 = axis2.axisRanges.create();
    // range1.value = 50;
    // range1.endValue = 100;
    // range1.axisFill.fillOpacity = 1;
    // range1.axisFill.fill = colorSet.getIndex(2);

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 45;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = `0`;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(45);
    hand.radius = am4core.percent(60);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = 0;

    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value;
      // range1.value = ev.target.value;
      axis2.invalidate();
    });

    // setInterval(function() {
    //   let value = 30;
    //   label.text = value + `${String.fromCharCode(176)}C`;
    //   let animation = new am4core.Animation(hand, {
    //     property: "value",
    //     to: value
    //   }, 1000, am4core.ease.cubicOut).start();
    // }, 3000);

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv77" style={{ width: "100%", height: "100%" }}></div>
    );
  }
}

export {Uv}