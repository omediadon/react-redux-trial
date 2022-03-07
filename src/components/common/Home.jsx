import { Component } from "react";
import PropTypes from "prop-types";
import { setHomeActive } from "../store/actions/home.actions";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (value) => {
    this.props.setHomeActive(!value);
  };

  render() {
    let { isHomeActive } = this.props;

    return (
      <div>
        <h1>Is Home Active</h1>
        <h3>{isHomeActive ? "yes" : "no"}</h3>
        <hr />
        <button onClick={() => this.handleChange(isHomeActive)}>set</button>
      </div>
    );
  }
}

Home.propTypes = {
  isHomeActive: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isHomeActive: state.home.isHomeActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeActive: (value) => dispatch(setHomeActive(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
