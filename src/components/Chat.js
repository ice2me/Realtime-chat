import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chat = () => {
	const {auth, firestore} = useContext(Context)
	const [user] = useAuthState(auth)
	const [value, setValue] = useState('')
	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createdAt')
	)
	
	const sendMessage = async () => {
		firestore.collection('messages').add({
			uid: user.uid,
			displayName: user.displayName,
			photoURL: user.photoURL,
			text: value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		})
		setValue('')
	}
	if(loading) {return <Loader />}
	return (
		<Container>
			<Grid
				container
				justifyContent={'center'}
				style={{
					height: window.innerHeight - 50,
					marginTop: '20px'
				}}
			>
			<div style={{width: '88%',
				height: '58vh',
				border: '2px solid #999',
				borderRadius: 8,
				overflowY: 'auto',
				color: '#fff',
				fontWeight: 'bold',
				backgroundColor: '#0E1621'
			}}>
				
				{messages.map(mes=>
				<div
					key={mes.uid}
					style={{
						margin: '10px',
						background: user.uid === mes.uid ? '#182533' : '#182533',
						marginLeft: user.uid === mes.uid ? 'auto' : '10px',
						width: 'fit-content',
						padding: 15,
						borderRadius: 8,
				}}>
					<Grid
						container
						alignItems={"center"}
					>
						<Avatar src={mes.photoURL}/>
						<div style={{marginLeft: 10}}>{mes.displayName}</div>
					</Grid>
					<div style={{marginTop: 10, padding: "0 10px"}}>{mes.text}</div>
				</div>
				)}
				
			</div>
			<div
				style={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Grid
					container
					direction={'column'}
					alignItems={"flex-end"}
					color="white"
					style={{
						width: '70%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<TextField
						autoComplete="off"
						id="outlined-required"
						variant={"outlined"}
						defaultValue="white"
						fullWidth
						rowsMax={2}
						value={value}
						onChange={e => setValue(e.target.value)}
						style={{
							background: '#949494',
							borderRadius: 8,
							color: "white",
							fontWeight: 'bold'
						}}
						focused
					/>
						<Button
							style={{background: '#F50057', marginTop: '5px'}}
							variant={'outlined'}
							onClick={sendMessage}
						>
							Send
						</Button>
				</Grid>
			</div>
			
			</Grid>
		</Container>
	);
};

export default Chat;