
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {
          cpf: 11122233344, 
          name: 'Reginaldo', 
          email: 'reginaldof@paciente.salvus.com', 
          phone_number: 81988889999, 
          street: 'rua carmelia', 
          house_number: 12, 
          city: 'recife', 
          uf: 'PE',
        },
        {
          cpf: 22233344455, 
          name: 'Joelma', 
          email: 'joelmadasdores@paciente.salvus.com', 
          phone_number: 8144449999, 
          street: 'rua vicente melo', 
          house_number: 4, 
          city: 'jaboatão dos guararapes', 
          uf: 'PE',
        },
        {
          cpf: 33344455566, 
          name: 'Pedro', 
          email: 'pedrofarias@paciente.salvus.com', 
          phone_number: 81955779988, 
          street: 'rua sertania', 
          house_number: 8, 
          city: 'camaragibe', 
          uf: 'PE',
        }
      ]);
    })
};
