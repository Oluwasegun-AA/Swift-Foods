import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Footer, MenuForm, ItemForm
} from '../components';
import NavBar from './Navbar';
import { fetchMenu } from '../actions/menuActions';

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null
    };
    this.itemsListRef = React.createRef();
  }

  handleClick = (e) => {
    console.log(e.currentTarget.parentElement.parentElement);
  }

  componentDidMount= async () => {
    const { fetchMenu } = this.props;
    const response = await fetchMenu();
    if (response !== false) {
      const menu = response.map(data => (
        <ItemForm
          onClick={this.handleClick}
          name={data.item_name}
          price={data.item_price}
          image={data.item_image}
          Key={data.item_id}
        />
      ));
      this.setState({ menu });
    }
  }

  render() {
    return (
      <span>
        <NavBar />
        <MenuForm
          onClick={this.handleClick}
          itemsListRef={this.itemsListRef}
          menu={this.state.menu}
        />
        <Footer />
      </span>
    );
  }
}

MenuPage.propTypes = {
  fetchMenu: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchMenu: () => fetchMenu
};

export default connect(null, mapDispatchToProps)(MenuPage);
