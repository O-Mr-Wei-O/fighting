import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './flow/homeActions.js';
import styles from './HomeView.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const defaultProps = {
  home: {
    name: '',
    asyncName: ''
  }
};

const propTypes = {
  home: PropTypes.object
};

class HomeView extends PureComponent{
  
  constructor(props){
    super(props);
  }
  
  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){
    this.props.getDefault({'name':'wower'});
    this.props.getAsyncDefault({'name':'icepy'});
  }

  render(){
    const { name,asyncName } = this.props.home;
    return (
      <div className={ cx('icepy') }>
        <div>【SYNC】Hello { name }</div>
        <div>【ASYNC】Hello { asyncName }</div>
      </div>
    )
  }
}

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;

const mapState = ({ home }) => {
  return {
    home
  }
}

export default connect(mapState,actions)(HomeView);