import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('ProductTitle', () => { 

    test('should show the component with the personalized title', () => { 

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class"/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        

    });

    test('should show the component with the name the product name', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
     });

});