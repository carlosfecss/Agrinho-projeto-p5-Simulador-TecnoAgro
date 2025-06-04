let producao = 0;
let irrigando = false;
function setup() {
 createCanvas(600, 400);
 textAlign(CENTER);
}
function draw() {
 background(200, 255, 200);
 fill(0);
 textSize(20);
 text("Produção agrícola: " + producao.toFixed(1) + " kg", width / 2, 50);
 fill(irrigando ? 'blue' : 'gray');
 rect(250, 150, 100, 50);
 fill(255);
 textSize(16);
 text("Irrigar", 300, 180);
 if (irrigando) {
 producao += 0.2;
 } else {
 producao += 0.05;
 }
 fill(0);
 text("Clique no botão para ativar irrigação", width / 2, 300);
}
function mousePressed() {
 if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 200) {
 irrigando = !irrigando;
 }
}