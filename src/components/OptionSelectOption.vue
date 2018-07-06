<template>
    <div class="c-optionSelect__option"
        :class="{'is-active': active}"
        @click="selectOption(selectValue)"
    >
        <span class="c-optionSelect__mainText" 
            v-if="mainText"
        >{{ mainText }}</span>
        <span class="c-optionSelect__subText"
            v-if="subText"
        >{{ subText }}</span>
        <div class="c-optionSelect__optionCheck">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26">
                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
            </svg>				
        </div>
    </div>
</template>

<script>


export default {
    name: 'OptionSelectOption',
    data: () => {
        return {
            active: false
        }
    },
    components: {

    },
	props:{
        /**
         * Value emitted when selected
         */
        selectValue: {
            required: true
        },
        /**
         * Large text
         */        
        mainText: {
            type: [String, Boolean],
            required: false
        },
        /**
         * Small text
         */            
        subText: {
            type: [String, Boolean],
            required: false
        }
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

        /**
         * Triggered on clicking option
         * Emits value to parent
         * @public
         * @param {any}
         */
        selectOption(value) {
            /**
             * After option selected event
             * @event selectOption
             * @type {any}
             */
            this.$emit('selectOption', this.value);
            this.active = !this.active
        },  
    }  
}
</script>
<docs>

```jsx
<section class="option-select-options">
    <OptionSelectOption
        value=1
        mainText="One"
        subText="First Sub"
    />
    <OptionSelectOption
        value=2
        mainText="Two"
        subText="Second Sub"
    />
    <OptionSelectOption
        value=3
        mainText="Three"
        subText="Third Sub"
    />
    <OptionSelectOption
        value=4
        mainText="Four"
        subText="Fourth Sub"
    />
</section>
```
</docs>


<style lang="postcss">

.option-select-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

.c-optionSelect__option {
    border-radius: 10px;
    border: 3px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12px;
    cursor: pointer;

    &:hover {
        border-color: #7FC464;
    }

    &.is-active {
        border-color: #7FC464;

        .c-optionSelect__optionCheck {
            display: block;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;							
        }

            svg {
                width: 13px;
                fill-color: white;
                fill: white;
                margin-left: -1px;
                margin-bottom: -1px;
            }						
    }
}

    .c-optionSelect__optionCheck {
        display: none;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        left: 50%;
        top: -2px;
        background-color: #7FC464;
        border-radius: 100px;
        color: #fff;
        width: 24px;
        height: 24px;
    }

    .c-optionSelect__mainText {
        display: inline-block;
        margin-bottom: 6px;
        font-family: Gotham Book;
        font-size: 19px;
        letter-spacing: 2px;
        font-weight: 400;
        text-transform: uppercase;
    }	

    .c-optionSelect__subText {
        font-family: Gotham Book;
        font-size: 16px;
        letter-spacing: 0;
        font-weight: 400;
    }
</style>