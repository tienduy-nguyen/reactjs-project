import React, { Component } from 'react';

//Old method
// function Header() {
//   return (
//     <div>
//       <h1>Header</h1>
//     </div>
//   );
// }

//ES6
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">Lesson 2 : Component</a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-1">
            <li className="nav-item ">
              <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/#">Products</a>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}
export default Header;
