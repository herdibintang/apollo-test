import React, { Component } from 'react';

import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

import Task from './Task.jsx';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			tasks: []
		}
	}

	componentDidMount() {
		this.props.client.query({
			query: gql`
				query {
					tasks {
						_id
						text
					}
				}
			`
		}).then(({ data }) => {
			this.setState({
				tasks: data.tasks
			});
		});
	}
 
	renderTasks() {
		return this.state.tasks.map((task) => (
			<Task key={task._id} task={task} />
		));
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

App.propTypes = {
  client: React.PropTypes.instanceOf(ApolloClient).isRequired
}

const MyComponentWithApollo = withApollo(App);
export default MyComponentWithApollo;