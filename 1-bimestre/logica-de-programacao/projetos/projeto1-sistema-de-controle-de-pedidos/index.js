// CRIE SUA SOLUÇÃO ABAIXO ===============
const cliente = "Mariana Silva";
const cidade = "Fortaleza";
const produto = "Notebook Pro";
const categoria = "Notebook";
const preco = 3500;
const quantidade = 2;
const descontoPercentual = 10;
const valorPago = 7000;

const subtotal = preco * quantidade;
const valorDesconto = subtotal * (descontoPercentual / 100);
const valorFinal = subtotal - valorDesconto;
const troco = valorPago - valorFinal;

const resumo = `
===== RESUMO DO PEDIDO =====
Cliente: ${cliente}
Cidade: ${cidade}
Produto: ${produto}
Categoria: ${categoria}
Preço unitário: R$ ${preco.toFixed(2)}
Quantidade: ${quantidade}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto.toFixed(2)}
Valor final: R$ ${valorFinal.toFixed(2)}
Valor pago: R$ ${valorPago.toFixed(2)}
Troco: R$ ${troco.toFixed(2)}
`;

console.log(resumo);

module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
};




-// === FIM DO CÓDIGO========================
-// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
-module.exporta = {
- cliente,
- cidade,
- produto,
- categoria,
- preco,
- quantidade,
- descontoPercentual,
- valorPago,
- subtotal,
- valorDesconto,
- valorFinal,
- troco,
- resumo
-}

