<template>
    <div class="c-productGridItem">
        <div class="c-productGridItem__inner">           

            <a class="c-productGridItem__imageBox" style="position: relative;"
                :href="itemLink"
            >
                <span v-if="newItem"
                    class="c-productGridItem__badge c-productGridItem__badge--new"
                >
                    <span class="c-productGridItem__badgeText">NEW</span>
                </span>            

                <span v-if="newItem"
                    class="c-productGridItem__badge c-productGridItem__badge--sale"
                >
                    <span class="c-productGridItem__badgeText">Sale</span>
                </span>    


                <div class="c-productGridItem__imageWrapper">
                    <div class="c-productGridItem__image" 
                        style="background-image: url('https://cdn.shopify.com/s/files/1/0739/9341/products/GroundCoffee_LionsMane_1000x1000_600x_7ff16c24-f93f-4b59-a959-76826657f06a_large.jpg');"></div>
                    <div 
                        class="c-productGridItem__image c-productGridItem__image--two"
                        style="background-image: url('https://cdn.shopify.com/s/files/1/0739/9341/products/GroundCoffee_LionsMane_Lifestyle3_1130x680_1f920809-ceb0-4296-b2b7-77077f2b4001_large.jpg')" ></div>
                </div>
            </a>

            <div class="c-productGridItem__info">
                <a href="/collections/mushroom-coffee/products/mushroom-coffee-with-lions-mane-ground" class="c-productGridItem__title">{{ title }}</a> 

                <span class="c-productGridItem__subtitle" v-if="subtitle">{{ subtitle }}</span>

                <div class="c-productGridItem__stars"
                    v-if="reviews"
                >
                    <svg width="128px" height="20px" viewBox="0 0 128 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Icon/5 Stars</title> <desc>Created with Sketch.</desc> <defs> <path d="M17.9997448,21.95475 C17.8067448,21.95475 17.6127448,21.89875 17.4447448,21.78675 L11.9997448,18.15675 L6.55474483,21.78675 C6.20674483,22.01875 5.74974483,22.01075 5.40974483,21.76275 C5.07174483,21.51575 4.92374483,21.08375 5.03874483,20.68075 L6.87674483,14.24575 L2.29274483,9.66175 C2.00674483,9.37675 1.92174483,8.94575 2.07574483,8.57175 C2.22974483,8.19875 2.59574483,7.95475 2.99974483,7.95475 L8.38174483,7.95475 L11.1057448,2.50775 C11.4447448,1.83075 12.5557448,1.83075 12.8947448,2.50775 L15.6187448,7.95475 L20.9997448,7.95475 C21.4037448,7.95475 21.7697448,8.19875 21.9237448,8.57175 C22.0777448,8.94575 21.9927448,9.37675 21.7067448,9.66175 L17.1227448,14.24575 L18.9607448,20.68075 C19.0757448,21.08375 18.9277448,21.51575 18.5897448,21.76275 C18.4137448,21.89075 18.2067448,21.95475 17.9997448,21.95475 Z" id="path-1"></path> <path d="M17.9997448,21.95475 C17.8067448,21.95475 17.6127448,21.89875 17.4447448,21.78675 L11.9997448,18.15675 L6.55474483,21.78675 C6.20674483,22.01875 5.74974483,22.01075 5.40974483,21.76275 C5.07174483,21.51575 4.92374483,21.08375 5.03874483,20.68075 L6.87674483,14.24575 L2.29274483,9.66175 C2.00674483,9.37675 1.92174483,8.94575 2.07574483,8.57175 C2.22974483,8.19875 2.59574483,7.95475 2.99974483,7.95475 L8.38174483,7.95475 L11.1057448,2.50775 C11.4447448,1.83075 12.5557448,1.83075 12.8947448,2.50775 L15.6187448,7.95475 L20.9997448,7.95475 C21.4037448,7.95475 21.7697448,8.19875 21.9237448,8.57175 C22.0777448,8.94575 21.9927448,9.37675 21.7067448,9.66175 L17.1227448,14.24575 L18.9607448,20.68075 C19.0757448,21.08375 18.9277448,21.51575 18.5897448,21.76275 C18.4137448,21.89075 18.2067448,21.95475 17.9997448,21.95475 Z" id="path-3"></path> <path d="M17.9997448,21.95475 C17.8067448,21.95475 17.6127448,21.89875 17.4447448,21.78675 L11.9997448,18.15675 L6.55474483,21.78675 C6.20674483,22.01875 5.74974483,22.01075 5.40974483,21.76275 C5.07174483,21.51575 4.92374483,21.08375 5.03874483,20.68075 L6.87674483,14.24575 L2.29274483,9.66175 C2.00674483,9.37675 1.92174483,8.94575 2.07574483,8.57175 C2.22974483,8.19875 2.59574483,7.95475 2.99974483,7.95475 L8.38174483,7.95475 L11.1057448,2.50775 C11.4447448,1.83075 12.5557448,1.83075 12.8947448,2.50775 L15.6187448,7.95475 L20.9997448,7.95475 C21.4037448,7.95475 21.7697448,8.19875 21.9237448,8.57175 C22.0777448,8.94575 21.9927448,9.37675 21.7067448,9.66175 L17.1227448,14.24575 L18.9607448,20.68075 C19.0757448,21.08375 18.9277448,21.51575 18.5897448,21.76275 C18.4137448,21.89075 18.2067448,21.95475 17.9997448,21.95475 Z" id="path-5"></path> <path d="M17.9997448,21.95475 C17.8067448,21.95475 17.6127448,21.89875 17.4447448,21.78675 L11.9997448,18.15675 L6.55474483,21.78675 C6.20674483,22.01875 5.74974483,22.01075 5.40974483,21.76275 C5.07174483,21.51575 4.92374483,21.08375 5.03874483,20.68075 L6.87674483,14.24575 L2.29274483,9.66175 C2.00674483,9.37675 1.92174483,8.94575 2.07574483,8.57175 C2.22974483,8.19875 2.59574483,7.95475 2.99974483,7.95475 L8.38174483,7.95475 L11.1057448,2.50775 C11.4447448,1.83075 12.5557448,1.83075 12.8947448,2.50775 L15.6187448,7.95475 L20.9997448,7.95475 C21.4037448,7.95475 21.7697448,8.19875 21.9237448,8.57175 C22.0777448,8.94575 21.9927448,9.37675 21.7067448,9.66175 L17.1227448,14.24575 L18.9607448,20.68075 C19.0757448,21.08375 18.9277448,21.51575 18.5897448,21.76275 C18.4137448,21.89075 18.2067448,21.95475 17.9997448,21.95475 Z" id="path-7"></path> <path d="M17.9997448,21.95475 C17.8067448,21.95475 17.6127448,21.89875 17.4447448,21.78675 L11.9997448,18.15675 L6.55474483,21.78675 C6.20674483,22.01875 5.74974483,22.01075 5.40974483,21.76275 C5.07174483,21.51575 4.92374483,21.08375 5.03874483,20.68075 L6.87674483,14.24575 L2.29274483,9.66175 C2.00674483,9.37675 1.92174483,8.94575 2.07574483,8.57175 C2.22974483,8.19875 2.59574483,7.95475 2.99974483,7.95475 L8.38174483,7.95475 L11.1057448,2.50775 C11.4447448,1.83075 12.5557448,1.83075 12.8947448,2.50775 L15.6187448,7.95475 L20.9997448,7.95475 C21.4037448,7.95475 21.7697448,8.19875 21.9237448,8.57175 C22.0777448,8.94575 21.9927448,9.37675 21.7067448,9.66175 L17.1227448,14.24575 L18.9607448,20.68075 C19.0757448,21.08375 18.9277448,21.51575 18.5897448,21.76275 C18.4137448,21.89075 18.2067448,21.95475 17.9997448,21.95475 Z" id="path-9"></path> </defs> <g id="SYMBOLS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Product-Block/Category---Mobile" transform="translate(-23.000000, -227.000000)"> <g id="Icon/5-Stars" transform="translate(21.000000, 225.000000)"> <g id="stars"> <g id="Icon/Star---Filled" transform="translate(81.000000, 0.000000)"> <rect id="Bounding-Box" x="0" y="0" width="24" height="24"></rect> <mask id="mask-4" fill="white"> <use xlink:href="#path-3"></use> </mask> <g id="Mask"></g> <g id="Mixin/Fill/Accent-2" mask="url(#mask-4)" fill="#FAA846" fill-rule="evenodd"> <rect id="Box" x="0" y="0" width="24" height="24"></rect> </g> </g> <g id="Icon/Star---Filled" transform="translate(54.000000, 0.000000)"> <rect id="Bounding-Box" x="0" y="0" width="24" height="24"></rect> <mask id="mask-6" fill="white"> <use xlink:href="#path-5"></use> </mask> <g id="Mask"></g> <g id="Mixin/Fill/Accent-2" mask="url(#mask-6)" fill="#FAA846" fill-rule="evenodd"> <rect id="Box" x="0" y="0" width="24" height="24"></rect> </g> </g> <g id="Icon/Star---Filled" transform="translate(27.000000, 0.000000)"> <rect id="Bounding-Box" x="0" y="0" width="24" height="24"></rect> <mask id="mask-8" fill="white"> <use xlink:href="#path-7"></use> </mask> <g id="Mask"></g> <g id="Mixin/Fill/Accent-2" mask="url(#mask-8)" fill="#FAA846" fill-rule="evenodd"> <rect id="Box" x="0" y="0" width="24" height="24"></rect> </g> </g> <g id="Icon/Star---Filled"> <rect id="Bounding-Box" x="0" y="0" width="24" height="24"></rect> <mask id="mask-10" fill="white"> <use xlink:href="#path-9"></use> </mask> <g id="Mask"></g> <g id="Mixin/Fill/Accent-2" mask="url(#mask-10)" fill="#FAA846" fill-rule="evenodd"> <rect id="Box" x="0" y="0" width="24" height="24"></rect> </g> </g> </g> </g> </g> </g></svg>
                </div>

                <div v-if="previousPrice"
                    class="c-productGridItem__priceBox" 
                >
                    <span class="c-productGridItem__price">{{ price }}</span>
                    <span class="c-productGridItem__price--previous"
                    >{{ previousPrice }}</span>
                </div>

                <div v-else 
                    class="c-productGridItem__priceBox"
                >
                    <span class="c-productGridItem__price">{{ price }}</span>
                </div>                
                <div class="c-productGridItem__buttonWrap">
                    <Button text="Add to Cart"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Button from './Button.vue'

