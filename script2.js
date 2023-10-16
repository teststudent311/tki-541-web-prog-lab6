new Vue({
    el: '#app2',
    data: {
        items: ['Пример 1', 'Пример 2'],
        inputValue: '',
        mode: 'view',
        selectedItem: null
    },
    watch: {
        inputValue(value) {
            if (value === '#редактировать#') {
                this.mode = 'edit';
                this.inputValue = '';
            } else if (value === '#вводить#') {
                this.mode = 'view';
                this.inputValue = '';
            }
        }
    },
    methods: {
        handleInput() {
            if (this.mode === 'view') {
                this.items.push(this.inputValue);
            } else if (this.mode === 'edit') {
                const index = this.items.indexOf(this.selectedItem);
                if (index !== -1) {
                    this.items[index] = this.inputValue;
                }
            }
            this.inputValue = '';
        }
    }
});
