
// FUNÇÕES ACIONADAS O CLICAR BOTÃO SALVAR //
var botaoSalvar = document.querySelector('#btn-salvar');
  botaoSalvar.addEventListener("click", function(event){
	
	if(this.closest('form').checkValidity()){
  event.preventDefault();
  
  var form   = document.querySelector('#form');
  var tabela = document.querySelector('#tabela');
  
  var nome  = form.nome.value;
  var nota1 = form.nota1.value;
  var nota2 = form.nota2.value;
  var nota3 = "avaliação não realizada";
  var media = (nota1 * 0.25) + (nota2 * 0.25);
  var status;

  //   CRIANDO BOTÃO EXCLUIR NA TABELA //
  var excluir = document.createElement("button");
  var Btn2 = document.createTextNode('Excluir');
  excluir.appendChild(Btn2);
  excluir.className = 'btn btn-danger';
  excluir.onclick = apagar;
  
  // CRIANDO TR //   
  var alunotr = document.createElement("tr");
   
  // CRIANDO ID DINAMICAMENTE //
  alunotr.id = new Date().getSeconds() + 1;

  //   CRIANDO ELEMENTOS TD DENTRO DA TR //
  var alunotd    = document.createElement("td");
  var nota1td    = document.createElement("td");
  var nota2td    = document.createElement("td");
  var nota3td    = document.createElement("td");
  var mediatd    = document.createElement("td");
  var statustd   = document.createElement("td");
  var excluirtd  = document.createElement("td");
  
  // INSERINDO VALORES NA TABELA //   
  alunotd.textContent = nome;
  nota1td.textContent = nota1;
  nota2td.textContent = nota2;
  nota3td.textContent = nota3;
  mediatd.textContent = media;
  statustd.textContent = status;
  excluirtd = excluir;

  // INSERINDO TD'S DENTRO DAS TR'S //   
  alunotr.appendChild(alunotd);
  alunotr.appendChild(nota1td);
  alunotr.appendChild(nota2td);
  alunotr.appendChild(nota3td);
  alunotr.appendChild(mediatd);
  alunotr.appendChild(statustd);
  alunotr.appendChild(excluirtd);

  // INSERINDO TR'S E TD'S DENTRO DA TABELA //   
  var tabela = document.querySelector('#tabelaDeAlunos');
  tabela.appendChild(alunotr);
  
  // LIMPANDO FORMULÁRIO //   
  form.reset();
  
  // INSERINDO STATUS DO ALUNO CONFORME A MÉDIA //
	function defineStatus(media){
		var status = "-";
		var notaMinima = (6.2 - media);
		if (notaMinima > 5){
			statustd.textContent = "O aluno já está reprovado";
		} else {
			statustd.textContent = "O aluno precisa tirar no mínimo " + notaMinima.toFixed(2) + " na prova 3 para ser aprovado.";
		}
	}
  return defineStatus(media)

}});

// FUNÇÃO APAGAR REGISTRO //
function apagar(excluir){
	var id = excluir.srcElement.parentElement.id
	var elemento =  document.getElementById(id);
	elemento.remove();
}
