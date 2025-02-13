//图片产生向右动态模糊效果 

function smear(img){
    console.log("11")
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let context = canvas.getContext("2d");
    context.drawImage(img,0,0);
    console.log("___context__",context)
    let pixels = context.getImageData(0,0,img.width,img.height);

    let worker = new Worker("smear.js");
    worker.postMessage(pixels);

    worker.onmessage = function(e){
        let smeared_pixels = e.data;
        context.putImageData(smeared_pixels,0,0);
        img.src = canvas.toDataURL();
        worker.terminate();
        canvas.width = canvas.height = 0;
    }
}