import {store} from "./todostate.js";
import inputBar from "./components/InputBar.vue"
import todoList from "./components/TodoList.vue"
import doneList from "./components/DoneList.vue"
import Vue from "vue"
import "./style.css"

var note = new Vue({
    el:"#note",
    components: {
        "input-bar": inputBar,
        "todo-list": todoList,
        "done-list": doneList
    },
    store: store,
});