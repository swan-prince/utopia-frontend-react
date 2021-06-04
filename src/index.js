import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'
import Landing from './components/landing'

// Layouts
import Fashion from './components/layouts/fashion/main';
import Vegetables from './components/layouts/vegetables/main';
import Kids from './components/layouts/kids/main';
import Pets from './components/layouts/pets/main';
import Furniture from './components/layouts/furniture/main';
import Watch from './components/layouts/watch/main';
import Beauty from './components/layouts/beauty/main';
import Electronic from './components/layouts/electronic/main';

// Custom Pages
import HomePage from './components/layouts/home/main';
import LoginPage from './components/layouts/login/main';
import RegisterPage from './components/layouts/register/main';
import ExplorePage from './components/layouts/prod_list/main'

//Seller Module Pages
import ProductCreationPage from './components/layouts/seller/product-creation'

import SellerRegistration from './components/layouts/seller/seller-registration'

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import CollectionFullWidth from "./components/collection/collection-full-width";
import CollectionMetro from "./components/collection/collection-metro";

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";
import RightSideBar from "./components/products/right-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
import RightImage from "./components/products/right-image";
import Accordian from "./components/products/accordian";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import Column from "./components/products/column";
import Vertical from "./components/products/vertical";
import ProductDetails from "./components/products/productDetails";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Component {...props} />
  )} />
)

class Root extends React.Component {

  render() {
    store.dispatch(getAllProducts());

    return (
      <div>
        <Provider store={store}>
          <IntlProvider translations={translations} locale='en'>
            <BrowserRouter basename={'/'} >
              <ScrollContext>
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={LoginPage} />
                  <PrivateRoute path={`${process.env.PUBLIC_URL}/register`} component={RegisterPage} />
                  <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
                  <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
                  <Route path={`${process.env.PUBLIC_URL}/productDetails`} component={ProductDetails} />
                  <Route path={`${process.env.PUBLIC_URL}/search`} component={ExplorePage} />
                  <Route path={`${process.env.PUBLIC_URL}/productCreation`} component={ProductCreationPage} />
                  <Route path={`${process.env.PUBLIC_URL}/sellerRegistration`} component={SellerRegistration} />
                </Switch>
              </ScrollContext>
            </BrowserRouter>
          </IntlProvider>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

