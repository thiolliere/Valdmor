function createBlind(spec) {
	var id = newIdentifier(),
	blind = {},

	position = spec.position || [10,10],

	rad = BL_RADIUS,
	life = BL_LIFE,
	velocity = BL_VELOCITY,
	timeBetweenDecision = BL_TIME_BETWEEN_DECISION,
	sleepingDistance = BL_SLEEPING_DISTANCE,
	soundRatio = BL_SOUND_RATIO,

	awake = false,
	time = 0,
	rotation = 0,

	shape = phys2D.createPolygonShape({
		vertices : phys2D.createRectangleVertices(-rad,-rad,rad,rad),
		group : BLIND_GROUP,
	}),
	body = phys2D.createRigidBody({
		type : 'kinetic',
		shapes : [shape],
		sleeping : false,
		bullet : false,
		position : position,
		rotation : rotation,
		userData : blind,
	}),
	remove = function() {
		loop.removeOfUpdate(id);
		world.removeRigidBody(body);
	},
	setAwake = function(bool) {
		if (bool) {
			awake = true;
		} else {
			awake = false;
		}
	},
	update = function(dt) {
		var dis = getDistance(character.getPosition(),body.getPosition()),
		chance,v,r;
		time += dt;
		

		if (time >= timeBetweenDecision) {
			time = 0;

			if (awake) {
				if (getDistance(body.getPosition(),character.getPosition()) 
						< sleepingDistance) {
					body.setRotation(getAngle(body.getPosition(),character.getPosition()));
				} else {
					setAwake(false);
				}
			} else {
				if (Math.random() < maze.getSound(body.getPosition())*soundRatio) {
					setAwake(true)
				}
			}
		}
		if (awake) {
			v = velocity;
			r = body.getRotation();
			body.setVelocity([v*Math.cos(r),v*Math.sin(r)]);
		}

		if (life <= 0) {
			remove();
		}
	},
	damage = function(d) {
		life -= d;
	};
	world.addRigidBody(body);
	loop.addToUpdate(id,blind);

	blind.update = update;
	blind.damage = damage;
	return Object.freeze(blind);
}