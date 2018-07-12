<template>
    <div class="c-pseudoSelect">
        <div class="c-pseudoSelect__top"
            @click="toggleDropdown"
        >
            <span class="c-pseudoSelect__topText">{{ activeItem.text }}</span>
            <svg class="c-pseudoSelect__topIcon" width="14px" height="6px" viewBox="0 0 14 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="category" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="1440-01-category-top-default@2x" transform="translate(-1362.000000, -689.000000)" stroke="#000000">
                        <g id="category-toolbar" transform="translate(327.000000, 637.000000)">
                            <g id="Group-3" transform="translate(878.000000, 37.000000)">
                                <polyline id="arrow" points="170 15 164 21 158 15"></polyline>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>                
        </div>
        <div class="c-pseudoSelect__dropdown"
            v-if="dropdownOpen"
        >
            <ul class="c-pseudoSelect__list">
                <a  class="c-pseudoSelect__item" 
                    v-for="(item, index) in items"
                    :key="index"
                    @click.prevent="handleClick(item)"
                >{{ item.text }}</a>
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    name: 'PseudoSelectDropdown',
    components: {

    },
    mounted() {

    },
    data: function () {
        return {
            activeItem: { value: null, text: 'Select' },
            dropdownOpen: false,
            items: [
                {
                    value: 'value1', 
                    text: 'Text 1'
                },
                {
                    value: 'value2', 
                    text: 'Text 2'
                },
                {
                    value: 'value3', 
                    text: 'Text 3'
                }
            ]
        }
    }, 
    methods: {
        /**
         * Triggered on clicking option
         * Emits value to parent
         * @public
         * @param {any} item selected item
         */        
        handleClick(item) {
            this.activeItem = item
            this.toggleDropdown()

            /**
             * After option selected event
             * @event selectPseudoSelect
             * @type {any} item payload
             */            
            this.$emit('selectPseudoSelect', item)
        },

        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        }
    }
}
</script>
<docs>

```jsx
<section>
  <div class="pseudo-select-dropdown">
    <PseudoSelectDropdown />
  </div>
</section>
```
</docs>


<style lang="postcss">

.c-pseudoSelect {
	position: relative;
    width: 222px;
    height: 34px;
    margin: 0 auto;
}

    .c-pseudoSelect__top {
        position: relative;
        height: 100%;
        width: 100%;
        cursor: pointer;
	    border: 1px solid;

        &:before {
        	position: absolute;
        	height: 100%;
        	width: 48px;
        	right: 0;
        	top: 0;
        	background-color: #ececec;
        	content: '';
        }
    }   

        .c-pseudoSelect__topText {
			font-family: Gotham;
		    font-weight: 700;
		    font-size: 13px;
		    letter-spacing: 0.5px;
		    height: 100%;
		    background-color: white;
		    display: block;
		    width: 174px;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    padding-top: 1px;
        }

        .c-pseudoSelect__topIcon {
            position: absolute;
            right: 19px;
            top: 50%;
            width: 12px;
            transform: translateY(-50%);

            .is-open & {
                transform: rotate(180deg) translateY(3px);
            }
        }

    .c-pseudoSelect__dropdown {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 100%;
        width: 100%;
        background-color: #fff;
        border: 1px solid;
        border-top: none;
    }

        .c-pseudoSelect__list {
            padding: 6px 12px 6px;
            list-style: none;
            margin: 0;
            list-style: none;
        }

            .c-pseudoSelect__item {
                font-family: Gotham;
                font-size: 13px;
                cursor: pointer;
                display: block;
                margin: 0;
                padding: 6px;
                transition: all .3 ease;

                &:last-of-type {
                	margin-bottom: 0;
                }

                &:hover {
                    color: rgba(0,0,0,.5)
                }

        	    &.is-active {
	            	.c-pseudoSelect__link {
						border-bottom: 1px solid;
					    padding-bottom: 1px;                	
					}
                }                
            }

</style>