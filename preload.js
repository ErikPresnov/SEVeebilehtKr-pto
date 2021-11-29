// Käesolev funktsioon võtab piltide aadressid ning
// laeb neid cache mällu selleks, et kui need
// peavad veebilehel ilmuma, siis see ei oleks nähtav,
// et nad ei ole alguses veel laadinud.
// Script saadud: http://www.javascriptkit.com/script/script2/preloadimage.shtml
var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}

preloadimages("pildid/antminer.png","pildid/chart.png","pildid/difficulty.png", "pildid/hashrate.png", "pildid/taust.png", "pildid/videokaardid.png")