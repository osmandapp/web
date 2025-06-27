---
source-hash: 25c29183922ffa0df481d5ee27894c6a7f4653e20a70b824ecbc3791edaafed7
sidebar_position: 3
---

# Dostosuj silnik routingu {#customize-routing-engine}

W niektórych przypadkach możesz chcieć rozszerzyć lub dostosować doświadczenie routingu w OsmAnd, dodając dodatkowe parametry, bariery lub zmieniając niektóre kary. Proszę zapoznać się z plikiem [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml). Routing w OsmAnd wykorzystuje dwukierunkowy algorytm A* oparty na najszybszym czasie (= odległość/(prędkość*priorytet) + kary). Jest to dość prosty format. Jest podzielony na 7 sekcji (grupy ewaluacyjne):

* dostęp (1 zezwól, -1 nie zezwól)
* prędkość (liczba przedstawiająca prędkość w km/h)
* priorytet (liczba między 0 a 1) - mnożnik prędkości, który jest nadal ograniczony do maxSpeed, więc minimum (prędkość * mnożnik, maxSpeed) zostanie użyte dla A*
* jednokierunkowa (1, -1 lub 0) - używana do wyjaśnienia dostępu na podstawie kierunku ruchu
* kara_za_przejście (kara w sekundach) - używana do zdefiniowania kary, gdy użytkownik przechodzi z drogi wysokiej klasy na drogę niskiej klasy. Na przykład, autostrada - 10, droga główna - 15, jeśli użytkownik przechodzi z autostrady na drogę główną, kara wyniesie 5 sekund (=10 - 15). Ta kara zostanie użyta przez algorytm A*. Nie ma kary, jeśli użytkownik przechodzi z autostrady na drogę główną i nie ma kary, jeśli trasa kontynuuje się z autostrady na autostradę.
* przeszkoda (kara w sekundach) - definiuje karę, która jest doliczana do czasu routingu
* czas_przeszkody (kara w sekundach) - definiuje karę, która jest wyświetlana użytkownikowi, ale nie jest brana pod uwagę przez silnik routingu, np. czas_przeszkody - 2 godziny, przeszkoda - 1 minuta, na najkrótszej trasie silnik znajdzie trasę z przeszkodą 1 minuta, ale użytkownik zobaczy, że czas trasy wynosi 2 godziny.

Aby przetestować [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml), możesz użyć [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Aby przetestować routing.xml na urządzeniu, możesz po prostu zastąpić domyślny routing.xml w folderze głównym OsmAnd na karcie SD.