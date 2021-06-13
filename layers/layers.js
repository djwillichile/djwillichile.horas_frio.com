var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            //'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            //'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.650000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Horasfro2090_2 = new ol.format.GeoJSON();
var features_Horasfro2090_2 = format_Horasfro2090_2.readFeatures(json_Horasfro2090_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horasfro2090_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horasfro2090_2.addFeatures(features_Horasfro2090_2);
var lyr_Horasfro2090_2 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_Horasfro2090_2, 
                style: style_Horasfro2090_2,
                interactive: true,
    title: 'Horas frío 2090<br />\
    <img src="styles/legend/Horasfro2090_2_0.png" /> <400<br />\
    <img src="styles/legend/Horasfro2090_2_1.png" /> 400 - 600<br />\
    <img src="styles/legend/Horasfro2090_2_2.png" /> 600 - 800<br />\
    <img src="styles/legend/Horasfro2090_2_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/Horasfro2090_2_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Horasfro2090_2_5.png" /> >1400<br />'
        });
var format_Horasfro2070_3 = new ol.format.GeoJSON();
var features_Horasfro2070_3 = format_Horasfro2070_3.readFeatures(json_Horasfro2070_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horasfro2070_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horasfro2070_3.addFeatures(features_Horasfro2070_3);
var lyr_Horasfro2070_3 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_Horasfro2070_3, 
                style: style_Horasfro2070_3,
                interactive: true,
    title: 'Horas frío 2070<br />\
    <img src="styles/legend/Horasfro2070_3_0.png" /> <400<br />\
    <img src="styles/legend/Horasfro2070_3_1.png" /> 400 - 600<br />\
    <img src="styles/legend/Horasfro2070_3_2.png" /> 600 - 800<br />\
    <img src="styles/legend/Horasfro2070_3_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/Horasfro2070_3_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Horasfro2070_3_5.png" /> >1400<br />'
        });
var format_Horasfro2050_4 = new ol.format.GeoJSON();
var features_Horasfro2050_4 = format_Horasfro2050_4.readFeatures(json_Horasfro2050_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horasfro2050_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horasfro2050_4.addFeatures(features_Horasfro2050_4);
var lyr_Horasfro2050_4 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_Horasfro2050_4, 
                style: style_Horasfro2050_4,
                interactive: true,
    title: 'Horas frío 2050<br />\
    <img src="styles/legend/Horasfro2050_4_0.png" /> <400<br />\
    <img src="styles/legend/Horasfro2050_4_1.png" /> 400 - 600<br />\
    <img src="styles/legend/Horasfro2050_4_2.png" /> 600 - 800<br />\
    <img src="styles/legend/Horasfro2050_4_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/Horasfro2050_4_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Horasfro2050_4_5.png" /> >1400<br />'
        });
var format_Horasfro2030_5 = new ol.format.GeoJSON();
var features_Horasfro2030_5 = format_Horasfro2030_5.readFeatures(json_Horasfro2030_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horasfro2030_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horasfro2030_5.addFeatures(features_Horasfro2030_5);
var lyr_Horasfro2030_5 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_Horasfro2030_5, 
                style: style_Horasfro2030_5,
                interactive: true,
    title: 'Horas frío 2030<br />\
    <img src="styles/legend/Horasfro2030_5_0.png" /> <400<br />\
    <img src="styles/legend/Horasfro2030_5_1.png" /> 400 - 600<br />\
    <img src="styles/legend/Horasfro2030_5_2.png" /> 600 - 800<br />\
    <img src="styles/legend/Horasfro2030_5_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/Horasfro2030_5_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Horasfro2030_5_5.png" /> >1400<br />'
        });
var format_Horasfroactual_6 = new ol.format.GeoJSON();
var features_Horasfroactual_6 = format_Horasfroactual_6.readFeatures(json_Horasfroactual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horasfroactual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horasfroactual_6.addFeatures(features_Horasfroactual_6);
var lyr_Horasfroactual_6 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_Horasfroactual_6, 
                style: style_Horasfroactual_6,
                interactive: true,
    title: 'Horas frío actual<br />\
    <img src="styles/legend/Horasfroactual_6_0.png" /> <400<br />\
    <img src="styles/legend/Horasfroactual_6_1.png" /> 400 - 600<br />\
    <img src="styles/legend/Horasfroactual_6_2.png" /> 600 - 800<br />\
    <img src="styles/legend/Horasfroactual_6_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/Horasfroactual_6_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Horasfroactual_6_5.png" /> >1400<br />'
        });
var format_Comuna_7 = new ol.format.GeoJSON();
var features_Comuna_7 = format_Comuna_7.readFeatures(json_Comuna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuna_7.addFeatures(features_Comuna_7);
var lyr_Comuna_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna_7, 
                style: style_Comuna_7,
                interactive: true,
                //title: '<img src="styles/legend/Comuna_7.png" /> Comuna'
            });
