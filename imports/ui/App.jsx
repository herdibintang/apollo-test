import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Task from './Task.jsx';


class App extends Component {
	renderTasks() {
		if(this.props.data.loading){
			return ;
		}
		else{
			return this.props.data.tasks.map((task) => (
				<Task key={task._id} task={task} />
			));
		}
	}
 
	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
				</header>
 
				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
}

const MyQuery = gql`query {
	tasks {
		_id
		text
	}
}`;

const MyComponentWithData = graphql(MyQuery)(App);
export default MyComponentWithData;