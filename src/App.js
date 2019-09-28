// import React, { useState, useEffect } from 'react';
// import connect from '@vkontakte/vk-connect';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
// import '@vkontakte/vkui/dist/vkui.css';

// import Start from './panels/Start';
// import OrgMain from './panels/Org_main';
// import Persik from './panels/Persik';

// import axios from 'axios'

// const App = () => {
// 	//Посылаем запрос на сервер заходил ли человек
// 	//если да, то start = 'org/vol'
// 	//иначе start = 'start'
// 	var start = 'start';
// 	const [activePanel, setActivePanel] = useState('start');
// 	const [fetchedUser, setUser] = useState(null);
// 	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

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
// 			console.log(fetchedUser);
// 			axios.get("http://yantar.in:5000/api/recipes")
// 			.then(res=>{
// 				console.log(res);
// 			})
// 			setPopout(null);
// 		}
// 		fetchData();
// 	}, []);

// 	const go = e => {
// 		if (e.currentTarget.dataset.to === 'orgMain')
// 			console.log(fetchedUser);
// 		setActivePanel(e.currentTarget.dataset.to);
// 		// axios.post("url", {fetchedUser})
// 		// 	.then(res=>{
// 		// 		console.log(res);
// 		// 	})
// 	};

// 	return (
// 		<View activePanel={activePanel}>
// 			<Start id='start' fetchedUser={fetchedUser} go={go}/>
// 			<Persik id='persik' go={go} />
// 		</View>
// 	);
// }

// export default App;

import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Start from './panels/Start';
import VolMain from './panels/Vol_main';
import OrgMain from './panels/Org_main';
import { Panel } from '@vkontakte/vkui';
import axios from 'axios';

const App = () => {
	const [activePanel, setActivePanel] = useState('start');
	const [fetchedUser, setUser] = useState(null);
	const events = useState([]);
	//const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			//setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		var temp = e.currentTarget.dataset.to 
		if (temp == 'volMain')
			axios.post("https://vkmanage.herokuapp.com/volunteers/echo/", {fetchedUser})
				.then(res=>{
					console.log(res);
			});
		else if (temp = 'orgMain')
			axios.post("https://vkmanage.herokuapp.com/volunteers/echo/", {fetchedUser})
				.then(res=>{
					console.log(res);
			});
		setActivePanel(temp);
	};

	return (
		<View activePanel={activePanel}/*popout={popout}*/>
			<Start id='start' fetchedUser={fetchedUser} go={go}/>
			<VolMain id='volMain' go={go} />
			<OrgMain id='orgMain' go={go} />
		</View>
	);
}

export default App;