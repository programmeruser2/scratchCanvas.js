class Stage {
  constructor(stageCanvas,context) {
    this.canvas = stageCanvas;
    this.context = context;
    this.backdrops = {}
  }
  addBackdrop(name, src) {
    this.backdrops[name] = src;
  }
  setBackdrop(name) {
    if (this.backdrops[name]) {
      this.canvas.style = 'background: url("'+this.backdrops[name]+'");'
    } else {
      throw "Backdrop does not exist"
    }
  }
  deleteBackdrop(name) {
    delete this.backdrops[name]
  }
}

class Sprite{
  constructor(x,y,stage,initCostume,initSrc) {
    this.stage = stage
    this.x = x
    this.y = y
    this.costumes = {initCostume: initSrc}
    this.img = new Image()
    this.img.src = this.costumes[initCostume]
    this.width = this.img.width
    this.height = this.img.height
    if (x && y) {
      this.stage.context.drawImage(this.img, this.x, this.y)
    }
  }
  addCostume(name, src) {
    this.costumes[name] = src
  }
  switchToCostume(name) {
    if (this.costumes[name]) {
      this.img.src = this.costumes[name]
      this.stage.context.drawImage(this.img, this.x, this.y)
    } else {
      throw "Costume does not exist"
    }
  }
  setPos(x, y) {
    this.x = x
    this.y = y
    this.stage.context.drawImage(this.img, this.x, this.y)
  }
  isClicked(x,y) {
    if(x >= this.x && y >= this.y && x <= this.width+this.x && y <= this.height+this.y) {
      return true;
    } else {
      return false;
    }
  }
}
