// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveBar = () => (
	<ResponsiveBar
		data={data}
		keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
		indexBy="country"
		margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
		padding={0.3}
		valueScale={{ type: 'linear' }}
		indexScale={{ type: 'band', round: true }}
		colors={{ scheme: 'nivo' }}
		defs={[
			{
				id: 'dots',
				type: 'patternDots',
				background: 'inherit',
				color: '#38bcb2',
				size: 4,
				padding: 1,
				stagger: true
			},
			{
				id: 'lines',
				type: 'patternLines',
				background: 'inherit',
				color: '#eed312',
				rotation: -45,
				lineWidth: 6,
				spacing: 10
			}
		]}
		fill={[
			{
				match: {
					id: 'fries'
				},
				id: 'dots'
			},
			{
				match: {
					id: 'sandwich'
				},
				id: 'lines'
			}
		]}
		borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'country',
			legendPosition: 'middle',
			legendOffset: 32
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'food',
			legendPosition: 'middle',
			legendOffset: -40
		}}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
		legends={[
			{
				dataFrom: 'keys',
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 120,
				translateY: 0,
				itemsSpacing: 2,
				itemWidth: 100,
				itemHeight: 20,
				itemDirection: 'left-to-right',
				itemOpacity: 0.85,
				symbolSize: 20,
				effects: [
					{
						on: 'hover',
						style: {
							itemOpacity: 1
						}
					}
				]
			}
		]}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
	/>
)

const data=[
	{
		"country": "AD",
		"hot dog": 140,
		"hot dogColor": "hsl(181, 70%, 50%)",
		"burger": 57,
		"burgerColor": "hsl(151, 70%, 50%)",
		"sandwich": 149,
		"sandwichColor": "hsl(349, 70%, 50%)",
		"kebab": 33,
		"kebabColor": "hsl(288, 70%, 50%)",
		"fries": 91,
		"friesColor": "hsl(150, 70%, 50%)",
		"donut": 154,
		"donutColor": "hsl(121, 70%, 50%)"
	},
	{
		"country": "AE",
		"hot dog": 154,
		"hot dogColor": "hsl(75, 70%, 50%)",
		"burger": 98,
		"burgerColor": "hsl(25, 70%, 50%)",
		"sandwich": 145,
		"sandwichColor": "hsl(42, 70%, 50%)",
		"kebab": 151,
		"kebabColor": "hsl(104, 70%, 50%)",
		"fries": 86,
		"friesColor": "hsl(1, 70%, 50%)",
		"donut": 157,
		"donutColor": "hsl(90, 70%, 50%)"
	},
	{
		"country": "AF",
		"hot dog": 138,
		"hot dogColor": "hsl(336, 70%, 50%)",
		"burger": 32,
		"burgerColor": "hsl(243, 70%, 50%)",
		"sandwich": 74,
		"sandwichColor": "hsl(99, 70%, 50%)",
		"kebab": 65,
		"kebabColor": "hsl(302, 70%, 50%)",
		"fries": 22,
		"friesColor": "hsl(93, 70%, 50%)",
		"donut": 184,
		"donutColor": "hsl(339, 70%, 50%)"
	},
	{
		"country": "AG",
		"hot dog": 161,
		"hot dogColor": "hsl(43, 70%, 50%)",
		"burger": 79,
		"burgerColor": "hsl(268, 70%, 50%)",
		"sandwich": 13,
		"sandwichColor": "hsl(280, 70%, 50%)",
		"kebab": 194,
		"kebabColor": "hsl(337, 70%, 50%)",
		"fries": 125,
		"friesColor": "hsl(359, 70%, 50%)",
		"donut": 182,
		"donutColor": "hsl(31, 70%, 50%)"
	},
	{
		"country": "AI",
		"hot dog": 159,
		"hot dogColor": "hsl(1, 70%, 50%)",
		"burger": 13,
		"burgerColor": "hsl(331, 70%, 50%)",
		"sandwich": 128,
		"sandwichColor": "hsl(176, 70%, 50%)",
		"kebab": 37,
		"kebabColor": "hsl(121, 70%, 50%)",
		"fries": 107,
		"friesColor": "hsl(255, 70%, 50%)",
		"donut": 80,
		"donutColor": "hsl(188, 70%, 50%)"
	},
	{
		"country": "AL",
		"hot dog": 43,
		"hot dogColor": "hsl(121, 70%, 50%)",
		"burger": 142,
		"burgerColor": "hsl(283, 70%, 50%)",
		"sandwich": 67,
		"sandwichColor": "hsl(80, 70%, 50%)",
		"kebab": 136,
		"kebabColor": "hsl(27, 70%, 50%)",
		"fries": 192,
		"friesColor": "hsl(242, 70%, 50%)",
		"donut": 185,
		"donutColor": "hsl(316, 70%, 50%)"
	},
	{
		"country": "AM",
		"hot dog": 105,
		"hot dogColor": "hsl(201, 70%, 50%)",
		"burger": 160,
		"burgerColor": "hsl(200, 70%, 50%)",
		"sandwich": 158,
		"sandwichColor": "hsl(177, 70%, 50%)",
		"kebab": 138,
		"kebabColor": "hsl(78, 70%, 50%)",
		"fries": 59,
		"friesColor": "hsl(126, 70%, 50%)",
		"donut": 45,
		"donutColor": "hsl(206, 70%, 50%)"
	}
];