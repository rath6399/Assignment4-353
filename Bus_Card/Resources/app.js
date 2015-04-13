var win1 = Ti.UI.createWindow();

//Create a whole view that cover the screen.
var view1 = Ti.UI.createView({
	backgroundColor:'#9F9D9D'	
});

//Create the headphoto of me.
var myImage = Ti.UI.createImageView({
	top:50,
	width:'180',
	height:'240',
	image:'ME.png'
});

//Top color shows gold, theme color of UI.
var topView = Ti.UI.createView({
	top:0,
	height:40,
	backgroundColor:'#b18e5f'	
});

//Create Information, such as name, major, etc.
var name = Titanium.UI.createLabel({
	text:'Xinran Ye',
	color:'white',
	textAlign:'center',
	top:'300',	
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var Major = Titanium.UI.createLabel({
	text:'BS In Information System',
	color:'white',
	textAlign:'center',
	top:'330',	
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var school = Titanium.UI.createLabel({
	text:'University of Idaho',
	color:'white',
	textAlign:'center',
	top:'360',	
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

//Create a logo of facebook.
var facebook = Ti.UI.createImageView({
	bottom:30,
	image:'facebook.png'
});

//Create a button link to second window.
var botton = Ti.UI.createButton({
	top:400,
	title:'See More!',
	height:'auto',
	width:'auto'
});

botton.addEventListener('click',function(e){
	var newWin = Titanium.UI.createWindow({
		title:'More Details',
		url:'win2.js',
		backgroundColor:'#9F9D9D'
	});
	newWin.open();
});

//link the app to facebook page.
facebook.addEventListener('click',function(e){
    Ti.Platform.openURL("https://www.facebook.com/xinran.ye.1");
	
});

view1.add(myImage);
view1.add(name);
view1.add(Major);
view1.add(school);
view1.add(facebook);
view1.add(botton);
win1.add(view1);
win1.add(topView);
win1.open();
