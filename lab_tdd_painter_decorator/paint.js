const Paint = function(volume){
    this.volume = volume;
    // this.empty = empty;
};

Paint.prototype.emptyCan = function(){
    this.volume = 0;
};
module.exports = Paint;