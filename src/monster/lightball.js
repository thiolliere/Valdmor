"use strict";

function createLightball(spec) {
/* ball that goes from the entry to the exit
 * at the speed of the characters
 *
 * may not have life
 */
	var id = newIdentifier(),
	lightball = {id : id},

	entry = spec.entry,
	exit = spec.exit,

	rad = PARAM.LI_RADIUS,
	life = PARAM.LI_LIFE,
	velocity = PARAM.LI_VELOCITY,
	distance = PARAM.LI_DISTANCE,

	nodes = [],
	current,

	shape = phys2D.createPolygonShape({
		vertices : phys2D.createRectangleVertices(-rad,-rad,rad,rad),
		group : GROUP.LIGHTBALL,
	}),
	body = phys2D.createRigidBody({
		type : 'kinetic',
		shapes : [shape],
		sleeping : false,
		bullet : false,
		position : [0,0],
		rotation : 0,
		userData : lightball,
	}),
	sprite = Draw2DSprite.create({
		width : rad,
		height : rad,
		color : COLOR.LIGHTBALL,
		x : 0,
		y : 0,
		scale : [1, 1],
	}),
	remove = function() {
		loop.removeOfUpdate(id);
		if (mode === 'timer') {
			loop.removeOfDraw(id);
		}
		world.removeRigidBody(body);
	},
	update = function(dt) {
		var r,
		v = velocity;

		if (getDistance(body.getPosition(),nodes[current]) < distance) {
			if (current === nodes.length-1) {
				body.setPosition(nodes[0]);
				current = 1;
			} else {
				current++;
			}
		}

		r = getAngle(body.getPosition(),nodes[current]);
		body.setRotation(r);
		body.setVelocity([v*Math.cos(r),v*Math.sin(r)]);

		camera.setSpriteAttribute(sprite,body.getPosition(),body.getRotation());

		if (life <= 0) {
			remove();
		}
	},
	draw = function(debug) {
		if (debug) {
			nodes.forEach(function(node) {
				phys2DDebug.drawCircle(node[0],node[1],20,[0,1,1,1]);
			});
		} else {
			draw2D.drawSprite(sprite);
		}
	},
	damage = function(d) {
		life -= d;
	};

	nodes = maze.getPath({
		a : entry,
		b : exit,
		coordinate : "world",
		nodesType : "center",
	});
	current = Math.floor(Math.random()*nodes.length);

	body.setPosition([nodes[current][0],nodes[current][1]]);

	world.addRigidBody(body);
	loop.addToUpdate(id,lightball);
	loop.addToDraw(id,lightball);

	lightball.update = update;
	lightball.damage = damage;
	lightball.draw = draw;
	return Object.freeze(lightball);
}
