/* 输入框组件 */
let inputBar = {
    data () {
        return {
            msg: "",
        }
    },
    /* 不行 */
    // computed: {
    //     msg: {
    //         get () {
    //             return this.$store.state.msg;
    //         },
    //         set (value) {
    //             this.msg = value;
    //         }
    //     }
    // },
    template:`
        <div class="inputBar">
            <input type="text" placeholder="请在此输入事件" v-model.trim="msg">
            <button class="add" @click="subAddItem">添加</button>
        </div>
    `,
    methods:{
        subAddItem () {
            // console.log(this.$store,"inputBar");
            this.$store.commit ("add", this.msg);
            this.msg = '';
        }
    }
};
/* todolist组件 */
let todoList = {
    computed: {
        list () {
            return this.$store.state.todoList;
        }
    },
    template:`
        <ul>
            <li class="todoItem" v-for="(item,index) in list">
                <span class="item">{{index+1}}:{{item}}</span>
                <button class="done" @click="subDoneIt(index)">完成</button>
                <button class="delete" @click="subDeleteIt(index)">删除</button> <!-- @click="deleteIt" -->
            </li>
        </ul>
    `,
    methods:{
        subDoneIt (index) {
            this.$store.commit ("doneIt", index);
        },
        subDeleteIt (index) {
            this.$store.commit ("deleteIt", {index:index,name:"todo"});
        }
    },
    watch: {
        list () {
            localStorage.setItem ("todoList",JSON.stringify(this.list));
        }
    },
    created () {
        if (localStorage.getItem("todoList")) {
            console.log("todoList created with localstorage");
            this.$store.state.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
        // console.log(this.$store);
    }
};
/* donelist组件 */
let doneList = {
    computed: {
        list () {
            return this.$store.state.doneList;
        }
    },
    template:`
        <ul>
            <li class="doneItem" v-for="(item,index) in list">
                <span class="item">{{index+1}}:{{item}}</span>
                <button class="delete" @click="subDeleteIt(index)">删除</button> <!-- @click="deleteIt" -->
            </li>
        </ul>
    `,
    methods:{
        subDeleteIt (index) {
            this.$store.commit ("deleteIt", {index:index,name:"done"});
        }
    },
    watch: {
        list () {
            localStorage.setItem ("doneList",JSON.stringify(this.list));
        }
    },
    created () {
        if (localStorage.getItem("doneList")) {
            this.$store.state.doneList = JSON.parse(localStorage.getItem("doneList"));
        }
    }
};

export {inputBar, todoList, doneList}