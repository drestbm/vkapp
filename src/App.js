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
import OrgDescr from './panels/Org_descr';
import OrgTask from './panels/Org_task';
import { Panel } from '@vkontakte/vkui';
import axios from 'axios';
import { strict } from 'assert';

export default class App extends React.Component {

	state ={
		activePanel: 'start',
		fetchedUser: null,
		events: {},
		event: {},
		vols: [],
		tasks: [],
		status: 3
	};

	get_events = () =>{
		axios.get("https://vkmanage.herokuapp.com/events/register?status=${this.state.status}&id=${this.state.fethedUser.id}")
			.then(res=>{
				this.setState({events: res});
		});
	};

	get_event = (id) =>{
		axios.get("https://vkmanage.herokuapp.com/events/get/"+String(id))
			.then(res=>{
				this.setState({event: res});
				console.log(res);
		});
	};

	get_tasks = (id) =>{
		axios.get("https://vkmanage.herokuapp.com/tasks/getsetbyeventid/?event_id=${id}")
			.then(res=>{
				this.setState({tasks: res});
		});
	};

	get_vols = (id) =>{
		// axios.get("https://vkmanage.herokuapp.com/events/register/", this.state.fetchedUser)
		// 	.then(res=>{
		// 		this.setState({events: res});
		// });
	};


	go = e => { 
		if (e == 'volMain')
			axios.post("https://vkmanage.herokuapp.com/volunteers/register/", this.state.fetchedUser)
				.then(res=>{
					this.setState({status:3})
			});
		else if (e = 'orgMain')
			axios.post("https://vkmanage.herokuapp.com/organizers/register/", this.state.fetchedUser)
				.then(res=>{
					this.setState({status:1})
			});
		this.get_events();
		this.setState({activePanel: e});
	};

	select = (page,id) => { 
		if (page === "orgDescr")
			this.get_event(id)
		else if (page === "OrgEv")
			this.get_tasks(id)
		else
			this.get_vols(id)
		this.setState({activePanel: page});
	};

	componentDidMount(){{
			connect.send('VKWebAppGetUserInfo', {});
			connect.subscribe((e) => {
				switch (e.detail.type) {
					case 'VKWebAppGetUserInfoResult':
						this.setState({ fetchedUser: e.detail.data });
						break;
					default:
						console.log(e.detail.type);
				}
			});
			
		}
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Start id='start' fetchedUser={this.state.fetchedUser} go={this.go}/>
				<VolMain id='volMain' go={this.go} events={this.state.events} select={this.select}/>
				<OrgMain id='orgMain' go={this.go} events={this.state.events} select={this.select}/>
				<OrgEv id='orgEv' go={this.go} event={this.state.event} select={this.select}/>
				<OrgVol id='orgVol' go={this.go} vols={this.state.vols} event={this.state.event} select={this.select}/>
				<OrgDescr id='orgDescr' go={this.go} event={this.state.event} select={this.select}/>
				<OrgTask id='orgTask' go={this.go} tasks={this.state.tasks} event={this.state.event} select={this.select}/>
			</View>
		);
	}

}

