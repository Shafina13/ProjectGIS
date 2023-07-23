var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Survey_1 = new ol.format.GeoJSON();
var features_Survey_1 = format_Survey_1.readFeatures(json_Survey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_1.addFeatures(features_Survey_1);
var lyr_Survey_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Survey_1, 
                style: style_Survey_1,
                interactive: true,
                title: '<img src="styles/legend/Survey_1.png" /> Survey'
            });
var format_Perlisshapefile_2 = new ol.format.GeoJSON();
var features_Perlisshapefile_2 = format_Perlisshapefile_2.readFeatures(json_Perlisshapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perlisshapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perlisshapefile_2.addFeatures(features_Perlisshapefile_2);
var lyr_Perlisshapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perlisshapefile_2, 
                style: style_Perlisshapefile_2,
                interactive: true,
                title: '<img src="styles/legend/Perlisshapefile_2.png" /> Perlis shapefile'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Survey_1.setVisible(true);lyr_Perlisshapefile_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Survey_1,lyr_Perlisshapefile_2];
lyr_Survey_1.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'LOCATION ': 'LOCATION ', 'COORDINATE ': 'COORDINATE ', 'ELEVATION ': 'ELEVATION ', 'VIEW': 'VIEW', 'ABOUT': 'ABOUT', });
lyr_Perlisshapefile_2.set('fieldAliases', {'id': 'id', 'Boundary': 'Boundary', });
lyr_Survey_1.set('fieldImages', {'fid': 'Hidden', 'NAME': 'TextEdit', 'LOCATION ': 'TextEdit', 'COORDINATE ': 'TextEdit', 'ELEVATION ': 'TextEdit', 'VIEW': 'ExternalResource', 'ABOUT': 'TextEdit', });
lyr_Perlisshapefile_2.set('fieldImages', {'id': '', 'Boundary': '', });
lyr_Survey_1.set('fieldLabels', {'NAME': 'inline label', 'LOCATION ': 'inline label', 'COORDINATE ': 'inline label', 'ELEVATION ': 'inline label', 'VIEW': 'inline label', 'ABOUT': 'inline label', });
lyr_Perlisshapefile_2.set('fieldLabels', {'id': 'no label', 'Boundary': 'no label', });
lyr_Perlisshapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});