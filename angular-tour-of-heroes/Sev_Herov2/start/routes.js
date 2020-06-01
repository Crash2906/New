'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')

Route.get('/', () => {
  return { campo: 'este wey' }
})
//.middleware('auth');
Route.post('usuario/registro', 'UsuarioController.store');
Route.post('usuario/login', 'UsuarioController.login');
Route.put('usuario/Update', 'UsuarioController.Update').middleware('auth');
Route.delete('usuario/Delete', 'UsuarioController.Delete').middleware('auth');

Route.get('usuario/Check' , 'UsuarioController.Check').middleware('auth');


////prueba XD
Route.on('/').render('welcome')

Route.post('/insert' , 'UsuarioController.addPost')

Route.get('/get' , 'UsuarioController.getAllPost')
Route.get('/get/:id' , 'UsuarioController.getPost')

Route.put('/put/:id' , 'UsuarioController.updatePost')

Route.delete('/delete/:id' , 'UsuarioController.deletePost')


/*
Route.group(()=>{
  Route.post('usuario/registro', 'UsuarioController.store');
}).prefix('oli/uno/');

Route.group(()=>{
  Route.post('usuario/registro', 'UsuarioController.store');
  Route.post('usuario/login', 'UsuarioController.login');
}).prefix('oli/dos/');



const Database = use('Database')

Route.get('/', async () => {
  return await Database.table('users').select('*')
});
*/