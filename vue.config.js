const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/bourbon_vue_1/'
    : '/'
}

// module.exports = {
    //outputDir: path.resolve(__dirname, '../server/public'),
//     devServer: {
//         prox: {
//             "/collection": {
//                 target: 'http://localhost:5000'
//             },
//             "/add": {
//                 target: 'http://localhost:5000'
//             },
//         }
//     }
// }