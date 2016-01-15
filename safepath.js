//L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
//var map = L.mapbox.map('map', 'examples.map-20v6611k')
//  .setView([38.12367, -76.81229], 9);

//var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson;
var origjson;

//var geojson = {
//    type: 'FeatureCollection',


function initialize() {
	var mapProp = {
    center:new google.maps.LatLng(41.8889,-87.6277),
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
}
google.maps.event.addDomListener(window, 'load', initialize);
	 


var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1TQbMnxKuUABTsmiOqMemgP0hWC_WXGufE01wiArQEQ4/pubhtml';
$(document).ready(function() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: convertToGeoJSON,
                     simpleSheet: true } )
});


function convertToGeoJSON(data) {
	console.log(data);
	places = [];
	
	for (i = 0; i < data.length; i++) {
		origjson = data;
	
		place = {
			type: 'Feature',
			properties: {
				title: data[i]["name"],
				description: data[i]["description"],
				'marker-color': data[i]["markercolors"],
				'marker-size': 'large',
				'marker-symbol': data[i]["markerstyle"],
			},
			geometry: {
				type: 'Point',
				coordinates: [data[i]["longitude"],data[i]["latitude"]]
			}
		}
		places.push(place);
	}
	geojson = {type: 'FeatureCollection', features: places};
	setupMap(geojson);
} 

function setupMap(geo) {
	myLayer.setGeoJSON(geo);
	map.fitBounds(myLayer.getBounds());
}

/*    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Bay Area, CA',
            description: 'There are FIFTEEN summer immersion programs in the Bay Area this year!',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.419, 37.774]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Six Flags, Great America, IL',
            description: 'Save the date: Aug 16',
            'marker-color': '#ff0000',
            'marker-size': 'large',
            'marker-symbol': 'marker',
            //video: '<iframe src="https://www.youtube.com/embed/hGns7v4sAGw" width="380" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.930876, 42.368315]
        }
    },
     
    {
        type: 'Feature',
        properties: {
            title: 'New York and Newark',
            description: 'Girls Who Code\'s first program was here in 2012!',
            'marker-color': '#eae374',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.0059, 40.7127837]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Seattle, WA',
            description: 'GWC is in Seattle for the second year!',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.332, 47.606]
        }
    },
    
     /*{
        type: 'Feature',
        properties: {
            title: 'Paris,France',
            description: 'I can\'t afford to live here',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [2.352222, 48.856614]
        }
    },*/
     
 /*    {
        type: 'Feature',
        properties: {
            title: 'Beijing, China',
            description: 'A winter Olympics will be here',
            'marker-color': '#00FF00',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [116.407395, 39.904211]
        }
    },
    
     {
        type: 'Feature',
        properties: {
            title: 'Paris, France',
            description: 'I can\'t afford to live here <br />-Colleen Masterson<br />',
            'marker-color': '#184027',
            'marker-size': 'large',
            'marker-symbol': 'rocket',
        },
        geometry: {
            type: 'Point',
            coordinates: [2.352222, 48.856614]
        }
    },
    
      {
        type: 'Feature',
        properties: {
            title: 'NASA',
            description: 'Where going on a trip... <br />-The Little Einsteins<br />',
            'marker-color': '#18cff7',
            'marker-size': 'large',
            'marker-symbol': 'rocket',
        },
        geometry: {
            type: 'Point',
            coordinates: [-116.766661, 35.246533]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Saint Petersburg, Russia',
            description: 'Winter is Coming',
            'marker-color': '#2e00ff',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [30.335099, 59.934280]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Sydney, Australia',
            description: 'Where not to find Sydney',
            'marker-color': '#4f1d6e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [151.206990, -33.867487]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Greenland',
            description: 'Find Anya here <img src="http://proof.nationalgeographic.com/files/2015/02/150216-fredericks-01.jpg" class="popupimage" /> ',
            'marker-color': '#ffffff',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-42.604303, 71.706936]
        }
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'Miami, Florida',
            description: 'I hope all that sun doesn\'t melt the computers',
            'marker-color': '#7ec9b1',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-80.19, 25.76]
        }
    },
    
    /*    {
        type: 'Feature',
        properties: {
            title: 'Los Angeles',
            description: 'In Los Angeles, everyone is a star!<br />-Denzel Washington<br /><img src="http://i.imgur.com/pLQpP1H.png" class="popupimage" /> ',
            'marker-color': '#fc913a',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.24, 34.05]
        }
    }, */
    
/*    {
        type: 'Feature',
        properties: {
            title: 'Boston, MA',
            description: 'How bout them Yankees?',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-71.05, 42.36]
        }
    },
    

    ]
};

/*myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content from the GeoJSON property 'video'
    var popupContent =  feature.properties.video;

    // bind the popup to the marker http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
});*/


//myLayer.setGeoJSON(geojson); // Adds all of the markers to the map
/*
map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
*/
