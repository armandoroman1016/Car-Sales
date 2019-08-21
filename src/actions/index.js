export const addFeature = (featureName , featurePrice) => {
    return {
        type : 'ADD_FEATURE',
        payload : {featureName, featurePrice}
    }
}