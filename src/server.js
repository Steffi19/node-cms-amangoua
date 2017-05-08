
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next) {
    res.render('../views/index.ejs');
});

app.post('/email', function(req, res, next) {
    /* Notre code pour nodemailer */
    var mailer = require("nodemailer");
    var smtpTransport = mailer.createTransport("SMTP",{
                        service: "Gmail",
                        auth: {
                            user: "steffi.mansour@gmail.com",
                            pass: "000"
                        }
                    });

    var mail = {
            from: req.body.sender,
            to: "steffi.mansour@gmail.com",
            subject: req.body.subject,
            text: req.body.message,
            html: '<b>' + req.body.message + '</b>'
    };

                

    smtpTransport.sendMail(mail, function(error, response){
                        if(error){
                            console.log("Erreur lors de l'envoi du mail!");
                            console.log(error);
                        }else{
                            console.log("Mail envoyé avec succès !")
                        }
                        smtpTransport.close();
                    });
			

    smtpTransport.close();
    console.log("Le mail a été envoyé avec succès !");
});

app.use(function(req, res) {
    res.sendStatus(404);
});

app.listen(8080);