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

module.exports = Decorator