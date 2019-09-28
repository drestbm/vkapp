import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
// import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
// import Button from '@vkontakte/vkui/dist/components/Button/Button';
// import Group from '@vkontakte/vkui/dist/components/Group/Group';
// import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
// import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import persik from '../img/persik.png';
import plus from '../img/plus.svg'
import './Org_main.css';

const OrgMain = ({ id, go}) => (
	<Panel id={id}>
		<div className="Wrapper">
			<div className="Text-contain">
				<h1 className="Text">Мероприятия</h1>
			</div>
			<div className="Event-contain" onClick={go}  data-to="persik">
				<img className="Img" src={plus}/>
				<h1 className="create">Создать</h1>
			</div>
			<div className="Event-contain" onClick={go}  data-to="persik">
				<img className="Name" src={persik} alt="Persik The Cat"/>
				<h1 className="Create">Название</h1>
				<h2 className="Descr">Описание</h2>
			</div>
		</div>
	</Panel>
);

OrgMain.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default OrgMain;
