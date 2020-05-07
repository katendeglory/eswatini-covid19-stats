import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './LineChart.scss';

const LineChart = ({ data, title, hideXAxis, hideYAxis, className }) => (
  <div>
    <div className="line-chart-title">{title}</div>
    <div className="line-chart-subtitle">Scroll horizontally to view more</div>
    <div className="line-chart-wrapper-container">
      <div className={`line-chart-wrapper ${className}`}>
        <ResponsiveLine
          data={data}
          animate={false}
          margin={{ top: 75, right: 10, bottom: hideXAxis ? 0 : 50, left: hideYAxis ? 0 : 25 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'days',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'top',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'cases',
            legendOffset: 10,
            legendPosition: 'middle'
          }}
          colors={data.map(el => el.color)}
          enablePoints={false}
          enableGridX={false}
          enableGridY={false}
          enableCrosshair={false}
          useMesh={true}
          legends={[
            {
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 10,
              translateY: -50,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 100,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 20,
              symbolShape: 'square',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  </div>
);

export default LineChart;