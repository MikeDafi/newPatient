import React from 'react';

const Header = () => (
    <nav className="header navbar navbar-expand-sm navbar-dark bg-react-black" style={{width:'100%'}}>
        <div className="container">
            <div className="navbar-brand" style={{width:'100%'}}>
                <i className="fa fa-user-md -o fa-4x align-middle mr-2 text-react-"></i>
                <span className="align-middle text-react-">New Patient</span>
                <a  style={{marginLeft:'100%', position:'relative', margin:'40px', padding:'20px'}}>
                    <button type="button" className="btn btn-info" style={{margin:'20px'}}>
                    Manage Forms <span className="badge badge-light">3</span>
                    </button>

                    <button type="button" className="btn btn-success" >
                    Manage Marketing <span className="badge badge-light">4</span>
                    </button>

                    

                </a>

                <button type="button" className="btn btn-dark" style={{right:'0px', position:"absolute", margin:'20px'}}>
                    Berkshire National Clinic <span className="badge badge-danger">0</span>
                </button>
            </div></div>
    </nav>
);

export default Header;