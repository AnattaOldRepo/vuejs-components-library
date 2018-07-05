<template>
<div class="c-button">
    <div class="c-button__inner">
        <span class="c-button__text color-red">Button</span>
        <span class="c-button__icon color-blue">x</span>
        <span class="c-button__icon color-green">x</span>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
export default {
	name: "Buttons",
	computed: {

},
	methods: {
		/**
		 * Increments the counter. This method is not marked @public and is not visible in the styleguide.
		 */
		increment() {
			this.$store.commit('increment')
			/**
			 * After increment event
			 * @event after
			 * @type {number}
			 * @public
			 */
			this.$emit("after", this.value);
		}
	}
};
</script>
<docs>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```jsx
<Buttons/>
```
</docs>


<style lang="postcss" scoped>

@import "../css/main.css";

$blue: #056ef0;

.c-button {
    display: inline-block;
}
    .c-button__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
        background-color: $blue;
    }

        .c-button__text {
            font-family: Gotham;
            font-weight: 700;
            text-transform: uppercase;
            color: gray(10%, 50%);
        }

        .c-button__icon {

        }
</style>