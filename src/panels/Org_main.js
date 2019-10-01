import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import persik from '../img/plus.svg';
import './Org_main.css';
import s1 from '../img/photo.jpg';
import s2 from '../img/photo2.jpg';
import { getOffsetRect } from '@vkontakte/vkui/dist/lib/offset';

export default class OrgMain extends React.Component {
	state = {};

	handle=()=>{this.props.go("orgDescr")}

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
					{/* {this.props.events.data != undefined ?
					this.props.events.data.map((event)=>(
						<div className="Event-contain" onClick={()=>this.props.select("orgDescr", event.id)}>
							<img className="Img-circle" src={event.image} alt={event.title}/>
							<h1 className="Name">{event.title}</h1>
							<h2 className="Descr">{String(event.date).substr(0,10)}</h2>
						</div>
					)):(<div className="Event-contain">
					<h1 className="Name">Мероприятия отсутствуют</h1> */}
					{/* (e) => this.handle(e) */}
					
					<div className="Event-contain" onClick={()=>{this.props.go("orgDescr")}}>
							<img className="Img-circle" src={s1} alt="Помоги собаке"/>
							<h1 className="Name">Помоги собаке</h1>
							<h2 className="Descr">30.09.19 12:00</h2>
					</div>
					<div className="Event-contain">
							<img className="Img-circle" src={s2} alt="Старость в радость"/>
							<h1 className="Name">Старость в радость</h1>
							<h2 className="Descr">21.10.19 14:00</h2>
					</div>
				</div>
			</div>
		</Panel>
		)}
}