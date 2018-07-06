<template>
	<a class="c-btn"
        :class="classObj"
        :to="to"
        :text="text"
        :icon="icon"
    >
        <div class="c-btn__inner">
            <Icon v-if="icon && iconLeft && !arrow"
                class="c-btn__icon"
                :icon="icon"
            />
            <span class="c-btn__text">{{ text }}</span>
            <Icon v-if="icon && !iconLeft && !arrow"
                class="c-btn__icon"
                :icon="icon"
            />
            <svg v-if="arrow"
                class="c-btn__arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve"><g><g><path d="M507.904,245.317L344.608,63.909c-2.848-3.168-6.848-5.056-11.072-5.28c-4.352-0.288-8.384,1.248-11.552,4.096l-47.552,42.784c-6.56,5.92-7.072,16.032-1.184,22.592l71.904,79.904H16c-8.832,0-16,7.168-16,16v64c0,8.832,7.168,16,16,16h329.152l-71.904,79.872c-5.92,6.592-5.376,16.672,1.184,22.624l47.552,42.816c3.072,2.752,6.912,4.096,10.72,4.096c4.384,0,8.704-1.792,11.904-5.28l163.296-181.408C513.376,260.645,513.376,251.397,507.904,245.317z"/></g></g></svg>
        </div>
    </a>
</template>

<script>

import Icon from '~/components/Icon.vue'

export default {
    name: 'Button',
    components: {
        Icon
    },
	props:{
        /**
         * Button Text
         */
		text: {
			type: String,
			default: ''
        },
        /**
         * Link, if link
         */
		to: {
			type: [String, Boolean],
			default: false
        },
        /**
         * Specifically for Arrow buttons
         */
		arrow: {
			type: Boolean,
			default: false
        },        
        /**
         * Icon name, if used
         */
		icon: {
			type: [String, Boolean],
			default: false
        },
        /** 
         * Icon on left of text
         */
        iconLeft: {
            type: Boolean,
            default: false
        },
        /**
         * Size of button
        */
		size: {
			type: String,
            default: 'small',
        },    
        /**
         * Alternate type of button
        */
		alt: {
			type: [String, Boolean],
            default: false,
        },                    
        /**
         * Disabled state
         */
        disabled: {
            type: Boolean,
            default: false
        }
	},
    computed: {
        classObj() {
            return {
                'c-btn--small': this.size === 'small',
                'c-btn--med': this.size === 'med',
                'c-btn--large': this.size === 'large',

                'c-btn--secondary': this.alt === 'secondary',
                'c-btn--accent': this.alt === 'accent',
                'c-btn--ghost': this.alt === 'ghost',

                'c-btn--iconLeft': this.iconLeft === true,
                'c-btn--iconRight': this.iconLeft === false,
                'c-btn--hasIcon': this.icon,
                'c-btn--isDisabled': this.disabled === true,
                'c-btn--arrow': this.arrow === true
            }
        },
    }
}
</script>
<docs>

```jsx
<section>
    <div class="buttons">
        <Button text="Button" size="small" />
        <Button text="Button" size="small" alt="secondary"/>
        <Button text="Button" size="small" alt="ghost"/>
        <Button text="Button" size="small" disabled/>
        <Button text="Button" size="small" icon="play" iconLeft/>
        <Button text="Button" size="small" arrow/>
    </div>

    <div class="buttons">
        <Button text="Button" size="med" />
        <Button text="Button" size="med" alt="secondary"/>
        <Button text="Button" size="med" alt="ghost"/>
        <Button text="Button" size="med" disabled/>
        <Button text="Button" size="med" icon="play" iconLeft/>
        <Button text="Button" size="med" arrow/>
    </div>

    <div class="buttons">
        <Button text="Button" size="large" />
        <Button text="Button" size="large" alt="secondary"/>
        <Button text="Button" size="large" alt="ghost"/>
        <Button text="Button" size="large" disabled/>
        <Button text="Button" size="large" icon="play" iconLeft/>
        <Button text="Button" size="large" arrow/>
    </div>    
</section>
```
</docs>


<style lang="postcss">
.buttons {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;    
}

.c-btn {
    display: inline-block;
    transition: .3s all ease;
    background-color: #ee2e2d;
    border: 2px solid #ee2e2d;
    height: 36px;
    min-width: 124px;
    cursor: pointer;

    .c-btn__icon {
        svg use#Mask {
            fill: #fff !important;
        }
    }    

    .c-svg.c-svg--iconOnly {
        width: auto;
        height: auto;
    }

    .c-btn__icon svg {
        width: 18px;
        height: 18px;
    } 

    &:hover {
        background-color: #f06a69;
        border-color: #f06a69;
    }

    &:active {
        background-color: #ca2726;
        border-color: #ca2726;
    }

    &:focus {
        outline: none;
        border: 2px solid #76abff;
    }

    &.c-btn--small {
        height: 36px;

        .c-btn__inner {
            /* padding: 12px 22px; */
        }

        .c-btn__icon svg {
            width: 18px;
            height: 18px;
        }
    }    

    &.c-btn--med {
        height: 44px;

        .c-btn__inner {
            /* padding: 12px 22px; */
        }

        .c-btn__icon svg {
            width: 22px;
            height: 22px;
        }
    }

    &.c-btn--large{
        height: 48px;

        .c-btn__inner {
            /* padding: 16px 26px; */
        }

        .c-btn__icon svg {
            width: 28px;
            height: 28px;
        }
    }

    &.c-btn--secondary {
        background-color: #000;
        border-color: #000;

        &:hover,
        &:active,
        &:focus {
            background-color: #fff;            
            border-color: #000;

            .c-btn__text {
                color: #000;
            }
        }
    }

    &.c-btn--accent {
        background-color: #7fc563;
        border-color: #7fc563;
    }

    &.c-btn--ghost {
        background-color: #fff;
        border-color: #ee2e2d;

        .c-btn__text {
            color: #ee2e2d;
        }

        .c-btn__icon {
            use#Mask {
                fill: #ee2e2d;
            }
        }

        &:hover,
        &:active,
        &:focus {
            background-color: #fff;
            color: #ee2e2d;
        }
    }

    &.c-btn--isDisabled {
        background-color: #f0f0f0;
        border-color: #f0f0f0;
        cursor: default;

        .c-btn__text {
            color: #b3b3b3;
        }

        .c-btn__icon {
            use#Mask {
                fill: #b3b3b3;
            }
        }
    }   
    
    &.c-btn--arrow {

        &:hover,
        &:active,
        &:focus {
            .c-btn__text {

            }

            .c-btn__arrow {
                margin-left: 16px;
                margin-right: -6px;
            }
        }
    }
}
    .c-btn__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        height: 100%;
    }

        .c-btn__arrow {
            width: 10px;
            height: 10px;
            margin-left: 10px;
            fill: #fff;
            transition: all .3s ease;
        }

        .c-btn__text {
            font-family: Gotham;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 2px;
            margin-top: 4px;
            color: #fff;

            .c-btn--hasIcon & {
                margin-top: 4px;
            }
        }

        .c-btn__icon {

            .c-btn--iconLeft & {
                margin-right: 10px;
            }

            .c-btn--iconRight & {
                margin-left: 10px;
            }
        }
</style>