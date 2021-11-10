import { Component } from 'react'

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