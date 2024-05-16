# BTG-Product-Card

This is a deployment test suite in NPM

### Bornit - Alghenny Gonzalez

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'bt-product-card';
```


```
<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, maxCount, increaseBy, isMaxCountReached, }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
