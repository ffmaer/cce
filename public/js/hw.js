let page_width = 500;

function rndColor(){
	let color = [
		'rgb(157, 0, 255)',//lotus purple
		'rgb(255, 0, 229)',//lotus pink
		'rgb(255, 42, 0)'//flower red
	];
	return color[Math.floor(Math.random()*color.length)];
}

let h2 = document.querySelectorAll("h2");
for(let i=0;i<h2.length;i++){
	let text = h2[i].textContent;
	h2[i].textContent = "";
	for(let j=0;j<text.length;j++){
		let span = document.createElement("span");
		let char = text.charAt(j);
		span.textContent = char;
		span.style.color=rndColor();
		if(char == "e"){
			span.style.opacity = 1;
			span.onmouseover = function(){
				if(span.style.opacity == 1){
					for(let k=0;k<100;k++){
						setTimeout(function(){
							span.style.opacity -= 0.01;
						},20*k);	
					}
				}
			}
		}
		h2[i].append(span);
	}
}

let content = document.getElementById("content");
content.style.width = page_width;
content.style["border-style"] = "dotted";
content.style.padding = "20px";
content.style["border-color"] = rndColor();
content.style["background-color"] = "rgb(252, 244, 255)";
content.onclick = function(){
	this.style["border-color"] = rndColor();
}


let links = document.querySelectorAll("a");
let wiggle_interval_id;
for(let i=0;i<links.length;i++){
	let link = links[i];
	link.style["text-decoration"] = "none";
	link.style.color = rndColor();
	let text = link.textContent;
	link.innerHTML = "";
	for(let j=0;j<text.length;j++){
		let char=text.charAt(j);
		let span = document.createElement("span");
		span.textContent = char;
		link.append(span);
	}

	link.onmouseover = function(){
		clearInterval(wiggle_interval_id);
		wiggle_interval_id = setInterval(function(){
			let spans = link.querySelectorAll("span");
			for(let j=0;j<spans.length;j++){
				let span = spans[j];
				span.style["font-size"] = `${Math.floor(Math.random()*4+8)/10}em`;
			}
				
		},100);
	}

	link.onmouseout = function(){
		clearInterval(wiggle_interval_id);
	}
}


let h3s = document.querySelectorAll("h3");
for(let i=0;i<h3s.length;i++){
	let h3=h3s[i];
	h3.onclick = function(){
		let text = h3.textContent;
		h3.textContent = text.substring(1)+text.charAt(0);
	}
}

let sentence = "My computer program is like a piano. I could continue to use it creatively all my life. - John Whitney";
sentence = sentence.replace(/ /g,"");
let sentence_index = 0;
function nextChar(){
	let nc = sentence.charAt(sentence_index);
	sentence_index++;
	sentence_index = sentence_index % sentence.length;
	return nc;
}

let grid_size =20;
let display_width = page_width;
let display_height = grid_size*10;
let display = document.getElementById("display");
for(let x=0;x<display_width/grid_size;x++){
	for(let y=0;y<display_height/grid_size;y++){
		let grid = document.createElement("div");
		grid.style["background-color"]=rndColor();
		grid.style.opacity = 0.05;
		grid.style.width = grid_size;
		grid.style.height = grid_size;
		grid.classList.add("grid");

		
		
		grid.style["color"] ="white";
		grid.textContent = ".";
		grid.setAttribute("char",".");
		grid.onmouseover = function(){
			let char = grid.getAttribute("char");
			if(char == "."){
				let nc = nextChar();
				grid.textContent = nc;
				grid.setAttribute("char",nc);
				grid.style.opacity = 1;
			}
		}
		display.append(grid);
	}
}

let body = document.querySelector("body");
let gif_index = Math.floor(Math.random()*2);
body.style.background = `url('/gif/g${gif_index}.gif')`;


let h1s = document.querySelectorAll("h1");
for(let i=0;i<h1s.length;i++){
	let h1 = h1s[i];
	let text = h1.textContent;
	h1.textContent="";
	for(let j=0;j<text.length;j++){
		let div = document.createElement("div");
		div.textContent = text.charAt(j);
		div.style.color = "white";
		div.style.background = rndColor();
		div.classList.add("char");
		h1.append(div);
	}
}




