
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
      }
    });

});
$(document).ready(function () {

  var $seuCampoCpf = $("#cpf");
  var $telefone = $("#telefone");
  var $celular = $("#celular");

  $telefone.mask("00 0000 0000", {reverse: true});

  $celular.mask("00 00000 0000", {reverse: true});

  $seuCampoCpf.mask('000.000.000-00', {reverse: true});
});