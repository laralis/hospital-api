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

const DoctorsController = () => import('#modules/doctor/doctors_controller')
const SpecialtiesController = () => import('#modules/specialty/specialty_controller')
const ExamsController = () => import('#modules/exam/exam_controller')
const PatientsController = () => import('#modules/patient/patient_controller')
const ProceduresController = () => import('#modules/procedure/procedure_controller')

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
