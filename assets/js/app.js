const { createApp } = Vue
createApp({
    data() {
        return {
            emailList: []
        }
    },
    methods: {
        generateList(){
            for (let i = 1; i <= 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    response.data = response.data.response
                    this.emailList.push(response.data)
                })
            }
            console.log(this.emailList);
        }
    }
}).mount('#app')