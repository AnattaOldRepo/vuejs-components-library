<template>
    <div class="c-accordionItem">
        <div class="c-accordionItem__head"
            :class="{'is-open': accordionOpen}"
            @click="toggleItem"
        >
            <div class="c-accordionItem__titleBox">
                <h3 class="c-accordionItem__title">{{ title }}</h3>
                <h3 class="c-accordionItem__subtitle" v-if="subtitle">{{ subtitle }}</h3>
            </div>
            <span class="c-accordionItem__icon"
                v-if="!accordionOpen"
            >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.86 491.86" style="enable-background:new 0 0 491.86 491.86;" xml:space="preserve"><path d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"/></svg>
            </span>

            <span class="c-accordionItem__icon"
                v-if="accordionOpen"
            >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.858 491.858" style="enable-background:new 0 0 491.858 491.858;" xml:space="preserve"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"/></svg>
            </span>
        </div>

        <div class="c-accordionItem__dropdown"
            v-if="accordionOpen"
        >

            <img 
                v-if="contentImage"
                class="c-accordionItem__contentImage"
                :src="contentImage"
            >

            <div class="c-accordionItem__contentVideoWrapper"
                v-if="contentVideoUrl"
            >
                <iframe 
                    class="c-accordionItem__contentVideo"
                    id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    frameborder="0"
                    :src="contentVideoUrl"
                >
                </iframe>

                <!-- <svg class="c-accordionItem__contentVideoButton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 30.051 30.051" style="enable-background:new 0 0 30.051 30.051;" xml:space="preserve">
                    <g>
                        <path d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z"></path>
                        <path d="M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021   C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518   c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z"></path>
                    <g>
                </g></g>
                </svg> -->
            </div>


            <div class="c-accordionItem__content c-body" v-html="content"></div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'AccordionItem',
    data: function () {
        return {
            accordionOpen: false
        }
    },
    components: {

    },
	props:{
        /**
         * Title for item
         */
        title: {
            type: String,
            required: true
        },
        /**
         * Subtitle for item, shows on right side
         */
        subtitle: {
            type: [String, Boolean],
            default: false
        },        
        /**
         * Content Image
         */
        contentImage: {
            type: [String, Boolean],
            default: false
        },      
        /**
         * Content Video Id from Youtube
         */
        contentVideoId: {
            type: [String, Boolean],
            default: false
        },     
        /**
         * 
         */        
         content: {
             type: String,
             required: true
         }
	},
    computed: {
        classObj() {
            return {
                // 'c-btn--small': this.size === 'small',
                // 'c-btn--med': this.size === 'med',
                // 'c-btn--large': this.size === 'large',
            }
        },

        contentVideoUrl() {
            if (this.contentVideoId) {
                return `https://www.youtube.com/embed/${ this.contentVideoId }?theme=light&controls=1&showinfo=0&autoplay=0&modestbranding=1"`
            }

            else {
                return false
            }
        }
    },

    methods: {

        /**
         * Toggles Accordion
         * @public
         */
        toggleItem() {
            this.accordionOpen = !this.accordionOpen
        },  
    }  
}
</script>
<docs>

```jsx
<section>
    <AccordionItem 
        title="Title 1"
        content="<p>This is content</p>"
    />
    <AccordionItem 
        title="Title 2"
        subtitle="subtitle 2"
        content="<p>This is content, and <a href='https://google.com'>I am a link</a></p>"
        content-image="https://goo.gl/pzJDxt"
    />
    <AccordionItem 
        title="Title 3"
        subtitle="subtitle 3"
        content="<p>This is content</p><ul><li>and this</li><li>is a formatted</li><li>list</li></ul>"
        content-video-id="eQED8dwj6Yg"
    />        
</section>
```
</docs>


<style lang="postcss" scoped>

