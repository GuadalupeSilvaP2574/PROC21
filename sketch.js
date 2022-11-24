   //creacion de variables globales
var cieloImg, cielo;
var nubeImg, nube, nubesGroup;
var unicornio, unicornioImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


//precargar imagenes
function preload(){
    cieloImg = loadImage("cielo.png");
    nubeImg = loadImage("nube.jpg");
    unicornioImg = loadImage("unicornio.png");
    spookySound = loadSound("spooky.wav.mp3");
}

function setup() {
  //crear tamaño del canvas
    createCanvas(600,600);
  //sonido de fondo
    spookySound.loop();

  //crear sprites
    cielo = createSprite(300,300);
    cielo.addImage("cielo",cieloImg);
    cielo.velocityY = 1;
    
  //agregarlos a grupos
    nubesGroup = new Group();
    invisibleBlockGroup = new Group();
    
    unicornio = createSprite(200,200,50,50);
    unicornio.scale = 0.3;
    unicornio.addImage("unicornio", unicornioImg);
}


function draw() {
    background(255);
  //1 crear estado de play
    
    if (gameState === "play") {
    //2°crear if de mover de lado a lado
    
    if(keyDown("left_arrow")){
        unicornio.x = unicornio.x - 3;

      //escribir el código para mover al fantasma a la izquierda al presionar la flecha izquierda
    }
    if(keyDown("right_arrow")){
    
    unicornio.x = unicornio.x + 3;

      //escribir el código para mover el fantasma a la derecha al presionar la flecha derecha 
    
    }
    if(keyDown("space")){
    
    unicornio.velocityY = -10;

      //escribir el código para mover el fantasma hacia arriba al presionar la flecha arriba 
    
    }
    
    unicornio.velocityY = unicornio.velocityY + 0.8;
    
    if(cielo.y > 400){
    cielo.y = 300
    }
      //escribir una condición para desplazar infinitamente la torre
    
    spawnDoors();

    
//escribir el código para hacer que invisibleBlockGroup colisione con el fantasma y cambiar gamestate a end.
    if(nubesGroup.isTouching(unicornio)){
    unicornio.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(unicornio) || unicornio.y > 600){
    unicornio.
    gameState = "end"
    }
    
    
    drawSprites();
}
    if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
    }
}

function spawnDoors(){
  //escribir aquí el código para aparecer los obstáculos
    if (frameCount % 240 === 0) {
    var nube = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = nube.width;
    invisibleBlock.height = 2;
    //agregar la función random
    //
    
    nube.addImage(nubeImg);
    
    
    nube.velocityY = 1;
    invisibleBlock.velocityY = 1;
    //cambiar la profundidad del unicornio y de las nubes
    
    unicornio.depth = nube.depth;
    unicornio.depth =1;
    
    //asignar lifetime a door, climber y invisible block
    
    nube.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle); aquí los obstáculos son door, climber, invisible block
    
    invisibleBlock.debug = true;
    nubesGroup.add(nube);
    invisibleBlockGroup.add(invisibleBlock);
    }
}

