import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
// import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
// import Button from '@vkontakte/vkui/dist/components/Button/Button';
// import Group from '@vkontakte/vkui/dist/components/Group/Group';
// import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
// import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import persik from '../img/plus.svg';
import './Org_descr.css';
import { isTemplateElement } from '@babel/types';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

export default class OrgMain extends React.Component {
	state = {
		event: null
	};
	UNSAFE_componentWillRecieveProps(nextProps){
		console.log("////////")
		console.log(nextProps);
		this.setState({event: nextProps.event});
	}
	render(){
		return(<Panel id={this.props.id}>
			{}
			<div className="Wrapper-om">
				<div className="Text-contain-om">
					<a className="back" onClick={()=>this.props.go("start")}> BACK </a>
					<h1 className="Text">Мероприятия</h1>
				</div>
				<div className="Menu-event">
					<a className="menu-descr">Описание</a>
					<a className="menu-task" onClick={()=>this.props.select("orgEv", this.props.event.id)}>Задачи</a>
					<a className="menu-vol" onClick={()=>this.props.select("orgVol", this.props.event.id)}>Волонтеры</a>
				</div>
				<img className="Img-circle" src={this.props.event.image} alt="Persik The Cat"/>
				<div className="Event-list">
				<h1 className="Descr-create">{this.props.event.title}</h1>
					<div className="Event-contain">
						<h2 className="Descr-create">{String(this.props.event.date).substr(0.10)}</h2>
						<h2 className="Descr-create">{this.props.event.description}</h2>
					</div>
				</div>
			</div>
		</Panel>)
	}
}