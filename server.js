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

var GridStore = require('mongodb').GridStore;
var ObjectID = require('mongodb').ObjectID;

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
    console.log('fired')
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.leng === 0) {
            return res.status(404).json({
                err: 'No file exist'
            })
        }
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
    })
})


app.get('/users', (req, res) => {
    res.send('users routes working')
})









function StreamGridFile(req, res, GridFile) {
    if(req.headers['range']) {
  
      // Range request, partialle stream the file
      console.log('Range Reuqest');
      var parts = req.headers['range'].replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];
  
      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : GridFile.length -1;
      var chunksize = (end-start)+1;
  
      console.log('Range ',start,'-',end);
  
      res.writeHead(206, {
        'Content-Range': 'bytes ' + start + '-' + end + '/' + GridFile.length,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': GridFile.contentType
      });
  
      // Set filepointer
      GridFile.seek(start, function() {
        // get GridFile stream
        var stream = GridFile.stream(true);
  
        // write to response
        stream.on('data', function(buff) {
          // count data to abort streaming if range-end is reached
          // perhaps theres a better way?
          start += buff.length;
          if(start >= end) {
            // enough data send, abort
            GridFile.close();
            res.end();
          } else {
            res.write(buff);
          }
        });
      });
  
    } else {
  
      // stream back whole file
      console.log('No Range Request');
      res.header('Content-Type', GridFile.contentType);
      res.header('Content-Length', GridFile.length);
      var stream = GridFile.stream(true);
      stream.pipe(res);
    }
  }




// app.get('/my', function(req, res) {
//     new GridStore(conn, new ObjectID("5d07efad85bfeb6a556a0a5d"), null, 'r').open(function(err, GridFile) {
//       if(!GridFile) {
//         res.send(404,'Not Found');
//         return;
//       }
      
//       StreamGridFile(req, res, GridFile)
//     });
//   });

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})