export default {
    name: 'ProductGridItem',
    data: function () {
        return {
            active: false
        }
    },
    components: {
        Button
    },
	props:{
        /**
         * Title
         */        
        title: {
            type: String,
            required: true
        },        
        /**
         * Subtitle
         */        
        subtitle: {
            type: [String, Boolean],
            required: false
        },      
        /**
         * Current Price
         */        
        price: {
            type: String,
            required: true
        },      
        /**
         * Previous price if on sale
         */        
        previousPrice: {
            type: [String, Boolean],
            required: false
        },    
        /**
         * New item
         */        
        newItem: {
            type: Boolean,
            required: false
        },
        /**
         * Reviews available
         */        
        reviews: {
            type: Boolean,
            required: false
        },        
        /**
         * Item on Sale
         */        
        saleItem: {
            type: Boolean,
            required: false
        },    
        /**
         * Item link
         */        
        itemLink: {
            type: [String, Boolean],
            required: false
        },                                                        
	},
    computed: {
        classObj() {
            return {
                'c-btn--small': this.size === 'small',
                'c-btn--med': this.size === 'med',
                'c-btn--large': this.size === 'large',
            }
        },
    },

    methods: {

        // /**
        //  * Triggered on clicking option
        //  * Emits value to parent
        //  * @public
        //  * @param {any}
        //  */
        // selectOption(value) {
        //     /**
        //      * After option selected event
        //      * @event selectOption
        //      * @type {any}
        //      */
        //     this.$emit('selectOption', this.value);
        //     this.active = !this.active
        // },  
    }  
}
</script>
<docs>

