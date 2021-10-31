import React from 'react';
import Tasks from './Task';
import {Paper, TextField} from '@material-ui/core';
import {Checkbox, Button} from '@material-ui/core';
import './App.css';

class App extends Tasks {
  state = { tasks:[], currentTask:"", description: "", search: ""} 
  render(){
    const {tasks} = this.state;
    return (
    <div className=" App task-list">
      <Paper elevation = {3} className="container">
        <div className="heading">TODO-LIST</div>
        <form onSubmit={this.handleSubmit}
        className="flex"
        style={{margin: "15px O"}}
        >
          <TextField variant="outlined"
          size = "small"
          style =  {{width: "40%", marginRight: 5}}
          value = {this.state.currentTask}
          required = {true}
          onChange = {this.handleChange}
          placeholder = "Add New TO-DO"
          />

          <TextField variant="outlined"
          size = "small"
          style =  {{width: "40%", marginRight: 5}}
          value = {this.state.description}
          required = {true}
          onChange = {(e) => this.setState({description: e.target.value})}
          placeholder = "Add New description"
          />

          <Button 
          style =  {{width: "18%", height: 39, marginRight: 5}}
          color="primary"
          variant="outlined"
          type="submit"
          >
          Add task
          </Button>

          <div class = "">
            <TextField variant="outlined"
            size = "small"
            style =  {{width: "99%",
                      marginTop: "10px"
            }}
            value = {this.state.search}
            onChange = {(e) => this.handleSearch(e.target.value)}
            placeholder = "Add New Search"
            />
          </div>
        </form>

        <div>
          {tasks.map((task) => ( 
            <Paper key= {task._id} className="task-list task_container"> 
              <Checkbox
                checked = {task.completed}
                onClick={()=>this.handleUpdate(task._id)}
                color="primary"
              />
              <div
              className={
                task.completed
                ?"task line_through"
                :"task"
              }
              >
              {task.task}
              </div>
              <Button
              onClick={()=>this.handleDelete(task._id)}
              color="secondary"
              >
                delete
              </Button>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>);
  }
}

export default App;