.c-accordionItem {
    border-bottom: 1px solid #d7d7d7;
    /* padding-bottom: 10px; */
    /* padding-top: 12px; */
    width: 100%;

    @media (min-width: 768px){
        /* padding-bottom: 16px; */
        /* padding-top: 18px; */
    }
}

    .c-accordionItem__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

        .c-accordionItem__titleBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-right: 20px;
        }

            .c-accordionItem__title {
                font-family: Gotham Book;
                text-transform: none;
                font-size: 13px;
                font-weight: 400;
                max-width: 90%;
                line-height: 1.4;
                letter-spacing: 0;
                cursor: pointer;

                @media (min-width: 1024px){
                    font-size: 16px;
                    max-width: 82%;
                }

                .is-open & {
                    font-family: Gotham;
                    font-weight: 700;
                    color: #ee2e2d;
                }
            }

            .c-accordionItem__subtitle {
                font-family: Gotham Book;
                text-transform: none;
                font-size: 13px;
                font-weight: 400;
                max-width: 90%;
                line-height: 1.4;
                letter-spacing: 0;
                cursor: pointer;

                @media (min-width: 1024px){
                    font-size: 16px;
                    max-width: 82%;
                }

                .is-open & {
                    font-family: Gotham;
                    font-weight: 700;
                    color: #ee2e2d;
                }
            }

        .c-accordionItem__icon {
            display: flex;
            width: 14px;
            height: 14px;
            border: 1px solid;
            font-size: 20px;
            align-items: center;
            justify-content: center;
            color: #232323;
            cursor: pointer;

            @media (min-width: 1024px){
                height: 26px;
                width: 26px;
            }

            svg {
                width: 6px;

                @media (min-width: 1024px) {
                    width: 10px;
                }
            }
        }

    .c-accordionItem__dropdown {
        padding-top: 10px;
        padding-bottom: 10px;

        @media (min-width: 1024px){
            padding-bottom: 0;
        }
    }


        .c-accordionItem__contentImage {
            width: 100%;
            max-width: 75%;
            height: auto;
            display: block;
            margin-bottom: 12px;
        }

        .c-accordionItem__contentVideoWrapper {
            position: relative;
            width: 278px;
            height: 155px;
            margin-bottom: 12px;

            @media (min-width: 370px) {
                width: 331px;
                height: 186px;
            }

            @media (min-width: 768px) {
                width: 440px;
                height: 226px;						
            }						
        }

            .c-accordionItem__contentVideo {
                width: 278px;
                height: 155px;
                margin-bottom: 12px;

                @media (min-width: 370px) {
                    width: 331px;
                    height: 186px;
                }

                @media (min-width: 768px) {
                    width: 440px;
                    height: 226px;						
                }
            }		

            .ytp-large-play-button {
                display: none !important;
            }		

            .c-accordionItem__contentVideoButton {
                position: absolute;
                fill: #ccc;
                width: 100px;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                pointer-events: none;
            }

        .c-accordionItem__content {

            @media (min-width: 768px) {
                padding-right: 50px;
            }

            p {
                font-size: 13px;
                font-weight: 500;
                line-height: 1.4;
                margin-bottom: 10px;
                letter-spacing: 0;

                @media (min-width: 768px) {
                    font-size: 16px;
                    margin-bottom: 22px;
                }

                &:last-of-type {
                    margin-bottom: 0;
                }

                a {
                    border-bottom: 1px solid;
                    padding-bottom: 1px;
                    font-family: Gotham; 
                    font-weight: 500; 
                    color: rgb(238, 46, 45);   
                    text-decoration: none;
                }
            }

            a {
                border-bottom: 1px solid;
                padding-bottom: 1px;
                font-family: Gotham; 
                font-weight: 500; 
                color: rgb(238, 46, 45);        
                text-decoration: none;
            }

            ul {
                margin-bottom: 10px;

                @media (min-width: 768px) {
                    margin-bottom: 22px;
                }
            }

            li {
                font-size: 16px;
                font-weight: 500;
                line-height: 1.4;
                letter-spacing: 0;
                list-style-position: outside;
                margin-left: 16px;							
            }
        }






	


</style>