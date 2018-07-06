<template>
    <div class="c-progressBar"
        :class="{'c-progressBar--round': round}"
    >
        <span class="c-progressBar__percentage">30%</span>

        <div class="c-progressBar__progress"
            v-bind:style="{ width: percentage + '%'}"
        >
            <div class="c-progressBar__background"
                :class="progressColor"
            ></div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ProgressBar',
    components: {

    },
	props:{
        /**
         * Value of progress bar
         */
        percentage: {
            type: [Number, String],
            default: 0
        },
        /**
         * Color of progress bar
         */
        color: {
            type: String,
            default: "red"
        },
        /**
         * Round or angled corners
         */
        round: {
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

        progressColor() {
            let colorClass = 'u-bgColor--red'
            switch(this.color) {
                case 'green':
                    colorClass = 'u-bgColor--green'
                    break;
                case 'orange':
                    colorClass = 'u-bgColor--orange'
                    break;
                case 'black':
                    colorClass = 'u-bgColor--black'
                    break;                    
                default:
                    colorClass = 'u-bgColor--red'
            }      
            return colorClass
        }
    }
}
</script>
<docs>

```jsx
<section class="progress-bars-wrapper">
    <div class="progress-bars">
        <ProgressBar percentage="20" />
        <ProgressBar color="green" percentage="40" />
        <ProgressBar color="orange" percentage="60" />
        <ProgressBar color="black" percentage="80" />
    </div>

    <div class="progress-bars">
        <ProgressBar percentage="20" round/>
        <ProgressBar color="green" percentage="40" round/>
        <ProgressBar color="orange" percentage="60" round />
        <ProgressBar color="black" percentage="80" round />
    </div>      
</section>
```
</docs>


<style lang="postcss">
.progress-bars-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
}

.c-progressBar {
    position: relative;
    width: 100%;
    background-color: #eaeaeb;
    height: auto;
    margin-bottom: 10px;
    padding: 4px;

    &.c-progressBar--round {
        border-radius: 20px;
    }
}

    .c-progressBar__percentage {
        position: absolute;
        color: #000;
        transform: translateX(7px);
        left: 0%;
        line-height: 15px;
        letter-spacing: 0;
        font-size: 8px;
    }                            

    .c-progressBar__progress {
        position: relative;
        width: 0%;
        height: 14px;
        overflow: hidden;

        .c-progressBar--round & {
            border-radius: 50px;
        }

    }      

        .c-progressBar__background {
            position: absolute;
            left: 0;
            width: 100%;
            border-radius: 0;
            height: 14px;
            z-index: 1;
            /* background: #ee2e2d; */
            padding: 2px;

            /* &--black {
                background-color: #000;
            }

            &--green {
                background-color: #7fc563;
            }

            &--orange {
                background-color: #faa846;
            } */

            .c-progressBar--round & {
                border-radius: 50px;
            }
        }                        

</style>