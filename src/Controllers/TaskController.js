import datos from '../Global/dataGlobal';
import {reactLocalStorage} from 'reactjs-localstorage';

export default class TaskController 
{
    taskContent = [];

    constructor(){
            this.localTasks();
    }

    get(){
        return this.taskContent;
    }

    getByState(state){
        let element = this.taskContent.filter(e => e.state === state);
        return element;
    }

    getById(id){
        let element = this.taskContent.filter(e => e.id == id);
        return element[0];
    }

    delById(id){

        let element = this.taskContent.find(e => e.id == id);
        let index = this.taskContent.indexOf(element);

        if (index > -1)
        {
            this.taskContent.splice(index,1);
            this.saveTasks();
        }

    }

    lastId(){
        var max = -1;

        this.taskContent.forEach(element => {
            if (element.id > max){
                max = element.id;
            }
        });

        return max;
    }

    //Método para añadir un panel nuevo
    add(task){
        let element = this.taskContent.find(e => e.id === task.id);
        let index = this.taskContent.indexOf(element)
        if (index == -1)
        {
            this.taskContent.push(task);
            this.saveTasks();
        }

    }

    saveTasks(){
        reactLocalStorage.setObject('task', this.taskContent);
    }

    localTasks(){
        let local = reactLocalStorage.getObject('task');
        if (local !== null && local.length > 0) {
            this.taskContent = Object.values(local);
        }
        else{
            this.taskContent = datos.dataTask;
            this.saveTasks();
        }
    }
}