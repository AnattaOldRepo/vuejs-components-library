<template>
	<span v-if="svg"
        class="c-svg"
        :class="svgClassObj"
        v-html="svg"
    ></span>
</template>

<script>
export default {
    name: 'Icon',
	props:{
        /**
         * Name of icon to be used, available in iconList
         */
		icon: {
			type: String,
            default: "",
            required: true
        },
        /**
         * Shape of icon container if used: 'square', 'circle'
         */
        shape: {
            type: [String, Boolean],
            default: false,
            required: false
        },
        /**
         * Background color of icon wrapper, defaults to nothing
         */
        bgColor: {
            type: [String, Boolean],
            default: false
        },
        /**
         * Size of icon, default is used to only include the icon without any wrapper sizing
        */
		size: {
			type: String,
            default: 'iconOnly',
        },
   
	},
	data() {
		return {
            iconList: {
                play: `<svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M16,2.66666667 C23.3637967,2.66666667 29.3333333,8.63620334 29.3333333,16 C29.3333333,23.3637967 23.3637967,29.3333333 16,29.3333333 C8.63620334,29.3333333 2.66666667,23.3637967 2.66666667,16 C2.66666667,8.63620334 8.63620334,2.66666667 16,2.66666667 Z M16,26.9090909 C22.0249245,26.9090909 26.9090909,22.0249245 26.9090909,16 C26.9090909,9.97507546 22.0249245,5.09090909 16,5.09090909 C9.97507546,5.09090909 5.09090909,9.97507546 5.09090909,16 C5.09090909,22.0249245 9.97507546,26.9090909 16,26.9090909 Z M15.9047619,12 L21.1428571,18.6666667 L10.6666667,18.6666667 L15.9047619,12 Z" id="path-1"></path> </defs> <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-756.000000, -2262.000000)" id="Button/Icon"> <g transform="translate(746.000000, 2252.000000)"> <g id="Icon" transform="translate(8.000000, 8.000000)"> <rect id="Bounding-Box" x="0" y="0" width="32" height="32"></rect> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <use id="Mask" fill="#fff" fill-rule="nonzero" transform="translate(16.000000, 16.000000) rotate(90.000000) translate(-16.000000, -16.000000) " xlink:href="#path-1"></use> <g id="Mixin/Fill/White" mask="url(#mask-2)" fill="#FFFFFF"> </g> </g> </g> </g> </g></svg>`,

                info: `<svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M16,29.3333333 C8.648,29.3333333 2.66666667,23.3533333 2.66666667,16 C2.66666667,8.64933333 8.648,2.66666667 16,2.66666667 C23.352,2.66666667 29.3333333,8.648 29.3333333,16 C29.3333333,23.3533333 23.352,29.3333333 16,29.3333333 Z M16,5.33333333 C21.8813333,5.33333333 26.6666667,10.1186667 26.6666667,16 C26.6666667,21.8813333 21.8813333,26.6666667 16,26.6666667 C10.1186667,26.6666667 5.33333333,21.8813333 5.33333333,16 C5.33333333,10.1186667 10.1186667,5.33333333 16,5.33333333 Z M17.3333333,20 L17.3333333,14.6666667 C17.3333333,13.9306667 16.7373333,13.3333333 16,13.3333333 L13.3333333,13.3333333 L13.3333333,16 L14.6666667,16 L14.6666667,20 L12,20 L12,22.6666667 L20,22.6666667 L20,20 L17.3333333,20 Z M16,12.3333333 C16.9204746,12.3333333 17.6666667,11.5871412 17.6666667,10.6666667 C17.6666667,9.74619208 16.9204746,9 16,9 C15.0795254,9 14.3333333,9.74619208 14.3333333,10.6666667 C14.3333333,11.5871412 15.0795254,12.3333333 16,12.3333333 Z" id="path-1"></path> </defs> <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-928.000000, -2262.000000)" id="Button/Icon---Rounded"> <g transform="translate(918.000000, 2252.000000)"> <g id="Icon/Info" transform="translate(8.000000, 8.000000)"> <rect id="Bounding-Box" x="0" y="0" width="32" height="32"></rect> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <g id="Mask"></g> <g id="Mixin/Fill/Black" mask="url(#mask-2)" fill="#fff" fill-rule="evenodd"> <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect> </g> </g> </g> </g> </g></svg>`
            }
        }
	},    
    
    computed: {
        svg() {
            return this.iconList[this.icon]
        },

        svgClassObj() {
            return {
                'c-svg--circle': this.shape === 'circle',
                'c-svg--square':  this.shape === 'square',
                'c-svg--small': this.size === 'small',
                'c-svg--med': this.size === 'med',
                'c-svg--large': this.size === 'large',
                'c-svg--iconOnly': this.shape === false,
                'u-bgColor--black': this.bgColor === 'black',
                'u-bgColor--red': this.bgColor === 'red',
                'u-bgColor--green': this.bgColor === 'green',
                'u-bgColor--orange': this.bgColor === 'orange',
            }
        },
    },

    methods: {
 
    },
}
</script>

