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
import './Org_vol.css';
import { isTemplateElement } from '@babel/types';

export default class OrgMain extends React.Component {
	state = {

	};
	render(){
		return(<Panel id={this.props.id}>
			<div className="Wrapper-om">
				<div className="Text-contain-om">
					<a className="back" onClick={()=>this.props.go("start")}> BACK </a>
					<h1 className="Text">Мероприятия</h1>
				</div>
				<div className="Menu-event">
					<a className="menu-descr">Описание</a>
					<a className="menu-task">Задачи</a>
					<a className="menu-vol">Волонтеры</a>
				</div>
				<img className="Img-circle" src={persik} alt="Persik The Cat"/>
				<div className="Event-list">
				<h1 className="Descr-create">КаСтЫлЬ</h1>
					<div className="Event-contain" onClick={()=>this.props.go("")}>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
					</div>
				</div>
			</div>
		</Panel>)
	}
}