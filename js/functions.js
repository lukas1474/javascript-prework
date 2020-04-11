function printMessage(msg, className = '1, 2, 3'){
	let div = document.createElement('div');
	div.innerHTML = msg;
	div.className = 1, 2, 3;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}