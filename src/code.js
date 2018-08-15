console.log('hi mark')
new Vue({
    el:'#playground',
    data:{
        loading: true
    },
    methods:{
        load(){
            this.loading = !this.loading
        }
    }

})