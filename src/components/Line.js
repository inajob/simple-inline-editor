import React from 'react';

class Line extends React.Component{
  render() {
		return (
			<textarea>{this.props.value}</textarea>
		)
	}
}

export default Line
