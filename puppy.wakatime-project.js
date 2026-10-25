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
  var bwoski = new boxicus()
 

update = function() {
  bwoski.move()
}
draw = function() {
  screen.clear()
  bwoski.draw()
  blank.draw()
}
//this is fun to make :3
//how do I do the 8 hours I need in 6 hours?!
//rip free *expesive object name*... I shoulda done more yesterday..
//this game is not getting any more updates...
//but, wait! i might be able to continue the challange!
//yay!
