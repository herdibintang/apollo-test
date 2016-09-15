const typeDefinitions = `
	type Task {
		_id: String
		text: String
	}

	type RootQuery {
		tasks: [Task]
	}

	schema {
		query: RootQuery
	}
`;

export default typeDefinitions;