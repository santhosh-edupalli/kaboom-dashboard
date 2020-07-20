export const HISTORICAL_CHART_CONFIG = {
    chart: {
        foreColor :'#fff',
        zoom: {
            enabled: true,
            type: 'x',  
            autoScaleYaxis: true,  
        },
        animations: {
            enabled: false,
        },
        type: "candlestick",
        height: '100%',
    },
    title: {
        text: "Historical Data",
        align: "left",
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        tooltip: {
            enabled: true,
        }
    }
}