<template>
    <div class="c-textareafield">
        <label class="c-textareafieldLabel">
            {{ label }}
        </label>
        <textarea
            :style=styleObj
            :placeholder="placeholder"
            v-model="value"
            :required="required ? true : false"
        >
            {{ value }}
        </textarea>
    </div>
</template>

<script>


export default {
    name: 'Textarea',
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
         * Height of textarea
         */        
        height: {
            type: [Number, Boolean, String],
            default: '100px'
        },   
        /**
         * Width of textarea
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
                height: this.height
            }
        }
    }
}
</script>
<docs>

```jsx
<section>
  <div class="fields">
    <Textarea 
        label="Field Label"
        placeholder="Type Your Message Here"/>
    <Textarea 
        label="Field Label"
        placeholder="Type Your Message Here"
        required
    />
    <Textarea 
        label="Field Label"
        placeholder="Type Your Message Here"
        height="120px"
        width="250px"
        required
    />
    <Textarea required 
        placeholder="Type Your Message Here"
        label="Field Label"
        height="120px"
        width="250px"
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

.c-textareafield {
    display: flex;
    flex-direction: column;

    textarea {
        padding: 10px;
        height: 50px;
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

    .c-textareafieldLabel {
        font-family: Gotham Book;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0;   
    }
</style>