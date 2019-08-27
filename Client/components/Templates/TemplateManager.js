import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import ResponsiveDrawer from './ResponsiveDrawer';

import tileData from './tileData';

class TemplateManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objs: []
        };
    }

    render() {
        const getGridListCols = () => {
            if (isWidthUp('xl', this.props.width)) {
                return 4;
            }

            if (isWidthUp('lg', this.props.width)) {
                return 4;
            }

            if (isWidthUp('md', this.props.width)) {
                return 3;
            }

            if (isWidthUp('sm', this.props.width)) {
                return 2;
            }

            if (isWidthUp('xs', this.props.width)) {
                return 1;
            }

            return 1;
        };
        const classes = this.props;
        const style = {
            // background: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)',
            // borderRadius: 2,
            // height: '100%',
            // background: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)'
            // padding: '10px',,
            // ,paddingTop: '15px',
            // paddingLeft: '15px'
            // boxShadow: '0px 0px 5px 5px rgba(255, 105, 135, .3)',
            
        };
        return(
            <div>
                {/* <ResponsiveDrawer/> */ }
                < GridList spacing = { 15} cellHeight = 'auto' className = 'MuiGridList' cols = { getGridListCols() } >
                    <GridListTile key={tileData[0].img} cols={1} style={style}
                    >
                        <Button variant="contained" color="secondary" style={{ marginTop: '50%', marginLeft:'25%',marginBottom: '50%',background: 'linear-gradient(0deg, #FE6B8B 10%, #FF8E53 95%)'}}>
                            Create Template
                        </Button>
                        {/* <img src='https://i.imgur.com/lmh0fWa.jpg' style={{margin:'20px'}}/> */}
                        {/* <div style={{ background: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 90%)', width: '640px', height: '426px',  position:'relative', marginLeft:'-50%',textAlign:'center'}}>
                        </div> */}
                        {/* <GridListTileBar
                            title={tileData[0].title}
                            subtitle={tileData[0].subTitle}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            
                            actionIcon={
                                <IconButton aria-label={`star ${tileData[0].title}`}>
                                    <i className="fa fa-bars mr-2" style={{ color: 'white' }}></i>
                                </IconButton>
                            }
                        /> */}
                    </GridListTile>
                    {
                        tileData.map(tile => (
                            <GridListTile key={tile.img} cols={1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={tile.subTitle}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.title}`}>
                                            <i className="fa fa-bars mr-2" style={{ color: 'white' }}></i>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))
                    }
                </GridList >

            </div >
        );
    }
}
TemplateManager.propTypes = {
    width: PropTypes.string,
    titleBar: PropTypes.object,
    title: PropTypes.object,

};

export default withWidth()(TemplateManager);