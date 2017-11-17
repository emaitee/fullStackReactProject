
class FacultyList extends React.Component {

	state = {
		depts: [],
	};

	render() {
		
		const departmentComponents = departments.map((department) => (
				<Department
					key={'department-' + department.id}
					id={department.id}
					faculty={department.faculty}
					department={department.department}
			));
		return(
			<div className='ui unstackable items'>
				{departmentComponents}
			</div>
			);
	}
}

class Department extends React.Component {
	render() {
		return(
			<div className='item'>
				<div className='middle aligned content'>
					<div className='header'>
							{this.props.id}
					</div>
					<div className='description'>
							{this.props.department}
						<p>
							{this.props.faculty}
						</p>
					</div>
					<div className='extra'>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<FacultyList />,
	document.getElementById('content')
);
