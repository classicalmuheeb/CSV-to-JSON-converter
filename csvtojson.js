//CSV to JSON

/*we need to use the npm module for converting CSV to JSON, 
which I have already install using 'npm install ....'

How the program works:
We will use the csvtojson converter module to convert the CSV file to
JSON. We will also make use of 'fs' core module to create file which 
will contain the array of objects of the converted records.
*/

//declare a constant to require the csv-converter module
const csv = require('csvtojson');
const csvFilePath = 'customer-data.csv'; //file path
const fs = require('fs'); //to require 'fs' core module

//create an array to push the items into
let arr = [];

csv() 
	.fromFile(csvFilePath)
	.then(function(jsonObj, err) {
		if(err) {
			return console.log('Oops! error encountered ' + err.message);
		}
		arr.push(jsonObj)
		console.log(arr)

//to write the converted JSON a file, I would use fs.writeFile
	fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), function(error) {
		if(error) {
			return console.log('Error stringifying ' + error.message);
			}
			let time = new Date();
			console.log('Process finished on ' + time.toGMTString());
	})

})
	/*

	.on('done', (error) => {
		if(error) return process.exit(1)
			console.log(arr)
		//to write array into file
		fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error) => {
			if(error) return process.exit(1)
			let todaysDate = new Date();
			console.log('Done on ' + todaysDate.toGMTString())
			//to finish the process when everything is done, we exit the process
			process.exit(0)
		})
	})
	*/