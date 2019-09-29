import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import persik from '../img/plus.svg';
import './Org_main.css';

export default class OrgMain extends React.Component {
	state = {};

	render(){
		return(<Panel id={this.props.id}>
			<div className="Wrapper-om">
				<div className="Text-contain-om">
					<h1 className="Text">Мероприятия</h1>
				</div>
				<div className="Event-list">
					<div className="Event-contain">
						<img className="Img-circle" src={persik} alt="Persik The Cat"/>
						<h1 className="Name">Создать</h1>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
					</div>
					{this.props.events.data != undefined ?
					this.props.events.data.map((event)=>(
						<div className="Event-contain" onClick={()=>this.props.select("orgDescr", event.id)}>
							<img className="Img-circle" src={event.image} alt={event.title}/>
							<h1 className="Name">{event.title}</h1>
							<h2 className="Descr">{String(event.date).substr(0,10)}</h2>
						</div>
					)):(<div className="Event-contain">
					<h1 className="Name">Мероприятия отсутствуют</h1>
					</div>)}
				</div>
			</div>
		</Panel>
		)}
}