let repeatslider;
let repeatval;
let tintRslider,tintGslider,tintBslider;
let tintRval,tintGval,tintBval;
let noiseslider;
let noiseval;
let blurslider;
let blurval;
let filterslider;
let filterval;
let f1;
let f2;
let white;
let bm;
let bm_index=0;
let ft;
let ft_index=0;

function preload(){
	f1 = loadImage("./f1.JPG")
  f2 = loadImage("./f2.JPG")
}

function setup() {
  bm = [BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, NORMAL];
  ft = [THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE, BLUR, "none"];
  white = color(255);
  createCanvas(600, 800);
  
  frameRate(0);

  repeatslider = createSlider(1,20,2);
  repeatslider.style("width",`${width}px`);
  repeatslider.position(0,810);

  tintRslider = createSlider(0,255,255);
  tintRslider.style("width",`${width/3}px`);
  tintRslider.position(width/3*0,830);

  tintGslider = createSlider(0,255,255);
  tintGslider.style("width",`${width/3}px`);
  tintGslider.position(width/3*1,830);

  tintBslider = createSlider(0,255,255);
  tintBslider.style("width",`${width/3}px`);
  tintBslider.position(width/3*2,830);

  noiseslider = createSlider(0,10,0);
  noiseslider.style("width",`${width}px`);
  noiseslider.position(0,850);

  blurslider = createSlider(1,10,0);
  blurslider.style("width",`${width}px`);
  blurslider.position(0,870);

  filterslider = createSlider();
  updateFilterSlider();
  filterslider.style("width",`600px`);
  filterslider.style("transform",`rotate(90deg)`);
  filterslider.position(600,300);
  filterslider.style("display","block");

  repeatslider.changed(function(){
    drawflowers();
  });

  tintRslider.changed(function(){
    drawflowers();
  });

  tintGslider.changed(function(){
    drawflowers();
  });

  tintBslider.changed(function(){
    drawflowers();
  });

  noiseslider.changed(function(){
    drawflowers();
  });

  blurslider.changed(function(){
    drawflowers();
  });

  filterslider.changed(function(){
    drawflowers();
  });

  for(let i=0;i<bm.length;i++){
    let btn = createButton(bm[i])
    btn.mousePressed(function(){
      bm_index = i;
      drawflowers();
    });
    btn.position(650, 50+20*i);    
  }

  for(let i=0;i<ft.length;i++){
    let btn = createButton(ft[i])
    btn.mousePressed(function(){
      ft_index = i;
      updateFilterSlider();
      drawflowers();
    });
    btn.position(750, 50+20*i);    
  }

  drawflowers();
}

function updateFilterSliderAttributes(min,max,value,step){
  filterslider.attribute("min",min);
  filterslider.attribute("max",max);
  filterslider.attribute("step",step);
  filterslider.value(value);
}

function updateFilterSlider(){

  let needSlider = false;
  filterslider.style("display","none");

  if(ft[ft_index]=="threshold"){
    updateFilterSliderAttributes(0,1,0.5,0.04);
    needSlider = true;
  }else if(ft[ft_index]=="posterize"){
    updateFilterSliderAttributes(2,10,2,1);
    needSlider = true;
  }else if(ft[ft_index]=="blur"){
    updateFilterSliderAttributes(1,20,1,1);
    needSlider = true;
  }

  if(needSlider){
    filterslider.style("display","block");
  }

}

function drawflowers(){

  background(f2);
  repeatval = repeatslider.value();
  noiseval = noiseslider.value()/10.0;
  blurval = blurslider.value();
  filterval = filterslider.value();

  for(let i=0;i<repeatval;i++){
    blend(f1,0,0,width,height, width*i/repeatval,0,width,height, bm[bm_index]);
  }

  loadPixels();
  for(let i=0;i<pixels.length;i+=4){
    if(Math.random()<noiseval){
      pixels[i] = red(white);
      pixels[i + 1] = green(white);
      pixels[i + 2] = blue(white);
      pixels[i + 3] = alpha(white);
    }
  }

  for(let x=0;x<width;x+=blurval){
    for(let y=0;y<height;y+=blurval){
      for(let i=0;i<blurval;i++){
        for(let j=0;j<blurval;j++){
          set(x+i,y+j,get(x,y));  
        }  
      }
    }
  }
  updatePixels();

  if(ft[ft_index]!="none"){
    filter(ft[ft_index],filterval);
  }
 
  let c = get();
  tint(tintRslider.value(), tintGslider.value(), tintBslider.value(), 255);
  image(c,0,0,width,height);
}
