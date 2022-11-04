import React from 'react';
import Line from './Line'

class Editor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lines: props.lines,
			cursor: {row: 0, col: 0},
		};
		this.handleChange = this.handleChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}
	handleChange(i){
		return (e) => {
		  this.state.lines[i] = e.target.value;
		  this.setState(this.state);
		}
	}
	onKeyDown(i){
    return (e) => {
			switch(e.keyCode){
				case 38: // up
					this.state.cursor.row --;
		      this.setState(this.state);
					break;
				case 40: // down
					this.state.cursor.row ++;
		      this.setState(this.state);
					break;
				default:
			}
		}
	}

	render(){
		return (
			<div>
        {this.props.lines.map((line, index) => (
					<Line
					  key={index}
				    value={line}
					  isFocus={index===this.state.cursor.row}
					  onChange={this.handleChange(index)}
					  onKeyDown={this.onKeyDown(index)}
					/>
        ))}
			</div>
		)
	}
}

export default Editor
