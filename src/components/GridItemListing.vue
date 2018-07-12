<template>
    <div class="c-gridItemListing">
        <div class="c-gridItemListing__grid">
            <ProductGridItem
                v-for="(item, index) in visibleItems"
                :key="index"
                price="$10"
                title="Ground Mushroom Coffee"
            />
        </div>

        <div class="c-gridItemListing__loadMore">
            <Button
                v-if="!allItemsLoaded"
                text="Load More"
                @click.native="loadMoreItems"
            />
            <span class="c-gridItemListing__loadMoreStatus">Displaying {{ loadedItemsCount }} of {{ totalItemsCount }} products</span>	
        </div>  
    </div> 
</template>

<script>

import ProductGridItem from './ProductGridItem.vue'
import Button from './Button.vue'


export default {
    name: 'GridItemListing',
    components: {
        ProductGridItem
    },
    data: () => {
        return {
            items: [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
            loadedItemsCount: 6,
        }
    },
	props:{
        loadMoreCount: {
            type: Number,
            required: false,
            default: 6
        }
	},
    computed: {
        totalItemsCount() {
            return this.items.length
        },
        allItemsLoaded() {
            return this.totalItemsCount <= this.loadedItemsCount
        },
        visibleItems() {
            return this.items.slice(0, this.loadedItemsCount)
        }
    },
    methods: {
    	loadMoreItems() {
            const {
                loadMoreCount,
                totalItemsCount,
                loadedItemsCount
            } = this

    		let newVisibleCount = loadedItemsCount + loadMoreCount

    		this.loadedItemsCount = (newVisibleCount <= totalItemsCount) ? newVisibleCount : 
    			totalItemsCount;
    	},
    }

}
</script>
<docs>

```jsx
<section>
    <GridItemListing />
</section>
```
</docs>


<style lang="postcss">

	.c-gridItemListing__grid {
		padding: 40px 20px;
        width: 100%;
		margin-bottom: 0;
        display: grid;
        grid-template-columns: repeat(3, calc(33% - 3.3px));
        grid-column-gap: 10px;
        grid-row-gap: 30px;
	}

        .c-gridItemListing__loadMore {
		    display: flex;
            align-items: center;
            flex-direction: column;            
        }

            .c-gridItemListing__loadMoreStatus {
                display: block;
                margin: 30px auto 0;
                text-align: center;
                font-size: 13px;
                letter-spacing: 0;
                font-family: Gotham Book;
            }    
</style>