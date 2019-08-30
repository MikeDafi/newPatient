import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Landing extends Component {

  render() {
    console.log(this.props.name.length);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />


            {(this.props.name.length !== 0 || this.props.name !== null) ? (
              <div>
                <p> Hello, {this.props.name} !</p>
                <Button color='secondary' variant="contained" 
                  href='/Dashboard'>Go to Patient Portal
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
        </div>
      </div>
    );
  }
}

export default Landing;
