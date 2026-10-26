  var boxicus = function() {
  this.x = 5
  this.y = 12
  this.width = 15
  this.height = 30
}
 boxicus.prototype.draw = function() { 
screen.drawRect(this.x, this.y, this.width, this.height)
screen.drawLine(this.x + 7, this.y - 15, this.x + this.x + 13, this.y - 8, "RGB(122,129,222)")
screen.drawRoundRect(this.x -1, this.y +20, this.width +20, this.height -20, 5, "RGB(122,129,222)")
screen.drawQuadCurve(this.x, this.y +14,1,1, this.width, this.height)
   
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
screen.drawRoundRect(this.x -1, this.y +28, this.width +10, this.height -23, 5, "RGB(122,129,222)")
screen.drawQuadCurve(this.x-1, this.y +20,1,3, this.width -4, this.height -10)
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
  screen.fillRect(0, -60, 3000, 110, "RGB(55,122,202)") 
  screen.fillRect(12,12,50,66,"RGB(240,234,214)")
  screen.fillRect(12,12,36,52, "RGB(194,24,7)")
  screen.drawText("🔥",12,7,20)
}
//this is fun to make :3
//how do I do the 8 hours I need in 6 hours?!
//rip free *redacted*... I shoulda done more yesterday..
//this game is not getting any more updates...
//but, wait! i might be able to continue the challange!
//yay!
// according to google I can!
//blah blah blah woooooooorrrrrrddddssssssssssss
screen.drawText("invisible words! yay! woo hoo! yipeeeeeeee! more invisible words!", 0,30,50, "RGB(30,90,120)")
var hot_sauce = function() {
  screen.drawRect(14,14,80,29,"RGB(240,234,214)")
  screen.drawRect(12,12,36,52, "RGB(194,24,7)")


}