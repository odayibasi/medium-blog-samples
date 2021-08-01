import React from 'react';
import './App.css';
import {StandardClassComp} from "./components/StandartClassComp";
import {NewTypeClassComp} from "./components/NewTypeClassComp";

class App extends React.Component {


	render() {


		const a = new NewTypeClassComp();


		return (
			<div className="App">
				{a.name}
				{a.getName()}
				<StandardClassComp year={
					2021
				}
				/>
				<NewTypeClassComp year={2021}/>
			</div>
		);

	}


}

export default App;
