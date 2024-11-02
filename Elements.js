class Carbon{
    constructor(x, y){
        this.X = x;
        this.Y = y;
        this.text = "C";
        this.clicked= false;
    }

    getX(){
        this.X;
    }
    getY(){
        this.Y;
    }
    toScreen(){
        text(this.text,this.X,this.Y);
    }
}