import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductCarousel from './product-carousel.component'

ReactDOM.render(<ProductCarousel products={initialData} />, document.getElementById("product-carousel"));