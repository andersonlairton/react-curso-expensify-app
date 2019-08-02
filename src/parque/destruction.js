/* object destruction 
const person = 
{
    name:'anderson',
    age:24,
    
    location:
    {
        city:'sao paulo',
        temp:15
    }
};

const {name='desconhecido'/*colocando uma valor caso na variavel nao possua valor */ /*,age} = person;//pegando dados da matriz pessoa
console.log(`${name} tem ${age} anos de idade`);
if(age>=18)
{
  
   console.log('ja pode tirar cnh');
}
else
{
    console.log('nao pode tirar cnh');
}

const {city,temp:temperatura/*colocado apelido na variavel *//*}=person.location;//pegando os dados da matriz localização que esta localizada dentro da matriz pessoa,e criando variaveis com o nome delas
if(city && temperatura)//verifiacando se existem dados nas variaveis
{
console.log(`hoje esta ${temperatura}ºC na cidade de ${city}`);
}
if(temperatura<=15)
{
    console.log('hoje esta frio');
}
else if(temperatura >27)
{
    console.log('hoje esta calor');
}else
{
    console.log('temperatura agradavel');
}

const book=
{
    titulo:'fortaleza digital',
    autor:'dan brow',
    editora:
    {
        nome:'cia das letras'
    }
}
const {titulo:livro}=book;
const {nome:nomeEditora='abril'}=book.editora;
console.log(`O livro ${livro} possui como editora a ${nomeEditora}`);
*/

//array destruction

const endereco = ['av inacio dias da silva,260','sao paulo','piraporinha','2018'];//matriz de dados
const [rua,cidade,bairro,zip]=endereco //descontruindo e nomeando cada elemento da matriz de acordo com sua posição
console.log(`voce esta na cidade de ${cidade}, na ${rua},que fica no bairro ${bairro}`);

const item=['cafe expresso','2.00','2.50','3.50'];
const [tipo, ,precoMedio,]=item;//nao é necessario nomear todos os elementos se nao iremos utilizar todos
console.log(`o preco do ${tipo} é de ${precoMedio}`);