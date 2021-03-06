import React, { useState, useEffect } from 'react';

import getThemeColor from '../../utils/getThemeColor';

import {
	Home,
	Search,
	Light,
	Grid,
	Arrow,
	List
} from './icons';

import * as S from './styled';

const MenuBar = () => {
	const [theme, setTheme] = useState(null);
	const [display, setDisplay] = useState(null);

	const isDarkMode = theme === 'dark';
	const isListMode = display === 'list';

	useEffect(() => {
		setTheme(window.__theme);
		setDisplay(window.__display);

		window.__onThemeChange = () => setTheme(window.__theme);
		window.__onDisplayChange = () => setDisplay(window.__display);
	}, []);

	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink
					to="/"
					title="Voltar para a Home"
					cover
					direction="right"
					bg={getThemeColor()}
					duration={.5}
				>
					<S.MenuBarItem>
						<Home />
					</S.MenuBarItem>
				</S.MenuBarLink>

				<S.MenuBarLink
					to="/search"
					title="Pesquisar"
					cover
					direction="right"
					bg={getThemeColor()}
					duration={.5}
				>
					<S.MenuBarItem>
						<Search />
					</S.MenuBarItem>
				</S.MenuBarLink>
			</S.MenuBarGroup>

			<S.MenuBarGroup>
				<S.MenuBarItem
					title="Mudar o tema"
					onClick={() => {
						window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
					}}
					className={theme}
				>
					<Light />
				</S.MenuBarItem>

				<S.MenuBarItem
					title="Mudar visualização"
					onClick={() => {
						window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
					}}
				>
					{isListMode ? <Grid /> : <List />}
				</S.MenuBarItem>

				<S.MenuBarItem title="Ir para o topo">
					<Arrow />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	);
};

export default MenuBar;
