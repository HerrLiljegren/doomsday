var spread = 3.0; // Statiskt värde för nu, man skulle kunna öka det ju längre man håller ner avtryckaren till ett maxvärde satt för varje vapen
bullet.angle = this.sprite.parent.angle-90 + (spread  (Math.random()  2.0 - 1.0));


shortestAngle=((((end - start) % 360) + 540) % 360) - 180;