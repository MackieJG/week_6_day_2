const Room = function(area, painted){
    this.area = area;
    this.painted = painted;
}
Room.prototype.getPainted = function(){
    this.painted = true;
};
module.exports = Room;
