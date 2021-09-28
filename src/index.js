import React, {createContext} from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App/App';
import firebase from "firebase/compat";
import '@firebase/auth'
import reportWebVitals from "./reportWebVitals";

firebase.initializeApp({
	apiKey: "AIzaSyC85IgDCBueDeN7vtVBso3nC4-631WuJqU",
	authDomain: "life-chat-react.firebaseapp.com",
	projectId: "life-chat-react",
	storageBucket: "life-chat-react.appspot.com",
	messagingSenderId: "663468564483",
	appId: "1:663468564483:web:76e29feee35be8b12aee36",
	measurementId: "G-W3FWM53GGQ"
});
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
	<Context.Provider value={{
		firebase,
		firestore,
		auth
	}}>
		<App />
	</Context.Provider>,
	document.getElementById('root')
)
reportWebVitals();

