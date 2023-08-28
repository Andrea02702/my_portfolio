const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path')
const fs = require('fs');


const db = require('./dbconnection');


const app = express();



app.use(bodyparser.json());

// Configurazione CORS
app.use(cors({
    origin: 'http://localhost:4200', // Imposta l'origine consentita
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifica i metodi consentiti
    credentials: true // Consenti l'invio dei cookie e delle credenziali
  }));




//check db

db.connect(err=>{
    if(err) {console.log('err');}
    console.log('database on')
})




//get data

app.get('/adminpost',(req,res,)=>{
    
    let qr ='select * from contact';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'err');
        }

        if(result.length>0)
        {
            res.send({
                message:'all contact data',
                data:result
            })
        }
    });
});


//get single data 
app.get('/adminpost/:id',(req,res,)=>{

    let gID = req.params.id;

    
    let qr = `select * from contact where id = ${gID}`;

    db.query(qr,(err,reault)=>{

        if(err) {console.log(err);}

        if(reault.length>0)
        {
            res.send({
                message:'get single data',
                data:reault
            });
        }

        else
        {
            res.send({
                message:'data not found',
            });
        }
    });
});


//post data

app.post('/contact',(req,res)=>{
    console.log(req.body,'post data');

    let Name = req.body.name;
    let Email = req.body.email;
    let Text = req.body.text;

    let qr = `insert into contact(name,email,text)
                   values('${Name}','${Email}','${Text}')`;

    console.log(qr,'qr')

    db.query(qr,(err,result)=>{

        if(err){console.log(err);}
        console.log(result,'result')

        res.send({
            message:'data insert'
        })

   
    });
});


//cors
app.use(cors());

//delet message

app.delete('/adminpost/:id',(req,res)=>{
    let qID = req.params.id;

    let qr =`delete from contact where id ='${qID}'`;
    db.query(qr,(err,reault)=>{
        if(err){ console.log(err); }

        res.send(
            {
                message:'dati eliminati '
            }
        )
            
        
    })
});


// post img

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/adminpost', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }
    
    const filePath = req.file.path;
    // Esegui altre operazioni o salvataggio del percorso del file nel database
    res.json({ message: 'File uploaded successfully', filePath: filePath });
});

  

// get image


app.get('/galleria', (req, res) => {
    const imageFolderPath = path.join(__dirname, 'uploads/');
  
    fs.readdir(imageFolderPath, (err, files) => {
      if (err) {
        console.error('Error reading image folder', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      const imageList = [];
      files.forEach((file) => {
        const imageData = fs.readFileSync(path.join(imageFolderPath, file), 'base64');
        imageList.push(`data:image/jpeg;base64,${imageData}`);
      });
  
      res.json({ imageUrls: imageList });
    });
});




app.listen(3000,()=>{
    console.log('run server')
})

