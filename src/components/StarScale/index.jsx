//import Sun from '../assets/sun.svg'
import Star from '../../assets/star.svg'
import StarG from '../../assets/star-g.svg'


function StarScale({ starValue }) {

    const range = [1, 2, 3, 4, 5]
    const starRed = <img src={Star} alt='star-icon' className="ch-etoile"/>
    const starGrey = <img src={StarG} alt='star-icon'  className="ch-etoile"/>

    return (
        <div className="lesetoiles">
        <div className="etoilesg">{starGrey}{starGrey}{starGrey}{starGrey}{starGrey}</div>
        <div className="etoilesr">
            {range.map((rangeElem) =>
                starValue >= rangeElem ? <span key={rangeElem.toString()}>{starRed}</span> : null
            )}
        </div>
        </div>
    )
}

export default StarScale
