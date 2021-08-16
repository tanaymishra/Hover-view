let files=[".img",".i-img",".rem"]
const sel=(e)=>{return document.querySelector(e)}
const event=(eh,e,f)=>{sel(eh).addEventListener(e,f)}
event(files[0],"mouseenter",()=>{sel(files[1]).style.display="block";
event(files[0],"mousemove",(e)=>{sel(files[2]).scrollTo(e.clientX*2,e.clientY*1.75)})})
event(files[0],"mouseleave",()=>{sel(files[1]).style.display="none"})