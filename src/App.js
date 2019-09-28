import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Start from './panels/Start';
import VolMain from './panels/Vol_main';
import OrgMain from './panels/Org_main';
import OrgEv from './panels/Org_ev';
import OrgVol from './panels/Org_vol';
import { Panel } from '@vkontakte/vkui';
import axios from 'axios';

export default class App extends React.Component {

	

	state ={
		activePanel: 'orgEv',
		fetchedUser: null,
		events: {data: 1},
		event: {},
		vols: [],
	};

	get_events = () =>{
		axios.get("https://vkmanage.herokuapp.com/events/register/", this.state.fetchedUser)
			.then(res=>{
				this.setState({events: res});
		});
	};

	get_event = () =>{
		// axios.get("https://vkmanage.herokuapp.com/events/register/", this.state.fetchedUser)
		// 	.then(res=>{
		// 		this.setState({events: res});
		// });
	};

	get_vols = () =>{
		axios.get("https://vkmanage.herokuapp.com/events/register/", this.state.fetchedUser)
			.then(res=>{
				this.setState({events: res});
		});
	};

	useEffect = (() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const usr = await connect.sendPromise('VKWebAppGetUserInfo');
			this.setState({fetchedUser: usr});
		}
		fetchData();
	}, []);


	go = e => { 
		// if (temp == 'volMain')
		// 	axios.post("https://vkmanage.herokuapp.com/volunteers/register/", {fetchedUser})
		// 		.then(res=>{
		// 			console.log(res);
		// 	});
		// else if (temp = 'orgMain')
		// 	axios.post("https://vkmanage.herokuapp.com/organizer/register/", {fetchedUser})
		// 		.then(res=>{
		// 			console.log(res);
		// 	});
		this.setState({activePanel: e});
	};

	componentDidMount(){
		//this.get_events();

	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Start id='start' fetchedUser={this.state.fetchedUser} go={this.go}/>
				<VolMain id='volMain' go={this.go} events={this.state.events} get={this.get_events}/>
				<OrgMain id='orgMain' go={this.go} events={this.state.events} get={this.get_events}/>
				<OrgEv id='orgEv' go={this.go} event={this.state.event} get={this.get_event}/>
				<OrgEv id='orgEv' go={this.go} event={this.state.vols} get={this.get_vols}/>
			</View>
		);
	}

}

// const App = () => {
// 	const [activePanel, setActivePanel] = useState('start');
// 	const [fetchedUser, setUser] = useState(null);
// 	var events = [];
// 	//const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	

// 	useEffect(() => {
// 		connect.subscribe(({ detail: { type, data }}) => {
// 			if (type === 'VKWebAppUpdateConfig') {
// 				const schemeAttribute = document.createAttribute('scheme');
// 				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
// 				document.body.attributes.setNamedItem(schemeAttribute);
// 			}
// 		});
// 		async function fetchData() {
// 			const user = await connect.sendPromise('VKWebAppGetUserInfo');
// 			setUser(user);
// 		}
// 		fetchData();
// 	}, []);

// 	const go = e => {
// 		var temp = e.currentTarget.dataset.to 
// 		// if (temp == 'volMain')
// 		// 	axios.post("https://vkmanage.herokuapp.com/volunteers/register/", {fetchedUser})
// 		// 		.then(res=>{
// 		// 			console.log(res);
// 		// 	});
// 		// else if (temp = 'orgMain')
// 		// 	axios.post("https://vkmanage.herokuapp.com/organizer/register/", {fetchedUser})
// 		// 		.then(res=>{
// 		// 			console.log(res);
// 		// 	});
// 		setActivePanel(temp);
// 	};

// 	const get_events = () => {
// 		axios.get("https://vkmanage.herokuapp.com/events/register/", {fetchedUser})
// 				.then(res=>{
// 					events = res;
// 					console.log(events)
// 					return events;
// 			});

// 	}
// 	console.log(events, "321");
	
// }