var format_Regin_8 = new ol.format.GeoJSON();
var features_Regin_8 = format_Regin_8.readFeatures(json_Regin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regin_8.addFeatures(features_Regin_8);
var lyr_Regin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regin_8, 
                style: style_Regin_8,
                interactive: true,
                //title: '<img src="styles/legend/Regin_8.png" /> Región'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Horasfro2090_2.setVisible(false);lyr_Horasfro2070_3.setVisible(false);lyr_Horasfro2050_4.setVisible(false);lyr_Horasfro2030_5.setVisible(false);lyr_Horasfroactual_6.setVisible(true);lyr_Comuna_7.setVisible(true);lyr_Regin_8.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OSMStandard_1,lyr_Horasfro2090_2,lyr_Horasfro2070_3,lyr_Horasfro2050_4,lyr_Horasfro2030_5,lyr_Horasfroactual_6,lyr_Comuna_7,lyr_Regin_8];
lyr_Horasfro2090_2.set('fieldAliases', {'Actual': 'Horas frío actual', '2030': 'Horas frío 2030', '2050': 'Horas frío 2050', '2070': 'Horas frío 2070', '2090': 'Horas frío 2090', });
lyr_Horasfro2070_3.set('fieldAliases', {'Actual': 'Horas frío actual', '2030': 'Horas frío 2030', '2050': 'Horas frío 2050', '2070': 'Horas frío 2070', '2090': 'Horas frío 2090', });
lyr_Horasfro2050_4.set('fieldAliases', {'Actual': 'Horas frío actual', '2030': 'Horas frío 2030', '2050': 'Horas frío 2050', '2070': 'Horas frío 2070', '2090': 'Horas frío 2090', });
lyr_Horasfro2030_5.set('fieldAliases', {'Actual': 'Horas frío actual', '2030': 'Horas frío 2030', '2050': 'Horas frío 2050', '2070': 'Horas frío 2070', '2090': 'Horas frío 2090', });
lyr_Horasfroactual_6.set('fieldAliases', {'Actual': 'Horas frío actual', '2030': 'Horas frío 2030', '2050': 'Horas frío 2050', '2070': 'Horas frío 2070', '2090': 'Horas frío 2090', });
lyr_Comuna_7.set('fieldAliases', {'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_Regin_8.set('fieldAliases', {'DESC_REGIO': 'Región', });
lyr_Horasfro2090_2.set('fieldImages', {'Actual': 'Range', '2030': 'Range', '2050': 'Range', '2070': 'Range', '2090': 'Range', });
lyr_Horasfro2070_3.set('fieldImages', {'Actual': 'Range', '2030': 'Range', '2050': 'Range', '2070': 'Range', '2090': 'Range', });
lyr_Horasfro2050_4.set('fieldImages', {'Actual': 'Range', '2030': 'Range', '2050': 'Range', '2070': 'Range', '2090': 'Range', });
lyr_Horasfro2030_5.set('fieldImages', {'Actual': 'Range', '2030': 'Range', '2050': 'Range', '2070': 'Range', '2090': 'Range', });
lyr_Horasfroactual_6.set('fieldImages', {'Actual': 'Range', '2030': 'Range', '2050': 'Range', '2070': 'Range', '2090': 'Range', });
lyr_Comuna_7.set('fieldImages', {'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_Regin_8.set('fieldImages', {'DESC_REGIO': 'TextEdit', });
lyr_Horasfro2090_2.set('fieldLabels', {'Actual': 'inline label', '2030': 'inline label', '2050': 'inline label', '2070': 'inline label', '2090': 'inline label', });
lyr_Horasfro2070_3.set('fieldLabels', {'Actual': 'inline label', '2030': 'inline label', '2050': 'inline label', '2070': 'inline label', '2090': 'inline label', });
lyr_Horasfro2050_4.set('fieldLabels', {'Actual': 'inline label', '2030': 'inline label', '2050': 'no label', '2070': 'inline label', '2090': 'inline label', });
lyr_Horasfro2030_5.set('fieldLabels', {'Actual': 'inline label', '2030': 'inline label', '2050': 'inline label', '2070': 'inline label', '2090': 'inline label', });
lyr_Horasfroactual_6.set('fieldLabels', {'Actual': 'inline label', '2030': 'inline label', '2050': 'inline label', '2070': 'inline label', '2090': 'inline label', });
lyr_Comuna_7.set('fieldLabels', {'Provincia': 'inline label', 'Comuna': 'inline label', });
lyr_Regin_8.set('fieldLabels', {'DESC_REGIO': 'inline label', });
lyr_Regin_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});