---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
sidebar_position: 14
title: Observador de Estrelas
unlisted: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** está atualmente em **beta**.
:::

## Visão Geral {#overview}

O plugin Star Watcher exibe a sobreposição do céu estrelado no mapa com estrelas, constelações, Sol, Lua e planetas. As posições e trajetórias do Sol, Lua, planetas e principais estrelas são exibidas no mapa.

## Parâmetros de Configuração Necessários {#required-setup-parameters}
  
As seguintes configurações são necessárias para exibir a sobreposição do Star Watcher:

1. Ative o plugin [**Star Watcher**](../plugins/index.md#enable--disable) na seção *Plugins* do *Menu Principal*
2. Use **Menu → Mapa estelar** para abrir a tela dedicada com o céu estrelado, configurações e controles de tempo
3. Selecione **data e hora** usando os sliders ou botões na tela do Mapa estelar
4. Ajuste **visibilidade e transparência** nas configurações do menu "Mapa estelar".

O plugin funciona com ambos os motores de renderização de mapa, mas tem o melhor desempenho no modo OpenGL.

## Tela do Mapa Estelar

**Ir para:** *Plugin ativado → Menu → Mapa estelar* 

![Tela do mapa estelar](@site/static/img/plugins/starwatcher/view.png)

A tela dedicada do **Mapa estelar** exibe um domo celeste interativo com estrelas, constelações, planetas, trajetórias do Sol e da Lua. Na parte inferior, há uma **barra de ferramentas** com sliders de data/hora, botões de dia e alternâncias rápidas para camadas como linha do horizonte ou rótulos.

- A tela renderiza o hemisfério completo do céu acima da sua localização, alinhado com a direção da bússola
- Toque em objetos celestes para ver detalhes como magnitude, horários de nascer/pôr ou trajetórias

## Informações do Objeto Celeste

Toque em qualquer **estrela, planeta, constelação ou Sol/Lua** na tela do **Mapa estelar** ou na **sobreposição do mapa** para visualizar informações detalhadas.

![Popup de informações do objeto](@site/static/img/plugins/starwatcher/object-info.png)

**Dados exibidos:**
- **Azimute**: Direção a partir do Norte (0°-360°) onde o objeto aparece no céu
- **Altitude**: Altura acima do horizonte (0° no horizonte, 90° no zênite)
- **Magnitude**: Escala de brilho (-26 para o Sol até +6 para estrelas fracas; menor = mais brilhante)
- **Horários de nascer/pôr**: Quando o objeto nasce acima/define abaixo do horizonte
- **Distância** (planetas): Distância média da Terra em UA/km

**Integração com Wikipedia**: Toque em **"Wikipedia"** no popup de informações para abrir a página do objeto no seu navegador (ex.: Sirius, Orion, Venus). Funciona offline para dados em cache, online para artigos completos.

**Toque longo** em objetos celestes para **fixá-los** como marcadores no mapa com atualizações de posição em tempo real, ou **compartilhar** coordenadas para observação de estrelas em grupo.

Este recurso ajuda a identificar objetos no céu real, planejar observações e aprender fatos de astronomia diretamente do OsmAnd.

## Localização de Estrelas em AR (Modo Câmera)

**Ir para:** *Plugin ativado → Menu → Mapa estelar → Botão da câmera* 

A camada do **Star Watcher** funciona com a **câmera do dispositivo** para habilitar a **observação de estrelas em Realidade Aumentada (AR)**. Aponte a câmera do telefone para o céu noturno real e veja estrelas, planetas, constelações, Sol/Lua sobrepostos em tempo real.

**Como funciona a Localização de Estrelas em AR:**
- **Visualização da câmera ao vivo** mostra o céu real com sobreposições astronômicas transparentes alinhadas ao horizonte/bússola
- **Mova a câmera** para escanear o céu — objetos são destacados quando aparecem no seu campo de visão
- **Toque em objetos destacados** para ver azimute, altitude, magnitude, horários de nascer/pôr e link da Wikipedia
- **Calibração da bússola** necessária para alinhamento preciso (balance o telefone em forma de 8 se necessário)

**Perfeito para:**
- Identificar estrelas/planetas fracos invisíveis a olho nu
- Localizar constelações movendo o telefone pelo céu
- Navegação celeste em tempo real durante caminhadas ou acampamentos

## Configurações do Star Watcher

*Menu Principal → Plugins → Mapa estelar → Botão ⚙️*

Escolha camadas e objetos visíveis

### Camadas Estelares

Todos os dados astronômicos aparecem como sobreposições no mapa, visíveis em escalas de zoom 5-15. As camadas projetam a esfera celeste no mapa plano.

| Camada | Descrição |
|--------|-----------|
| Estrelas | Estrelas brilhantes (até magnitude 4-6) com rótulos e linhas de constelações |
| Constelações | Conecta estrelas em padrões familiares como Orion ou Grande Carro |
| Planetas | Posições e trajetórias diárias para Mercúrio-Vênus-Marte-Júpiter-Saturno (ícones coloridos) |
| Sol & Lua | Arcos mostrando horários de nascer/pôr e fase de iluminação |
| Horizonte | Linha separando o céu visível do solo, com direções cardeais |

## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)