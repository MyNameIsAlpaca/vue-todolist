const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
            task: "portare fuori il cane",
            done: false,
        },
        {
            task: "scrivere un libro",
            done: false,
        },
      ],
      taskValue: '',
    }
  },
  methods: {
    addTask() {
        
        this.newTask = {
            task: this.taskValue,
            done: false,
        };

        this.todos.push(this.newTask);
        
        this.taskValue = '';
    },
  },
}).mount('#app')