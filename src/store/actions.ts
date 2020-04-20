import { ToDoActionType, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST } from './types';

export function additemToList( taskDescription: string ): ToDoActionType {
  return {
    type: ADD_ITEM_TO_LIST,
    payload: taskDescription
  }
}

export function removeitemFromList( id: number): ToDoActionType {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    payload: id
  }
}
