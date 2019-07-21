import React, {Component} from 'react';
import  {
    Collapse, Navbar, NavbarToggler,
    Nav, NavbarBrand, NavItem, NavLink, Container  
} from 'reactstrap'

class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
       this.setState({
        isOpen: !this.state.isOpen
       });
    }

    render(){
     return (  <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Posts</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Stuff</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
            </Navbar>
        </div>);
    }
}
export {Collapse};
export default AppNavBar;