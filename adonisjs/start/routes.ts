/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const DoctorsController = () => import('#controllers/doctors_controller')
const SpecialtiesController = () => import('#controllers/specialties_controller')
const ExamsController = () => import('#controllers/exams_controller')
const PatientsController = () => import('#controllers/patients_controller')
const ProceduresController = () => import('#controllers/procedures_controller')

router
  .resource('doctors', DoctorsController)
  .apiOnly()
  .except(['destroy'])
  .use(['index', 'show', 'update'], middleware.auth())

router
  .resource('specialties', SpecialtiesController)
  .apiOnly()
  .except(['destroy'])
  .use('*', middleware.auth())

router.resource('exams', ExamsController).apiOnly().except(['destroy']).use('*', middleware.auth())

router
  .resource('patients', PatientsController)
  .apiOnly()
  .except(['destroy'])
  .use('*', middleware.auth())

router
  .resource('procedures', ProceduresController)
  .apiOnly()
  .except(['destroy', 'update'])
  .use('*', middleware.auth())

router.post('/login', '#controllers/auth_controller.login')
