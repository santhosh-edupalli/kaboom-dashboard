import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactApexChart from "react-apexcharts";
import Loader from 'react-loader-spinner'
import {HISTORICAL_CHART_CONFIG} from '../../config/home/historicalChartConfig'
import * as jobActions from '../../actions/Home';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./historicalChart.css"

class HistoricalChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHistoricalData();
  }

  render() {
      return (
        <div>
        {
          this.props.home.loading ? 
          <Loader className="loader" type="Circles" color="rgba(50, 117, 233,0.5)"/> :
          <div className="container">
          <ReactApexChart
              options={HISTORICAL_CHART_CONFIG}
              series={[{data : this.props.home.historical_data}]}
              type="candlestick"
              height={500}
          />
          </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalChart)
