---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Personalizar o motor de roteamento {#customize-routing-engine}

Em alguns casos, você pode querer estender ou ajustar a experiência de roteamento do OsmAnd, para que possa adicionar parâmetros extras, adicionar barreiras extras ou alterar algumas penalidades. Por favor, dê uma olhada em [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). O roteamento do OsmAnd usa o algoritmo A* bidirecional baseado no tempo mais rápido (= distância/(velocidade*prioridade) + penalidades). É um formato bem fácil. Ele é dividido em 7 seções (grupos de avaliação):

* acesso (1 permitir, -1 não permitir)
* velocidade (número que representa a velocidade em km/h)
* prioridade (número entre 0 e 1) - um multiplicador para a velocidade e ainda está limitado à velocidade máxima, então o mínimo (velocidade * multiplicador, velocidade máxima) será usado para A*
* sentido único (1, -1 ou 0) - usado para esclarecer o acesso com base na direção do movimento
* penalty_transition (penalidade em segundos) - usado para definir a penalidade quando o usuário passa de uma estrada de alta classe para uma estrada de baixa classe. Por exemplo, autoestrada - 10, tronco - 15, se o usuário for de autoestrada para tronco, a penalidade será de 5 segundos (=10 - 15). Esta penalidade será usada pelo algoritmo A*. Não há penalidade se o usuário for de autoestrada para tronco e não há penalidade se a rota continuar de autoestrada para autoestrada.
* obstacle (penalidade em segundos) - define a penalidade que é para o tempo de roteamento
* obstacle_time (penalidade em segundos) - define a penalidade que é exibida para o usuário, mas não é considerada pelo motor de roteamento, ou seja, obstacle_time - 2 horas, obstacle - 1 minuto, na rota mais curta o motor encontrará uma rota usando o obstáculo de 1 minuto, mas o usuário verá que o tempo da rota é de 2 horas.

Para testar [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), você pode usar [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Para testar routing.xml no dispositivo, você pode simplesmente substituir o routing.xml padrão na pasta raiz do OsmAnd pelo cartão SD.