<template>

</template>

<script>


export default {
    name: 'Progress Bar',
    components: {

    },
	props:{

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
  
</section>
```
</docs>


<style lang="postcss">

</style>