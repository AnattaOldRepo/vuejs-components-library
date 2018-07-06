<template>
<div></div>
</template>

<script>

/**
 * Color Variables
 */
export default {
    name: "Colors",
};

</script>

<docs>
``` 
<section>
    <Colors/>
    <h2 class="c-subheader">Base Colors</h2>
    <div class="color-group">
        <div class="color u-bgColor--black u-color--white">$color-black: #000</div>
        <div class="color u-bgColor--white">$color-white: #fff</div>
        <div class="color u-bgColor--red">$color-red: #ee2e2d</div>
        <div class="color u-bgColor--green">$color-black: #7fc563</div>
        <div class="color u-bgColor--orange">$color-orange: #faa846</div>
    </div>

    <h2 class="c-subheader">Palette Colors</h2>
    <div class="color-group">
        <div class="color u-bgColor--primary">$color-primary: $color-red</div>
        <div class="color u-bgColor--secondary u-color--white">$color-secondary: $color-black</div>
        <div class="color u-bgColor--accent1">$color-accent1: $color-green</div>
        <div class="color u-bgColor--accent2">$color-accent2: $color-orange</div>
        <div class="color u-bgColor--accent3">$color-accent3: $color-red</div>
    </div>

    <h2 class="c-subheader">State Colors</h2>
    <div class="color-group">
        <div class="color u-bgColor--active">$color-active: $color-red</div>
        <div class="color u-bgColor--success">$color-success: $color-green</div>
        <div class="color u-bgColor--warning">$color-warning: $color-orange</div>
        <div class="color u-bgColor--error">$color-error: $color-red</div>
    </div>
</section>
```

</docs>


<style lang="postcss">

/* // @import "../css/main.css"; */


/* @import '../../css/main.css'; */
/* // @import '../../css/settings/colors.css'; */

.color-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.color {
    padding: 20px;
    font-family: Gotham Book;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;      
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
}

</style>