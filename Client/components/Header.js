import React from 'react';

const Header = () => (
    <nav className="header navbar navbar-expand-sm navbar-dark bg-react-black">
        <div className="container">
            <div className="navbar-brand">
                <i className="fa fa-user-md -o fa-4x align-middle mr-2 text-react-"></i>
                <span className="align-middle text-react-">New Patient</span>
                <a  style={{marginLeft:"100%", position:"relative", margin:"40px", padding:"20px"}}>
                <button type="button" class="btn btn-info" style={{margin:"20px"}}>
                    Manage Forms <span class="badge badge-light">3</span>
                </button>

                <button type="button" class="btn btn-success">
                    Manage Marketing Materials <span class="badge badge-light">4</span>
                </button>
                </a>
            </div></div>
    </nav>
);

export default Header;