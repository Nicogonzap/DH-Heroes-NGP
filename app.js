/*
1 / -> Debe direccionar al recurso index.html.
2 /babbage -> Debe direccionar al recurso babbage.html
3 /berners-lee -> Debe direccionar al recurso berners-lee.html.
4 /clarke -> Debe direccionar al recurso clarke.html.
5 /hamilton -> Debe direccionar al recurso hamilton.html.
6 /hopper -> Debe direccionar al recurso hopper.html.
7 /lovelace -> Debe direccionar al recurso lovelace.html.
8 /turing-> Debe direccionar al recurso turing.html.
*/
const express = require('express');
const app = express ();
const path = require ('path');
const port = 3030;
app.use(express.static('public'));


app.listen (port, () => {
    console.log ('Servidor corriendo')
})

let pathHTML = path.join (__dirname,'/views/'); ///DH-Heroes
//1
app.get ('/', (req, res) => {
    res.sendFile(pathHTML+'index.html')
})
//2
app.get ('/babbage', (req, res) => {
    res.sendFile(pathHTML+'babbage.html')
})
//3
app.get ('/berners-lee', (req, res) => {
    res.sendFile(pathHTML+'berners-lee.html')
})
//4
app.get ('/clarke', (req, res) => {
    res.sendFile(pathHTML+'clarke.html')
})
//5
app.get ('/hamilton', (req, res) => {
    res.sendFile(pathHTML+'hamilton.html')
})
//6
app.get ('/hopper', (req, res) => {
    res.sendFile(pathHTML+'hopper.html')
})
//7
app.get ('/lovelace', (req, res) => {
    res.sendFile(pathHTML+'lovelace.html')
})
//8
app.get ('/turing', (req, res) => {
    res.sendFile(pathHTML+'turing.html')
})
