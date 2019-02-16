// Webpack NODE API
//allow console calls since this is a build
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating a minified bundle for production via webpack. This will take a moment...'.blue);
webpack(webpackConfig).run((err, stats) => {
    if(err) { //fatal error stop build
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings'.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack Stats: ${stats}`);

    //build succeeded
    console.log('Application compiled succesfully in production mode and written to /dist. It is ready...'.green);

    return 0;
});

