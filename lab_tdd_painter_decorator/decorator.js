const Decorator = function(){
    this.stock = [];
};

Decorator.prototype.addPaintCan = function(paint){
    return this.stock.push(paint);
};

Decorator.prototype.totalVolume = function(){
    let result = 0
    for (let paint of this.stock){
        result += paint.volume;
    };
    return result;
};
Decorator.prototype.enoughPaint= function(volume, area){
    if (volume >= area) {
        return true
    } else {
        return false
    }
};
Decorator.prototype.paintRoom = function(room){
    return room.painted = true; 
}


module.exports = Decorator