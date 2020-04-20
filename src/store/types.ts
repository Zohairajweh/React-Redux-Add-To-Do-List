export interface Task {
  id: number,
  taskDescription: string
}

export interface TaskListState {
  taskList: Task[]
  nextFreeId: number

}

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';

interface AdditemToList {
  type: typeof ADD_ITEM_TO_LIST
  payload: string
}

interface RemoveitemFromList {
  type: typeof REMOVE_ITEM_FROM_LIST
  payload: number
}

export type ToDoActionType = AdditemToList | RemoveitemFromList;
