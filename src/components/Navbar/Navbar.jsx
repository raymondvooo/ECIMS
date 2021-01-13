import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Dropdown } from "../../images/dropdown.svg"
import Drawer from '@material-ui/core/Drawer';


class Navbar extends Component {
  state = {
    currentTab: "home",
    sidebar: false
  };

  componentDidMount() {
    this.checkRoute();
  }
  componentDidUpdate(prevProps) {
  }


  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ sidebar: open });
  };

  navigate = (path) => {
    if (this.props.location.pathname !== path) {
      this.props.history.push(path)
    }
  }

  checkRoute = () => {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({ currentTab: "home" });
        break;
      case "/login":
        this.setState({ currentTab: "login" });
        break;
      case "/search":
        this.setState({ currentTab: "search" });
      default:
        this.setState({ currentTab: "home" });
    }
  };
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-top">
          <div className="navbar-top-wrapper-1">
            <Dropdown onClick={this.toggleDrawer(true)} />
            <Drawer anchor={'left'} open={this.state.sidebar} onClose={this.toggleDrawer(false)}>
              <div className="drawer-link" onClick={() => this.navigate('/')}>Add New Inventory</div>
            </Drawer>
            <div className="navbar-app-title">ECIMS</div>
          </div>



        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);

//  <Link
// to={!this.props.userId ? "/landing" : "/"}
// style={{ display: "flex" }}
// >
// <img src={Brandmark} alt="Potato TV" className={"brand-logo"} />
// </Link>


//     <div className="navbar-options-wrapper">
//       {/* <Link
//         to={"/get-started"}
//         className={`navbar-option${
//           this.state.currentTab === "how" ? " bold" : ""
//         }`}
//       >
//         <span>how it works</span>
//       </Link> */}

//       <Link
//         to={"/signup"}
//         className={`navbar-option${
//           this.state.currentTab === "signup" ? " bold" : ""
//         }`}
//       >
//         <span>sign up</span>
//       </Link>


//       <Link to={"/login"} className={`navbar-option`}>
//         <button
//           className={`green-btn standard-br header-btn${
//             this.state.currentTab === "login" ? " bold" : ""
//           }`}
//         >
//           login
//         </button>
//       </Link>
//     </div>