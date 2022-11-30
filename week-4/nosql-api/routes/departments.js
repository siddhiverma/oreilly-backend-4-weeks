const {
  listDepartments,
  listDepartmentEmployees,
} = require('../controllers/departments');

async function routes(fastify) {
  fastify.get('/departments', listDepartments);
  fastify.get('/departments/:deptName/employees', listDepartmentEmployees);
}

module.exports = routes;
