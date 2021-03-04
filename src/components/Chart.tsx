import { ResponsivePie } from '@nivo/pie';

import AnalysisRow from '../models/AnalysisRow';

type ChartProps = {
  data: AnalysisRow[]
}

function Chart({ data }: ChartProps) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      defs={[
        {
          id: 'true',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
        },
        {
          id: 'false',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
        }
        ]}
        fill={[
        {
          match: {
              id: 'true'
          },
          id: 'true'
        },
        {
          match: {
              id: 'false'
          },
          id: 'false'
        },
        {
          match: {
              id: 'n/a'
          },
          id: 'n/a'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}

export default Chart;
