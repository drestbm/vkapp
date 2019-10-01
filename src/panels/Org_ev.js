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
import s1 from '../img/zad.svg';
import s2 from '../img/arrow.svg';
import './Org_ev.css';
import { isTemplateElement } from '@babel/types';

export default class OrgMain extends React.Component {
	state = {

	};
	render(){
		return(<Panel id={this.props.id}>
			<div className="Wrapper-om">
				<div className="Text-contain-om">
					<img className="back" onClick={()=>this.props.go("orgMain")} src={s2}/>
					<h1 className="Text">Мероприятия</h1>
				</div>
				<div className="Menu-event">
					<a className="menu-descr" onClick={()=>this.props.select("orgDescr", this.props.event.id)}>Описание</a>
					<a className="menu-task">Задачи</a>
					<a className="menu-vol" onClick={()=>this.props.select("orgVol", this.props.event.id)}>Волонтеры</a>
				</div>
				<div className="Event-list">
					<div className="Event-contain" onClick={()=>this.props.go("")}>
						<img className="Img-circle" src={persik} alt="Persik The Cat"/>
						<h1 className="Name">Создать</h1>
						<h2 className="Descr-create">КаСтЫлЬ</h2>
					</div>
					
					<div className="Event-contain" >
							<img className="Img-circle" src={s1} alt="Помыть собак"/>
							<h1 className="Name">Помыть собак</h1>
					</div>
					<div className="Event-contain">
							<img className="Img-circle" src={s1} alt="Раздать еду"/>
							<h1 className="Name">Раздать еду</h1>
					</div>
					<div className="Event-contain">
							<img className="Img-circle" src={s1} alt="Поиграть"/>
							<h1 className="Name">Поиграть</h1>
					</div>
				</div>
			</div>
		</Panel>)
	}
}