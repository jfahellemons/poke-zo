import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    options: google.maps.MapOptions = {
        mapTypeId: 'hybrid',
        zoom: 13,
        scrollwheel: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        disableDoubleClickZoom: true,
        center: new google.maps.LatLng(51.827134965227074, 4.4139451133450605),
        minZoom: 8,
        // styles: this.getStyle(),
    };

    icon = {
        url: '../../../assets/icons/maps_pin.svg', // url
        scaledSize: new google.maps.Size(70, 70), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    markerOptions: google.maps.MarkerOptions = {
        position: new google.maps.LatLng(51.827134965227074, 4.4139451133450605),
        icon: this.icon,
    };


    constructor() {
    }

    ngOnInit() {
    }

    getStyle() {
        return [
            {
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                featureType: "all",
                elementType: "labels.text",
                stylers: [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    }
}
