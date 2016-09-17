Enum.classType.Shooter = Shooter;

// BaseClass
function Shooter(properties) {
    
    GameObject(this, properties, Enum.classType.Shooter);
    this.extends = {
        physics: Physics(this),
        collision: Collision(this),
        humanoid: Humanoid(this),
    };
    
    var self = this;
    
    
    
    
    var cooldown = 0;
    var maxCooldown = 100;
    var maxAngle = 45;
    
    
    //The .update is a update that fires every frame, we use this for AI or playermovement
    this.update["ShooterUpdate"] = function() {
        
        self.stage.gravity = self.globalPosition;
        self.stage.gravityType = Enum.gravity.worldPoint;
        
        if (INPUT_CLICK["32"])
            self.DrawObject.currentAnimation = self.DrawObject.currentAnimation == "jump" ? "walk" : "jump";
        
        
        self.rotation = Vector2.toAngle(self.globalPosition, Game.BallArena.mousePosition);
        /*if (self.rotation < 0 && self.rotation > -135) self.rotation = -135;
        if (self.rotation > 0 && self.rotation < 135) self.rotation = 135;*/
        
        
        if (MOUSE_CLICK.mousedown && RENDERSETTINGS.renderDate > cooldown) {
            cooldown = RENDERSETTINGS.renderDate + maxCooldown;
            
            var ball = new Ball({
                position: Vector2.add(self.globalPosition, Vector2.multiply(self.forward, 10)),
                size: Vector2.new(10,10),
                hitbox: Vector2.new(10,10),
                rotation: getObjectRotation(self),
            });
            self.ignoreObjectIDs[ball.ID] = true;
            ball.parent = self.stage;
            ball.velocity = Vector2.multiply(self.forward, 500)
            
            console.log("pew");
        }
    }
}