var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {

  var nombre = req.query.nombre || '';
  var saludo = '';

  if (nombre != '')
    saludo = "Hola " + nombre;

  res.send('<html><body>'
          + '<h1>Saludo</h1>'
          + '<p>' + saludo + '</p>'
          + '<form method="get" action="/">'
          + '<label for="nombre">¿Cómo te llamas?</label>'
          + '<input type="text" name="nombre" id="nombre">'
          + '<input type="submit" value="Enviar"/>'
          + '</form>'
          + '</body></html>');
});

//app.listen(8080);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
