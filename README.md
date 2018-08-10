# CSV-to-JSON-converter Using NodeJS
The project contain codes that convert a CSV file containing customer data into a JSON format using NodeJS

A. Why did you design your project the way you did? What difficulties did you overcome?
I installed the csvtojson converter using npm install. I initially had issues writing the JSONed stringify array into a file using fs.writeFile. 
I used the *.then* attribute to the csv method to (i) check whether the conversion is successful (ii) push them the items into an array and display the converted items in the console .Then I created a file using fs.writeFile containing the JSON stringified array with 2 spaces in between and a callback method to check for success or failure plus a date show the time and date when the process finished.

B. How did you test your project to verify that it works? 
Tested it through npm. The result was displayed on the console and  the 'customer-data.json' file was created.
