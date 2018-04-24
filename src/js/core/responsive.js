import {addClass, Dimensions, height, isVisible, width} from 'uikit-util';

export default {

    props: ['width', 'height'],

    init() {
        addClass(this.$el, 'uk-responsive-width');
    },

    update: {

        read() {
            return isVisible(this.$el) && this.width && this.height
                ? {width: width(this.$el.parentNode), height: this.height}
                : false;
        },

        write(dim) {
            height(this.$el, Dimensions.contain({height: this.height, width: this.width}, dim).height);
        },

        events: ['load', 'resize']

    }

};
