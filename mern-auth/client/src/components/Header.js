import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:""
        }
    }

    componentDidMount(){
        this.setState({name:this.props.name})
    }

shouldComponentUpdate() {
    return true
}
    render() {
        return(
            <nav style={{ background: 'rgb(52, 58, 68)', width: '100%', height: '30px', position: 'absolute', zIndex: 3, boxShadow: 'none', left: '0px' }}>

                <div className="navbar-brand" style={{ paddingLeft: '50px', position: "absolute", marginTop: "-20px" }}>
                    <Link to={'/'} style={{ color: 'white' }}>
                        <i className="fa fa-user-md -o  mr-2 "></i>
                        <span className="text-react-">New Patient</span>

                    </Link>
                </div>
                <a style={{ position: 'relative' }}>

                    {(this.props.page === 'patients') ? (
                        <Link to={'/templates'}>
                            <button type="button" className='btn btn-success' style={{ left: '201px', marginTop: '0px', position: 'absolute', height: '30px', boxShadow: 'none', borderRadius: 0, border: 0 }}>
                                Manage Material <div style={{ marginLeft: '10px' }} className="badge badge-dark">0</div>
                            </button>
                            {/* <button type="button" className='btn btn-info btn-sm' style={{ marginLeft: '200px', position: "absolute", height: '30px' }} >
                        Manage Templates <span className="badge badge-light">3</span>
                    </button> */}

                        </Link>
                    ) : (
                            <Link to={'/patients'}>
                                <button type="button" className='btn btn-success' style={{ left: '201px', marginTop: '0px', position: 'absolute', height: '30px', boxShadow: 'none', borderRadius: 0, border: 0 }}>
                                    Manage Patients <div style={{ marginLeft: '10px' }} className="badge badge-dark">0</div>
                                </button>
                                {/* <button type="button" className='btn btn-info btn-sm' style={{ marginLeft: '200px', position: "absolute", height: '30px' }} >
                        Manage Templates <span className="badge badge-light">3</span>
                    </button> */}

                            </Link>
                        )}
                </a>

                <Link to={'/account'}>

                    <button type="button" className='btn btn-dark' style={{ right: '0px', marginTop: '0px', position: 'absolute', height: '30px', boxShadow: 'none', borderRadius: 0 }}>
                        {this.props.userName} <div style={{ marginLeft: '10px' }} className="badge badge-danger">0</div>
                    </button>

                </Link>



            </nav>
        );
    }

}

Header.propTypes = {
    page: PropTypes.string,
    userName: PropTypes.string
};

export default Header;