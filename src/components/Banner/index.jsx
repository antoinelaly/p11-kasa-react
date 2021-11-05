import '../../styles/Banner.css'

/*
* the children prop method
*/

function Banner({ children }) {
	return <div className='bandeau'>{children}</div>
}

export default Banner

