import '../../styles/Banner.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

/*
* props children est utile lorsqu'un composant ne connaît pas ses enfants à l'avance
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

