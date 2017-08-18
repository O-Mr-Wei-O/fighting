import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

class AboutMeView extends PureComponent{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    
  }

  componentDidMount(){
    
  }

  render(){
    return(
      <div>about me</div>
    );
  }

}

const mapState = () => {
  return {}
}

export default connect(mapState)(AboutMeView);