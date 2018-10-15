let links = document.querySelectorAll(".link");
for(let i=0;i<links.length;i++){
  let link = links[i];
  let a = document.createElement("a");
  a.textContent = link.textContent;
  a.setAttribute("href",a.textContent);
  a.setAttribute("target","_blank");
  link.innerHTML = "";
  link.append(a);
}