const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            if (this.counter > 0) {
                this.counter--;
            }
        },
        addWithParameter(num) {
            this.counter += num;
        },
        reduceWithParameter(num) {
            if (this.counter > 0) {
                this.counter -= num;
            }
        },
        setName(event) {
            this.name = event.target.value;
        },
        confirmedInputName() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            // event.preventDefault(); // Prevents the page from reloading
            alert('Submitted!');
        },
    }
}).mount('#Assignment-2')

