import React, {Component} from 'react';
import { Button,Dialog,DialogTitle,DialogContent,DialogActions} from 'react-mdl';


class Demo extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  
    render() {
      return (
        <div>
          <p onClick={this.handleOpenDialog} raised ripple>Contact Me</p>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>Contacts</DialogTitle>
            <DialogContent>
              <p>Phone: xxxx xxx xxx</p>
              <p>Email: xxxxxxxxxxxxxxxx</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Demo;