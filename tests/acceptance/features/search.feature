#language:pt

Funcionalidade: Precificaçao de voo
  Eu como comprador de passagens
  Desejo verificar os preços
  Para decidir qual voo mais em conta comprar

  Cenario: Validar preço entre pesquisa e checkout
    Dado que realizo a pesquisa de "SAO" para "RIO"
    Quando seleciono um card
    Então o valor constado no card deverá ser o mesmo do checkout