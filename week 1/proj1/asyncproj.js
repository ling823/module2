var fs = require('fs')

console.log("reading from file")
fs.readFile('input.txt',(err,data)=>{
	if (err) throw err;
	console.log(data.toString())
	console.log("finish reading file")
	console.log("Begin Appending")
	fs.appendFile("input.txt"," Thank thank again", (err)=>{
		if (err) throw err;
		console.log("Finish appending")
		console.log("Begin Re-reading")
		fs.readFile("input.txt", (err,data)=>{
			if (err) throw err;
			console.log(data.toString())
			console.log("Finish Re-reading File")
		})
	})
})
