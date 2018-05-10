
// Autocomplete com jquery-ui
$( function() {
    $("#cep").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "app/endereco.php",
          dataType: "json",
          data: {
            _action: 'get_endereco', // Método remoto
            term: request.term // Parâmetro enviado ao método
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 4,
      select: function( event, ui ) {
        // Alimenta os campos a partir do retorno do método remoto
        $("#logradouro").val(ui.item.logradouro);
        $("#cidade").val(ui.item.cidade);
        $("#bairro").val(ui.item.bairro);
        $("#uf").val(ui.item.uf);
      }
    });

});

$( function() {
    $("#cidade").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "app/endereco.php",
          dataType: "json",
          data: {
            _action: 'get_endereco', // Método remoto
            term: request.term // Parâmetro enviado ao método
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 2,
      select: function( event, ui ) {
        // Alimenta os campos a partir do retorno do método remoto
        $("#logradouro").val(ui.item.logradouro);
        $("#cep").val(ui.item.cep);
        $("#bairro").val(ui.item.bairro);
        $("#uf").val(ui.item.uf);
      }
    });

});

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
    
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


$(document).ready(function () {

  var $seuCampoCpf = $("#cpf");
  var $telefone = $("#telefone");
  var $celular = $("#celular");

  $telefone.mask("00 0000 0000", {reverse: true});

  $celular.mask("00 00000 0000", {reverse: true});

  $seuCampoCpf.mask('000.000.000-00', {reverse: true});

});

function validar() {

  var cpfSemMask = $("#cpf").val();

  cpfSemMask = cpfSemMask.replace(".","").replace(".","").replace(".","").replace("-","");

  if(!TestaCPF(cpfSemMask)) {
    alert("Digite um cpf valido")
  }
}