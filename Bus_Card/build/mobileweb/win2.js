var win1 = Ti.UI.currentWindow;

var topView = Ti.UI.createView({
	top:0,
	height:40,
	backgroundColor:'#b18e5f'	
});

var listView = Ti.UI.createView({
	backgroundColor:'white',
	top:65,
	bottom:40,
	width:300
});


win1.add(topView);
win1.add(listView);
win1.open();
