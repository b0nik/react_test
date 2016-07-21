import React, {Component} from 'react';
import ReactDom from 'react-dom'

//styles

import {gridStyle} from './style/bootstrap-grid.min.less'

export default class Grid extends Component{
    render(){
        const cls=this.props.cols;
        let template=(()=>{
            return cls.map((i,index,arr)=>{
               return <div style={{outline:'1px solid black'}} className={`col-md-${i}`} key={index}>{this.props.children}</div>
            })
        })();
        return(
            <div className='container-fluid'>
                <div className='row'>
                    {template}
                </div>
            </div>
        )
    }
}