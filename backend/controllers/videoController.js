const { google }= require('googleapis')
const { tryCatch } = require('../utils/tryCatch')

const videoController = tryCatch(
    async (req,res) => {

        const API_KEY = process.env.API_KEY
        
        const url = req.body.url
    
        // regex to extract video id
        const id = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        vid_id = (url.match(id)[1])

        // Fetching video details from the api using video id
        const response = await google.youtube('v3').videos.list(
            {
                key: API_KEY,
                part: 'snippet,statistics',
                id: vid_id,
                list: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
            }
        )
    
        const statistics = response.data.items[0].statistics // storing statistics
    
        const channelId = response.data.items[0].snippet.channelId // For channel id 
      
        const thumbnail = response.data.items[0].snippet.thumbnails.high.url // For thumbnail of the video
    
        const title = response.data.items[0].snippet.title // For title of the video
    

        // Fetching channael details for subscribers count
        const r = await google.youtube('v3').channels.list(
            {
                key: API_KEY,
                part: 'statistics',
                id: channelId,
                list: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
            }
        )
        const subsCount = r.data.items[0].statistics.subscriberCount
    
        res.status(200).send({
            statistics: statistics,
            subsCount:subsCount,
            thumbnail: thumbnail,
            title:title,
        })
    }
    
)
module.exports = {
    videoController
}