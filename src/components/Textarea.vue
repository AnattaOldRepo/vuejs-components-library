<template>
    <div class="c-field">
        <label class="c-fieldLabel">
            {{ label }}
        </label>
        <textarea
            placeholder="placeholder"
        >{{ content }}</textarea>
        <span class="c-fieldCaption">{{ caption }}</span>
    </div>
</template>

<script>


export default {
    name: 'Textarea',
    components: {

    },
	props:{
        /**
         * Field Label
         */
        label: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        },
        required: {
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
            }
        },
    }
}
</script>
<docs>

```jsx
<section>
  <div class="fields">
    <Textarea 
        label="Field Label"
        caption="Caption Text"
        placeholder="Type Your Message Here"/>
    <Textarea 
        label="Field Label"
        caption="Caption Text"
        placeholder="Type Your Message Here"
    />
    <Textarea 
        label="Field Label"
        caption="Caption Text"
        placeholder="Type Your Message Here"
    />
    <Textarea required 
        placeholder="Type Your Message Here"
        label="Field Label"
        caption="This is a caption"/>
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

.c-field {

    input,
    textarea {
        border: 1px solid #b3b3b3; 

        &:focus {
            outline: none;
        }
    }

    textarea {
        padding: 10px;
        height: 50px;
        width: 100%;
    }
}

    .c-fieldLabel {

    }

    .c-fieldCaption {

    }
</style>