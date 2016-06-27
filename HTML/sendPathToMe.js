/* 
------------------
The MIT License (MIT)
Copyright (c) 2016 RAYMOND R-MCNAUGHT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE R OTHER DEALINGS IN THE SOFTWARE.
------------------
*/

var reverseString = (function(){

	var init = function(){
		console.log("function start");
		reverseThis();
	}

	reverseThis = function(){
		// get button
		var rr = document.getElementById('reverseID'),
		entInput = document.getElementById('enterID');

		rr.addEventListener('click', function(){
			fire();
		});

		entInput.onkeypress = function(e){
			if( e.keyCode == 13 ) {
				fire();
			}
		}

		function fire(){
			// get input values 
			var ent = document.getElementById('enterID').value,
				outp = document.getElementById('outputID'),
				tobeReversed;

			// PC-MAC backward-to-forward-Slash
			if( ent.match(/\\/g) ){
				console.log( 'enterID value = ' + ent.match(/\\/g) );
				tobeReversed = ent.replace(/\\/g, '/');
				outp.value = tobeReversed;
				console.log('outputID value = ' + outp.value);

			}
			// MAC-PC forward-to-backward-Slash
			else if ( ent.match(/\//g) ) {
				console.log( 'enterID value = ' + ent.match(/\//g) );
				tobeReversed = ent.replace(/\//g, '\\');
				outp.value = tobeReversed;
				console.log('outputID value = ' + outp.value);
			}
		
		}
	}

	//Object literal
	return {
	  init: init
	};

	//smb://nyc1file.ggg.grey.global/Grey/Client/Relypsa/Veltassa/
})();

reverseString.init();

