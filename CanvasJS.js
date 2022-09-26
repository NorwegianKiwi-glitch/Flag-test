const canvas =document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Norge Venstre
ctx.fillStyle = "rgb(186, 12, 47)";
ctx.fillRect(0,0, 600, 600)
ctx.fillStyle = "rgb(0, 32, 91)"
ctx.fillRect(0, 700, 2200, 200)
ctx.fillStyle = "rgb(186, 12, 47)";
ctx.fillRect(0, 1000, 600, 600)

// Norge midt
ctx.fillStyle = "rgb(0, 32, 91)"
ctx.fillRect(700, 0, 200, 1600)


// Norge Venstre
ctx.fillStyle = "rgb(186, 12, 47)";
ctx.fillRect(1000, 0, 1200, 600)
ctx.fillStyle = "rgb(186, 12, 47)";
ctx.fillRect(1000, 1000, 1200, 600)

//// ctx circle
//ctx.beginPath();
//ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//ctx.stroke();