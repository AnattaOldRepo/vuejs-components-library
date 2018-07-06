<template>
    <div class="c-chip"
        v-if="active"
    >
        <span class="c-chip__text">{{ text }}</span>

        <svg class="c-chip__remove" 
            v-if="!noRemove"
            @click="remove(value)"
            version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 208.891 208.891" style="enable-background:new 0 0 208.891 208.891;" xml:space="preserve"><path d="M0,170l65.555-65.555L0,38.891L38.891,0l65.555,65.555L170,0l38.891,38.891l-65.555,65.555L208.891,170L170,208.891             l-65.555-65.555l-65.555,65.555L0,170z"/></svg>
    </div>
</template>

<script>


export default {
    name: 'Chip',
    data: () => {
        return {
            active: true
        }
    },
    components: {

    },
	props:{
        /**
         * Value of chip
         */
        value: {
            required: true
        },
        /**
         * Chip display text
         */        
        text: {
            type: String,
            required: true
        },
        /**
         * Unable to remove chip
         */        
        noRemove: {
            type: Boolean,
            default: false
        },        
	},
    computed: {

    },

    /**
     * Triggered on clicking option
     * Emits value to parent
     * @public
     * @param {any} value
     */
    methods: {
        remove(value) {
            this.active = !this.active
            /**
             * After option selected event
             * @event removeChip
             * @type {any}
             */            
            this.$emit('removeChip', value);
        }
    }  
}
</script>
<docs>

```jsx
<section>
    <div class="chips">
        <Chip :value=1 text="One"  noRemove/>
        <Chip :value=2 text="Two" noRemove/>
        <Chip :value=3 text="Three" noRemove/>
        <Chip :value=4 text="Four" noRemove/>
    </div>

    <div class="chips">
        <Chip :value=1 text="One"/>
        <Chip :value=2 text="Two"/>
        <Chip :value=3 text="Three"/>
        <Chip :value=4 text="Four"/>
    </div>
</section>
```
</docs>


<style lang="postcss">

.chips {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px; */
    margin-bottom: 20px;
}

.c-chip {
    border-radius: 50px;
    background-color: #ee2e2d;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5px 22px;
    display: inline-flex;
    line-height: 1;
    cursor: default;
}

    .c-chip__text {
        font-size: 13px;
        line-height: 1;
        font-family: Gotham Book;
        color: #fff;
        white-space: nowrap;
    }

    .c-chip__remove {
        width: 6px;
        height: 6px;
        fill: #fff;
        cursor: pointer;
        margin-left: 5px;
    }	
</style>