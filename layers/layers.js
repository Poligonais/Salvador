var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_readoPortoOrganizadodeSalvador_1 = new ol.format.GeoJSON();
var features_readoPortoOrganizadodeSalvador_1 = format_readoPortoOrganizadodeSalvador_1.readFeatures(json_readoPortoOrganizadodeSalvador_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readoPortoOrganizadodeSalvador_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readoPortoOrganizadodeSalvador_1.addFeatures(features_readoPortoOrganizadodeSalvador_1);
var lyr_readoPortoOrganizadodeSalvador_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readoPortoOrganizadodeSalvador_1, 
                style: style_readoPortoOrganizadodeSalvador_1,
                popuplayertitle: "Área do Porto Organizado de Salvador",
                interactive: true,
                title: '<img src="styles/legend/readoPortoOrganizadodeSalvador_1.png" /> Área do Porto Organizado de Salvador'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_readoPortoOrganizadodeSalvador_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_readoPortoOrganizadodeSalvador_1];
lyr_readoPortoOrganizadodeSalvador_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_readoPortoOrganizadodeSalvador_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_readoPortoOrganizadodeSalvador_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_readoPortoOrganizadodeSalvador_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});