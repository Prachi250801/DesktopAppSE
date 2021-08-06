const electron = require('electron');
const url = require('url');
const path = require('path');
// const {Client} = require('pg')
const {app, BrowserWindow,Menu} = electron;
let mainWindow;
let addWindow;

app.on('ready',function(){
	mainWindow = new BrowserWindow({});

	mainWindow.loadURL(url.format({
		pathname:path.join(__dirname,'mainWindow.html'),
		protocol:'file:',
		slashes:true
	}));

	mainWindow.on('closed',function(){
		app.quit();
	})

	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

	Menu.setApplicationMenu(mainMenu);
});

function createAddWindow(){
	addWindow = new BrowserWindow({
		width: 1000,
		height:800,
		title:'Input1'
	});

	addWindow.loadURL(url.format({
		pathname:path.join(__dirname,'addWindow.html'),
		protocol:'file:',
		slashes:true
	}));

	addWindow.on('close',function(){
		addWindow = null;
	})
}

function createAdd2Window(){
    add2Window= new BrowserWindow({
        width:1000,
        height:800,
        title:'Input2'
    });
    //Load HTML File
    add2Window.loadURL(url.format({
        pathname: path.join(__dirname,'add2Window.html'),
        protocol:'file:',
        slashes:true
    }))
    add2Window.on('close',function(){
        add2Window=null;
    })
}

//Menu Template

const mainMenuTemplate = [
	{
		label:'File',
		submenu:[
			{
				label:'Input1',
				click(){
					createAddWindow();
				}
			},
			{
				label:'Input2',
				click(){
					createAdd2Window();
					
				}
			},
			{
				label:'Edit Course'
			},
			{
				label:'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click(){
					app.quit();
				}
			}
		]
	}
];

if(process.platform == 'darwin')
{
	mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV != 'production')
{
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu:[
			{
				label:'Toggle DevTools',
				click(item, focusedWindow){
					focusedWindow.toggleDevTools();
				}
			},
			{
				role:'reload'
			}
		]
	});
}