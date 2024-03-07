$(document).ready(function(){
    alert(123)
  $('body').on('click', '#consultar', function(){
      consultaCep();
  });

  function consultaCep(){
      const cep = $('#cep').val();
      if(cep.length !== 8){
          alert('Digite o cep corretamente');
          return false; 
      }

      loading();

    setTimeout(function(){

      
      $.ajax({
          url: 'https://viacep.com.br/ws/'+cep+'/json/',
          type: 'GET',
          dataType: 'json',
          success: function(data){
              console.log(data);
              $('body').find('#resultados').html('<h2>resultado da consulta</h2>' 
                                                                    + '<p> CEP:'+ data.cep+ '</p1>'
                                                                    + '<p> Logradouro' + data.logradouro + '</p>'
                                                                    + '<p> Bairro' + data.bairro+ '</p>' 
                                                                    + '<p> Cidade' + data.localidade+ '</p>' 
                                                                    + '<p> Estado' + data.uf+ '</p>' 
                                                                    + '<p> IBGE' + data.ibge+ '</p>');

          }
      })
    }, 2000)
  }

  function loading(){
    $('resultado').html('<img src="loading.gif"/> ')
  }


})