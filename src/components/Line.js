import React from 'react';

class Line extends React.Component{
  render() {
		return (
			<textarea
			  ref="rawInput"
			  value={this.props.value}
			  onChange={this.props.onChange}
			  onKeyDown={this.props.onKeyDown}
			/>
		)
	}
  updateFocus(){
    if(this.props.isFocus){
      this.refs.rawInput.focus();
    }
  }
  componentDidUpdate(){
    this.updateFocus()
  }
  componentDidMount(){
    this.updateFocus()
  }

}

export default Line
