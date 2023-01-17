import React, { Component } from 'react';

class ProductCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products
        };
    }

    render() {
        return (
            <div>hello world</div>
        );
    }
}

export default ProductCarousel;