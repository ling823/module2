var fs = require('fs')

function finishTheProg(err,data){
	console.log(data.toString())
	console.log("Finish re-reading file")
}
function rereadingFile(err){
	if(err) console.log(err)
		console.log("Finish appending file.")
	console.log("Begin re-reading file")
	fs.readFile("input.txt", finishTheProg)
}
function appendFile(err,data){
	if(err) console.log(err)
		console.log(data.toString())
	console.log("Finish Reading From File")
	console.log("Begin Appending File")
	fs.appendFile("input.txt","Hello hello hello ",rereadingFile)

}



console.log("Reading From File")
fs.readFile("input.txt",appendFile)