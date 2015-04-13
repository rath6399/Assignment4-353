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

var tableView1 = Ti.UI.createTableView({
	scrollable: true
});

var firstSection1 = Ti.UI.createTableViewSection({});

var firstRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Major: Information System',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});

var secondRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Minor: Computer Science',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});

var thirdRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	height:'50',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	title: 'Overall GPA: 3.26'
});


var fourthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor:'white',
	height:'50',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	title: 'Gender: Female'

});

var fifthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	height:'50',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	title: 'Nationality: China'
});

var sixthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Email Address: shingye23@gmail.com',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});


var seventhRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Language: First-Chinese, Second-English',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});

var eighthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Working History 2010-2012: xxx xxxx',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});

var ninthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Working History 2012-2014: xxx xxxx',
	color:'#585858',
	borderWidth:1,
	borderColor:'#898989',
	height:'50'
});

firstSection1.add(firstRow1);
firstSection1.add(secondRow1);
firstSection1.add(thirdRow1);
firstSection1.add(fourthRow1);
firstSection1.add(fifthRow1); 
firstSection1.add(sixthRow1);
firstSection1.add(seventhRow1);
firstSection1.add(eighthRow1); 
firstSection1.add(ninthRow1); 

tableView1.setData([firstSection1]);
listView.add(tableView1);
win1.add(topView);
win1.add(listView);
win1.open();
