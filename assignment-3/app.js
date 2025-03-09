const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            fullName: '',
            result:0
        }
    },
    methods: {
        setName(event) {
            this.firstName = event.target.value;
            this.lastName = event.target.value;
        },
        resetInput() {
            this.firstName = "";
            this.lastName = "";
        },
        addition() {
            return this.result = this.result + 5;
        },
        subtraction() {
            return this.result = this.result - 5;
        },
    },
    computed: {
        fullName() {
            if (this.firstName === '' || this.lastName === '') {
                return '';
            }
            this.fullName = this.firstName + ' ' + this.lastName;
        }
    },
    watch: {
        result(value) {
            if (value > 50) {
                this.result = 0;
            } else if (value < 0) {
            
                this.result = 0;
            }
        }
    },
}).mount('#Assignment-3')

