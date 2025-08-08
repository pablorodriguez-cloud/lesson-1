function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  //el doble slash desactiva la linea de codigo, es lo mismo que el # en python. frameRate(2);
}

function draw() {
  d = random(10, 100);
  noStroke();
  fill(255,100);    //fill es la funcion de relleno de color
  ellipse(mouseX,mouseY,d,d);    //los atributos mouseX y mouseY sirven para que reconozca la posición de la flecha del mouse y dibuje la elipse exactamente en esa posicion.
}
