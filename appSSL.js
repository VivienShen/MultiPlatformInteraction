const https     = require('https');
const forge     = require('node-forge');
const express   = require('express');
const app       = express();

//const vars
const LISTEN_PORT = 8080;

//*******  BEGIN SSL certs 
forge.options.usePureJavaScript = true; 
var pki = forge.pki;
var keys = pki.rsa.generateKeyPair(2048);
var cert = pki.createCertificate();

cert.publicKey = keys.publicKey;
cert.serialNumber = '01';
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear()+1);

var attrs = [
     {name:'commonName',value:'example.org'}
    ,{name:'countryName',value:'US'}
    ,{shortName:'ST',value:'Virginia'}
    ,{name:'localityName',value:'Blacksburg'}
    ,{name:'organizationName',value:'Test'}
    ,{shortName:'OU',value:'Test'}
];
cert.setSubject(attrs);
cert.setIssuer(attrs);
cert.sign(keys.privateKey);

var pem_pkey = pki.publicKeyToPem(keys.publicKey);
var pem_cert = pki.certificateToPem(cert);

console.log(pem_pkey);
console.log(pem_cert);
//****** END create SSL certs */


//middleware
app.use(express.static(__dirname + '/public'));

//set routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});


const options = {
    key: pki.privateKeyToPem(keys.privateKey),
    cert: pem_cert
};
console.log('HTTPS server being created ...');
const secureServer = https.createServer(options, app);
secureServer.listen(LISTEN_PORT);     //start server
console.log('Listening on port: ' + LISTEN_PORT );