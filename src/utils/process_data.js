// This file contains function to reduce raw data


const process_feature_data = (data) => {
// initialising features, array to be returned
    const features = []

// Looping through different tracks
    for(var j=0; j<data.length; j++) {
        const initial_data = data[j]
    
// Processing data to reduce it to a path array
        const _processPathData = () => {
            const data = initial_data.features.reduce((accu, curr) => {
                accu.push(curr.geometry.coordinates)
                return accu;
            }, [])
            return data;
        }
        const path = _processPathData();
        
// Processing data to reduce it to a consumption data array
        const _processConsumptionData = () => {
            const data = initial_data.features.reduce((accu, curr) => {
                    accu.push(curr.properties.phenomenons.Consumption)
                    return accu;
            }, [])
            return data;
        }
        const consumption_data = _processConsumptionData();
        
// Processing consumption data
        for(var i=0; i<path.length-1; i++) {
            var consumption;
            try{
            if(consumption_data[i+1])
                consumption = ((consumption_data[i].value+consumption_data[i+1].value)/2)
            else
                consumption = ((consumption_data[i-1].value+consumption_data[i].value)/2)
            } catch (err) {
                consumption = -1;
                console.log('Error : Consumption data not available')
            }
            
// Defining Color for different values of consumption data
            var color;
        
            if(consumption===-1)
            color = [0,0,255]
            else
            color = (consumption < 1)?[0,255,0]:(consumption < 2? [128,255,0]:(consumption < 3? [255,255,0]:(consumption < 4?[255,128,0]:[255,0,0])));
            
            features.push({
                type: "Feature",
                properties: {
                    consumption,
                    color
                },
                geometry: {
                    type: "MultiLineString",
                    coordinates: [[path[i], path[i+1]]]
                }
            })
        }
    }
// returning features array with required data populated
    return features;
}


export default process_feature_data;