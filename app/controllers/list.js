var args = arguments[0] || {};
var callback = args.onRowClickCallback;
Alloy.Collections.book.fetch();

function show(e) {
	
	// mostro il valore di e nella console
	Ti.API.info(JSON.stringify(e));
	
	// mostra il modello attuale nella finestra sottostante
	callback && callback(e.row.alloy_id);
	
	// chiudi la finestra
	exit();
};

function exit()
{
	// chiudo la finestra
	$.list.close();	
}

// in the controller
function close() {
  // da chiamare per evitare memory leaks
  $.destroy();
};

