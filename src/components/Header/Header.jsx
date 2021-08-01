import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Typography, Box, Button, Link, IconButton } from '@material-ui/core';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import headerStyles from './styles';


const Header = memo(({ handleClickOpenMenu }) => {
	const classes = headerStyles();

	return (
		<Box
			className={cx(classes.header, classes.alt)}
			component='header'
		>
			<Typography variant='subtitle1'>
				<Link
					href="/"
					color="textPrimary"
					underline='none'
				>
					PAINTUS
				</Link>
			</Typography>
			<Button
				variant="outlined"
				color="default"
				className={classes.buttonDesktop}
				endIcon={<MenuOutlinedIcon />}
				onClick={handleClickOpenMenu}
			>
				Menu
			</Button>
			<IconButton className={classes.buttonMobile} size="medium" onClick={handleClickOpenMenu}>
				<MenuOutlinedIcon fontSize="inherit" />
			</IconButton>
		</Box>
	)
})

Header.propTypes = {
	handleClickOpenMenu: PropTypes.func.isRequired
};

export default Header
