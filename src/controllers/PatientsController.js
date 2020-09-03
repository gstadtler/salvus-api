const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		try {
			const patients = await connection('patients');

			return response.json(patients);
		} catch(err) {
			console.log(err);
		}
		
	},

	async show(request, response) {
		try {
			const { id } = request.params;

			const patient = await connection('patients').where({ id });

			return response.json(patient);
		} catch(err) {
			console.log(err);
		}
		
	},

	async create(request, response) {
		try {
			const { cpf, name, email, phone_number, 
							street, house_number, city, uf } = request.body;

			await connection('patients').insert({
				cpf,
				name,
				email,
				phone_number,
				street,
				house_number,
				city,
				uf,
			});

			return response.status(201).send();
		} catch(err) {
			console.log(err)
		}
		
	},

	async update(request, response) {
		try {
			const { cpf, name, email, phone_number, 
				street, house_number, city, uf } = request.body;
			const { id } = request.params;

			await connection('patients').update({ 
				cpf, 
				name, 
				email, 
				phone_number, 
				street, 
				house_number, 
				city, 
				uf }).where({ id });

			return response.send();
		} catch(err) {
				console.log(err)
		}
	},

	async delete(request, response) {
		try {
			const { id } = request.params;

			await connection('patients').where({ id }).delete();

			return response.status(204).send();
		} catch(err) {
			console.log(err);
		}
	}
};