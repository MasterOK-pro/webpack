let store = new Vuex.Store ({
    state: {
        // msg: "",
        todoList: [],
        doneList: []
    },
    mutations: {
        add (state, payload) { // payload是输入框键入信息
            // state.msg = payload;
            if (!state.todoList.length) {
                state.todoList.push(payload);
            } else {
                if ( state.todoList.indexOf(payload)==-1 && state.doneList.indexOf(payload)==-1 ) {
                    state.todoList.push(payload);
                    console.log(state.todoList);
                } else {
                    alert ("请不要输入重复的事件");
                }
            }
            // state.msg = '';
        },
        doneIt (state, payload) {
            let item = state.todoList.splice(payload.index,1);
            console.log(item);
            state.doneList.push(item[0]);
        },
        deleteIt (state, payload) {
            if (payload.name=="todo") {
                state.todoList.splice(payload.index,1);
            } else {
                state.doneList.splice(payload.index,1);
            }
        }
    },
    // created () {
    //     console.log("store created");
    // }
    // watch: {
    //     todoList () {
    //         localStorage.setItem ("todoList",JSON.stringify(newValue));
    //     },
    //     doneList () {
    //         localStorage.setItem ("todoList",JSON.stringify(newValue));
    //     }
    // },
    /* !!store没有watch选项 */
    // watch: {
    //     state () {

    //     }
    // }
});

export {store}