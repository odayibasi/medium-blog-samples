// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import {ResponsiveCalendar} from '@nivo/calendar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveCalendar = () => (
	<ResponsiveCalendar
		data={data}
		from="2016-01-01"
		to="2016-12-01"
		emptyColor="#eeeeee"
		colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
		margin={{top: 40, right: 40, bottom: 40, left: 40}}
		yearSpacing={40}
		monthBorderColor="#ffffff"
		dayBorderWidth={2}
		dayBorderColor="#ffffff"
		legends={[
			{
				anchor: 'bottom-right',
				direction: 'row',
				translateY: 36,
				itemCount: 4,
				itemWidth: 42,
				itemHeight: 36,
				itemsSpacing: 14,
				itemDirection: 'right-to-left'
			}
		]}
	/>
)
const data = [
	{
		"day": "2017-06-12",
		"value": 251
	},
	{
		"day": "2015-06-28",
		"value": 213
	},
	{
		"day": "2016-08-07",
		"value": 199
	},
	{
		"day": "2017-03-06",
		"value": 302
	},
	{
		"day": "2017-10-24",
		"value": 294
	},
	{
		"day": "2018-02-04",
		"value": 333
	},
	{
		"day": "2017-05-17",
		"value": 316
	},
	{
		"day": "2017-03-14",
		"value": 23
	},
	{
		"day": "2015-10-17",
		"value": 201
	},
	{
		"day": "2015-05-31",
		"value": 189
	},
	{
		"day": "2015-10-28",
		"value": 47
	},
	{
		"day": "2015-05-22",
		"value": 155
	},
	{
		"day": "2018-07-01",
		"value": 7
	},
	{
		"day": "2017-03-23",
		"value": 256
	},
	{
		"day": "2016-02-16",
		"value": 214
	},
	{
		"day": "2017-06-25",
		"value": 209
	},
	{
		"day": "2018-03-09",
		"value": 249
	},
	{
		"day": "2017-02-28",
		"value": 358
	},
	{
		"day": "2015-04-01",
		"value": 346
	},
	{
		"day": "2016-01-15",
		"value": 297
	},
	{
		"day": "2016-09-06",
		"value": 189
	},
	{
		"day": "2017-03-05",
		"value": 170
	},
	{
		"day": "2018-01-18",
		"value": 350
	},
	{
		"day": "2017-07-31",
		"value": 366
	},
	{
		"day": "2015-10-14",
		"value": 52
	},
	{
		"day": "2017-04-23",
		"value": 141
	},
	{
		"day": "2016-04-16",
		"value": 93
	},
	{
		"day": "2016-10-06",
		"value": 273
	},
	{
		"day": "2016-08-16",
		"value": 107
	},
	{
		"day": "2017-01-12",
		"value": 243
	},
	{
		"day": "2016-07-11",
		"value": 305
	},
	{
		"day": "2015-09-16",
		"value": 157
	},
	{
		"day": "2016-02-09",
		"value": 234
	},
	{
		"day": "2018-04-11",
		"value": 265
	},
	{
		"day": "2017-05-14",
		"value": 228
	},
	{
		"day": "2015-06-08",
		"value": 76
	},
	{
		"day": "2016-10-02",
		"value": 279
	},
	{
		"day": "2016-12-22",
		"value": 117
	},
	{
		"day": "2016-11-07",
		"value": 185
	},
	{
		"day": "2017-03-01",
		"value": 307
	},
	{
		"day": "2015-11-01",
		"value": 24
	},
	{
		"day": "2015-05-02",
		"value": 236
	},
	{
		"day": "2018-04-28",
		"value": 202
	},
	{
		"day": "2015-06-25",
		"value": 36
	},
	{
		"day": "2015-04-20",
		"value": 247
	},
	{
		"day": "2017-08-11",
		"value": 112
	},
	{
		"day": "2017-05-21",
		"value": 220
	},
	{
		"day": "2015-04-28",
		"value": 323
	},
	{
		"day": "2018-01-02",
		"value": 245
	},
	{
		"day": "2016-01-20",
		"value": 301
	},
	{
		"day": "2018-05-02",
		"value": 180
	},
	{
		"day": "2015-08-29",
		"value": 358
	},
	{
		"day": "2016-12-20",
		"value": 103
	},
	{
		"day": "2016-07-31",
		"value": 55
	},
	{
		"day": "2015-09-13",
		"value": 139
	},
	{
		"day": "2018-05-24",
		"value": 314
	},
	{
		"day": "2018-02-03",
		"value": 299
	},
	{
		"day": "2016-01-16",
		"value": 215
	},
	{
		"day": "2016-10-11",
		"value": 148
	},
	{
		"day": "2016-02-26",
		"value": 90
	},
	{
		"day": "2017-08-08",
		"value": 26
	},
	{
		"day": "2016-01-12",
		"value": 288
	},
	{
		"day": "2017-08-20",
		"value": 42
	},
	{
		"day": "2016-10-23",
		"value": 352
	},
	{
		"day": "2017-09-06",
		"value": 227
	},
	{
		"day": "2017-10-06",
		"value": 101
	},
	{
		"day": "2016-04-21",
		"value": 153
	},
	{
		"day": "2017-10-13",
		"value": 282
	},
	{
		"day": "2017-10-14",
		"value": 51
	},
	{
		"day": "2015-04-12",
		"value": 32
	},
	{
		"day": "2016-07-10",
		"value": 250
	},
	{
		"day": "2016-11-22",
		"value": 367
	},
	{
		"day": "2018-04-27",
		"value": 394
	},
	{
		"day": "2017-10-03",
		"value": 313
	},
	{
		"day": "2015-07-04",
		"value": 334
	},
	{
		"day": "2016-12-12",
		"value": 148
	},
	{
		"day": "2015-07-22",
		"value": 171
	},
	{
		"day": "2015-08-12",
		"value": 364
	},
	{
		"day": "2016-06-18",
		"value": 71
	},
	{
		"day": "2017-09-02",
		"value": 272
	},
	{
		"day": "2017-12-12",
		"value": 162
	},
	{
		"day": "2018-01-03",
		"value": 27
	},
	{
		"day": "2018-05-16",
		"value": 31
	},
	{
		"day": "2015-05-03",
		"value": 81
	},
	{
		"day": "2015-08-19",
		"value": 32
	},
	{
		"day": "2017-12-19",
		"value": 8
	},
	{
		"day": "2015-07-07",
		"value": 56
	},
	{
		"day": "2017-09-05",
		"value": 242
	},
	{
		"day": "2017-02-09",
		"value": 163
	},
	{
		"day": "2015-11-09",
		"value": 246
	},
	{
		"day": "2016-06-16",
		"value": 203
	},
	{
		"day": "2015-11-30",
		"value": 296
	},
	{
		"day": "2018-05-10",
		"value": 331
	},
	{
		"day": "2017-08-27",
		"value": 251
	},
	{
		"day": "2016-10-20",
		"value": 267
	},
	{
		"day": "2016-05-20",
		"value": 150
	},
	{
		"day": "2016-07-06",
		"value": 61
	},
	{
		"day": "2017-11-09",
		"value": 361
	},
	{
		"day": "2015-12-22",
		"value": 110
	},
	{
		"day": "2016-05-01",
		"value": 56
	},
	{
		"day": "2015-10-31",
		"value": 255
	},
	{
		"day": "2015-04-27",
		"value": 231
	},
	{
		"day": "2016-06-19",
		"value": 145
	},
	{
		"day": "2018-08-01",
		"value": 290
	},
	{
		"day": "2017-07-23",
		"value": 248
	},
	{
		"day": "2017-11-15",
		"value": 51
	},
	{
		"day": "2015-08-24",
		"value": 343
	},
	{
		"day": "2015-05-23",
		"value": 185
	},
	{
		"day": "2018-05-19",
		"value": 32
	},
	{
		"day": "2017-07-29",
		"value": 98
	},
	{
		"day": "2015-09-29",
		"value": 1
	},
	{
		"day": "2016-11-27",
		"value": 387
	},
	{
		"day": "2016-08-29",
		"value": 26
	},
	{
		"day": "2016-05-27",
		"value": 7
	},
	{
		"day": "2018-02-22",
		"value": 47
	},
	{
		"day": "2018-07-30",
		"value": 31
	},
	{
		"day": "2016-08-26",
		"value": 148
	},
	{
		"day": "2017-01-26",
		"value": 273
	},
	{
		"day": "2018-04-22",
		"value": 177
	},
	{
		"day": "2018-04-30",
		"value": 224
	},
	{
		"day": "2016-05-25",
		"value": 7
	},
	{
		"day": "2018-08-06",
		"value": 76
	},
	{
		"day": "2016-12-29",
		"value": 12
	},
	{
		"day": "2015-10-06",
		"value": 388
	},
	{
		"day": "2016-11-30",
		"value": 174
	},
	{
		"day": "2018-07-03",
		"value": 180
	},
	{
		"day": "2017-04-06",
		"value": 187
	},
	{
		"day": "2017-03-26",
		"value": 155
	},
	{
		"day": "2017-10-02",
		"value": 142
	},
	{
		"day": "2016-03-11",
		"value": 33
	},
	{
		"day": "2015-12-30",
		"value": 246
	},
	{
		"day": "2017-05-29",
		"value": 273
	},
	{
		"day": "2018-07-09",
		"value": 118
	},
	{
		"day": "2015-12-19",
		"value": 222
	},
	{
		"day": "2017-09-28",
		"value": 54
	},
	{
		"day": "2017-05-24",
		"value": 29
	},
	{
		"day": "2016-03-15",
		"value": 7
	},
	{
		"day": "2017-12-29",
		"value": 283
	},
	{
		"day": "2018-04-25",
		"value": 43
	},
	{
		"day": "2017-07-30",
		"value": 94
	},
	{
		"day": "2018-07-05",
		"value": 304
	},
	{
		"day": "2015-10-18",
		"value": 72
	},
	{
		"day": "2015-10-26",
		"value": 123
	},
	{
		"day": "2016-10-13",
		"value": 264
	},
	{
		"day": "2017-04-20",
		"value": 372
	},
	{
		"day": "2018-03-28",
		"value": 202
	},
	{
		"day": "2018-07-14",
		"value": 27
	},
	{
		"day": "2017-02-25",
		"value": 18
	},
	{
		"day": "2017-09-08",
		"value": 360
	},
	{
		"day": "2017-09-24",
		"value": 399
	},
	{
		"day": "2015-07-25",
		"value": 32
	},
	{
		"day": "2017-08-26",
		"value": 6
	},
	{
		"day": "2017-08-03",
		"value": 13
	},
	{
		"day": "2016-11-12",
		"value": 184
	},
	{
		"day": "2015-12-03",
		"value": 299
	},
	{
		"day": "2016-12-18",
		"value": 280
	},
	{
		"day": "2017-01-02",
		"value": 75
	},
	{
		"day": "2015-07-18",
		"value": 261
	},
	{
		"day": "2015-07-10",
		"value": 319
	},
	{
		"day": "2017-02-05",
		"value": 227
	},
	{
		"day": "2016-09-10",
		"value": 380
	},
	{
		"day": "2015-06-10",
		"value": 241
	},
	{
		"day": "2015-04-05",
		"value": 349
	},
	{
		"day": "2018-02-25",
		"value": 219
	},
	{
		"day": "2017-07-07",
		"value": 253
	},
	{
		"day": "2017-05-13",
		"value": 198
	},
	{
		"day": "2016-10-18",
		"value": 249
	},
	{
		"day": "2017-09-07",
		"value": 256
	},
	{
		"day": "2017-01-21",
		"value": 285
	},
	{
		"day": "2018-02-12",
		"value": 163
	},
	{
		"day": "2015-08-07",
		"value": 96
	},
	{
		"day": "2018-08-04",
		"value": 91
	},
	{
		"day": "2017-02-24",
		"value": 278
	},
	{
		"day": "2018-03-01",
		"value": 220
	},
	{
		"day": "2015-08-08",
		"value": 389
	},
	{
		"day": "2016-01-22",
		"value": 369
	},
	{
		"day": "2015-04-11",
		"value": 11
	},
	{
		"day": "2018-01-07",
		"value": 99
	},
	{
		"day": "2016-01-11",
		"value": 12
	},
	{
		"day": "2015-11-15",
		"value": 93
	},
	{
		"day": "2016-03-13",
		"value": 247
	},
	{
		"day": "2018-01-25",
		"value": 361
	},
	{
		"day": "2015-05-04",
		"value": 17
	},
	{
		"day": "2015-12-05",
		"value": 294
	},
	{
		"day": "2015-07-27",
		"value": 343
	},
	{
		"day": "2017-01-22",
		"value": 116
	},
	{
		"day": "2016-04-12",
		"value": 192
	},
	{
		"day": "2016-07-16",
		"value": 382
	},
	{
		"day": "2016-06-21",
		"value": 201
	},
	{
		"day": "2015-09-03",
		"value": 198
	},
	{
		"day": "2017-07-10",
		"value": 2
	},
	{
		"day": "2015-06-29",
		"value": 187
	},
	{
		"day": "2018-02-19",
		"value": 178
	},
	{
		"day": "2016-03-24",
		"value": 58
	},
	{
		"day": "2018-06-13",
		"value": 26
	},
	{
		"day": "2016-07-15",
		"value": 325
	},
	{
		"day": "2017-12-15",
		"value": 341
	},
	{
		"day": "2017-03-15",
		"value": 265
	},
	{
		"day": "2016-03-03",
		"value": 104
	},
	{
		"day": "2015-09-25",
		"value": 244
	},
	{
		"day": "2015-10-19",
		"value": 240
	},
	{
		"day": "2017-01-15",
		"value": 204
	},
	{
		"day": "2015-11-24",
		"value": 15
	},
	{
		"day": "2015-10-09",
		"value": 20
	},
	{
		"day": "2017-10-22",
		"value": 72
	},
	{
		"day": "2017-02-07",
		"value": 146
	},
	{
		"day": "2018-01-23",
		"value": 75
	},
	{
		"day": "2015-09-06",
		"value": 33
	},
	{
		"day": "2017-12-20",
		"value": 360
	},
	{
		"day": "2018-04-07",
		"value": 309
	},
	{
		"day": "2015-12-09",
		"value": 51
	},
	{
		"day": "2015-09-02",
		"value": 75
	},
	{
		"day": "2016-02-15",
		"value": 391
	},
	{
		"day": "2016-11-23",
		"value": 336
	},
	{
		"day": "2016-02-17",
		"value": 65
	},
	{
		"day": "2015-06-16",
		"value": 105
	},
	{
		"day": "2018-02-21",
		"value": 5
	},
	{
		"day": "2016-12-13",
		"value": 369
	},
	{
		"day": "2018-01-21",
		"value": 306
	},
	{
		"day": "2016-10-03",
		"value": 55
	},
	{
		"day": "2015-05-21",
		"value": 146
	},
	{
		"day": "2015-10-29",
		"value": 312
	},
	{
		"day": "2016-09-04",
		"value": 16
	},
	{
		"day": "2016-06-10",
		"value": 166
	},
	{
		"day": "2018-06-27",
		"value": 35
	},
	{
		"day": "2015-04-08",
		"value": 29
	},
	{
		"day": "2015-08-06",
		"value": 377
	},
	{
		"day": "2018-03-16",
		"value": 241
	},
	{
		"day": "2015-09-07",
		"value": 12
	},
	{
		"day": "2016-10-16",
		"value": 358
	},
	{
		"day": "2018-07-20",
		"value": 339
	},
	{
		"day": "2018-08-10",
		"value": 380
	},
	{
		"day": "2016-04-05",
		"value": 198
	},
	{
		"day": "2018-07-23",
		"value": 256
	},
	{
		"day": "2017-01-09",
		"value": 98
	},
	{
		"day": "2018-06-24",
		"value": 283
	},
	{
		"day": "2016-11-09",
		"value": 98
	},
	{
		"day": "2017-07-17",
		"value": 246
	},
	{
		"day": "2018-04-10",
		"value": 29
	},
	{
		"day": "2016-05-28",
		"value": 306
	},
	{
		"day": "2016-06-13",
		"value": 134
	},
	{
		"day": "2016-08-18",
		"value": 387
	},
	{
		"day": "2017-12-25",
		"value": 294
	},
	{
		"day": "2015-09-01",
		"value": 168
	},
	{
		"day": "2017-07-02",
		"value": 378
	},
	{
		"day": "2016-04-17",
		"value": 140
	},
	{
		"day": "2017-03-19",
		"value": 238
	},
	{
		"day": "2016-01-24",
		"value": 131
	},
	{
		"day": "2017-08-05",
		"value": 265
	},
	{
		"day": "2017-02-17",
		"value": 170
	},
	{
		"day": "2017-05-09",
		"value": 85
	},
	{
		"day": "2016-04-06",
		"value": 111
	},
	{
		"day": "2017-12-06",
		"value": 71
	},
	{
		"day": "2017-11-03",
		"value": 345
	},
	{
		"day": "2015-05-11",
		"value": 372
	},
	{
		"day": "2018-08-07",
		"value": 280
	},
	{
		"day": "2018-04-29",
		"value": 274
	},
	{
		"day": "2017-03-21",
		"value": 284
	},
	{
		"day": "2017-10-27",
		"value": 269
	},
	{
		"day": "2015-11-16",
		"value": 200
	},
	{
		"day": "2017-01-23",
		"value": 145
	},
	{
		"day": "2016-08-31",
		"value": 80
	},
	{
		"day": "2018-05-12",
		"value": 175
	},
	{
		"day": "2017-05-22",
		"value": 16
	},
	{
		"day": "2015-11-20",
		"value": 149
	},
	{
		"day": "2016-07-09",
		"value": 175
	},
	{
		"day": "2017-05-12",
		"value": 63
	},
	{
		"day": "2016-03-06",
		"value": 269
	},
	{
		"day": "2015-11-26",
		"value": 399
	},
	{
		"day": "2017-08-16",
		"value": 373
	},
	{
		"day": "2017-01-28",
		"value": 42
	},
	{
		"day": "2017-06-01",
		"value": 34
	},
	{
		"day": "2015-11-04",
		"value": 17
	},
	{
		"day": "2017-06-11",
		"value": 171
	},
	{
		"day": "2016-01-18",
		"value": 308
	},
	{
		"day": "2017-02-26",
		"value": 293
	},
	{
		"day": "2018-05-30",
		"value": 372
	},
	{
		"day": "2017-01-25",
		"value": 130
	},
	{
		"day": "2017-04-11",
		"value": 254
	},
	{
		"day": "2016-12-08",
		"value": 49
	},
	{
		"day": "2018-03-24",
		"value": 331
	},
	{
		"day": "2016-12-14",
		"value": 390
	},
	{
		"day": "2017-11-20",
		"value": 93
	},
	{
		"day": "2016-11-03",
		"value": 265
	},
	{
		"day": "2017-07-27",
		"value": 154
	},
	{
		"day": "2016-05-10",
		"value": 13
	},
	{
		"day": "2016-09-03",
		"value": 175
	},
	{
		"day": "2017-09-18",
		"value": 94
	},
	{
		"day": "2018-04-19",
		"value": 111
	},
	{
		"day": "2015-07-19",
		"value": 90
	},
	{
		"day": "2016-05-22",
		"value": 230
	},
	{
		"day": "2018-04-20",
		"value": 358
	},
	{
		"day": "2017-11-17",
		"value": 283
	},
	{
		"day": "2017-06-15",
		"value": 231
	},
	{
		"day": "2018-04-18",
		"value": 59
	},
	{
		"day": "2017-04-10",
		"value": 326
	},
	{
		"day": "2015-10-07",
		"value": 328
	},
	{
		"day": "2016-03-26",
		"value": 244
	},
	{
		"day": "2018-05-04",
		"value": 379
	},
	{
		"day": "2017-06-19",
		"value": 79
	},
	{
		"day": "2015-06-26",
		"value": 367
	},
	{
		"day": "2017-08-23",
		"value": 30
	},
	{
		"day": "2015-08-13",
		"value": 290
	},
	{
		"day": "2017-03-02",
		"value": 324
	},
	{
		"day": "2018-07-02",
		"value": 350
	},
	{
		"day": "2016-01-30",
		"value": 199
	},
	{
		"day": "2016-08-27",
		"value": 65
	},
	{
		"day": "2018-03-04",
		"value": 102
	},
	{
		"day": "2017-10-29",
		"value": 317
	},
	{
		"day": "2018-02-05",
		"value": 33
	},
	{
		"day": "2016-03-18",
		"value": 258
	},
	{
		"day": "2017-08-01",
		"value": 359
	},
	{
		"day": "2017-05-10",
		"value": 236
	},
	{
		"day": "2016-11-25",
		"value": 105
	},
	{
		"day": "2017-03-16",
		"value": 306
	},
	{
		"day": "2017-08-29",
		"value": 247
	},
	{
		"day": "2016-12-09",
		"value": 83
	},
	{
		"day": "2016-11-18",
		"value": 187
	},
	{
		"day": "2017-07-21",
		"value": 36
	},
	{
		"day": "2017-06-05",
		"value": 377
	},
	{
		"day": "2018-02-16",
		"value": 375
	},
	{
		"day": "2018-04-09",
		"value": 254
	},
	{
		"day": "2018-07-13",
		"value": 139
	},
	{
		"day": "2015-05-12",
		"value": 261
	},
	{
		"day": "2016-07-12",
		"value": 55
	},
	{
		"day": "2018-05-14",
		"value": 273
	},
	{
		"day": "2016-01-07",
		"value": 354
	},
	{
		"day": "2016-08-04",
		"value": 293
	},
	{
		"day": "2017-07-04",
		"value": 383
	},
	{
		"day": "2017-04-14",
		"value": 47
	},
	{
		"day": "2016-10-17",
		"value": 248
	},
	{
		"day": "2016-12-01",
		"value": 217
	},
	{
		"day": "2017-07-14",
		"value": 263
	},
	{
		"day": "2016-02-08",
		"value": 376
	},
	{
		"day": "2016-06-04",
		"value": 345
	},
	{
		"day": "2015-10-02",
		"value": 74
	},
	{
		"day": "2017-03-12",
		"value": 55
	},
	{
		"day": "2017-05-15",
		"value": 200
	},
	{
		"day": "2016-04-15",
		"value": 163
	},
	{
		"day": "2017-02-19",
		"value": 188
	},
	{
		"day": "2016-07-14",
		"value": 324
	},
	{
		"day": "2016-04-30",
		"value": 251
	},
	{
		"day": "2016-06-28",
		"value": 346
	},
	{
		"day": "2018-05-31",
		"value": 170
	},
	{
		"day": "2017-08-18",
		"value": 70
	},
	{
		"day": "2018-06-03",
		"value": 150
	},
	{
		"day": "2017-02-01",
		"value": 301
	},
	{
		"day": "2018-06-20",
		"value": 275
	},
	{
		"day": "2016-06-25",
		"value": 293
	},
	{
		"day": "2016-05-24",
		"value": 106
	},
	{
		"day": "2017-10-01",
		"value": 312
	},
	{
		"day": "2016-06-20",
		"value": 51
	},
	{
		"day": "2015-12-17",
		"value": 172
	},
	{
		"day": "2018-05-26",
		"value": 369
	},
	{
		"day": "2017-08-07",
		"value": 45
	},
	{
		"day": "2017-07-22",
		"value": 246
	},
	{
		"day": "2018-04-26",
		"value": 333
	},
	{
		"day": "2018-01-11",
		"value": 267
	},
	{
		"day": "2016-10-31",
		"value": 272
	},
	{
		"day": "2017-10-10",
		"value": 279
	},
	{
		"day": "2015-05-19",
		"value": 166
	},
	{
		"day": "2016-03-19",
		"value": 97
	},
	{
		"day": "2018-01-04",
		"value": 312
	},
	{
		"day": "2016-07-21",
		"value": 347
	},
	{
		"day": "2017-12-07",
		"value": 70
	},
	{
		"day": "2017-12-24",
		"value": 42
	},
	{
		"day": "2016-08-02",
		"value": 66
	},
	{
		"day": "2018-06-10",
		"value": 393
	},
	{
		"day": "2017-12-01",
		"value": 318
	},
	{
		"day": "2016-07-04",
		"value": 56
	},
	{
		"day": "2015-10-24",
		"value": 271
	},
	{
		"day": "2016-10-01",
		"value": 77
	},
	{
		"day": "2017-04-22",
		"value": 116
	},
	{
		"day": "2015-07-24",
		"value": 44
	},
	{
		"day": "2018-06-28",
		"value": 80
	},
	{
		"day": "2016-12-04",
		"value": 394
	},
	{
		"day": "2018-07-27",
		"value": 4
	},
	{
		"day": "2015-08-14",
		"value": 244
	},
	{
		"day": "2016-07-18",
		"value": 350
	},
	{
		"day": "2016-11-08",
		"value": 369
	},
	{
		"day": "2017-07-16",
		"value": 179
	},
	{
		"day": "2017-03-24",
		"value": 366
	},
	{
		"day": "2016-11-29",
		"value": 384
	},
	{
		"day": "2015-11-07",
		"value": 347
	},
	{
		"day": "2016-11-15",
		"value": 348
	},
	{
		"day": "2016-02-01",
		"value": 216
	},
	{
		"day": "2016-04-01",
		"value": 341
	},
	{
		"day": "2015-11-18",
		"value": 113
	},
	{
		"day": "2015-11-03",
		"value": 272
	},
	{
		"day": "2016-12-17",
		"value": 382
	},
	{
		"day": "2017-09-29",
		"value": 7
	},
	{
		"day": "2018-04-06",
		"value": 253
	},
	{
		"day": "2017-10-31",
		"value": 363
	},
	{
		"day": "2016-02-28",
		"value": 280
	},
	{
		"day": "2015-07-13",
		"value": 9
	},
	{
		"day": "2016-12-28",
		"value": 126
	},
	{
		"day": "2016-10-27",
		"value": 356
	},
	{
		"day": "2016-01-28",
		"value": 260
	},
	{
		"day": "2017-09-17",
		"value": 299
	},
	{
		"day": "2018-04-23",
		"value": 330
	},
	{
		"day": "2017-01-16",
		"value": 203
	},
	{
		"day": "2016-07-07",
		"value": 335
	},
	{
		"day": "2018-07-18",
		"value": 307
	},
	{
		"day": "2016-12-16",
		"value": 1
	},
	{
		"day": "2018-03-07",
		"value": 233
	},
	{
		"day": "2018-01-27",
		"value": 122
	},
	{
		"day": "2015-11-19",
		"value": 171
	},
	{
		"day": "2017-06-22",
		"value": 255
	},
	{
		"day": "2017-03-11",
		"value": 294
	},
	{
		"day": "2016-08-10",
		"value": 256
	},
	{
		"day": "2016-09-16",
		"value": 244
	},
	{
		"day": "2017-04-07",
		"value": 57
	},
	{
		"day": "2015-06-24",
		"value": 78
	},
	{
		"day": "2018-07-15",
		"value": 58
	},
	{
		"day": "2017-07-18",
		"value": 378
	},
	{
		"day": "2016-07-30",
		"value": 358
	},
	{
		"day": "2017-12-22",
		"value": 60
	},
	{
		"day": "2017-06-28",
		"value": 135
	},
	{
		"day": "2016-09-14",
		"value": 92
	},
	{
		"day": "2016-05-15",
		"value": 45
	},
	{
		"day": "2018-02-17",
		"value": 276
	},
	{
		"day": "2017-06-04",
		"value": 79
	},
	{
		"day": "2015-07-16",
		"value": 51
	},
	{
		"day": "2015-12-28",
		"value": 204
	},
	{
		"day": "2015-06-07",
		"value": 114
	},
	{
		"day": "2016-05-19",
		"value": 196
	},
	{
		"day": "2015-06-11",
		"value": 400
	},
	{
		"day": "2018-05-23",
		"value": 30
	},
	{
		"day": "2015-04-09",
		"value": 60
	},
	{
		"day": "2016-02-06",
		"value": 94
	},
	{
		"day": "2016-11-14",
		"value": 357
	},
	{
		"day": "2017-09-25",
		"value": 102
	},
	{
		"day": "2015-12-21",
		"value": 60
	},
	{
		"day": "2017-10-16",
		"value": 305
	},
	{
		"day": "2016-09-27",
		"value": 28
	},
	{
		"day": "2016-07-20",
		"value": 260
	},
	{
		"day": "2016-08-28",
		"value": 68
	},
	{
		"day": "2017-03-18",
		"value": 27
	},
	{
		"day": "2015-04-24",
		"value": 220
	},
	{
		"day": "2015-04-30",
		"value": 198
	},
	{
		"day": "2016-10-10",
		"value": 54
	},
	{
		"day": "2018-03-18",
		"value": 308
	},
	{
		"day": "2017-03-03",
		"value": 149
	},
	{
		"day": "2016-09-02",
		"value": 120
	},
	{
		"day": "2017-12-09",
		"value": 24
	},
	{
		"day": "2017-04-16",
		"value": 80
	},
	{
		"day": "2016-10-09",
		"value": 318
	},
	{
		"day": "2017-04-26",
		"value": 354
	},
	{
		"day": "2016-02-05",
		"value": 384
	},
	{
		"day": "2017-06-29",
		"value": 63
	},
	{
		"day": "2016-08-12",
		"value": 164
	},
	{
		"day": "2017-01-08",
		"value": 216
	},
	{
		"day": "2015-07-01",
		"value": 273
	},
	{
		"day": "2018-03-19",
		"value": 171
	},
	{
		"day": "2016-01-25",
		"value": 340
	},
	{
		"day": "2018-06-01",
		"value": 23
	},
	{
		"day": "2018-04-24",
		"value": 357
	},
	{
		"day": "2015-08-17",
		"value": 256
	},
	{
		"day": "2017-02-18",
		"value": 139
	},
	{
		"day": "2018-04-15",
		"value": 39
	},
	{
		"day": "2017-05-01",
		"value": 237
	},
	{
		"day": "2018-07-17",
		"value": 68
	},
	{
		"day": "2017-09-09",
		"value": 132
	},
	{
		"day": "2015-07-31",
		"value": 112
	},
	{
		"day": "2015-12-27",
		"value": 58
	},
	{
		"day": "2016-01-03",
		"value": 391
	},
	{
		"day": "2016-03-27",
		"value": 306
	},
	{
		"day": "2015-08-16",
		"value": 291
	},
	{
		"day": "2018-08-05",
		"value": 352
	},
	{
		"day": "2018-06-19",
		"value": 264
	},
	{
		"day": "2017-11-01",
		"value": 252
	},
	{
		"day": "2017-05-07",
		"value": 129
	},
	{
		"day": "2016-05-11",
		"value": 182
	},
	{
		"day": "2015-05-10",
		"value": 182
	},
	{
		"day": "2015-12-06",
		"value": 54
	},
	{
		"day": "2015-08-15",
		"value": 158
	},
	{
		"day": "2017-11-10",
		"value": 263
	},
	{
		"day": "2015-06-13",
		"value": 277
	},
	{
		"day": "2015-07-26",
		"value": 290
	},
	{
		"day": "2016-10-26",
		"value": 119
	},
	{
		"day": "2017-01-29",
		"value": 86
	},
	{
		"day": "2016-10-14",
		"value": 320
	},
	{
		"day": "2017-03-31",
		"value": 240
	},
	{
		"day": "2018-03-22",
		"value": 67
	},
	{
		"day": "2017-11-06",
		"value": 327
	},
	{
		"day": "2015-05-14",
		"value": 290
	},
	{
		"day": "2016-10-24",
		"value": 188
	},
	{
		"day": "2017-08-12",
		"value": 236
	},
	{
		"day": "2017-11-02",
		"value": 2
	},
	{
		"day": "2015-10-21",
		"value": 119
	},
	{
		"day": "2018-06-26",
		"value": 55
	},
	{
		"day": "2015-04-13",
		"value": 108
	},
	{
		"day": "2015-10-08",
		"value": 256
	},
	{
		"day": "2015-08-23",
		"value": 296
	},
	{
		"day": "2017-06-07",
		"value": 371
	},
	{
		"day": "2015-10-12",
		"value": 316
	},
	{
		"day": "2016-06-11",
		"value": 81
	},
	{
		"day": "2015-04-19",
		"value": 170
	},
	{
		"day": "2017-05-18",
		"value": 253
	},
	{
		"day": "2015-09-17",
		"value": 289
	},
	{
		"day": "2015-09-26",
		"value": 203
	},
	{
		"day": "2018-06-07",
		"value": 369
	},
	{
		"day": "2016-03-01",
		"value": 180
	},
	{
		"day": "2017-09-12",
		"value": 137
	},
	{
		"day": "2018-02-08",
		"value": 181
	},
	{
		"day": "2017-05-28",
		"value": 143
	},
	{
		"day": "2016-04-14",
		"value": 119
	},
	{
		"day": "2016-04-10",
		"value": 310
	},
	{
		"day": "2015-05-26",
		"value": 19
	},
	{
		"day": "2018-02-28",
		"value": 115
	},
	{
		"day": "2015-09-28",
		"value": 259
	},
	{
		"day": "2018-01-24",
		"value": 356
	},
	{
		"day": "2017-07-09",
		"value": 182
	},
	{
		"day": "2015-12-15",
		"value": 285
	},
	{
		"day": "2017-04-30",
		"value": 240
	},
	{
		"day": "2015-11-12",
		"value": 330
	},
	{
		"day": "2017-08-25",
		"value": 360
	},
	{
		"day": "2018-08-08",
		"value": 166
	},
	{
		"day": "2017-04-19",
		"value": 208
	},
	{
		"day": "2018-07-10",
		"value": 133
	},
	{
		"day": "2018-05-06",
		"value": 197
	},
	{
		"day": "2016-04-26",
		"value": 346
	},
	{
		"day": "2016-08-08",
		"value": 196
	},
	{
		"day": "2016-12-07",
		"value": 123
	},
	{
		"day": "2016-08-24",
		"value": 351
	},
	{
		"day": "2017-12-27",
		"value": 242
	},
	{
		"day": "2015-11-22",
		"value": 351
	},
	{
		"day": "2018-03-15",
		"value": 223
	},
	{
		"day": "2017-09-15",
		"value": 97
	},
	{
		"day": "2016-01-02",
		"value": 383
	},
	{
		"day": "2015-11-05",
		"value": 22
	},
	{
		"day": "2015-12-29",
		"value": 124
	},
	{
		"day": "2015-07-17",
		"value": 205
	},
	{
		"day": "2018-01-01",
		"value": 32
	},
	{
		"day": "2016-01-04",
		"value": 118
	},
	{
		"day": "2016-10-04",
		"value": 286
	},
	{
		"day": "2015-08-28",
		"value": 289
	},
	{
		"day": "2017-04-08",
		"value": 63
	},
	{
		"day": "2016-07-22",
		"value": 356
	},
	{
		"day": "2016-01-05",
		"value": 95
	},
	{
		"day": "2018-03-23",
		"value": 69
	},
	{
		"day": "2016-10-15",
		"value": 218
	},
	{
		"day": "2016-07-02",
		"value": 108
	},
	{
		"day": "2017-08-28",
		"value": 247
	},
	{
		"day": "2017-01-05",
		"value": 243
	},
	{
		"day": "2016-02-03",
		"value": 81
	},
	{
		"day": "2017-06-02",
		"value": 120
	},
	{
		"day": "2017-09-14",
		"value": 73
	},
	{
		"day": "2016-11-24",
		"value": 211
	},
	{
		"day": "2015-08-30",
		"value": 174
	},
	{
		"day": "2018-02-23",
		"value": 140
	},
	{
		"day": "2017-10-08",
		"value": 295
	},
	{
		"day": "2017-05-03",
		"value": 220
	},
	{
		"day": "2017-01-30",
		"value": 195
	},
	{
		"day": "2016-05-06",
		"value": 294
	},
	{
		"day": "2015-04-16",
		"value": 45
	},
	{
		"day": "2017-12-03",
		"value": 272
	},
	{
		"day": "2017-08-30",
		"value": 26
	},
	{
		"day": "2015-12-02",
		"value": 88
	},
	{
		"day": "2016-04-18",
		"value": 152
	},
	{
		"day": "2016-02-10",
		"value": 177
	},
	{
		"day": "2017-07-03",
		"value": 354
	},
	{
		"day": "2018-01-29",
		"value": 264
	},
	{
		"day": "2017-09-22",
		"value": 34
	},
	{
		"day": "2016-12-19",
		"value": 371
	},
	{
		"day": "2017-07-05",
		"value": 380
	},
	{
		"day": "2017-11-13",
		"value": 105
	},
	{
		"day": "2016-11-10",
		"value": 55
	},
	{
		"day": "2018-04-13",
		"value": 150
	},
	{
		"day": "2017-01-07",
		"value": 182
	},
	{
		"day": "2015-06-30",
		"value": 54
	},
	{
		"day": "2017-10-18",
		"value": 170
	},
	{
		"day": "2017-03-30",
		"value": 299
	},
	{
		"day": "2015-10-27",
		"value": 338
	},
	{
		"day": "2015-05-28",
		"value": 34
	},
	{
		"day": "2018-01-31",
		"value": 72
	},
	{
		"day": "2018-06-04",
		"value": 383
	},
	{
		"day": "2016-06-08",
		"value": 63
	},
	{
		"day": "2017-01-31",
		"value": 219
	},
	{
		"day": "2016-12-03",
		"value": 189
	},
	{
		"day": "2017-11-16",
		"value": 292
	},
	{
		"day": "2018-05-17",
		"value": 264
	},
	{
		"day": "2017-09-19",
		"value": 127
	},
	{
		"day": "2018-03-11",
		"value": 275
	},
	{
		"day": "2015-04-04",
		"value": 325
	},
	{
		"day": "2018-02-24",
		"value": 364
	},
	{
		"day": "2017-09-01",
		"value": 1
	},
	{
		"day": "2016-09-09",
		"value": 227
	},
	{
		"day": "2016-10-30",
		"value": 109
	},
	{
		"day": "2016-11-06",
		"value": 199
	},
	{
		"day": "2016-02-29",
		"value": 136
	},
	{
		"day": "2017-06-03",
		"value": 54
	},
	{
		"day": "2016-12-21",
		"value": 75
	},
	{
		"day": "2015-12-23",
		"value": 306
	},
	{
		"day": "2015-05-08",
		"value": 326
	},
	{
		"day": "2018-08-09",
		"value": 103
	},
	{
		"day": "2017-03-10",
		"value": 136
	},
	{
		"day": "2017-07-24",
		"value": 242
	},
	{
		"day": "2017-01-27",
		"value": 76
	},
	{
		"day": "2017-06-14",
		"value": 77
	},
	{
		"day": "2017-10-15",
		"value": 219
	},
	{
		"day": "2017-11-07",
		"value": 108
	},
	{
		"day": "2015-08-01",
		"value": 328
	},
	{
		"day": "2017-12-14",
		"value": 243
	},
	{
		"day": "2016-12-15",
		"value": 354
	},
	{
		"day": "2016-09-28",
		"value": 247
	},
	{
		"day": "2017-05-31",
		"value": 65
	},
	{
		"day": "2017-10-07",
		"value": 81
	},
	{
		"day": "2016-04-25",
		"value": 33
	},
	{
		"day": "2016-08-11",
		"value": 362
	},
	{
		"day": "2018-01-22",
		"value": 36
	},
	{
		"day": "2015-05-17",
		"value": 2
	},
	{
		"day": "2016-03-20",
		"value": 305
	},
	{
		"day": "2015-04-10",
		"value": 248
	},
	{
		"day": "2015-04-06",
		"value": 38
	},
	{
		"day": "2015-12-04",
		"value": 104
	},
	{
		"day": "2016-02-21",
		"value": 30
	},
	{
		"day": "2015-07-28",
		"value": 295
	},
	{
		"day": "2015-06-22",
		"value": 19
	},
	{
		"day": "2018-02-06",
		"value": 202
	},
	{
		"day": "2016-05-16",
		"value": 226
	},
	{
		"day": "2017-10-09",
		"value": 350
	},
	{
		"day": "2015-05-09",
		"value": 317
	},
	{
		"day": "2016-02-07",
		"value": 252
	},
	{
		"day": "2016-01-14",
		"value": 268
	},
	{
		"day": "2017-02-10",
		"value": 25
	},
	{
		"day": "2017-09-20",
		"value": 398
	},
	{
		"day": "2017-02-15",
		"value": 319
	},
	{
		"day": "2018-07-31",
		"value": 158
	},
	{
		"day": "2018-01-30",
		"value": 307
	},
	{
		"day": "2017-02-22",
		"value": 98
	},
	{
		"day": "2016-04-27",
		"value": 351
	},
	{
		"day": "2017-07-01",
		"value": 81
	},
	{
		"day": "2016-06-15",
		"value": 48
	},
	{
		"day": "2015-10-30",
		"value": 375
	},
	{
		"day": "2016-04-07",
		"value": 119
	},
	{
		"day": "2017-09-03",
		"value": 190
	},
	{
		"day": "2018-06-05",
		"value": 360
	},
	{
		"day": "2016-07-08",
		"value": 267
	},
	{
		"day": "2017-11-26",
		"value": 261
	},
	{
		"day": "2015-09-15",
		"value": 138
	},
	{
		"day": "2017-01-18",
		"value": 113
	},
	{
		"day": "2015-09-19",
		"value": 107
	},
	{
		"day": "2016-01-27",
		"value": 26
	},
	{
		"day": "2015-11-14",
		"value": 41
	},
	{
		"day": "2016-07-13",
		"value": 342
	},
	{
		"day": "2015-12-13",
		"value": 277
	},
	{
		"day": "2018-02-20",
		"value": 47
	},
	{
		"day": "2017-04-17",
		"value": 1
	},
	{
		"day": "2016-01-19",
		"value": 397
	},
	{
		"day": "2017-06-20",
		"value": 26
	},
	{
		"day": "2018-03-20",
		"value": 329
	},
	{
		"day": "2018-06-02",
		"value": 80
	},
	{
		"day": "2015-12-31",
		"value": 194
	},
	{
		"day": "2017-01-19",
		"value": 281
	},
	{
		"day": "2015-05-01",
		"value": 348
	},
	{
		"day": "2016-05-14",
		"value": 150
	},
	{
		"day": "2017-07-25",
		"value": 247
	},
	{
		"day": "2016-03-30",
		"value": 222
	},
	{
		"day": "2016-09-05",
		"value": 274
	},
	{
		"day": "2017-04-12",
		"value": 373
	},
	{
		"day": "2016-06-17",
		"value": 109
	},
	{
		"day": "2017-04-25",
		"value": 393
	},
	{
		"day": "2016-10-07",
		"value": 331
	},
	{
		"day": "2015-09-27",
		"value": 381
	},
	{
		"day": "2015-11-02",
		"value": 99
	},
	{
		"day": "2016-04-02",
		"value": 108
	},
	{
		"day": "2016-01-31",
		"value": 28
	},
	{
		"day": "2015-12-20",
		"value": 353
	},
	{
		"day": "2016-05-04",
		"value": 335
	},
	{
		"day": "2017-03-27",
		"value": 108
	},
	{
		"day": "2016-12-25",
		"value": 157
	},
	{
		"day": "2016-06-27",
		"value": 88
	},
	{
		"day": "2016-09-25",
		"value": 313
	},
	{
		"day": "2018-05-29",
		"value": 125
	},
	{
		"day": "2017-07-13",
		"value": 212
	},
	{
		"day": "2018-04-14",
		"value": 31
	},
	{
		"day": "2017-06-23",
		"value": 48
	},
	{
		"day": "2016-08-20",
		"value": 383
	},
	{
		"day": "2015-04-25",
		"value": 358
	},
	{
		"day": "2017-02-21",
		"value": 104
	},
	{
		"day": "2017-01-10",
		"value": 294
	},
	{
		"day": "2016-08-01",
		"value": 343
	},
	{
		"day": "2015-05-30",
		"value": 364
	},
	{
		"day": "2018-01-05",
		"value": 56
	},
	{
		"day": "2017-05-04",
		"value": 233
	},
	{
		"day": "2016-07-17",
		"value": 380
	},
	{
		"day": "2016-04-03",
		"value": 29
	},
	{
		"day": "2017-03-04",
		"value": 373
	},
	{
		"day": "2017-08-13",
		"value": 199
	},
	{
		"day": "2015-04-29",
		"value": 249
	},
	{
		"day": "2016-04-24",
		"value": 369
	},
	{
		"day": "2017-06-18",
		"value": 48
	},
	{
		"day": "2015-04-22",
		"value": 202
	},
	{
		"day": "2015-10-23",
		"value": 81
	},
	{
		"day": "2018-03-17",
		"value": 289
	},
	{
		"day": "2017-10-26",
		"value": 247
	},
	{
		"day": "2017-04-03",
		"value": 178
	},
	{
		"day": "2017-06-16",
		"value": 361
	},
	{
		"day": "2015-04-18",
		"value": 218
	},
	{
		"day": "2015-09-18",
		"value": 82
	},
	{
		"day": "2015-07-09",
		"value": 373
	},
	{
		"day": "2015-12-11",
		"value": 175
	},
	{
		"day": "2017-06-10",
		"value": 322
	},
	{
		"day": "2016-06-07",
		"value": 168
	},
	{
		"day": "2017-09-23",
		"value": 338
	},
	{
		"day": "2016-03-16",
		"value": 221
	},
	{
		"day": "2016-04-04",
		"value": 114
	},
	{
		"day": "2016-08-19",
		"value": 317
	},
	{
		"day": "2015-09-22",
		"value": 106
	},
	{
		"day": "2015-08-03",
		"value": 198
	},
	{
		"day": "2015-06-23",
		"value": 247
	},
	{
		"day": "2015-05-07",
		"value": 18
	},
	{
		"day": "2015-05-15",
		"value": 40
	},
	{
		"day": "2016-02-18",
		"value": 252
	},
	{
		"day": "2017-11-29",
		"value": 314
	},
	{
		"day": "2016-05-31",
		"value": 323
	},
	{
		"day": "2018-01-13",
		"value": 16
	},
	{
		"day": "2015-07-14",
		"value": 253
	},
	{
		"day": "2018-05-03",
		"value": 277
	},
	{
		"day": "2017-03-07",
		"value": 287
	},
	{
		"day": "2016-03-12",
		"value": 384
	},
	{
		"day": "2016-06-09",
		"value": 91
	},
	{
		"day": "2018-05-07",
		"value": 92
	},
	{
		"day": "2016-08-17",
		"value": 223
	},
	{
		"day": "2016-11-11",
		"value": 180
	},
	{
		"day": "2017-06-09",
		"value": 374
	},
	{
		"day": "2016-03-22",
		"value": 213
	},
	{
		"day": "2016-01-23",
		"value": 236
	},
	{
		"day": "2015-08-22",
		"value": 210
	},
	{
		"day": "2017-11-04",
		"value": 25
	},
	{
		"day": "2016-06-01",
		"value": 26
	},
	{
		"day": "2017-05-06",
		"value": 81
	},
	{
		"day": "2015-09-14",
		"value": 326
	},
	{
		"day": "2015-12-01",
		"value": 317
	},
	{
		"day": "2017-08-24",
		"value": 246
	},
	{
		"day": "2015-09-24",
		"value": 208
	},
	{
		"day": "2018-02-01",
		"value": 107
	},
	{
		"day": "2017-10-20",
		"value": 283
	},
	{
		"day": "2017-05-20",
		"value": 138
	},
	{
		"day": "2016-09-11",
		"value": 153
	},
	{
		"day": "2018-04-12",
		"value": 292
	},
	{
		"day": "2016-07-05",
		"value": 199
	},
	{
		"day": "2017-05-25",
		"value": 49
	},
	{
		"day": "2018-02-15",
		"value": 248
	},
	{
		"day": "2015-07-30",
		"value": 139
	},
	{
		"day": "2017-11-05",
		"value": 246
	},
	{
		"day": "2018-06-30",
		"value": 163
	},
	{
		"day": "2016-03-10",
		"value": 238
	}
]
