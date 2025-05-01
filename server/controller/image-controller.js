import grid from 'gridfs-stream';
import mongoose from 'mongoose';
import fs from 'fs';

const url = 'http://localhost:8000';


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage = async (request, response) => {
    try {
        if (!request.file) 
            return response.status(404).json("File not found");

        const encodedImage = request.file.buffer.toString('base64');
        const imageUrl = `data:${request.file.mimetype};base64,${encodedImage}`;

        console.log(imageUrl);

        return response.status(200).json(imageUrl);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ msg: 'Error while uploading image' });
    }
};

export const uploadWord = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    const WordUrl = `${url}/file/${request.file.filename}`;
    console.log(WordUrl);

    response.status(200).json(WordUrl);    
}

export const getWord = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}