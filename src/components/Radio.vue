<template>
    <div class="c-radio"
        :class="{'is-checked': isChecked, 'is-secondary': secondary}"
        @click.prevent="toggleCheckbox()"
    >
        <span class="c-radio__text">{{ text }}</span>  
    </div>     
</template>

<script>


export default {
    name: 'Radio',
    components: {

    },
    data: () => {
        return {
            isChecked: false
        }
    },
	props:{
        /**
        * Radio value
        */
        value: {
            required: true
        },
        /**
        * Radio label text
        */        
        text: {
            type: [String, Number],
            required: true
        },
        /**
        * Secondary radio styling
        */
        secondary: {
            teyp: Boolean,
            default: false
        }
	},
    computed: {
        classObj() {
            return {

            }
        },
    },
    methods: {
        toggleCheckbox() {
            this.isChecked = !this.isChecked
        }
    }

}
</script>
<docs>

```jsx
<section class="radios-wrap">
    <div class="radios">
        <Radio text="radio" value="radio-1"/>
        <Radio text="radio" value="radio-2"/>
        <Radio text="radio" value="radio-3"/>
    </div>
</section>
```
</docs>


<style lang="postcss">
.radios-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;;
}

.c-radio     {
    position: relative;
    margin-bottom: 9px;
    cursor: pointer;

    &::before,
    &::after {
        position: absolute;
        content: "";
        display: inline-block;
    }  

    &::before {
        height: 14px;
        width: 14px;
        border: 1px solid #000;
        left: 0px;
        top: 3px;
        border-radius: 10px;

        .is-secondary & {
            border-color: #ee2e2d;
        }
    }

    &::after {
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        height: 8px;
        width: 8px;
        left: 3px;
        background-color: black;
        top: 6px;
        transform: rotate(-45deg);
        content: "";
        display: none;
        border-radius: 10px;   

        .is-secondary & {
            background-color: #ee2e2d;
        }     
    }  


    &.is-checked {
        &::before {
            // background-color: black;
        }                        
        &::after {
            display: block;
        }
    }
}

    .c-radio__text {
        font-family: Gotham Book;
        display: block;
        font-size: 16px;
        line-height: 1;
        padding-top: 3px;
        padding-left: 25px;
        padding-right: 10px;
        letter-spacing: 0;
    }
</style>