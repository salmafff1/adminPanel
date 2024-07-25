import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

export const Dashboard = (props) => {
  return (
    <div>Dashboard page</div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
