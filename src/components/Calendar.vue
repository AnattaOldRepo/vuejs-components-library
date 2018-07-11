<template>
    <div :class="{'pikaday-hideaway': dateOutsideRestriction}">
        <input id="datepicker-input"
            style="height: 0; width: 0; padding: 0; background-color: transparent; color: twhite; border: none;"
            :value="date"
        />
    </div>
</template>

<script>

import Pikaday from 'pikaday'
import moment from 'moment'

export default {
    name: 'Calendar',

    components: {

    },

    data: function() {
        return {
            date: null,
            dateOutsideRestriction: false
        }
    },    

    props: {
        minDate: {
            type: [Boolean, Number, String],
            default: false
        },
        maxDate: {
            type: [Boolean, Number, String],
            default: false
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD'
        }
    },

    mounted() {
        const vm = this

        this.date = moment()

        this.$nextTick(() => {

            const minDate = moment(vm.minDate).toDate()
            const maxDate = moment(vm.maxDate).toDate()

            this.dateOutsideRestriction = moment(this.date, 'format').diff(maxDate) > 0

            console.log('run in next tick')

            const picker = new Pikaday({
                field: document.getElementById('datepicker-input'),
                format: vm.format,
                bound: false,
                onSelect: () => {
                    vm.date = picker.toString()
                    vm.changeDate()
                },
                minDate: moment(vm.minDate).toDate(),
                maxDate: moment(vm.maxDate).toDate(),

                showDaysInNextAndPreviousMonths: true,
                enableSelectionDaysInNextAndPreviousMonths: false,

                i18n: {
                    previousMonth : 'Previous Month',
                    nextMonth     : 'Next Month',
                    months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
                    weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                    weekdaysShort : ['Su','M','T','W','Th','F','Sa']
                }     
            })
        })
    },    

    methods: {
        /**
         * Triggered on setting a new date
         * @public
         */
        changeDate() {
            /**
             * After date selected
             * @event 
             * @type {emit}
             */
            this.$emit('changeDate', this.date);
        },          
    }      
}

</script>

<docs>

```jsx
<section>
    <Calendar
        minDate='06-23-2018'
        maxDate='09-28-2018'
        format="MM-DD-YYY"
    />    
</section>
```
</docs>

<style lang="scss">
.pika-single {
    z-index: 9999;
    display: inline-block;
    position: relative;
    color: #333;
    background: #fff;
    border: 1px solid #ccc;
    border-bottom-color: #bbb;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: none;
    box-shadow: 0px 1px 20px 2px rgba(0, 0, 0, .1);
    margin-bottom: 20px;
}

/*
clear child float (pika-lendar), using the famous micro clearfix hack
http://nicolasgallagher.com/micro-clearfix-hack/
*/
.pika-single:before,
.pika-single:after {
    content: " ";
    display: table;
}
.pika-single:after { clear: both }
.pika-single { *zoom: 1 }

.pika-single.is-hidden {
    display: none;
}

.pika-single.is-bound {
    position: absolute;
    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);
}

.pika-lendar {
    float: left;
    width: 240px;
    margin: 8px;
}

.pika-title {
    position: relative;
    text-align: center;
    padding-top: 5px;
    margin-bottom: 15px;
}

.pika-label {
    display: inline-block;
    *display: inline;
    position: relative;
    z-index: 9999;
    overflow: hidden;
    margin: 0;
    padding: 5px 3px;
    line-height: 20px;
    background-color: #fff;

    font-size: 19px;
    font-family: Gotham Book;
    font-weight: 400;
    letter-spacing: 0;    
}
.pika-title select {
    cursor: pointer;
    position: absolute;
    z-index: 9998;
    margin: 0;
    left: 0;
    top: 5px;
    filter: alpha(opacity=0);
    opacity: 0;
}

.pika-prev,
.pika-next {
    display: block;
    cursor: pointer;
    position: relative;
    outline: none;
    border: 0;
    padding: 0;
    width: 20px;
    height: 30px;
    /* hide text using text-indent trick, using width value (it's enough) */
    text-indent: 20px;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 75% 75%;
    opacity: .5;
    *position: absolute;
    *top: 0;
}

.pika-prev:hover,
.pika-next:hover {
    opacity: 1;
}

.pika-prev,
.is-rtl .pika-next {
    float: left;
    background-image: url('data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');
    *left: 0;
    margin-left: 18px;
}

.pika-next,
.is-rtl .pika-prev {
    float: right;
    background-image: url('data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');
    *right: 0;
    margin-right: 18px;
}

.pika-prev.is-disabled,
.pika-next.is-disabled {
    cursor: default;
    opacity: .2;
}

.pika-select {
    display: inline-block;
    *display: inline;
}

.pika-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
}

.pika-table th,
.pika-table td {
    width: 14.285714285714286%;
    padding: 0;
}

.pika-table th {
    color: #000;
    font-size: 13px;
    line-height: 25px;
    font-weight: bold;
    text-align: center;
    font-family: Gotham Book;
    font-weight: 400;
    opacity: .5;
    cursor: default;
    text-decoration: none;
}

.pika-button {
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    border: 0;
    margin: 0;
    width: 100%;
    padding: 7px;
    background: #fff;

    font-size: 16px;
    line-height: 19px;
    text-align: center;
    font-weight: 400;
    font-family: Gotham Book;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;    
}

.pika-week {
    font-size: 11px;
    color: #999;
}

.is-today .pika-button {
    color: #33aaff;
    font-weight: bold;
}

.is-selected .pika-button,
.has-event .pika-button {
    color: #fff;
    font-weight: bold;
    background: #ee2e2d;
    border-radius: 50px;

    .pikaday-hideaway & {
        background: #fff;
        font-weight: normal;
        color: #000;
    }
}

// .has-event .pika-button {
    // background: #005da9;
    // box-shadow: inset 0 1px 3px #0076c9;
// }

.is-disabled .pika-button,
.is-inrange .pika-button {
    background: #D5E9F7;
}

.is-startrange .pika-button {
    color: #fff;
    background: #6CB31D;
    box-shadow: none;
    border-radius: 3px;
}

.is-endrange .pika-button {
    color: #fff;
    background: #33aaff;
    box-shadow: none;
    border-radius: 3px;
}

.is-disabled .pika-button {
    pointer-events: none;
    cursor: default;
    color: #999;
    opacity: .3;
}

.is-outside-current-month .pika-button {
    color: #999;
    opacity: .3;
}

.is-selection-disabled {
    pointer-events: none;
    cursor: default;
}

.pika-button:hover,
.pika-row.pick-whole-week:hover .pika-button {
    // color: #fff;
    // background: #999;
    // box-shadow: none;
    // border-radius: 50px
}

/* styling for abbr */
.pika-table abbr {
    border-bottom: none;
    text-decoration: none;
    cursor: default;
}   

.pika-title .pika-label:nth-of-type(2) {
    display: none;
}

.pika-lendar {
    width: auto;
}

</style>
