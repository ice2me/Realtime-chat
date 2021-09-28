import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat";
import {red} from "@material-ui/core/colors";

const Login = () => {
	const {auth} = useContext(Context)
	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const {user} = await auth.signInWithPopup(provider)
		console.log(user)
	}
	return (
		<Container>
			<Grid
				container
				style={{height: window.innerHeight - 50}}
				alignItems={'center'}
				justifyContent={'center'}
			>
			<Grid
				style={{width: 300, background: '#F50057'}}
				container
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Box p={5}>
					<Button
						style={{color: '#fff', border: '1px solid #fff'}}
						variant={"outlined"}
						onClick={login}
					>
						Enter from Google
					</Button>
				</Box>
			</Grid>
			</Grid>
		</Container>
	);
};

export default Login;