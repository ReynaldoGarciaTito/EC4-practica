const React = require('react');
const ReactDOM = require('react-dom'); 
const client = require('./client'); 

class App extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() { 
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() { 
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}
}

class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Primer Nombre</th>
						<th>Apellidos</th>
						<th>Descripcion</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)