import React from 'react';

class Line extends React.Component{
  render() {
		return (
			<textarea value={this.props.value} onChange={this.props.onChange} />
		)
	}
}

export default Line
