var reverseString = (function(){

	// Display some statistics about this computer, using node's os module.

    var os = require('os');
    var prettyBytes = require('pretty-bytes');

    $('.stats').append('Number of cpu cores: <span>' + os.cpus().length + '</span>');
    $('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');

    // Electron's UI library. We will need it for later.

    var shell = require('shell');

    //----------------//

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

