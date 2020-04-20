import * as React from 'react';
import {Fragment} from 'react';
import AddTaksButton from './components/AddTaksButton';
import TaskListOutput from './components/TaskListOutput';
import { connect } from 'react-redux';
import { RootState } from './store';
import { additemToList, removeitemFromList } from './store/actions';
import { Grid } from 'semantic-ui-react';

export interface IAppProps {
}

export class App extends React.Component<IAppProps> {

  public render() {
    return (

      <Fragment>
        <Grid >
          <Grid.Row>

          <h1>Add-To-Do-List</h1>
          </Grid.Row>
         
         
          <Grid.Row>
            <AddTaksButton/>
          </Grid.Row>
          <Grid.Row>
            <h2>Your task is :</h2>
          </Grid.Row>
            <TaskListOutput/>  
        </Grid>
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
)(App);
