const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


let amazonURL = [
    {
     id: 0,
     urlName: "www.youtube.com/c/joerogan",
     youtuberName: "joe rogan"
    }
 ]

 app.get('/youtuber', (req,res)=>{
     console.log('hit YOUTUBERS')
     res.status(200).send(amazonURL)
 })

 app.get('/youtuber/:url', (req, res) => {
    const { name } = req.params
    const index = amazonURL.findIndex(url => url.urlName.toLowerCase() === name)
    res.status(200).send(amazonURL[index])
})


app.post('/character', (req, res) => {
    let newURL = {...req.body, id}
    newURL.likes = newURL.likes.slice(0, 3)
    characters.unshift(newURL)
    res.status(200).send(characters)
    id++
})






 app.listen(90, () =>console.log('wee vibin in the 80s'))