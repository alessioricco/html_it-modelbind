exports.definition = {
	config : {
		columns : {
			"title" : "string",
			"author" : "string",
			"isbn" : "string"
		},
		adapter : {
			type : "sql",
			collection_name : "book"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here

			validate : function(attrs) {

				var title = attrs["title"];
				var author = attrs["author"];

				if (title.length <= 0 || author.length <= 0) {
					return "Inserisci titolo e autore";
				}

			}
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
