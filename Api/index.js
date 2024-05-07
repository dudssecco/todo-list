const express = require('express')
const mysql = require('mysql2')

const app = express()

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dudsdev123',
    database: 'crud'
})

conexao.connect((err) => {
    if(err) throw err;
    console.log('Conexão efetuada com sucesso!')
})