var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSanJoseIturbide_3 = new ol.format.GeoJSON();
var features_CoordinacionSanJoseIturbide_3 = format_CoordinacionSanJoseIturbide_3.readFeatures(json_CoordinacionSanJoseIturbide_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanJoseIturbide_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanJoseIturbide_3.addFeatures(features_CoordinacionSanJoseIturbide_3);
var lyr_CoordinacionSanJoseIturbide_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanJoseIturbide_3, 
                style: style_CoordinacionSanJoseIturbide_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanJoseIturbide_3.png" /> Coordinacion San Jose Iturbide'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionTB1_5 = new ol.format.GeoJSON();
var features_MicroregionTB1_5 = format_MicroregionTB1_5.readFeatures(json_MicroregionTB1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionTB1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionTB1_5.addFeatures(features_MicroregionTB1_5);
var lyr_MicroregionTB1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionTB1_5, 
                style: style_MicroregionTB1_5,
                interactive: false,
    title: 'Microregion TB1<br />\
    <img src="styles/legend/MicroregionTB1_5_0.png" /> 3 - 27 Personas<br />\
    <img src="styles/legend/MicroregionTB1_5_1.png" /> 27 - 73 Personas<br />\
    <img src="styles/legend/MicroregionTB1_5_2.png" /> 73 - 154 Personas<br />\
    <img src="styles/legend/MicroregionTB1_5_3.png" /> 154 - 303 Personas<br />\
    <img src="styles/legend/MicroregionTB1_5_4.png" /> 303 - 430 Personas<br />'
        });
var format_MicroregionSJI2_6 = new ol.format.GeoJSON();
var features_MicroregionSJI2_6 = format_MicroregionSJI2_6.readFeatures(json_MicroregionSJI2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSJI2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSJI2_6.addFeatures(features_MicroregionSJI2_6);
var lyr_MicroregionSJI2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSJI2_6, 
                style: style_MicroregionSJI2_6,
                interactive: false,
    title: 'Microregion SJI2<br />\
    <img src="styles/legend/MicroregionSJI2_6_0.png" /> 2 - 42 Personas<br />\
    <img src="styles/legend/MicroregionSJI2_6_1.png" /> 42 - 122 Personas<br />\
    <img src="styles/legend/MicroregionSJI2_6_2.png" /> 122 - 191 Personas<br />\
    <img src="styles/legend/MicroregionSJI2_6_3.png" /> 191 - 266 Personas<br />\
    <img src="styles/legend/MicroregionSJI2_6_4.png" /> 266 - 385 Personas<br />'
        });
var format_MicroregionSJI1_7 = new ol.format.GeoJSON();
var features_MicroregionSJI1_7 = format_MicroregionSJI1_7.readFeatures(json_MicroregionSJI1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSJI1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSJI1_7.addFeatures(features_MicroregionSJI1_7);
var lyr_MicroregionSJI1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSJI1_7, 
                style: style_MicroregionSJI1_7,
                interactive: false,
    title: 'Microregion SJI1<br />\
    <img src="styles/legend/MicroregionSJI1_7_0.png" /> 1 - 25 Personas<br />\
    <img src="styles/legend/MicroregionSJI1_7_1.png" /> 25 - 69 Personas<br />\
    <img src="styles/legend/MicroregionSJI1_7_2.png" /> 69 - 133 Personas<br />\
    <img src="styles/legend/MicroregionSJI1_7_3.png" /> 133 - 204 Personas<br />\
    <img src="styles/legend/MicroregionSJI1_7_4.png" /> 204 - 359 Personas<br />'
        });
var format_MicroregionDM1_8 = new ol.format.GeoJSON();
var features_MicroregionDM1_8 = format_MicroregionDM1_8.readFeatures(json_MicroregionDM1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDM1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDM1_8.addFeatures(features_MicroregionDM1_8);
var lyr_MicroregionDM1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDM1_8, 
                style: style_MicroregionDM1_8,
                interactive: false,
    title: 'Microregion DM1<br />\
    <img src="styles/legend/MicroregionDM1_8_0.png" /> 3 - 29 Personas<br />\
    <img src="styles/legend/MicroregionDM1_8_1.png" /> 29 - 78 Personas<br />\
    <img src="styles/legend/MicroregionDM1_8_2.png" /> 78 - 127 Personas<br />\
    <img src="styles/legend/MicroregionDM1_8_3.png" /> 127 - 183 Personas<br />\
    <img src="styles/legend/MicroregionDM1_8_4.png" /> 183 - 270 Personas<br />'
        });
var format_CoordinacionSanJoseIturbide_9 = new ol.format.GeoJSON();
var features_CoordinacionSanJoseIturbide_9 = format_CoordinacionSanJoseIturbide_9.readFeatures(json_CoordinacionSanJoseIturbide_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanJoseIturbide_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanJoseIturbide_9.addFeatures(features_CoordinacionSanJoseIturbide_9);
var lyr_CoordinacionSanJoseIturbide_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanJoseIturbide_9, 
                style: style_CoordinacionSanJoseIturbide_9,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSanJoseIturbide_9.png" /> Coordinacion San Jose Iturbide'
            });
var group_CoordinacionSanJoseIturbideRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionTB1_5,lyr_MicroregionSJI2_6,lyr_MicroregionSJI1_7,lyr_MicroregionDM1_8,],
                                title: "Coordinacion San Jose Iturbide Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSanJoseIturbide_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSanJoseIturbide_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionTB1_5.setVisible(true);lyr_MicroregionSJI2_6.setVisible(true);lyr_MicroregionSJI1_7.setVisible(true);lyr_MicroregionDM1_8.setVisible(true);lyr_CoordinacionSanJoseIturbide_9.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSanJoseIturbideRezago,lyr_CoordinacionSanJoseIturbide_9];
lyr_CoordinacionSanJoseIturbide_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionTB1_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSJI2_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSJI1_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionDM1_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanJoseIturbide_9.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSanJoseIturbide_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionTB1_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSJI2_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSJI1_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionDM1_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanJoseIturbide_9.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSanJoseIturbide_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionTB1_5.set('fieldLabels', {});
lyr_MicroregionSJI2_6.set('fieldLabels', {});
lyr_MicroregionSJI1_7.set('fieldLabels', {});
lyr_MicroregionDM1_8.set('fieldLabels', {});
lyr_CoordinacionSanJoseIturbide_9.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSanJoseIturbide_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});