<docs>

```jsx
<section>
    <div class="icons">
        <Icon icon="play" size="small"/>
        <Icon icon="play" size="med"/>
        <Icon icon="play" size="large"/>
    </div>

    <div class="icons">
        <Icon icon="play" size="small" shape="circle" bgColor="red" />
        <Icon icon="play" size="small" shape="circle" bgColor="green" />
        <Icon icon="play" size="small" shape="circle" bgColor="orange" />
        <Icon icon="play" size="small" shape="circle" bgColor="black" />
    </div>

    <div class="icons">
        <Icon icon="play" size="small" shape="square" bgColor="red" />
        <Icon icon="play" size="small" shape="square" bgColor="green" />
        <Icon icon="play" size="small" shape="square" bgColor="orange" />
        <Icon icon="play" size="small" shape="square" bgColor="black" />    
    </div>

    <div class="icons">
        <Icon icon="play" size="small" shape="square" bgColor="red" />
        <Icon icon="play" size="med" shape="square" bgColor="red" />
        <Icon icon="play" size="large" shape="square" bgColor="red" />
    </div>    

    <div class="icons">
        <Icon icon="play" size="small" shape="circle" bgColor="red" />
        <Icon icon="play" size="med" shape="circle" bgColor="red" />
        <Icon icon="play" size="large" shape="circle" bgColor="red" />
    </div>        
</section>
```
</docs>

<style lang="postcss">
    .icons {
        display: flex;
        max-width: 200px;
        justify-content: space-between;
        margin-bottom: 20px;
        align-items: center;
    }

	.c-svg {
		display: inline-block;
		line-height: 0;


        &.u-bgColor--black,
        &.u-bgColor--red,
        &.u-bgColor--green,
        &.u-bgColor--orange {
            padding: 4px;

            svg #Mask {
                fill: #fff;
            }
        }

        &.c-svg--iconOnly {
            width: 28px;
            height: 28px;
            padding: 0;

            svg {
                width: 28px;
                height: 28px;  

                use#Mask {
                    fill: #000;
                }                              
            }            
        }        

        &.c-svg--square {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
        }

        &.c-svg--circle {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border-radius: 50px;
        }

        &.c-svg--small {
            width: 36px;
            height: 36px;

            svg {
                width: 20px;
                height: 20px;                
            }
        }

        &.c-svg--med {
            width: 40px;
            height: 40px;

            svg {
                width: 24px;
                height: 24px;                
            }            
        }

        &.c-svg--large {
            width: 48px;
            height: 48px;

            svg {
                width: 32px;
                height: 32px;                
            }                        
        }
	}
	.c-svg >>> svg {
		fill: currentColor;
		height: inherit;
		width: inherit;
	}
</style>
