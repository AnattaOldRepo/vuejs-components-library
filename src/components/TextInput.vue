<template>
    <div class="c-textInputfield">
        <label class="c-textInputfieldLabel">
            {{ label }}
        </label>
        <input
            :style=styleObj
            placeholder="placeholder"
            v-model="value"
            type="text"
            :required="required ? true : false"
        >
    </div>
</template>

<script>


export default {
    name: 'TextInput',
    components: {

    },
    data: function () {
        return {
            value: ''
        }
    }, 
	props:{
        /**
         * Field Label
         */
        label: {
            type: String,
            required: false
        },
        /**
         * Placeholder
         */        
        placeholder: {
            type: String,
            required: false
        },
        /**
         * Required
         */        
        required: {
            type: Boolean,
            default: false
        },
        /**
         * Width of Input
         */           
        width: {
            type: [Number, Boolean, String],
            default: 'auto'
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
        
        styleObj() {
            return {
                width: this.width,
            }
        }
    }
}
</script>
<docs>

```jsx
<section>
  <div class="fields">
    <TextInput 
        label="Field Label"
        placeholder="Type Your Message Here"/>
    <TextInput 
        label="Field Label"
        placeholder="Type Your Message Here"
    />
    <TextInput 
        label="Field Label"
        placeholder="Type Your Message Here"
        width="200px"
    />
    <TextInput required 
        placeholder="Type Your Message Here"
        label="Field Label"
        width="200px"
    />
  </div>
</section>
```
</docs>


<style lang="postcss">

.fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

.c-textInputfield {
    display: flex;
    flex-direction: column;

    input {
        padding: 8px;
        width: 100%;
        font-family: Gotham Book;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0;  
        border: 1px solid #d7d7d7; 

        &:focus {
            outline: none;
        }

        &:hover {
            border-color: #aeaeae;
        }

        &:active,
        &:focus {
            border-color: #ee2e2d;
        }         

        &::-webkit-input-placeholder {
        color: #bfbfbf;
        }
        &::-moz-placeholder {
        color: #bfbfbf;
        }
        &:-ms-input-placeholder {
        color: #bfbfbf;
        }
        &:-moz-placeholder {
        color: #bfbfbf;
        }        
    }
}

    .c-textInputfieldLabel {
        font-family: Gotham Book;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0;   
    }
</style>