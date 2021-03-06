Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
});

// This is the root instance (parent)
new Vue({
    el: '#root',
    methods: {
        onCouponApplied() {
            alert('it was applied');
        }

    }
})

