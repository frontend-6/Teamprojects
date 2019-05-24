/**
 * @file Implementation of the map block
 * @author Andrey Glotov
 */

/* global google */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const ZOOM = 12;

const coords = {
    lat : 40.72, 
    lng : -74,
};

const style = 

[{'featureType':'administrative','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'administrative.province','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'landscape','elementType':'all','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','elementType':'all','stylers':[{'saturation':-100},{'lightness':'50'},{'visibility':'simplified'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':'-100'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'all','stylers':[{'lightness':'30'}]},{'featureType':'road.local','elementType':'all','stylers':[{'lightness':'40'}]},{'featureType':'transit','elementType':'all','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]},{'featureType':'water','elementType':'labels','stylers':[{'lightness':-25},{'saturation':-100}]}]

;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the map module.
 * @return true;
 */
export const initModule = function() {
    $('.map__container').each(function() {
        const map = new google.maps.Map(this, {
            zoom             : ZOOM,
            center           : coords,
            disableDefaultUI : true,
        });

        map.mapTypes.set('styled_map', new google.maps.StyledMapType(style));
        map.setMapTypeId('styled_map');

        const mapMarker = new google.maps.Marker({
            position : coords,
            map      : map
        });
        mapMarker.setIcon('img/map-marker.png');
    });
};
// ---------------------------- END PUBLIC METHODS ----------------------------