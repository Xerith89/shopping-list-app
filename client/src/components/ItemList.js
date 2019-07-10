import React, {Component} from 'react';
import {Container, Table, Button} from 'reactstrap';
import {connect} from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';


class ItemList extends Component {
    
componentDidMount() {
    this.props.getItems();
}

    render () {
        const {items} = this.props.item;

        return(
            <Container>
                <Button color="dark" style={{marginBottom:'2rem'}}>
                Add Item</Button>

               
            </Container>
        )
    }

}

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems})( ItemList );