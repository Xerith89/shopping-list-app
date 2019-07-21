import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {addItem} from '../actions/itemActions';

export class ItemModal extends Component {
    state = {
        modal:false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: this.state.name
        }

        this.props.addItem(item);

        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{marginBottom: '2rem'}}
                onClick={this.toggle}>New Item</Button>

                <Modal data-testid="modal" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item"
                                onChange={this.onChange}/>

                                <Button type="submit" color="dark" style={{marginTop: '2rem'}} block data-testid="submit">Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal);