export const LIVE_CHART_CONFIG = {
    chart: {
        zoom: {
            enabled: true,
            type: 'x',
        },
        foreColor : '#fff',
        animations:{
            enabled : false
        },
        type: "candlestick",
        height: 350,
    },
    plotOptions: {
        bar: {
            columnWidth: '10%'
        }
    },
    title: {
        text: "Live Data",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        }
    },
    tooltip:{
        enabled:true,
        x: {
            show: true,
            format: 'dd MMM HH:mm:ss',
            formatter: undefined,
        },
    }
}