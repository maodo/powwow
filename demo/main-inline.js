requirejs.config({

	baseUrl: '.',

	paths : {
		'sprintf' : '../bower_components/sprintf/src/sprintf',
	},

	packages : [
        { name: 'powwow', location: '../src', main: 'powwow' },
        { name: 'dejavu', location: '../bower_components/dejavu/dist/amd/strict', main: 'main' },
        { name: 'mout', location: '../bower_components/mout/src', main: 'index' },
        { name: 'when', location: '../bower_components/when', main: 'when' },
        { name: 'msgs', location: '../bower_components/msgs', main: 'msgs' }
    ]

});

require([ 'app-inline' ], success, fail);

function success() {
	console.log('the application successfully loaded');
}

function fail(e) {
	console.error('the application failed to load', e);
}