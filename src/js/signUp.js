Vue.component('signUp',{
    data:{
        signUp:{
            email:'',
            password:''
        },
    },

    methods:{
        onSignUp(e){
            const user = new AV.User();
            user.setUsername(this.signUp.email);
            user.setPassword(this.signUp.password);
            user.setEmail(this.signUp.email);
            user.signUp().then((user) => {

                user = user.toJSON();
                this.$emit('signUp');
                // this.currentUser.objectId = user.objectId;
                // this.currentUser.email = user.email;
                // this.signUpVisible= false;
                alert('注册成功')
            }, (error) => {
                alert(error.rawMessage)
            });
        },

        onClickLogin(e){
            console.log(2222);
            this.$emit('goToLogin')

        }
    },
    template:
    `
    <div  class="signUp" v-cloak>
            <form class="form" @submit.prevent="onSignUp">
                <h2>注册</h2>
                <button @click="loginVisible = false">关闭</button>
                <div class="row">
                    <lable>邮箱</lable>
                    <input type="text" v-model="signUp.email">
                </div>
                <div class="row">
                    <lable>密码</lable>
                    <input type="text" v-model="signUp.password">
                </div>
                <div class="actions">
                    <button type="submit">提交</button>
                    <a href="#" @click="onClickLogin">登录</a>
                </div>
            </form>
        </div>
    `
});