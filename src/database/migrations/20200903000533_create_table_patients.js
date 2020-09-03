
exports.up = knex => knex.schema.createTable('patients', table => {
		table.increments('id').primary();
		table.bigInteger('cpf', 11).unique().notNullable();
		table.string('name').notNullable();
		table.string('email');
		table.bigInteger('phone_number').notNullable();
		table.string('street').notNullable();
		table.integer('house_number').notNullable();
		table.string('city').notNullable();
		table.string('uf', 2).notNullable();

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	});

exports.down = knex => knex.schema.dropTable('patients');
