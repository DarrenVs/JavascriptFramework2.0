Enum.worlds.BallArena = BallArena;

function BallArena( stage ) {
    GameObject( this );
    this.parent = stage;
    
    stage.airDensity = 0.001;
    
    stage.gravity = Vector2.new(canvas.width/2,canvas.height/2);
    stage.gravityType = Enum.gravity.worldPoint;
    //stage.gravity = Vector2.new(0,9.8);
    
    stage.score = 0;
    
    /*var Tiles = {
        0:false, //Air
        1:"Unknown", //Wall
        2:"Shooter",
        3:"Ball",
        4:"Enemy",
    }
    
    stage.map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,4,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
    stage.mapSize = Vector2.new(canvas.width, canvas.height);
    stage.tileSize = Vector2.new(
        10,//stage.mapSize.x / stage.map[0].length,
        10//stage.mapSize.y / stage.map.length
    )
    
    for (var y = 0; y < stage.map.length; y++) {
        for (var x = 0; x < stage.map[y].length; x++) {
            
            if (!Enum.classType[Tiles[stage.map[y][x]]]) continue;
            
            var newObject = new Enum.classType[Tiles[stage.map[y][x]]]({
                size:stage.tileSize,
                position:Vector2.add(Vector2.multiply(
                    stage.tileSize,
                    Vector2.new(x, y)
                ), Vector2.multiply(stage.tileSize, .5)),
            })
            
            newObject.extends["collision"] = Collision(newObject);
            newObject.anchored = true;
            newObject.mass = 10;
            newObject.hitbox = Vector2.subtract(stage.tileSize, Vector2.new(1,1));
            newObject.extends["physics"] = new Physics(newObject);
            
            addDrawObject( newObject )
            
            newObject.parent = stage;
        }
    }*/
    
    var shooter = new Shooter({
        size:Vector2.new(10,10),
        hitbox:Vector2.new(10,10),
        position:Vector2.new(canvas.width*.5, canvas.height*.5),
    })
    shooter.parent = stage;
    addDrawObject(shooter)
    
    
    function spawnEnemy() {
        
        var size = Math.random()*80 + 20;
        var enemy = new Enemy({
            position: Vector2.add(
                Vector2.new(canvas.width*.5, canvas.height*.5),
                // +
                Vector2.multiply(Vector2.fromAngle(Math.random() * Math.PI*360), Math.max(canvas.width, canvas.height))
            ),
            size: Vector2.new(size, size),
            velocity: Vector2.new((Math.random()-.5)*50, (Math.random()-.5)*50),
        });
        
        enemy.rotation = Vector2.toAngle(Vector2.subtract(enemy.position, shooter.position));
        enemy.velocity = Vector2.add(Vector2.multiply(enemy.right, Math.random() * 100), enemy.velocity);
        enemy.hitbox = enemy.size;
        enemy.parent = stage;
    }
    
    var spawnCooldown = 0;
    var maxSpawnCooldown = 2000; //ms
    this.update["SpawnEnemies"] = function() {
        
        if (RENDERSETTINGS.renderDate > spawnCooldown && shooter.parent != undefined) {
            spawnCooldown = RENDERSETTINGS.renderDate + maxSpawnCooldown;
            
            spawnEnemy();
            
            maxSpawnCooldown -= (maxSpawnCooldown-500) * 0.01;
        }
    }
}