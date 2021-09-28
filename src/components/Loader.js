import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import './Loader.css'

const Loader = () => {
	return (
		<Container>
			<Grid
				container
				style={{height: window.innerHeight - 50}}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid
					container
					alignItems={'center'}
					justifyContent={'center'}
				>
					<div className="lds-ellipsis">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Loader;