<template>
    <div class="c-checkbox"
        :class="{'is-checked': isChecked}"
        @click.prevent="toggleCheckbox()"
    >
        <span class="c-checkbox__text">{{ text }}</span>  
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
        value: {
            required: true
        },
        text: {
            type: [String, Number],
            required: true
        },
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
<section>
    <Checkbox text="checkbox" value="checkbox-1"/>
    <Checkbox text="checkbox" value="checkbox-2"/>
    <Checkbox text="checkbox" value="checkbox-3"/>
    <Checkbox text="checkbox" value="checkbox-4"/>
    <Checkbox text="checkbox" value="checkbox-5"/>
</section>
```
</docs>


<style lang="postcss">
.c-checkbox     {
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
    }

    &::after {
        height: 4px;
        width: 8px;
        left: 3px;
        color: white;
        top: 7px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        content: "";
        display: none;
    }  


    &.is-checked {
        &::before {
            background-color: black;
        }                        
        &::after {
            display: block;
        }
    }
}

    .c-checkbox__text {
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