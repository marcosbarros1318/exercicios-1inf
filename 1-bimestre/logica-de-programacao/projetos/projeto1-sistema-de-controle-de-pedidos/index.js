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

console.log("===== RESUMO DO PEDIDO =====");
console.log(`Cliente: ${cliente}`);
console.log(`Cidade: ${cidade}`);
console.log(`Produto: ${produto}`);
console.log(`Categoria: ${categoria}`);
console.log(`Preço unitário: R$ ${preco.toFixed(2)}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Desconto: ${descontoPercentual}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
console.log(`Valor pago: R$ ${valorPago.toFixed(2)}`);
console.log(`Troco: R$ ${troco.toFixed(2)}`);



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

