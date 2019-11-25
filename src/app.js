import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data: {
      todos: [
        {name: "Buy shopping", priority: "low"},
        {name: "Clean bathroom", priority: "high"},
        {name: "Car's MOT", priority: "high"}
      ],
      newToDo: "",
      priority: ""
    },
    methods: {
      saveNewToDo: function () {
        this.todos.push({name: this.newToDo, priority: this.priority});
        this.newToDo = "";
        this.priority = "";
      }
    }
  })
})
