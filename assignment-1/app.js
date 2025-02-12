const app = Vue.createApp({
    data() {
        return {
            Name: 'John Doe',
            age: 25, 
            srcImageFromGoogle: "https://picsum.photos/seed/picsum/200/300"
        }
    },
    methods: {
        calculateAge()
        {
            return this.age + 5;
        },
        randomNumber() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return randomNumber;
            } else {
                return 'Greater than 0.5';
            }
        }
    }
}).mount('#assignment-1')

