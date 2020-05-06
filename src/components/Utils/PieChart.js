
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import './PieChart.scss';

const PieChart = ({ data, title, className }) => (
  <div className={`pie-chart-wrapper ${className}`}>
    <div className="pie-chart-title">{title}</div>
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 5, bottom: 100, left: 5 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={data.map(element => element.color)}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="var(--main-text-color)"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: 'color' }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="var(--main-text-color)"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      sortByValue={true}

      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 50,
          itemWidth: 105,
          itemHeight: 40,
          itemTextColor: 'var(--main-text-color)',
          symbolSize: 25,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: 'var(--main-text-color)'
              }
            }
          ]
        }
      ]}
    />
  </div>
);

export default PieChart;