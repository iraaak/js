let var_1 = prompt('Сколько у вас с собой денег?');
let var1 = prompt('Сколько у вас с собой яблок?');
let var2 = prompt('Сколько вы купили батонов хлеба?');
let var3 = prompt('Сколько стоит одно яблоко?')*var1;
let var4 = prompt('Сколько стоит один батон хлеба?')*var2;
let var5 = var_1 <= (var3+var4);
document.body.innerHTML = Boolean(var5);