```jsx
<section class="grid-items">
    <ProductGridItem
        title="Ground Mushroom Coffee"
        price="$70"
        previousPrice="$120"
        itemLink="#"
        :reviews=true
    />

    <ProductGridItem
        title="Ground Mushroom Coffee"
        subtitle="Unwind in the afternoon or evening with this hot cacao to support occasional stress and restful sleep.  An upgrade on guilt-free hot chocolate."
        price="$70"
        :newItem=true
        :saleItem=true
        itemLink="#"
    />    
</section>
```
</docs>


<style lang="postcss">

.grid-items {
    background-color: #f7f7f7;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
}


.c-productGridItem {
    padding: 30px 20px;
    background-color: #fff;
    max-width: 300px;
}

    .c-productGridItem__inner {
        position: relative;
    }

        .c-productGridItem__imageBox {
            position: relative;
            display: block;

            &:hover {
                .c-productGridItem__image {
                    display: none;
                }

                .c-productGridItem__image--two {
                    display: block;
                }
            }            
        }


            .c-productGridItem__badge  {
                position: absolute;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 100px;
                padding-top: 2px;
                background-color : #7fc464;
                z-index: 1;

                &.c-productGridItem__badge--new {
                    top: 11px;
                    left: 11px
                }

                &.c-productGridItem__badge--sale {
                    bottom: 28px;
                    right: 8px;
                }            
            }

                .c-productGridItem__badgeText {
                    font-size: 11px;
                    font-family: Gotham Book;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0px;
                    padding-top: 1px;
                    color: #fff;
                }        

            .c-productGridItem__link {
                color: #000;
                text-decoration: none;
            }

                .c-productGridItem__imageWrapper {
                    position: relative;
                }

                    .c-productGridItem__image {
                        width: 260px;
                        height: 260px;
                        max-width: 100%;
                        display: block;
                        background-size: cover;

                        &.c-productGridItem__image--two {
                            display: none;
                        }
                    }

        .c-productGridItem__info {
            margin-top: 4px;
        }

            .c-productGridItem__title {
                font-family: Gotham Book;
                font-weight: 400;
                font-size: 16px;
                line-height: 1;
                letter-spacing: 0;
                text-transform: uppercase;
                text-decoration: none;
                color: #000;
                display: block;
            }

            .c-productGridItem__subtitle {
                font-family: Gotham Book;
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
                letter-spacing: 0;
                display: inline-block;
                text-align: center;
                margin: 20px 0;
            }

            .c-productGridItem__stars {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 18px;
                margin-top: 30px;
            }

            .c-productGridItem__priceBox {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 10px;
            }

                .c-productGridItem__price {
                    font-family: Gotham Book;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1;
                    letter-spacing: 0;
                    text-transform: uppercase; 
                }

                .c-productGridItem__price--previous {
                    font-family: Gotham Book;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1;
                    letter-spacing: 0;
                    text-transform: uppercase;
                    color: #7f7f7f;
                    margin-top: 3px;
                    display: inline-block;
                    position: relative;

                    &:after {
                        content: '';
                        height: 2px;
                        background-color: #7f7f7f;
                        bottom: 54%;
                        width: 100%;
                        position: absolute;
                        left: 0;
                    }
                }                

            .c-productGridItem__buttonWrap {
                display: flex;
                align-items: center;
                justify-content: center;
            }


</style>