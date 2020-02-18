---
title: Pedido de venda - Web/Mobile
date: "2020"
description: Redesign e melhoria na usabilidade de um dos produtos já existentes da empresa, com foco no fluxo de venda.
role: UX/UI Designer
contributions: Wireframing, Prototipagem, UX/UI Design
featuredImage: pedido-de-venda_img.png
---

Minha primeira tarefa após estar familiarizado com a empresa foi de repensar a interface e usabilidade do sistema de Pedido de Venda. Este é o produto que oferecemos às lojas de varejo para vendas presenciais, dentro da loja.
É um produto complexo e ligado à um ERP, que gera muitas regras de negócio específicas e possibilidades de customização baseado nas necessidades de cada cliente.
Sendo assim, decidi estudar o fluxo do sistema e começar as mudanças pelo que considerei mais importante:

## O fluxo de venda (antes)

Estas eram as principais telas do fluxo de venda:

![Fluxo de venda antigo](/fluxo-venda-antigo.png)

> _O principal uso deste produto é por celular ou tablet, apesar de tê-lo feito também em modo desktop, irei focar nas mudanças e design mobile._

**Detalhamento do fluxo antigo:**

- 1. Selecionar o(s) produto(s) e opções para adicionar no carrinho. (**imagens 1 e 2**)
- 2. Ao clicar em Adicionar é iniciado o processo de venda no carrinho, aqui é possível alterar a quantidade de cada produto assim como habilitar ou desabilitar serviços extras como entrega e montagem de cada um. Ainda nesta tela, ao clicar no botão "Avançar", o sistema irá lhe informar que é necessário selecionar um cliente antes de prosseguir, a não ser que tenha feito isso inicialmente por conta própria pela navegação geral. (**imagens 3, 4 e 5**)
- 3. Ao selecionar o cliente, voltar para o carrinho e clicar em "Avançar" mais uma vez, estará no passo de dados de entrega, onde será informado o endereço e outros dados como rota e cobrança de Frete. (**imagens 6 e 7**)
- 4. Com todos os dados preenchidos vem a tela de Pagamentos, aqui são separados pagamentos na entrada de pagamentos parcelados, visualmente era uma tela bastante complexa, com muitas interações dinâmicas e não claramente definidas para o usuário. Ao preencher o valor total do pedido na entrada, é gerado um pagamento que nos possibilita avançar no processo. (**imagens 8, 9 e 10**)
- 5. O último passo é o de confirmação do pedido, onde são apresentados os dados do cliente, endereço e pagamento para revisão do vendedor. Aqui também é possível adicionar observações para nota fiscal e de uso interno, que são interessantes para a loja. (**imagens 11, 12 e 13**)

## O redesign (depois)

Apesar de muitos problemas relacionados à usabilidade neste fluxo, o maior desafio foi o de manter a fidelidade da framework do Material Design durante o processo, anteriormente o sistema possuía muita inconsistência visual, que acabava influenciando também na carga cognitiva para os usuários.

Abaixo irei separar a lista criada anteriormente em explicações para cada decisão que tomei e quais propostas indiquei para a solução dos problemas existentes.

### Tela do produto:

![Nova tela de produto](/pagina-de-produto.jpg)
Nesta tela as mudanças foram na maioria estéticas, deixei o visual mais padronizado como uma tela de produto, melhorei a hierarquia dos elementos e criei inputs com label definidas para os campos de **Filial** e **Locais de Saldo**, que anteriormente eram botões que não comunicavam nenhum tipo de ação ou clareza. Aqui também fica claro que para prosseguir com a adição do produto, é necessário escolher uma das opções que estão acima.
As especificações e detalhes técnicos continuam com uma funcionalidade de acordeões, mas agora um pouco mais evidentente no padrão visual.

### O carrinho:

![Nova tela de carrinho](/pagina-de-carrinho.jpg)
Esta tela foi totalmente repensada, primeiramente a imagem que existia tomava o espaço total da tela, da mesma forma que na tela do Produto; por ser uma tela de carrinho, é preciso considerar que existe a possibilidade de diversos produtos existirem ao mesmo tempo.
A solução proposta oferece um modelo de descoberta progressiva, onde inicialmente só são apresentadas as principais informações sobre cada produto e serviço para o usuário, caso seja necessária alguma alteração específica em algum deles, a opção "_Editar no carrinho_" presente no menu de três pontos verticais levará o usuário para uma tela onde todas as informações do produto podem ser visualizadas e/ou alteradas.
Além disso, o processo de seleção do cliente é destacado logo abaixo, caso ainda não possua um selecionado pela navegação geral.

### Dados de entrega:

![Nova tela de dados de entrega](/dados-de-entrega.jpg)
Nesta tela foi melhorada apenas a disposição dos campos do formulário, o design dos campos da Rota e da opção de cobrança de frete.

### Dados de pagamento:

![Nova tela de dados de pagamento](/dados-de-pagamento.jpg)
Aqui o principal objetivo foi de separar claramente os pagamentos na entrada de pagamentos parcelados, para isso foram feitos os dois formulários com título mais direto, além de cada um dos pagamentos gerados terem seu próprio estilo de card.
Nos pagamentos parcelados existem tags caso possua seguro ou uma promoção vinculada ao mesmo.
Essa tela foi onde tive o maior bloqueio e muitas iterações, principalmente pelo fato de que cada loja possui suas formas específicas de lidar com promoções, pagamentos e seguros.
Ainda não é a solução final, mas acredito que estamos seguindo no caminho correto.

### Finalizar pedido:

![Nova tela de finalizar pedido](/finalizar.jpg)
Assim como na tela de dados de entrega, o objetivo nesta tela foi de melhor organização das informações.
Uma adição que não existia foi a de um "Resumo do carrinho", que mostra os produtos e valores da venda, permitindo também voltar à tela de carrinho e editar informações, caso necessário.

## Conclusão

O pedido de venda é um desafio muito interessante, essas mudanças ainda não começaram a ser implementadas, mas levarão o produto à um nível elevado de consistência visual e melhor usabilidade.

Abaixo estão as imagens das soluções apresentadas acima em desktop:

![Processo de venda - Desktop](/processo-desktop.png)
