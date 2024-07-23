 function verificarIdade() {
    try {
      
      var idade = parseInt(document.getElementById('idade').value);

      
      if (idade > 17) {
        alert('Meu amigo sua idade foi verificada com sucesso! Parabêns, você tem mais de 18 anos e pode acessar o jogo!');
      } else {
        alert('Meu PATRÃO, você precisa ter mais de 18 anos para acessar o jogo! :(');
      }

    } catch (error) {
      alert('Ocorreu um erro ao processar a idade: ' + error.message);
    }
  }