addDrawObject = function( Obj ) {
    
    Obj.DrawObject = new DrawObject( Obj )
}

//Base Class
function DrawObject(Parent) {
    var self = this;
    this.parent = Parent;

    this.update = function () {

        transformObject(this.parent)

        ctx.fillStyle = self.parent.color;
        if (self.parent.colliderType != undefined) {
            if (self.parent.colliderType == Enum.colliderType.box)
                ctx.fillRect(-self.parent.size.x * 0.5, -self.parent.size.y * 0.5, self.parent.size.x, self.parent.size.y);
            else if (self.parent.colliderType == Enum.colliderType.circle) {
                ctx.beginPath();
                ctx.arc(0, 0, self.parent.hitbox.x * .5, 0, 2*Math.PI);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();
            }
        }
        
        if (self.parent.text) {
            
            ctx.textAlign = self.parent.textAlign ? self.parent.textAlign : "center";
            ctx.strokeStyle = self.parent.strokeColor ? self.parent.strokeColor : "rgba(255, 255, 255, 0.72)";
            if (self.textColor) ctx.fillStyle = self.textColor;
            ctx.strokeText(
                self.parent.ID,
                self.parent.textOffset ? self.parent.textOffset.x : 0,
                self.parent.textOffset ? self.parent.textOffset.y : 0
            );
            ctx.fillText(
                self.parent.ID,
                self.parent.textOffset ? self.parent.textOffset.x : 0,
                self.parent.textOffset ? self.parent.textOffset.y : 0
            );
        }
    }
}