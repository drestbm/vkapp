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
	};
	render(){
		return(<Panel id={this.props.id}>
			<div className="Wrapper-od">
				<div className="Text-contain-om">
					<a className="back" onClick={()=>this.props.go("start")}> BACK </a>
					<h1 className="Text">Мероприятие</h1>
				</div>
				<div className="Menu-event">
					<div className="menu-descr">Описание</div>
					<div className="menu-task" onClick={()=>this.props.select("orgEv", this.props.event.id)}>Задачи</div>
					<div className="menu-vol" onClick={()=>this.props.select("orgVol", this.props.event.id)}>Волонтеры</div>
				</div>
				<div className="Descr-event">
					<h1 className="Descr-name">Помоги собаке</h1>
					<img className="Img-circle" src="../img/photo.jpg" alt="Помоги собаке"/>
					<div className="Descr-contain">
						<h2 className="Descr-point">30.09.19 12-00</h2>
						<h2 className="Descr-point">Помогаем бездомным животным</h2>
					</div>
				</div>
			</div>
		</Panel>)
	}
}