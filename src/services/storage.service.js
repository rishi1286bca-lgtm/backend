const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({

    privateKey: "private_uvmEqvs86AVA3U6prpDwDnmnf6Y="
})

async function uploadFile(buffer) {

    const result =await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName: "image.png"
    })
    return result;

    
}
module.exports = uploadFile;