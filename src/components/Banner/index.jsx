import '../../styles/Banner.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

/*
* @classdesc component to render Banner  
* @param { String } children
*/

class Banner extends Component {
	constructor(props) {
	  super(props)
	  this.state = {}
	}
  
	render() {
	  const { children } = this.props

	return <div className='bandeau'>{children}</div>
	}
}


Banner.propTypes = {
	children: PropTypes.string.isRequired,
  }
  
  Banner.defaultProps = {
	children: '',
  }
  
export default Banner

