const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 7777
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const Movie = require('./Models/Movie.js')

const mongoUri = "mongodb://localhost:27017/tings-video-db"

app.set('view engine', 'ejs')

// mongoose.connect(
//     mongoUri, 
//     {
//         useNewUrlParser: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     }, () => {
//     console.log("Connected to the DB")
// })

const conn = mongoose.createConnection(mongoUri)

let gfs;
conn.once('open', () => {
    //init stream
    // console.log('in once: ', conn.db)
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('file')
})

//create storage engine
const storage = new GridFsStorage({
    url: mongoUri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'file'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

app.use(express.json())

// app.use('/videos', require('./routes/VideoRoutes.js')) 

app.post('/videos', function (req, res) {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        console.log('here i go');
        if (err) {
            next(err);
        } else {
            ins = fs.createReadStream(files.file.path);
            console.log('insssssssssssss' + ins);
            ous = fs.createWriteStream(__dirname + '/static/uploads/videos/' + files.file.filename);
            // util.pump(ins, ous, function (err) {
            //     if (err) {
            //         next(err);
            //     } else {
            //         RegProvider.save({
            //             file: req.param(files.file.filename),
            //             filename: req.param('filename')
            //         }, function (error, docs) {
            //             res.redirect('/videos');
            //         });
            //     }
            // });
            //console.log('\nUploaded %s to %s', files.file.filename, files.file.path);
            //res.send('Uploaded ' + files.file.filename + ' to ' + files.file.path);
        }
    });
});

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/uploads', upload.single('file'), (req, res) => {
    console.log(req.body)
    res.json({ file: req.file })
    // const newMovie = new Movie(req.body)
    // newMovie.save((err, savedMovie) => {
    //     if (err) {
    //         res.status(500)
    //         return res.send(err)
    //     }
    //     // return res.status(201).send(savedMovie)
    //     return res.json({file: req.body})
    // })
})

app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // check if files 
        if (!files || files.leng === 0) {
            return res.status(404).json({
                err: 'No files exist'
            })
        }
        return res.json(files)
    })
})


app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.leng === 0) {
            return res.status(404).json({
                err: 'No file exist'
            })
        }
        return res.json(file)
    })
})

app.get('/users', (req, res) => {
    res.send('users routes working')
})

app.get('/video/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.leng === 0) {
            return res.status(404).json({
                err: 'No file exist'
            })
        }
        //check if video
        if (file.contentType === 'video/mp4' || "audio/x-m4a") {
            // read output to browser
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
            
            // const stream = fs.createReadStream(file.filename)
            // console.log('type: ', typeof file)

            // stream.on('open', function () {
            //     res.writeHead(206, {
            //         "Content-Range": "bytes " + begin + "-" + end + "/" + total, "Accept-Ranges": "bytes",
            //         "Content-Length": chunksize, "Content-Type": "new/mp4"
            //     });
            //     stream.pipe(res);
            // });

        } else {
            res.status(404).json({
                err: 'not a video'
            })
        }
    })
})


app.get('/users', (req, res) => {
    res.send('users routes working')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})