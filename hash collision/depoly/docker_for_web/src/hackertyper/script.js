/*
*(c) Copyright 2011 Simone Masiero. Some Rights Reserved. 
*This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
*/
//var _0x2402=["\x72\x65\x66\x65\x72\x72\x65\x72","\x69\x70\x6C\x61\x79\x73\x6F\x66\x74\x2E\x63\x6F\x6D\x2F","\x69\x70\x63\x2E\x6D\x65\x2F","\x70\x6C\x61\x79\x6E\x65\x78\x74\x2E\x63\x6E\x2F","\x73\x69\x6E\x61\x61\x70\x70\x2E\x63\x6F\x6D\x2F","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x64\x65\x78\x4F\x66","","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x69\x70\x6C\x61\x79\x73\x6F\x66\x74\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x65\x72\x74\x79\x70\x65\x72\x2E\x68\x74\x6D\x6C"];var ref=document[_0x2402[0]];var domains= new Array(_0x2402[1],_0x2402[2],_0x2402[3],_0x2402[4]);var refpass=false;for(i=0;i<=domains[_0x2402[5]];i++){if(ref[_0x2402[6]](domains[i])>0){refpass=true;break ;} ;} ;if(ref==_0x2402[7]){refpass=true;} ;if(!refpass){window[_0x2402[9]][_0x2402[8]]=_0x2402[10];} ;

$(
	function(){
		$( document ).keydown(
			function ( event ) { 
				Typer.addText( event ); //Capture the keydown event and call the addText, this is executed on page load
			}
		);
	}
);

var Typer={
	text: null,
	accessCountimer:null,
	index:0, // current cursor position
	speed:2, // speed of the Typer
	file:"", //file, must be setted
	accessCount:0, //times alt is pressed for Access Granted
	deniedCount:0, //times caps is pressed for Access Denied
	init: function(){// inizialize Hacker Typer
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); // inizialize timer for blinking cursor
		$.get(Typer.file,function(data){// get the text file
			Typer.text=data;// save the textfile in Typer.text
		});
	},
	
	content:function(){
		return $("#console").html();// get console content
	},
	
	write:function(str){// append to console content
		$("#console").append(str);
		return false;
	},
	
	makeAccess:function(){//create Access Granted popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.accessCount=0; //reset count
		var ddiv=$("<div id='gran'>").html(""); // create new blank div and id "gran"
		ddiv.addClass("accessGranted"); // add class to the div
		ddiv.html("<h1>ACCESS GRANTED</h1>"); // set content of div
		$(document.body).prepend(ddiv); // prepend div to body
		return false;
	},
	makeDenied:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.deniedCount=0; //reset count
		var ddiv=$("<div id='deni'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("accessDenied");// add class to the div
		ddiv.html("<h1>ACCESS DENIED</h1>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
	
	hidepop:function(){// remove all existing popups
		$("#deni").remove();
		$("#gran").remove();
	},
	
	addText:function(key){//Main function to add the code
		if(key.keyCode==18){// key 18 = alt key
			Typer.accessCount++; //increase counter 
			if(Typer.accessCount>=3){// if it's presed 3 times
				Typer.makeAccess(); // make access popup
			}
		}else if(key.keyCode==20){// key 20 = caps lock
			Typer.deniedCount++; // increase counter
			if(Typer.deniedCount>=3){ // if it's pressed 3 times
				Typer.makeDenied(); // make denied popup
			}
		}else if(key.keyCode==27){ // key 27 = esc key
			Typer.hidepop(); // hide all popups
		}else if(key.ctrlKey==true && key.keyCode=='74'){ // key 74 = j key
   	window.open("http://www.iplaysoft.com/go/x", "Sexy", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
		}else if(key.ctrlKey==true && key.keyCode=='82'){ // key 82 = r key
			window.open("http://www.iplaysoft.com", "rc", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
		}else if(key.ctrlKey==true && key.keyCode=='71'){ // key 71 = g key
			window.open("http://www.iplaysoft.com/go/amazon", "Amazon", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
		}
		else if(key.ctrlKey==true && key.keyCode=='72'){ // key 72 = h key
			window.open("http://www.ipc.me", "iPc", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
		}
		else if(key.ctrlKey==true && key.keyCode=='80'){ // key 80 = p
	   	window.open("http://www.iplaysoft.com/go/applestore", "Apple", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}else if(key.ctrlKey==true && key.keyCode=='82'){ // key 82 = r key
				window.open("http://www.iplaysoft.com", "rby", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}else if(key.ctrlKey==true && key.keyCode=='66'){ // key 66 = b key
				window.open("http://www.iplaysoft.com/go/tmall", "Tmall", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}
			else if(key.ctrlKey==true && key.keyCode=='73'){ // key 73 = i key
				window.open("http://www.iplaysoft.com", "iPlaySoft", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}
			else if(key.ctrlKey==true && key.keyCode=='76'){ // key 76 = l key
				window.open("http://www.iplaysoft.com/go/jd", "JD", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}
			else if(key.ctrlKey==true && key.keyCode=='69'){ // key 69 = e key
				window.open("http://www.iplaysoft.com/go/store", "Software", "height=800,width=1200,menubar=1,status=1,scrollbars=1");
			}
		else if(Typer.text){ // otherway if text is loaded
			var cont=Typer.content(); // get the console content
			if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
			if(key.keyCode!=8){ // if key is not backspace
				Typer.index+=Typer.speed;	// add to the index the speed
			}else{
				if(Typer.index>0) // else if index is not less than 0 
					Typer.index-=Typer.speed;//	remove speed for deleting text
			}
			var text=$("<div/>").text(Typer.text.substring(0,Typer.index)).html();// parse the text for stripping html enities
			var rtn= new RegExp("\n", "g"); // newline regex
			var rts= new RegExp("\\s", "g"); // whitespace regex
			var rtt= new RegExp("\\t", "g"); // tab regex
			$("#console").html(text.replace(rtn,"<br/>").replace(rtt,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts,"&nbsp;"));// replace newline chars with br, tabs with 4 space and blanks with an html blank
			window.scrollBy(0,50); // scroll to make sure bottom is always visible
		}
		if ( key.preventDefault && key.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		};  
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
	
	updLstChr:function(){ // blinking cursor
		var cont=this.content(); // get console 
		if(cont.substring(cont.length-1,cont.length)=="|") // if last char is the cursor
			$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it
		else
			this.write("|"); // else write it
	}
}