import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Footer, MenuForm, ItemForm
} from '../components';
import NavBar from './Navbar';
import { fetchMenu, selectMenu } from '../actions/menuActions';
import toastMessage from '../utilities/toastMessage';

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null
    };
    this.itemsListRef = React.createRef();
  }

  handleClick = (e) => {
    const { selectMenu } = this.props;
    const item = e.currentTarget.parentElement.parentElement;
    const data = [{
      name: item.children[0].innerHTML,
      price: item.children[1].innerHTML,
      image: item.children[2].src
    }];
    const addToCart = selectMenu(data);
    if (addToCart.success === true) {
      return toastMessage({
        type: 'success',
        message: `${addToCart.data.name} added to cart`
      });
    }
  }

  componentDidMount = async () => {
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
          menu={this.state.menu}
        />
        <Footer />
      </span>
    );
  }
}

MenuPage.propTypes = {
  fetchMenu: PropTypes.func.isRequired,
  selectMenu: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchMenu: () => fetchMenu,
  selectMenu
};

export default connect(null, mapDispatchToProps)(MenuPage);
