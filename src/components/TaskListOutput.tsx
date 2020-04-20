import * as React from 'react';
import { Component, Fragment } from 'react';
import { Task } from '../store/types';
import AddTaks from './AddTaks';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { additemToList, removeitemFromList } from '../store/actions';

export interface ITaskListOutputProps {
  taskList: Task[];
}

export class TaskListOutput extends Component<ITaskListOutputProps> {

  public render() {
    const { taskList } = this.props
    return (
      <Fragment>
        { taskList.length > 0 ? 
          taskList.map(individualTask => {
          return <AddTaks key={individualTask.id} taskId={individualTask.id} />})
        :
          <h3>Please add your tasks</h3>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    taskList: state.todo.taskList,
  };
}

export default connect(
  mapStateToProps,
  { additemToList,removeitemFromList}
)(TaskListOutput);