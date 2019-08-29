import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Header = (props) => (


    <nav style={{ background: 'rgb(52, 58, 68)', width: '100%' }}>

        <div className="navbar-brand" style={{ paddingLeft: '65px' }}>
            <Link to={'/'} style={{ color: 'white' }}>

                <i className="fa fa-user-md -o  mr-2 "></i>
                <span className="text-react-">New Patient</span>

            </Link>

            <a style={{ position: 'relative' }}>

                {(props.page === 'patients') ? (
                    <Link to={'/templates'}>

                        <button type="button" className='btn btn-info btn-sm' style={{ marginTop: '-3px', marginLeft: '10px' }} >
                            Manage Templates <span className="badge badge-light">3</span>
                        </button>

                    </Link>
                ) : null}
            </a>

            <Link to={'/account'}>

                <button type="button" className='btn btn-dark' style={{ right: '0px', position: 'absolute', marginTop: '-3px' }}>
                    {props.userName} <span className="badge badge-danger">0</span>
                </button>

            </Link>

        </div>

    </nav>

);

Header.propTypes = {
    page : PropTypes.string,
    userName : PropTypes.string
};

export default Header;