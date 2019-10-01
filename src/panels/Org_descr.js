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
import s2 from '../img/arrow.svg';
import s1 from '../img/photo.jpg';
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
					<img className="back" onClick={()=>this.props.go("orgMain")} src={s2}/>
					<h1 className="Text">Мероприятие</h1>
				</div>
				<div className="Menu-event">
					<div className="menu-descr">Описание</div>
					<div className="menu-task" onClick={()=>this.props.go("orgEv")}>Задачи</div>
					<div className="menu-vol" onClick={()=>this.props.go("orgVol")}>Волонтеры</div>
				</div>
				<div className="Descr-event">
					<h1 className="Descr-name">Помоги собаке</h1>
					<img className="Img-circle" src={s1} alt="Помоги собаке"/>
					<div className="Descr-contain">
						<h2 className="Descr-point">30.09.19 12-00</h2>
						<h2 className="Descr-point">Помогаем бездомным животным на улице Ленина 24</h2>
					</div>
				</div>
			</div>
		</Panel>)
	}
}