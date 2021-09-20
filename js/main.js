

let app = new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: ['I want to marry Saskay']
    },
    methods: {
        addTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },
        removeTodo() {
            this.todos.pop(this.todo)
        }
    }
}) 