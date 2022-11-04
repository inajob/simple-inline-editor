import React from 'react';
import Line from './Line'

class Editor extends React.Component{
	constructor(props){
		super(props);
		this.state = {lines: props.lines};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(i){
		return (event) => {
			console.log(this.state)
		  this.state.lines[i] = event.target.value;
		  this.setState({lines: this.state.lines});
		}
	}

	render(){
		return (
			<div>
        {this.props.lines.map((line, index) => (
					<Line key={index} value={line} onChange={this.handleChange(index)} />
        ))}
			</div>
		)
	}
}

export default Editor
