function Suma(valor1,valor2)
  {
    this.valor1=valor1;
    this.valor2=valor2;
    this.primerValor=primerValor;
    this.segundoValor=segundoValor;
    this.retornarResultado=retornarResultado;
  }

  function primerValor(valor1)
  {
    this.valor1=valor1;
  }

  function segundoValor(valor2)
  {
    this.valor2=valor2;
  }

  function retornarResultado()
  {
    return this.valor1+this.valor2;
  }
 var suma1;
  suma1=new Suma(5,10);
  console.log('La suma de 5 y 10 es:'+suma1.retornarResultado()+'\n');
  suma1.primerValor(70);
  suma1.segundoValor(30);
  console.log('La suma de 70 y 30 es:'+suma1.retornarResultado()+'\n');