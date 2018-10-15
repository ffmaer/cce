let mover;
let s1;
let s2;
let s3;
let count =0;
let sqrnumber = 10;

function setup() {
  createCanvas(800, 800);

  mover = createSprite(400,400,100,100);

  s1 = createSprite(400,400,100,100);
  s2 = createSprite(500,500,50,50);
  s3 = createSprite(200*Math.random(),400*Math.random(),10,10);
  s4 = createSprite(600,300,200,200);
  s5 = createSprite(400,250,80,80);

  mover.depth = 2;
  s1.depth = 3;
  s2.depth = 3;
  s3.depth = 3;
  s4.depth = 1;
  s3.depth = 3;


  mover.draw = function(){
		stroke("blue");
		noFill();
		rect(0,0,sqrnumber*10,sqrnumber*10);
		for(i=0;i<count%sqrnumber;i++){
			rect(0,0,i*10,i*10);
		}
	}


	setInterval(function(){
		count ++;
  }, 1000);



  draws5("red");

  s5.onMousePressed = function(){
    draws5("yellow");
  }

  s5.onMouseReleased = function(){
    draws5("red");
    sqrnumber++;
  }


}

function draws5(color){
  s5.draw = function(){
    
    fill(color)
    ellipse(0,0,80);
    fill("white");
    textAlign(CENTER,CENTER);
    text("click me",0,0);
  }
}



function draw() {



  s1.draw = function(){
  	fill("red")
  	ellipse(0,0,100);
  }

  s2.draw = function(){
  	fill("red")
  	ellipse(0,0,50);
  }

  s3.draw = function(){
  	fill("red")
  	ellipse(0,0,10);
  }

  s4.draw = function(){
  	fill("red")
  	ellipse(0,0,200);
  }



  background(255);

  fill("red");
  text("Use asdw or arrow keys to navigate.", 20, 680);

  if(keyDown(68)||keyDown(RIGHT_ARROW)){
  	mover.position.x+=3;	
  }
  if(keyDown(65)||keyDown(LEFT_ARROW)){
  	mover.position.x-=3;	
  }
  if(keyDown(83)||keyDown(DOWN_ARROW)){
  	mover.position.y+=3;	
  }
  if(keyDown(87)||keyDown(UP_ARROW)){
  	mover.position.y-=3;	
  }
  
  s1.overlap(mover,function(){
  	s1.draw = function(){
  		fill("yellow");
  		ellipse(0,0,100);
  	}
  })

  mover.displace(s2,function(){
  	s2.draw = function(){
  		fill("yellow");
  		ellipse(0,0,50);
  	}
	 })

  mover.collide(s3,function(){
  	s3.draw = function(){
  		fill("yellow");
  		ellipse(0,0,10);
  	}
	 })

  s4.overlap(mover,function(){
  	s4.draw = function(){
  		fill("yellow");
  		ellipse(0,0,200);
  	}
  })



  drawSprites();
}