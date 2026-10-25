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
  var blank= new potat()

update = function() {
  bwoski.move()
}
draw = function() {
  screen.clear()
  bwoski.draw()
  blank.draw()
}
var potat = function() {
   this.x = 2
  this.y = 2
  this.width = 100
  this.height = 100

}
potat.prototype.draw = function() {

  screen.drawRect(this.x, this.y, this.width, this.height)
}