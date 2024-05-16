import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/product';


describe('ProductImage', () => { 

    test('should show the component with a personalized image', () => {

        const wrapper = renderer.create(
            <ProductImage img="http://hola.jpg" />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test('should show the component with the product image', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage img={ product2.img } /> 
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

});