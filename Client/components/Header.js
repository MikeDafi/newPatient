import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Header.propTypes = {
	page : PropTypes.any,
	userName : PropTypes.any,
}

const Header = (props) => (


    <nav className="header navbar navbar-expand-sm navbar-dark bg-react-black" style={{ width: '100%' }}>
        <div className="container">
            <div className="navbar-brand" style={{ width: '100%' }}>
                <Link to={'/'} style={{ color: 'white' }}>

                    <i className="fa fa-user-md -o fa-4x align-middle mr-2 text-react-"></i>
                    <span className="align-middle text-react-">New Patient</span>

                </Link>

                <a style={{ marginLeft: '100%', position: 'relative', margin: '40px', padding: '20px' }}>

                    {(props.page === 'patients') ? (
                        <Link to={'/templates'}>

                            <button type="button" className='btn btn-info' >
                                Manage Templates <span className="badge badge-light">3</span>
                            </button>

                        </Link>
                    ) : null}





                </a>

                <Link to={'/account'}>

                    <button type="button" className='btn btn-dark' style={{ right: '0px', position: 'absolute', margin: '21px' }}>
                        {props.userName} <span className="badge badge-danger">0</span>
                    </button>

                </Link>

            </div>

        </div>
    </nav>

);

export default Header;
