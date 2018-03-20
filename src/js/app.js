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
        },

        login:{
            email:'',
            password:''
        },

        signUp:{
            email:'',
            password:''
        }
    },
    methods:{
        onEdit(key,value){
            this.resume[key] = value
        },

        onLogin(e){
            AV.User.logIn(this.login.email, this.login.password).then(function (user) {
                console.log(user);
            }, function (error) {
                if(error.code ===211){
                    alert('邮箱不存在')
                }else if(error.code === 210){
                    alert('邮箱密码不匹配')
                }
            });
        },

        onLogout(e){
            AV.User.logOut();
            alert('注销成功')
            window.location.reload();
        },

        onSignUp(e){
            console.log(this.signUp);
            // 新建 AVUser 对象实例
            const user = new AV.User();
            // 设置用户名
            user.setUsername(this.signUp.email);
            // 设置密码
            user.setPassword(this.signUp.password);
            // 设置邮箱
            user.setEmail(this.signUp.email);
            user.signUp().then(function (user) {
                console.log(user);
            }, function (error) {
            });
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
            // 第一个参数是 className，第二个参数是 objectId
            let {id} = AV.User.current();
            let user = AV.Object.createWithoutData('User', id);
            // 修改属性
            user.set('resume', this.resume);
            // 保存到云端
            user.save();

        }
    }
})