import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactApexChart from "react-apexcharts";
import {LIVE_CHART_CONFIG} from '../../config/home/liveChartConfig'
import * as jobActions from '../../actions/Home';
import './liveChart.css'

class LiveChart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.subscribeToData();
  }

  componentWillUnmount(){
    this.props.unsubscribeToData()
  }

  render() {
      return (
          <div>
          <div className="container">
            <ReactApexChart
                options={LIVE_CHART_CONFIG}
                series={[{data : this.props.home.live_data}]}
                type="candlestick"
                height={500}
            />
          </div>
          </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        home: state.home
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(jobActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveChart)
