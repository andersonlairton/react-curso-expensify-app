console.log('utils is running');

const square=(x)=> x*x;
export const add=(a,b)=>a+b;//tambem pode se colocar na frente da função o export


export{square};//variavel que queremos que outras paginas tenham acesso ,so pode ser exportado variaveis,se a função ou variavel ja tiver o export definido ,nao se deve fazer essa função

export default (a,b)=>a-b;//export defaut é a função padrao que sera exportada,nao precisa de nome e nem ser colocada em chaves