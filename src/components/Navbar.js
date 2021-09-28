import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Grid} from "@material-ui/core";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)

	return (
		<AppBar position="static" color={'secondary'}>
			<Toolbar variant={"dense"}>
				<Grid container justifyContent={'flex-end'}>
					{user ?
						<Button
							onClick={()=> {
								auth.signOut()
							}}
							variant={'outlined'}
						>
							Exit
						</Button>
						:
						<NavLink to={LOGIN_ROUTE}>
							<Button variant={'outlined'}>Login</Button>
						</NavLink>
						
					}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;