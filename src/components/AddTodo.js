import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock,
    Jumbotron,
} from 'react-bootstrap'

class AddTodo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            detail: ""
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDetail = this.onChangeDetail.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDetail(e) {
        this.setState({
            detail: e.target.value
        })
    }

    onChangeText(e) {
        
    }

    onRegister() {
       this.props.handleTodoAdd({
           title: this.state.title,
           detail: this.state.detail
        })
        this.setState({
            title: "",
            detail: ""
        })
    }

    render() {
        return (
            <Jumbotron>
                <h2>AddTodo</h2>
                <FieldGroup type = "text" label = "Title" placeholder="Enter title" value = {this.state.title} onChange= {this.onChangeTitle} />
                <FieldGroup type = "text" label = "Detail" placeholder="Enter detail" value = {this.state.detail} onChange = {this.onChangeDetail} />
                <Button bsStyle="primary" onClick={this.onRegister}>登録</Button>
            </Jumbotron>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func,
    handleTodoAdd: PropTypes.func.isRequired
}

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

export default AddTodo