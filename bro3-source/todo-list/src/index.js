import {inputBar, todoList, doneList} from "./todolist-module.js";
import {store} from "./todostate.js";

var note = new Vue({
    el:"#note",
    components: {
        "input-bar": inputBar,
        "todo-list": todoList,
        "done-list": doneList
    },
    store: store,
});