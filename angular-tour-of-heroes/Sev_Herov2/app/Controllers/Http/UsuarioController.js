'use strict'

const Usu = use('App/Models/User')

class UsuarioController {

    async login({ request, auth }) {
        const { username, email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async store({ request }) {
        const { username, email, password } = request.all();
        console.log(username, email, password);
        const usu = await Usu.create({
            username,
            email,
            password
        });
        return this.login(...arguments);
    };

    async Delete({ request, auth }) {
        const user = await auth.getUser();
        const { id } = params;
        const proyectos = await proyectos.find(email);
        const affectedRows = await Database
            .table('user')
            .where('email', this.login('email'))
            .delete()
    };

    async Update({ request, auth, params }) {
        const affectedRows = await Database
            .table('users')
            .where('email', this.login('email'))
            .update('username', params(newUsername))
    };

    async Check({ request }) {

        return;
    };
    ///////////////////////////////////////////////////////////////////////////
    /*
    async getAllPost() //todo
        {
            return await Database.select('*').from('user')
        }
    
        async getPost({ params })//1 
        {
            return await Database.select('*').from('user').where('id', params.id)
        }
    
        async deletePost({ params }) //eliminar
        {
            return await Database.select('*').from('user').where('id', params.id).delete()
        }
    
        async updatePost({ params, request })//editar 
        {
            return await Database.select('*').from('user').where('id', params.id)
                .update({
                    nombre: request.input('nom'),
                    usuario: request.input('usu'),
                    titulo: request.input('titulo'),
                    contenido: request.input('cont'),
                    matricula: request.input('mat')
                })
        }
    
        async addPost({ params, request }) //añadir
        {
            return await Database.table('posts')
                .insert({
                    nombre: request.input('nom'),
                    usuario: request.input('usu'),
                    titulo: request.input('titulo'),
                    contenido: request.input('cont'),
                    matricula: request.input('mat')
                }).returning('id')
        } 
        */

}

module.exports = UsuarioController
