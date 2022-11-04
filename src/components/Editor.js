import React from 'react';
import Line from './Line'

class Editor extends React.Component{
	render(){
		return (
			<div>
        {this.props.lines.map((line, index) => (
					<Line key={index} value={line} />
        ))}
			</div>
		)
	}
}

export default Editor
