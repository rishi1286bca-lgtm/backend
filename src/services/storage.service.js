const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    publicKey: "public_BDAWc9203bR5cC6K5Y8pd1opOYU=",
    privateKey: "private_uvmEqvs86AVA3U6prpDwDnmnf6Y=",
    urlendpoint: "https://ik.imagekit.io/wb2p817u3"
})

async function uploadFile(buffer) {

    const result =await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName: "image.png"
    })
    return result;

    
}
module.exports = uploadFile;