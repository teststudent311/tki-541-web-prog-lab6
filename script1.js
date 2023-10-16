new Vue({
    el: '#app',
    data: {
        start: -10,
        end: 10,
        step: 1,
        rounding: 2
    },
    computed: {
        ticksCount() {
            return Math.floor((this.end - this.start) / this.step) + 1;
        }
    },
    methods: {
        tickPosition(index) {
            const value = parseFloat(this.start) + index * parseFloat(this.step);
            return 100 + (value - this.start) * (800 / (this.end - this.start));
        },
        tickLabel(index) {
            const value = parseFloat(this.start) + index * parseFloat(this.step);
            return parseFloat(value).toFixed(this.rounding);
        }
    }
});
