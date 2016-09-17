Enum.classType.Enemy = Enemy;

//Sub Class
function Enemy(properties) {
    var self = this;
    
    GameObject(self, properties, Enum.classType.Enemy);
    this.classType = Enum.classType.Enemy;
    
    this.extends = {
        physics: Physics(this),
        collision: Collision(this),
        humanoid: Humanoid(this),
    };
    
    
    self.die = () => {
        
        
        var size = self.size.x;
        if (size > 40) {
            for (var i = 0; i < Math.floor(size/20); i++) {
                
                var splitCount = Math.floor(size/20);
                var splitSize = size / splitCount;
                
                var splitDirection = Vector2.fromAngle( Math.random() * 360 );
                
                new self.classType({
                    position: Vector2.add(self.position, splitDirection),
                    velocity: Vector2.multiply(splitDirection, splitSize * 3),
                    parent: self.parent,
                    size: Vector2.new(splitSize, splitSize),
                    hitbox: Vector2.new(splitSize, splitSize),
                })
            }
        }
        self.destroy();
    }
    self.colliderType = Enum.colliderType.circle
    self.anchored = false;
    self.mass = 100;
    self.colour = "#ff0000";
    
    
    self.damage = 100;
    
    self.collisionEnter[ "attack" ] = (collisionInfo) => {
        if (collisionInfo.canCollide && collisionInfo.Object.collisions[ self.ID ]) {
            
            if (collisionInfo.Object.extends.humanoid && collisionInfo.Object.classType != Enum.classType.Enemy)
                collisionInfo.Object.health -= self.damage;
        }
    }
}