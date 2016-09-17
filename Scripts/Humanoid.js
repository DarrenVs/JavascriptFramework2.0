//Sub Class
function Humanoid( Parent ) {
    
    Parent.__defineGetter__('health', () => Parent.Health)
    Parent.__defineSetter__('health', val => {
        Parent.Health = val;
        
        if (Parent.Health <= 0)
            Parent.die();
    })
    
    Parent.die = () => {
        Parent.destroy();
    }
    Parent.health = Parent.health || 100;
    
    
    return true;
}