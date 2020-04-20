import { TaskListState, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, ToDoActionType } from './types';

const initialState: TaskListState = {
  taskList: [
    {
      id: 1,
      taskDescription: 'To remove any item please click on remove sign'
      
    }
  ],
  nextFreeId: 2
};

export function toDoReducer( state = initialState, action: ToDoActionType): TaskListState {
  switch (action.type) {
    case ADD_ITEM_TO_LIST:
      let newId = state.nextFreeId;
      let newNextFreeId = newId + 1;
      let newTask = { id: newId, taskDescription: action.payload };
      return {
        ...state,
        taskList: [...state.taskList, newTask], nextFreeId: newNextFreeId
      }
    case REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        taskList: state.taskList.filter( task => task.id !== action.payload)
      }
    default:
      return state;
  }
}