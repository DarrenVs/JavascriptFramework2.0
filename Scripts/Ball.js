Enum.classType.Ball = Ball;

//Sub Class
function Ball(properties) {
    var self = this;
    
    GameObject(self, properties, Enum.classType.Ball);
    this.classType = Enum.classType.Ball;
    
    this.extends = {
        physics: Physics(this),
        collision: Collision(this),
        humanoid: Humanoid(this),
    };
    
    
    self.colliderType = Enum.colliderType.circle
    self.anchored = false;
    self.mass = 100;
    self.colour = "#714b4b"
    
    
    self.damage = 100;
    
    
    var maxDuration = 10000;
    var duration = RENDERSETTINGS.renderDate + maxDuration;
    self.update[ "expire" ] = () => {
        if (RENDERSETTINGS.renderDate > duration)
            self.destroy();
    }
    
    self.collisionEnter[ "plop" ] = (collisionInfo) => {
        if (collisionInfo.canCollide) {
            
            if (collisionInfo.Object.extends.humanoid)
                collisionInfo.Object.health -= self.damage;
            
            self.destroy();
        }
    }
}