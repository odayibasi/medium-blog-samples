// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveLine = () => (
	<ResponsiveLine
		data={data}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient: 'bottom',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'transportation',
			legendOffset: 36,
			legendPosition: 'middle'
		}}
		axisLeft={{
			orient: 'left',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'count',
			legendOffset: -40,
			legendPosition: 'middle'
		}}
		pointSize={10}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabelYOffset={-12}
		useMesh={true}
		legends={[
			{
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'circle',
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
)


const data=[
	{
		"id": "japan",
		"color": "hsl(356, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 35
			},
			{
				"x": "helicopter",
				"y": 172
			},
			{
				"x": "boat",
				"y": 116
			},
			{
				"x": "train",
				"y": 149
			},
			{
				"x": "subway",
				"y": 84
			},
			{
				"x": "bus",
				"y": 292
			},
			{
				"x": "car",
				"y": 297
			},
			{
				"x": "moto",
				"y": 220
			},
			{
				"x": "bicycle",
				"y": 119
			},
			{
				"x": "horse",
				"y": 233
			},
			{
				"x": "skateboard",
				"y": 171
			},
			{
				"x": "others",
				"y": 89
			}
		]
	},
	{
		"id": "france",
		"color": "hsl(337, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 275
			},
			{
				"x": "helicopter",
				"y": 170
			},
			{
				"x": "boat",
				"y": 291
			},
			{
				"x": "train",
				"y": 229
			},
			{
				"x": "subway",
				"y": 71
			},
			{
				"x": "bus",
				"y": 254
			},
			{
				"x": "car",
				"y": 24
			},
			{
				"x": "moto",
				"y": 40
			},
			{
				"x": "bicycle",
				"y": 244
			},
			{
				"x": "horse",
				"y": 16
			},
			{
				"x": "skateboard",
				"y": 266
			},
			{
				"x": "others",
				"y": 119
			}
		]
	},
	{
		"id": "us",
		"color": "hsl(76, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 270
			},
			{
				"x": "helicopter",
				"y": 124
			},
			{
				"x": "boat",
				"y": 170
			},
			{
				"x": "train",
				"y": 140
			},
			{
				"x": "subway",
				"y": 92
			},
			{
				"x": "bus",
				"y": 269
			},
			{
				"x": "car",
				"y": 92
			},
			{
				"x": "moto",
				"y": 46
			},
			{
				"x": "bicycle",
				"y": 65
			},
			{
				"x": "horse",
				"y": 83
			},
			{
				"x": "skateboard",
				"y": 210
			},
			{
				"x": "others",
				"y": 36
			}
		]
	},
	{
		"id": "germany",
		"color": "hsl(304, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 50
			},
			{
				"x": "helicopter",
				"y": 140
			},
			{
				"x": "boat",
				"y": 214
			},
			{
				"x": "train",
				"y": 9
			},
			{
				"x": "subway",
				"y": 133
			},
			{
				"x": "bus",
				"y": 23
			},
			{
				"x": "car",
				"y": 113
			},
			{
				"x": "moto",
				"y": 69
			},
			{
				"x": "bicycle",
				"y": 32
			},
			{
				"x": "horse",
				"y": 276
			},
			{
				"x": "skateboard",
				"y": 220
			},
			{
				"x": "others",
				"y": 164
			}
		]
	},
	{
		"id": "norway",
		"color": "hsl(75, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 295
			},
			{
				"x": "helicopter",
				"y": 18
			},
			{
				"x": "boat",
				"y": 34
			},
			{
				"x": "train",
				"y": 237
			},
			{
				"x": "subway",
				"y": 285
			},
			{
				"x": "bus",
				"y": 43
			},
			{
				"x": "car",
				"y": 255
			},
			{
				"x": "moto",
				"y": 61
			},
			{
				"x": "bicycle",
				"y": 250
			},
			{
				"x": "horse",
				"y": 175
			},
			{
				"x": "skateboard",
				"y": 11
			},
			{
				"x": "others",
				"y": 198
			}
		]
	}
];