import * as React from 'react';
import { Component, Fragment } from 'react';
import {  Grid, List } from 'semantic-ui-react';
import { Task } from '../store/types';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { additemToList, removeitemFromList } from '../store/actions';

export interface IAddTaksProps {
  taskList: Task[];
  removeitemFromList: typeof removeitemFromList;
  taskId: number;
}

export class AddTaks extends Component<IAddTaksProps> {

  onClickRemoveTask() {
    const { taskId } = this.props;
    this.props.removeitemFromList(taskId);
  }

  public render() {
    const { taskList, taskId } = this.props
    const currentTask = taskList.filter(individualTask => (individualTask.id === taskId))[0];
    return (
      <Fragment>
         <Grid.Row>   
    <List>
    <List.Item>
      <List.Icon name='remove' size='large' className='removeitem' onClick={() => this.onClickRemoveTask()}/>
      <List.Content key={taskId} className='List1'> {currentTask.taskDescription} </List.Content>
    </List.Item>

  </List>
        </Grid.Row>
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
  { additemToList, removeitemFromList }
)(AddTaks);