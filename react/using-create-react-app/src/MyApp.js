import React, { Component } from 'react';


function Template(props){
	return <h1>Hello, {props.name}</h1>;
}

function MyApp(props){
	return <Template name={props.name} />;
}

export default MyApp;