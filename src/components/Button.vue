<template>
	<a class="c-btn"
        :class="classObj"
        :to="to"
        :text="text"
        :icon="icon"
    >
        <div class="c-btn__inner">
            <Icon v-if="icon && iconLeft"
                class="c-btn__icon"
                :icon="icon"
            />
            <span class="c-btn__text">{{ text }}</span>
            <Icon v-if="icon && !iconLeft"
                class="c-btn__icon"
                :icon="icon"
            />
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

                'c-btn--iconLeft': this.iconLeft === true,
                'c-btn--iconRight': this.iconLeft === false,
                'c-btn--hasIcon': this.icon,
                'c-btn--isDisabled': this.disabled === true
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
        <Button text="Button" size="small" alt="accent"/>
        <Button text="Button" size="small" alt="accent" disabled/>
        <Button text="Button" size="small" icon="play"/>
        <Button text="Button" size="small" icon="play" iconLeft/>

    </div>

    <div class="buttons">
        <Button text="Button" size="med" />
        <Button text="Button" size="med" alt="secondary"/>
        <Button text="Button" size="med" alt="accent"/>
        <Button text="Button" size="med" alt="accent" disabled/>
        <Button text="Button" size="med" icon="play"/>
        <Button text="Button" size="med" icon="play" iconLeft/>
    </div>

    <div class="buttons">
        <Button text="Button" size="large" />
        <Button text="Button" size="large" alt="secondary"/>
        <Button text="Button" size="large" alt="accent"/>
        <Button text="Button" size="large" alt="accent" disabled/>
        <Button text="Button" size="large" icon="play"/>
        <Button text="Button" size="large" icon="play" iconLeft/>
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
    }

    &.c-btn--accent {
        background-color: #7fc563;
        border-color: #7fc563;
    }

    &.c-btn--ghost {
        background-color: #f0f0f0;
        border-color: #f0f0f0;

        .c-btn__text {
            color: #b3b3b3;
        }

        .c-btn__icon {
            use#Mask {
                fill: #b3b3b3;
            }
        }
    }

    &.c-btn--isDisabled {
        background-color: #f0f0f0;
        border-color: #f0f0f0;

        .c-btn__text {
            color: #b3b3b3;
        }

        .c-btn__icon {
            use#Mask {
                fill: #b3b3b3;
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

        .c-btn__text {
            font-family: Gotham;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 2px;
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