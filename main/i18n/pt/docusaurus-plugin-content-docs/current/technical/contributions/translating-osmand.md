---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Como Traduzir o OsmAnd - Precisamos da Sua Ajuda! {#how-to-translate-osmand---we-need-your-assistance}


Agradecemos muito a sua ajuda na tradução do OsmAnd! Fornecer traduções de texto de exibição não é muito complicado, a forma preferida de fornecer traduções de strings é descrita aqui: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Se um idioma para o qual você gostaria de ajudar a traduzir ainda não estiver listado lá, por favor, abra um problema [aqui](https://github.com/osmandapp/Osmand/issues) (requer uma conta github).
* Os arquivos de idioma existentes também podem ser modificados editando o respectivo _arquivo strings.xml_ diretamente em nosso código através de mecanismos do github, mas esta não é a forma preferida.
* Apenas para referência: as strings mestre são mantidas no [arquivo strings.xml em inglês americano](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). Os dados de string para o extrator de dados do mapa estão nos arquivos `swing_messages_{language}.properties` no projeto [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(NOTA Hardy: o link está quebrado!)**.

Obrigado pela sua ajuda!

## Algumas Perguntas e Respostas Frequentes: {#some-frequent-questions-and-answers}

#### P1: Quais strings devo traduzir? {#q1-which-strings-should-i-translate}
A ferramenta Weblate é autoexplicativa. Somente se você tentar editar arquivos diretamente:
* Em `strings.xml`, as strings se parecem com `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. Traduza apenas a parte `Save route as GPX track`.
* Em `swing_messages.properties`, as strings se parecem com `IndexCreator.INDEX_CITIES=Indexing cities...`. Traduza apenas a parte direita `Indexing cities...`.

#### P2: Não quero criar no Weblate ou github, posso simplesmente enviar o arquivo para vocês? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Sim, você pode enviar o arquivo por e-mail, mas por favor, tente as formas preferidas, é fácil.

#### P3: Como devo verificar o que mudou no __strings.xml em inglês__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Por favor, use o Weblate conforme descrito acima, ele mostrará todas as alterações. Se você quiser verificar a fonte manualmente versus seu arquivo: Novas strings são geralmente adicionadas no topo do arquivo de recurso de idioma mestre. Você pode baixá-lo e usar alguma utilidade como pspad ou vim para compará-los. Você também pode usar *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* ou o histórico de arquivos no github para visualizar as últimas modificações.

## Quais idiomas serão incluídos no OsmAnd? {#what-languages-will-be-included-in-osmand}

> Caros tradutores,
>
> Muito obrigado a todos pelos seus esforços para completar nossas traduções de idioma de exibição e também para localizar o OsmAnd em mais e mais idiomas no [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Por favor, note o seguinte: Tenho o prazer de incluir no menu de seleção de idioma de exibição do OsmAnd qualquer novo idioma com taxa de tradução >10% (marcarei como "incompleto" até atingir ~80%). Por favor, abra um problema com o OsmAnd se precisar que isso seja feito, eu só observo esporadicamente esses números no Weblate.
>
> Infelizmente, idiomas com códigos ISO 639-2 de 3 letras atualmente parecem ter problemas no Android, veja por exemplo:* [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Isso significa que, infelizmente, qualquer idioma desse tipo pode não ser exibido nos menus do OsmAnd em seu dispositivo. (Este problema afeta apenas o idioma usado nos menus do aplicativo, não no mapa, é claro.)
>
> Obrigado,
> Dr. Hardy Mueller