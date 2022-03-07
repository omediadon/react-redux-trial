import { Component } from "react";
import PropTypes from "prop-types";
import { getPost, setHomeActive } from "../../store/actions/home.actions";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (value) => {
    this.props.setHomeActive(!value);
  };

  getPostContent = () => {
    this.props.getPost();
  };

  render() {
    let { isHomeActive, post } = this.props;

    return (
      <div>
        <h1>Is Home Active</h1>
        <h3>{isHomeActive ? "yes" : "no"}</h3>
        <hr />
        <button onClick={() => this.handleChange(isHomeActive)}>set</button>
        <hr />
        <pre>{JSON.stringify(post)}</pre>
        <button onClick={() => this.getPostContent()}>get</button>
      </div>
    );
  }
}

Home.propTypes = {
  isHomeActive: PropTypes.bool.isRequired,
  post: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    isHomeActive: state.home.isHomeActive,
    post: state.home.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeActive: (value) => dispatch(setHomeActive(value)),
    getPost: () => dispatch(getPost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
