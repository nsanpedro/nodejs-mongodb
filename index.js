//js de mongo+node - prueba

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function (err, db){
	if (err) {
		process.exit(1);
	} else {
		console.log("Connected correctly to server");

	}
	db.close();
});

// Insert de documentos

var insertDocuments = function(db, callback){
	var collection = db.collection('documents');

	collection.insert([
	{a : 1}, {a : 2}, {a : 3}], 
	function(err, result) {
			console.log("Inserted 3 documents into the document collection");
			callback(result);
		});
}

