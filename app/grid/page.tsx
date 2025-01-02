import {GridList} from '@/components/grid'
import products from '@/data/products'
import {Page} from '@/components/layout'

function Grid() {
    return (
        <Page offsetTop>
            <div>
                <GridList title='Drawers' products={products} tag={0}/>
                <GridList title='Chairs' products={products} tag={1}/>
            </div>
        </Page>
    )
}

export default Grid