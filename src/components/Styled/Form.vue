<template>
<div>
    <div class="u-bg-black">$color-black</div>
    <div class="u-bg-white">$color-white</div>
    <div class="u-bg-primary">$color-primary-red</div>

    <div class="u-bg-red">$active-red</div>
    <div class="u-bg-green">$success-green</div>
    <div class="u-bg-yellow">$warning-yellow</div>
    <div class="u-bg-red">$error-red</div>

    <div class="u-bg-primary">$color-primary</div>
    <div class="u-bg-secondary">$color-secondary</div>
    <div class="u-bg-base">$color-base</div>

    <div class="u-bg-active">$color-active</div>
    <div class="u-bg-success">$color-success</div>
    <div class="u-bg-warning">$color-warning</div>
    <div class="u-bg-error">$color-error</div>
</div>
</template>

<script>

/**
 * Color Variables
 */
export default {
	name: "Form",
	computed: {

	},
	methods: {

	}
};
</script>

<docs>
```scss 
/* Colors */
$color-black: #000;
$color-white: #fff;
$color-primary-red: #ef2e2d;

$active-red: #ef2e2d;
$success-green: #7fc563;
$warning-yellow: #faa846;
$error-red: #ef2e2d;

$color-primary: $color-primary-red;
$color-secondary: $color-black;
$color-base: $color-black;

/* State Colors */
$color-active: $active-red;
$color-success: $success-green;
$color-warning: $warning-yellow;
$color-error: $error-red;
```

</docs>

<style lang="scss">

/* Colors */
$color-black: #000;
$color-white: #fff;
$color-primary-red: #ef2e2d;

$active-red: #ef2e2d;
$success-green: #7fc563;
$warning-yellow: #faa846;
$error-red: #ef2e2d;

$color-primary: $color-primary-red;
$color-secondary: $color-black;
$color-base: $color-black;

/* State Colors */
$color-active: $active-red;
$color-success: $success-green;
$color-warning: $warning-yellow;
$color-error: $error-red;

// @custom-media --mobile-large (min-width: 480px);
// @custom-media --mobile-small-max (max-width: 39.938em);
// @custom-media --mobile-max (max-width: 47.9375em);
// @custom-media --tablet (min-width: 48em);
// @custom-media --tablet-max (max-width: 63.9375em);
// @custom-media --tablet-large (min-width: 64em);
// @custom-media --tablet-large-max (max-width: 73.75em);
// @custom-media --desktop (min-width: 73.75em);
// @custom-media --desktop-medium (min-width: 80em);
// @custom-media --desktop-large (min-width: 90em);

</style>