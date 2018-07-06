<template>
	<div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Typography",
};
</script>
<docs>
Typography Class names shared globally
* c-caption
* c-caption--2
* c-caption--3
* c-body
* c-body--2
* c-subheader
* c-subheader--2
* c-title
* c-title--2
* c-headline
* c-headline--2
* c-headline--3
* c-display
* c-display--2
* c-display--3
* c-jumbo
* c-jumbo--2
```
<section>
	<Typography/>
	<h2 class="c-caption">Caption</h2>
	<h2 class="c-caption--2">Caption 2</h2>
	<h2 class="c-caption--3">Caption 3</h2>
	<h2 class="c-body">Body</h2>
	<h2 class="c-body--2">Body2</h2>
	<h2 class="c-subheader">Subheader</h2>
	<h2 class="c-subheader--2">Subheader2</h2>
	<h2 class="c-title">Title</h2>
	<h2 class="c-title--2">Title2</h2>
	<h2 class="c-headline">Headline</h2>
	<h2 class="c-headline--2">Headline2</h2>
	<h2 class="c-headline--3">Headline3</h2>
	<h2 class="c-display">Display</h2>
	<h2 class="c-display--2">Display2</h2>
	<h2 class="c-display--3">Display3</h2>
	<h2 class="c-jumbo">Jumbo</h2>
	<h2 class="c-jumbo--2">Jumbo2</h2>
</section>
```
</docs>

<style class="postcss" scoped>
h2 {
	display: block;
}
</style>
