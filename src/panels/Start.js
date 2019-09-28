import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import persik from '../img/main.svg';
import './Start.css';


const Start = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
	<div className="Wrapper">
		<div className="Img-contain">
		<img className="Img" src={persik} alt="Persik The Cat"/>
		</div>
		<div className="Text-contain">
			<h1 className="Text">Сделаем мир лучше!</h1>
		</div>
		<div className="But-contain" onClick={go} data-to="volMain">
			Я волонтёр
		</div>
		<div className="But-contain" onClick={go} data-to="orgMain">
			Я организатор
		</div>
	</div>
	</Panel>
);

Start.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Start;
