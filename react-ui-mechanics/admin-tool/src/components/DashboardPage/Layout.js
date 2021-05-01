import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Layout.scss'
import {MyResponsiveCalendar} from "./Charts/Calendar";
import {MyResponsiveLine} from "./Charts/LineChart";
import {MyResponsiveBar} from "./Charts/BarChart";


export function CenteredGrid() {

	return (
		<div className='layout-container'>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper style={{height: '200px'}} className='paper'>
						<MyResponsiveCalendar/>
					</Paper>

				</Grid>
				<Grid item xs={6}>
					<Paper style={{height: '400px'}} className='paper'>
						<MyResponsiveLine/>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper style={{height: '400px'}} className='paper'>
						<MyResponsiveBar/>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper style={{backgroundColor: 'lightyellow'}} className='paper'>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper style={{backgroundColor: 'lightyellow'}} className='paper'>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper style={{backgroundColor: 'lightyellow'}} className='paper'>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper style={{backgroundColor: 'lightyellow'}} className='paper'>xs=3</Paper>
				</Grid>
			</Grid>
		</div>
	);
}