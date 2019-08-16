import m from "mithril";
import Highcharts from "highcharts";

import { makeComponent } from "../meta/app_components/makeComponent";
import { CountDataPoint } from "../types/CountDataPoint";
import { countStore } from "../stores/CountStore";


const baseConfig = {
  title: {
    text: "Count Chart"
  },
  yAxis: [{
    title: {
      text: "Counts"
    }
  }]
};

const getSeries = (
  data: CountDataPoint[]
): Highcharts.SeriesOptionsType => {
  return {
    name: "Count",
    type: "line",
    data: data.map(datapoint => ({
      x: datapoint.time,
      y: datapoint.count
    })),
  }
}

export const ChartComponent = makeComponent<
  null,
{ data: CountDataPoint[] },
{ chart: Highcharts.Chart }> (
  {
    getState: () => ({
      data: countStore.historicalIncrements,
    }),
    view: function(vnode, attrs, state) {
      const series = [
        getSeries(state.data)
      ];
      const config = {
        ...baseConfig,
        ...{
          series: series,
        }
      };
      if (vnode.state.chart) {
        console.log("updating chart");
        vnode.state.chart.update({
          series: series,
        });
      }
      return m(
        "div#chart", {
          oncreate(chartVnode) {
            if (!vnode.state.chart) {
              vnode.state.chart = Highcharts.chart(
                chartVnode.dom.id, config
              );
            }
          }
        }

      );
    },
  }
);
