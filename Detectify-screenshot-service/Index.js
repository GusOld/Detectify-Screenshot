const Actions = require('./Actions')

const urlArray = [
    { address: 'google.com', name: 'google' },
    { address: 'youtube.com', name: 'youtube' },
    { address: 'discord.com', name: 'discord' }
]
const previewsFolder = './previews'
const thumbsFolder = './thumbs'

const run = async () => {
    try {
        await Actions.checkFolderExistence(previewsFolder)
        await Actions.checkFolderExistence(thumbsFolder)

        const previews = await Actions.screenshotUrls(urlArray, previewsFolder)
        console.log(previews)

        const thumbs = await Actions.createThumbnails(previewsFolder, thumbsFolder)
        console.log(thumbs)
    } catch (e) {
        console.log(e)
    }
}

run()