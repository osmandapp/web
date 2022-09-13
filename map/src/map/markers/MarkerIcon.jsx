import L from "leaflet";

const MarkerIcon = ({iconType = 'default-marker', bg = 'blue'}) => {

    let svg = ` <svg class="background" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="15" fill='${bg}'/>
                        </svg>`

    return L.divIcon({
        html: `
                              <div>
                                  ${svg}
                                  <img class="icon" src="/map/images/map_icons/${iconType}.svg"
                              </div>
                              `
    })
}

export default MarkerIcon;