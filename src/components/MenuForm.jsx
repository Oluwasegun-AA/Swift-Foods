import React from 'react';
import PropTypes from 'prop-types';
import {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  l,
  m,
  n,
  o,
  p,
  r,
  s,
  u
} from '../styles/images';
import Button from './Button';

const MenuForm = ({ onClick, menu }) => (
  <div className="gridContainer">
    <div className="gridTop" />
    <div className="gridRight" />
    <div className="gridMiddle">
      <div className="menuItems">

        <div className="itemsList">
          <div id="item" key="a" className="item">
            <span className="description">Buger</span>
            <span className="description">#1500 </span>
            <img src={a} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="b" className="item">
            <span className="description">Chips</span>
            <span className="description">#200 </span>
            <img src={b} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="c" className="item">
            <span className="description">Full Pizza</span>
            <span className="description">#3000 </span>
            <img src={c} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="d" className="item">
            <span className="description">Buger</span>
            <span className="description">#1000 </span>
            <img src={d} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="e" className="item">
            <span className="description">ham Buger</span>
            <span className="description">#1500 </span>
            <img src={e} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="f" className="item">
            <span className="description">Roman Chips</span>
            <span className="description">#2000 </span>
            <img src={f} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="g" className="item">
            <span className="description">cane chips</span>
            <span className="description">#200 </span>
            <img src={g} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="h" className="item">
            <span className="description">Roasted Chicken</span>
            <span className="description">#1300 </span>
            <img src={h} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="i" className="item">
            <span className="description">Chicken Laps</span>
            <span className="description">#500 </span>
            <img src={i} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="j" className="item">
            <span className="description">Fried Rice</span>
            <span className="description">#2000 </span>
            <img src={j} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="k" className="item">
            <span className="description">scored chips</span>
            <span className="description">#900 </span>
            <img src={b} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="l" className="item">
            <span className="description">Cheese</span>
            <span className="description">#700 </span>
            <img src={l} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="m" className="item">
            <span className="description">grilled Chicken</span>
            <span className="description">#1000 </span>
            <img src={m} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="n" className="item">
            <span className="description">Chinese Rice</span>
            <span className="description">#1500 </span>
            <img src={n} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="o" className="item">
            <span className="description">Tilapia Buger</span>
            <span className="description">#400 </span>
            <img src={o} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="p" className="item">
            <span className="description">Nigerian Jollof</span>
            <span className="description">#2000 </span>
            <img src={p} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="q" className="item">
            <span className="description">Roman Buger</span>
            <span className="description">#600 </span>
            <img src={a} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="r" className="item">
            <span className="description">Italian Buger</span>
            <span className="description">#300 </span>
            <img src={r} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="s" className="item">
            <span className="description">Small Chops</span>
            <span className="description">#900 </span>
            <img src={s} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="t" className="item">
            <span className="description">Helm Pizza</span>
            <span className="description">#200 </span>
            <img src={u} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          <div id="item" key="u" className="item">
            <span className="description">Buger</span>
            <span className="description">#1500 </span>
            <img src={a} className="itemLogo" />
            <span className="addToCartBtnDiv">
              <Button
                type="button"
                id="addToCartBtn"
                className="addToCartBtn"
                onClick={onClick}
                value="Add to Cart"
              />
            </span>
          </div>
          {menu}
        </div>
      </div>
    </div>
    <div className="gridLeft" />
    <div className="gridBottom" />
  </div>

);

MenuForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.any
};

export default MenuForm;
