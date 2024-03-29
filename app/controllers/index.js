var index = 0;
var books = Alloy.createCollection("book");
// carica la collezione dalla memoria (database)
books.fetch();

function save(e) {

	// Crea un modello di tipo 'book'
	var book = Alloy.createModel('book', {
		title : $.title.value,
		author : $.author.value,
		isbn : $.isbn.value
	});


	if (!book.isValid())
	{
		alert("titolo o autore mancanti");
		return;
	}

	// aggiungi un modello alla collezione
	books.add(book);

	// salva il modello
	book.save();
	index++;

	$.title.value = "";
	$.author.value = "";
	$.isbn.value = "";

	alert("inserimento completato");

}

function prev() {
	index--;
	if (index <= 0) {
		index = 0;
	}
	showModel(index);
}

function next() {
	index++;
	if (index >= books.length) {
		index = books.length - 1;
	}
	showModel(index);
}

function showModel(index) {

	var model = books.at(index);
	displayModel(model);
}

function showModelWithID(id) {

	var model = books.get(id);
	displayModel(model);
}

function displayModel(model) {
	Ti.API.info(JSON.stringify(model));

	$.title.value = model.get("title") || "";
	$.author.value = model.get("author") || "";
	$.isbn.value = model.get("isbn") || "";
}

function list() {
	var list = Alloy.createController('list', {
		onRowClickCallback : showModelWithID
	}).getView();
	list.open();
}

$.index.open();
