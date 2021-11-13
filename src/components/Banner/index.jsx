import '../../styles/Banner.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

/*
* @classdesc component to render Banner  
* @param { String } children
* PropTypes : sécuriser le type des props que reçoi le composant
*/

class Banner extends Component {
	constructor(props) {
	  super(props)
	  this.state = {}
	}

  	// props, récuperation de valeurs dans le composant parent enfant 
	// children est utile lorsqu'un composant ne connaît pas ses enfants à l'avance
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

