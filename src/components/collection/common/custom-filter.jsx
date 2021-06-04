import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


import { getBrands, getColors, getMinMaxPrice, getRatings } from '../../../services';
import { filterBrand, filterColor, filterPrice, filterRating } from '../../../actions'

class CustomFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openFilter: false
    }
  }

  closeFilter = () => {
    document.querySelector(".collection-filter").style = "left: -365px";
  }

  clickBrandHendle(event, brands) {

    var index = brands.indexOf(event.target.value);

    if (event.target.checked)
      brands.push(event.target.value); // push in array checked value
    else
      brands.splice(index, 1); // removed in array unchecked value


    this.props.filterBrand(brands);
  }

  colorHandle(event, color) {
    var elems = document.querySelectorAll(".color-selector ul li");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    event.target.classList.add('active');
    this.props.filterColor(color)
  }

  clickRatingsHandle(event, rating) {

    this.props.filterRating(rating);
  }

  render() {
    const filteredBrands = this.props.filters.brand;
    //console.log(this.props.brands);
    return <div className="collection-filter-block">
      {/*brand filter start*/}
      <div className="collection-mobile-back">
        <span className="filter-back" onClick={(e) => this.closeFilter(e)}>
          <i className="fa fa-angle-left" aria-hidden="true" /> back
              </span>
      </div>
      <SlideToggle>
        {({ onToggle, setCollapsibleElement }) => <div className="collection-collapse-block">
          <h3 className="collapse-block-title" onClick={onToggle}>
            brand
                  </h3>
          <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
            <div className="collection-brand-filter">
              {this.props.brands.map((brand, index) => {
                return <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                  <input type="checkbox" onClick={(e) => this.clickBrandHendle(e, filteredBrands)} value={brand} defaultChecked={filteredBrands.includes(brand) ? true : false} className="custom-control-input" id={brand} />
                  <label className="custom-control-label" htmlFor={brand}>
                    {brand}
                  </label>
                </div>;
              })}
            </div>
          </div>
        </div>}
      </SlideToggle>

      {/*color filter start here*/}
      <SlideToggle>
        {({ onToggle, setCollapsibleElement }) => <div className="collection-collapse-block">
          <h3 className="collapse-block-title" onClick={onToggle}>
            colors
                  </h3>
          <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
            <div className="color-selector">
              <ul>
                {this.props.colors.map((color, index) => {
                  return <li className={color} title={color} onClick={(e) => this.colorHandle(e, color)} key={index} />;
                })}
              </ul>
            </div>
          </div>
        </div>}
      </SlideToggle>
      {/*price filter start here */}
      <SlideToggle>
        {({ onToggle, setCollapsibleElement }) => <div className="collection-collapse-block open">
          <h3 className="collapse-block-title" onClick={onToggle}>
            price
                  </h3>
          <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
            <div className="collection-brand-filter">
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <InputRange maxValue={this.props.prices.max} minValue={this.props.prices.min} value={this.props.filters.value} onChange={(value) => this.props.filterPrice(
                  { value }
                )} />
              </div>
            </div>
          </div>
        </div>}
      </SlideToggle>
      {/*Star filter start here */}
      <SlideToggle>
        {({ onToggle, setCollapsibleElement }) => <div className="collection-collapse-block open">
          <h3 className="collapse-block-title" onClick={onToggle}>
            rating
                  </h3>
          <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
            <div className="collection-brand-filter">
              <br />
              <div className="" >
                <label className="custom-control-label" onClick={(e) => this.clickRatingsHandle(e, 4)}>
                  <div className="rating">
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <span className="a-size-small a-color-base" style={{ cursor: 'pointer' }}> &amp; Up</span>
                  </div>
                </label>
              </div>
              <br />
              <div className="">
                <label className="custom-control-label" onClick={(e) => this.clickRatingsHandle(e, 3)}>
                  <div className="rating">
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <span className="a-size-small a-color-base" style={{ cursor: 'pointer' }}> &amp; Up</span>
                  </div>
                </label>
              </div>
              <br />
              <div className="">
                <label className="custom-control-label" onClick={(e) => this.clickRatingsHandle(e, 2)}>
                  <div className="rating">
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <span className="a-size-small a-color-base" style={{ cursor: 'pointer' }}> &amp; Up</span>
                  </div>
                </label>
              </div>
              <br />
              <div className="">
                <label className="custom-control-label" onClick={(e) => this.clickRatingsHandle(e, 1)}>
                  <div className="rating">
                    <i className="fa fa-star fa-lg" style={{ cursor: 'pointer' }} />
                    <span className="a-size-small a-color-base" style={{ cursor: 'pointer' }}> &amp; Up</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>}
      </SlideToggle>
    </div>;
  }
}


const mapStateToProps = state => ({
  brands: getBrands(state.data.products),
  colors: getColors(state.data.products),
  prices: getMinMaxPrice(state.data.products),
  filters: state.filters,
  ratings: getRatings(state.data.products)
})

export default connect(
  mapStateToProps,
  { filterBrand, filterColor, filterPrice, filterRating }
)(CustomFilter);