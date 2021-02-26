import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.onload = () => {
      const height = this.imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);

      this.setState({ span });
    };
  }
  render() {
    const { description, urls: size, alt_description: alt } = this.props.image;

    return (
      <img
        src={size.regular}
        alt={description ? description : alt}
        ref={this.imageRef}
        style={{
          gridRowEnd: `span ${this.state.span}`,
        }}
      />
    );
  }
}
