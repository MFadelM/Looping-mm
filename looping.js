function setup() {
  createCanvas(400, 400);
  background(220);
  let y = 20; // posisi y awal
  let spacing = 45; // jarak antar ikon hati

  while (y < height) {
    let x = 20; // posisi x awal untuk setiap baris baru
    while (x < width) {
      drawHeart(x, y); // menggambar hati di posisi (x, y)
      x += spacing; // memperbarui posisi x untuk kolom berikutnya
    }
    y += spacing; // memperbarui posisi y untuk baris berikutnya
  }
}

function drawHeart(x, y) {
  fill(255, 100, 0); // warna untuk hati
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x - 10, y - 10, x - 20, y + 5, x, y + 20);
  bezierVertex(x + 20, y + 5, x + 10, y - 10, x, y);
  endShape(CLOSE);
}
