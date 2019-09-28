import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import persik from '../img/main.svg';
import './Start.css';


export default class Start extends React.Component{
	state={
		status: null
	};
	
	handleClickTrue = ()=>{
		this.props.go("volMain");
		this.setState({status: true});
	};

	handleClickFalse = ()=>{
		this.props.go("orgMain");
		this.setState({status: false});
	};
	
	render(){
		return (<Panel id={this.props.id}>
				<div className="Wrapper">
					<div className="Img-contain">
						<img className="Img-full" src={persik} alt="Persik The Cat"/>
					</div>
					<div className="Text-contain">
						<h1 className="Text">Сделаем мир лучше!</h1>
					</div>
					<div className="But-contain" onClick={this.handleClickTrue}>
						Я волонтёр
					</div>
					<div className="But-contain" onClick={this.handleClickFalse}>
						Я организатор
					</div>
				</div>
			</Panel>
		)
	}
}

// Start.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };
