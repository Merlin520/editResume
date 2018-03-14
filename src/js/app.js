let app = new Vue({
    el: '#app',
    data: {
        editingName:false,
        loginVisible:false,
        signUpVisible:false,
        resume:{
            name:'姓名',
            gender:'女',
            birthday:'1993年1月',
            jobTitle:'前段开发',
            phone:'1231241515',
            email:'erwer@12312.com'
        }
    },
    methods:{
        onEdit(key,value){
            this.resume[key] = value
        },

        onClickSave(){
            let currentUser = AV.User.current();
            if(!currentUser){
                this.loginVisible = true
            }else{
                this.saveResume()
            }
        },

        saveResume(){

        }
    }
})