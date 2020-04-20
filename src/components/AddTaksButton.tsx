import * as React from 'react';
import { Component, Fragment } from 'react';
import { Input, Button, GridColumn, GridRow } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { additemToList, removeitemFromList } from '../store/actions';

export interface IAddTaksButtonProps {
  additemToList: typeof additemToList;
}
interface IAddTaksButtonState {
  newTaskDescription: string;

}

export class AddTaksButton extends Component<IAddTaksButtonProps, IAddTaksButtonState> {

  constructor(props: IAddTaksButtonProps) {
    super(props);
    this.state = {
      newTaskDescription: '',
    }
  }

  public onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
   
    this.setState( { newTaskDescription: event.currentTarget.value})

  }

  onClickAddTask(newTaskDescription: string) {
    if (newTaskDescription !== '' ) {
    this.props.additemToList(newTaskDescription);


    }
 
   
  }

  public render() {
    const { newTaskDescription } = this.state;
    return (
      <Fragment>

<h2>New task:</h2><Input className='Input1'  size="huge" onChange={this.onUserFieldChange } /> 

 <Button color="facebook" className="Add-Button" content = 'Add' onClick={() => this.onClickAddTask(newTaskDescription)} />              
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
)(AddTaksButton);