import { Component } from 'react'

/*
* @classdesc render the slider
* props background/slideStyle & active
* 
*/

class Slide extends Component {


    render() {
      let slideStyle = { backgroundImage: `url( ${this.props.background})` };
      return (
          <div
            className="slider__slide"
            data-active={this.props.active}
            style={slideStyle}
          >

          </div>
      );
    }
  }

export default Slide