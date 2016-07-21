import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'

import Main from '../Main/index.js'

//styles

import styles from './styles/style.less'


function mapStateToProps(state) {
    return {
        pages: state.pages
    }
}

export class App extends Component {
    getData(){
       return this.props.pages.filter((i,index,arr)=>{
            if(i.link.indexOf(this.props.location.pathname.slice(1))!==-1){
                return i;
            }
        });

    };
    render() {
        const appChildren=React.cloneElement(this.props.children, this.props);
        return (
            <section className={styles.app}>
                {this.props.pages.map((i,index,arr)=>{
                    return (
                        <div key={index}><Link to={i.link}>{i.name}</Link></div>
                    )
                })}
                <h1>{this.getData()[0]?this.getData()[0].title:''}</h1>
            </section>
        );
    }
}

App = connect(
    mapStateToProps
)(App);