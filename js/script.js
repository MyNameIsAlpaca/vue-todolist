const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
            task: "Portare fuori il cane",
            done: false,
        },
        {
            task: "Scrivere un libro",
            done: false,
        },
      ],
      taskValue: '',
    }
  },
  methods: {
    addTask() {

        if (this.taskValue == '') {
            alert("Inserisci una task da compiere!");
        } else {
            
            this.newTask = {
                task: this.taskValue,
                done: false,
            };
    
            this.todos.push(this.newTask);
            
            this.taskValue = '';
        }
        
    },
    deleteTask(index) {

        // elimina l'elemento dall'array all'indice che ti do io
        this.todos.splice(index, 1);
  
      },
  },
}).mount('#app')