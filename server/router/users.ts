import {Router} from 'express'
import { load } from 'cheerio';
import iconv from 'iconv-lite'

import db from '../db';
import axios from 'axios';
const router = Router()

router.get("/list", async (req, res) => {
    const users = await db.users.findAll({})
    res.send(JSON.stringify(users, null, 2));
});

router.get('/crawl', async (req, res) => {
    console.log('start')    
    const url = 'https://cafe.naver.com/golmarket/10938161'
    let response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: { 'User-Agent':'5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36' }
    })
  
    let contentType = response.headers['content-type']
  
    let charset = contentType.includes('charset=')
    ? contentType.split('charset=')[1]
    : 'UTF-8'
  
    let responseData = await response.data
    let data = iconv.decode(responseData, charset)
    let $ = await load(data)
  
    let title = await $('.title_text')
    .text()
    .trim()
    const imageList = $('.se-image-resource')

    const result = {
        title,
        imageList,
    }
    console.log({result})    
    console.log('end')    
    // res.send(JSON.stringify(result, null, 2));
    res.send(data)
})

export default router