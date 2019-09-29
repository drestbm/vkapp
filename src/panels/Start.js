import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import picture from '../img/main.svg';
import './Start.css';

export default class Start extends React.Component{
	state={};
	
	render(){
		return (<Panel id={this.props.id}>
				<div className="Wrapper">
					<div className="Img-contain">
						<img className="Img-full" src={picture} alt="Main image"/>
					</div>
					<div className="Text-contain">
						<h1 className="Text">Сделаем мир лучше!</h1>
					</div>
					<div className="But-contain" onClick={()=>this.props.go("volMain")}>
						Я волонтёр
					</div>
					<div className="But-contain" onClick={()=>this.props.go("orgMain")}>
						Я организатор
					</div>
				</div>
			</Panel>
		)
	}
}
