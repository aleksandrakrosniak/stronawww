var sketch1 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/1%20.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(200, 300).parent('sketch1-container');
      p.background(p.colorBG);
      img.resize(200, 300);
      p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  
 var sketch2 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/r2.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(245, 200).parent('sketch2-container');
      p.background(p.colorBG);
      img.resize(245, 200);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
var sketch3 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/2%20.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(200, 300).parent('sketch3-container');
      p.background(p.colorBG);
      img.resize(200, 300);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  
  new p5(sketch1, 'sketch1-container');
  new p5(sketch2, 'sketch2-container');
  new p5(sketch3, 'sketch3-container');

  //////// ROW 2///////////////////
  var sketch4 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/3.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(200, 300).parent('sketch4-container');
      p.background(p.colorBG);
      img.resize(200, 300);
      p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  
 var sketch5 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/4.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(200, 300).parent('sketch5-container');
      p.background(p.colorBG);
      img.resize(200, 300);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
var sketch6 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/5.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(200, 300).parent('sketch6-container');
      p.background(p.colorBG);
      img.resize(200, 300);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  
  new p5(sketch4, 'sketch4-container');
  new p5(sketch5, 'sketch5-container');
  new p5(sketch6, 'sketch6-container');

  /// Row 3 ////////


  var sketch7 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/r1.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(245, 200).parent('sketch7-container');
      p.background(p.colorBG);
      img.resize(245, 200);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  
  var sketch8 = function(p) {
    let img;
    p.colorFG = '#000011';
    p.colorBG = '#f1f1f1';
  
    p.preload = function() {
      img = p.loadImage('https://piotrkrosniak.github.io/aleksandraP5/images/6.jpg');
    };
  
    p.setup = function() {
      p.createCanvas(450, 300).parent('sketch8-container');
      p.background(p.colorBG);
      img.resize(450, 300);
       p.setAttributes('willReadFrequently', true);
    };
    p.draw = function() {
        p.background(p.colorBG);
        p.fill(p.colorFG);
        p.noStroke();
        p.ratio = 600 / 600;
        p.coefZ = 1400;
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY< p.height) 
        {p.coefZ = (p.mouseX / p.width) * 900;}
        p.tilesX = p.map(p.coefZ, 0, 600, 60, 100);
        p.tilesY = p.ratio * p.tilesX;
        p.tileSize = p.width / p.tilesX;
        for (p.y = 0; p.y < img.height; p.y += p.tileSize) {
          for (p.x = 0; p.x < img.width; p.x += p.tileSize) {
            p.c = img.get(p.x, p.y);
            p.b = p.map(p.brightness(p.c), 0, 255, 1, 0);
            p.push();
            p.translate(p.x, p.y);
            p.rect(0, 0, p.b * p.tileSize, p.b * p.tileSize);
            p.pop();
          }
        }
      }
  };
  new p5(sketch7, 'sketch7-container');
  new p5(sketch8, 'sketch8-container');


  //// Overlay function ///
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }