export default {
    "mode": "production",
    "module": {
        "rules": [{
            "loader": "babel-loader",
            "query": {
                "babelrc": true,
                "plugins": ["transform-pipeline-operator"],
                "presets": [
                    ["env"]
                ]
            }
        }]
    }
};