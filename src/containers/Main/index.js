import React, {Component} from 'react';
import ReactDom from 'react-dom'
import Helmet from "react-helmet";

//components

import Grid from '../../components/grid'

export default class Main extends Component {
    render() {
        return (
            <Grid cols={[3,6,3]}>
                <div>home Page</div>
            </Grid>
        )
    }
}
