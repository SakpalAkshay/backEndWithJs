const utility = require('./utility');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //match header to application json when sending request

let todos = [{"id":3,title:"Do work at 4", description: "Do some work at 4"}]


app.get("/todos", (req,res)=>{
     res.json(todos);
});

app.get('/todos/:id',(req,res) =>{
const newIndex = utility.findIndexAt(todos,parseInt(req.params.id) );

if (newIndex === -1){
    res.status(404).send("The Todo doesnt Exist");
}
else{
    res.json(todos[newIndex]);
}

} );

app.post('/todos', (req,res)=>{

    const newTodo = {id: Math.floor(Math.random() * 100000), 
    title: req.body.title,
    description: req.body.description
    };

    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.delete('/todos/:id', (req,res)=>{

    const DeleteIndex = utility.findIndexAt(todos, parseInt(req.params.id));

    if(DeleteIndex === -1){
        res.status(404).send("Id sent for deletion doesnt exist");
    }
    else{
        todos = utility.removeAtIndex(todos, DeleteIndex);
        res.send(200).send(`Id ${req.params.id} deleted successfully.`)
    }

})


app.listen(4001);