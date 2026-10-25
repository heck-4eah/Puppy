var boxicus = function (){
  this.x = 5
  this.y = 12
  this.width = 15
  this.height = 30
}
 boxicus.prototype.draw = function() { 
screen.drawRect(this.x, this.y, this.width, this.height)
screen.drawLine(this.x + 7, this.y - 15, this.x + this.x + 13, this.y - 8, "RGB(122,129,222)")
}
 boxicus.prototype.move = function() {
if(keyboard.LEFT){
  this.x -= 5
}
if(keyboard.RIGHT){
  this.x += 5
}
if(keyboard.UP){
  this.y += 5
}
if(keyboard.DOWN){
  this.y -= 5
}


}


var bep = function (){
  this.x = 80 
  this.y = 24
  this.width = 25
  this.height = 40
}
 bep.prototype.draw = function() { 
screen.drawRect(this.x, this.y, this.width, this.height)
screen.drawLine(this.x +3, this.y - 19, this.x + this.x + 23, this.y - 18, "RGB(12,19,382)")
}
 bep.prototype.move = function() {
if(keyboard.LEFT){
  this.x -= 5
}
if(keyboard.RIGHT){
  this.x += 5
}
if(keyboard.UP){
  this.y += 5
}
if(keyboard.DOWN){
  this.y -= 5
}


}
  var bwoski = new boxicus()
  var bubski = new bep()
 

update = function() {
  bwoski.move()
  bubski.move()
}
draw = function() {
  screen.clear()
  bwoski.draw()
  bubski.draw()
  screen.drawRect(0, -60, 248, 100, "RGB(55,122,202)")
  screen.fillRect(0, -60, 300, 110, "RGB(55,122,202)") 
}
//this is fun to make :3
//how do I do the 8 hours I need in 6 hours?!
//rip free *redacted*... I shoulda done more yesterday..
//this game is not getting any more updates...
//but, wait! i might be able to continue the challange!
//yay!
// according to google I can!
