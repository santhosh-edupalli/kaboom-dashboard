export const formatHistoricalData = (data) =>{
    let result = data.map((dataItem) => {
        let item = formatDataPoint(dataItem)
        return item;
    })
    return result
}

export const formatDataPoint = (dataItem) => {
    let item = [];    
    dataItem.split(",").slice(0, 5).forEach((x) => {item.push(Number(x))});
    
    return item
}