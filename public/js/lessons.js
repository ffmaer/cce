let page_width = 500;

function rndColor(){
	let color = [
		'rgb(157, 0, 255)',//lotus purple
		'rgb(255, 0, 229)',//lotus pink
		'rgb(255, 42, 0)'//flower red
	];
	return color[Math.floor(Math.random()*color.length)];
}

let fade_interval;
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
				clearInterval(fade_interval);
				fade_interval = setInterval(function(){
					span.style.opacity -= 0.1;
					if(span.style.opacity<0){
						clearInterval(fade_interval);
					}
				},100);
			}
			span.onmouseout = function(){
				clearInterval(fade_interval);
				span.style.opacity = 1;
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

let folds = document.querySelectorAll(".fold");
for(let i=0;i<folds.length;i++){
	let fold = folds[i];
	let ul = fold.querySelector("ul");
	ul.style.display="none";
	fold.onclick = function(){
		ul.style.display="";
	}
	let p = fold.querySelector("p");
	p.innerHTML = `<a href="javascript:void(0);">${p.textContent}</a>`;
}

let h3s = document.querySelectorAll("h3");
for(let i=0;i<h3s.length;i++){
	let h3=h3s[i];
	h3.onclick = function(){
		let text = h3.textContent;
		h3.textContent = text.substring(1)+text.charAt(0);
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
		let char = text.charAt(j);
		if(char == "o"){
			char = rndO();
		}
		div.textContent = char;
		div.style.color = "white";
		div.style.background = rndColor();
		div.classList.add("char");
		h1.append(div);
	}
}

function rndO(){
	let ooo = ["○","◌","◍","◎","●","◐","◐","◒","◓","◔","◕","◯","◴","◵","◶","◷"];
	let index = Math.floor(Math.random()*ooo.length);
	return ooo[index];
}

function dots(number){
	let result = "";
	for(let i=0;i<number;i++){
		result+="■";
	}
	return result;
}

let hrs = document.querySelectorAll(".hr");
for(let i=0;i<hrs.length;i++){
	let hr = hrs[i];
	hr.style.height = "10px";
	hr.style.width = "100%";
	hr.style.color = "white";
	hr.style["text-align"] = "center";
	hr.style["font-size"] = "0.1em";
	hr.textContent = dots(60);
}