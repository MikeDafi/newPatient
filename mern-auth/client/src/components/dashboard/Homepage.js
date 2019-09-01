import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge'
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.setState({ name: this.props.name })

    }
    componentDidMount() {
        this.setState({ name: this.props.name })
    }

    shouldComponentUpdate() {
        return true
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.setState({ name: "" })
        this.forceUpdate();
    };

    render() {

        const { user } = this.props.auth;
        return (
            <div style={{ left: '0', width: '100%', textAlign: 'center' }}>
                <div className="navbar-brand">
                    <i className="fa fa-user-md   mr-2 "></i>
                    <span className="text-react-">New Patient</span>
                </div>
                <div style={{marginTop:'150px'}}>
                    <h4>
                        <b>Build</b> a login/auth app with the{" "}
                        <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                        scratch
                    </h4>
                    <p className="flow-text grey-text text-darken-1">
                        Create a (minimal) full-stack app with user authentication via
                        passport and JWTs
                    </p>
                </div>
                <br />

                {(this.state.name.length !== 0) ? (
                    <div>
                        <p> Hello, {this.state.name} !</p>
                        <Button color='primary' variant="contained"
                            style={{ marginRight: '5px' }}
                            href='/patients'>Patient Portal
            </Button>
                        <Button
                            color='secondary' variant="contained"
                            onClick={this.onLogoutClick}
                        >
                            Logout
            </Button>
                    </div>
                ) : (
                        <div>
                            <div className="col s6">
                                <Link
                                    to="/register"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Register
              </Link>
                            </div>
                            <div className="col s6">
                                <Link
                                    to="/login"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >
                                    Log In
              </Link>
                            </div>
                        </div>
                    )}



            </div>





        );
    }
}

Homepage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Homepage);





// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';

// class Landing extends Component {
//     render() {

//         console.log(this.props.name.length);
//         return (
//             <div style={{ left: '0', width: '100%', textAlign: 'center', marginTop: '25%' }}>

//                 <div >
//                     <h4>
//                         <b>Build</b> a login/auth app with the{" "}
//                         <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
//                         scratch
//             </h4>
//                     <p className="flow-text grey-text text-darken-1">
//                         Create a (minimal) full-stack app with user authentication via
//                         passport and JWTs
//             </p>
//                 </div>
//                 <br />

//                 {(this.props.name.length !== 0) ? (
//                     <div>
//                         <p> Hello, {this.props.name} !</p>
//                         <Button color='secondary' variant="contained"
//                             style={{ marginRight: '5px' }}
//                             href='/patients'>Patient Portal
//             </Button>
//                         <Button color='secondary' variant="contained"
//                             onClick={this.props.hLogOut}>Log Out
//             </Button>
//                     </div>
//                 ) : (
//                         <div>
//                             <div className="col s6">
//                                 <Link
//                                     to="/register"
//                                     style={{
//                                         width: "140px",
//                                         borderRadius: "3px",
//                                         letterSpacing: "1.5px"
//                                     }}
//                                     className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//                                 >
//                                     Register
//               </Link>
//                             </div>
//                             <div className="col s6">
//                                 <Link
//                                     to="/login"
//                                     style={{
//                                         width: "140px",
//                                         borderRadius: "3px",
//                                         letterSpacing: "1.5px"
//                                     }}
//                                     className="btn btn-large btn-flat waves-effect white black-text"
//                                 >
//                                     Log In
//               </Link>
//                             </div>
//                         </div>
//                     )}



//             </div>
//         );
//     }
// }

// export default Landing;
