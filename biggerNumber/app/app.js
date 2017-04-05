var express = require('express');
var funct = require('../app/controller');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {

  var input = req.query.input || '';
  var list = '';
  var max = '';

  if (input != '')
    list = input;

    if( list != ''){
     dispart = funct.dispart(list);
     permute = funct.permute(dispart);
     concat = funct.concat(permute);
     

     max = " <font color=\"blue\">De la lista "+list+" </font><HR><font color=\"blue\"> La combinación de mayor denominación posible es: "+funct.max(concat)+"</font>";

    }

  res.send('<html><body>'
          + '<h1>La Combinación mas Grande</h1>'
          + '<form method="get" action="/">'
          + '<p>Ingresa una lista de numeros seguido de una coma</p>'
          + '<p>Ej: 50, 2, 1, 9</p>'
          + '&nbsp &nbsp'
          + '<input type="text" name="input" id="input">'
          + '<input type="submit" value="Enviar"/>'
          + '</form>'
          +  max
          + '</body></html>');

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
