import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
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
        }
    };

    render() {
        const getGridListCols = () => {
            if (isWidthUp('xl', this.props.width)) {
                return 5;
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
        }
        const classes = this.props;
        return (
            <div>
                {/* <ResponsiveDrawer/> */}
                <GridList spacing={15} cellHeight='auto' className='MuiGridList' cols={getGridListCols()}>
                    {tileData.map(tile => (
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
                    ))}
                </GridList>
            </div>
        );
    }
}


export default withWidth()(TemplateManager);