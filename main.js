const { application } = require('express')
const express = require('express')
const main = express()
const html2canvas = require('html2canvas')
const port = 3000


main.use(express.static('public'))
main.use('/css', express.static(__dirname + 'public/css'))
main.use('/script', express.static(__dirname + 'public/script'))
main.use('/images', express.static(__dirname + 'public/images'))
main.use('/css2', express.static(__dirname + 'public/css2'))
main.use('/font', express.static(__dirname + 'public/font'))
main.use('/js2', express.static(__dirname + 'public/js2'))

main.get('/',(req, res) =>{
    res.sendFile(__dirname + '/views/home.html')
})

main.get('/today-cases',(req, res) =>{
    res.sendFile(__dirname + '/views/today.html')
})

main.get('/today-cases-by-provinces',(req, res) =>{
    res.sendFile(__dirname + '/views/Napakorn.html')
})

main.get('/today-cases-line-lists',(req, res) =>{
    res.sendFile(__dirname + '/views/peerapon.html')
})

main.get('/timeline-cases-all',(req, res) =>{
    res.sendFile(__dirname + '/views/Napath.html')
})

main.get('/timeline-cases-by-provinces',(req, res) =>{
    res.sendFile(__dirname + '/views/todayByProvince.html')
})

main.get('/round-3-line-lists',(req, res) =>{
    res.sendFile(__dirname + '/views/warin.html')
})

main.get('/round-1to2-line-lists',(req, res) =>{
    res.sendFile(__dirname + '/views/Suphon.html')
})

main.get('/round-1to2-all',(req, res) =>{
    res.sendFile(__dirname + '/views/Jirawat.html')
})

main.get('/round-1to2-by-provinces',(req, res) =>{
    res.sendFile(__dirname + '/views/round-1to2-by-provinces.html')
})

main.get('/today-cases-by-provinces-2',(req, res) =>{
    res.sendFile(__dirname + '/views/Maytaphon.html')
})

main.get('/today-cases-2',(req, res) =>{
    res.sendFile(__dirname + '/views/kungthai.html')
})



main.listen(port, () => console.info(`Listening on port ${port}`))