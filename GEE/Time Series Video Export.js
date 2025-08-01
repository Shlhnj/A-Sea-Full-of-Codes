/**
 * Function to mask clouds using the Sentinel-2 QA band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
 
 
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 // Function to process image: cloud masking, NDVI, NDWI, and visualization
function processImage(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Mask clouds and cirrus
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
              .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  // Apply cloud mask
  var maskedImage = image.updateMask(mask);

  // Compute NDVI: (NIR - Red) / (NIR + Red)
  var ndvi = maskedImage.normalizedDifference(['B8', 'B4']).rename('NDVI');

  // Compute NDWI: (Green - NIR) / (Green + NIR)
  var ndwi = maskedImage.normalizedDifference(['B3', 'B8']).rename('NDWI');

  // Mask NDVI where NDWI < 0.4
  var ndwiMask = ndwi.lte(0);
  var maskedNdvi = ndvi.updateMask(ndwiMask);

  // Create visualization layers
  var ndviRGB = maskedNdvi.visualize({
    min: 0.2,
    max: 0.8,
    palette: ['red', 'yellow', 'green']
  });

  var ndwiRGB = ndwi.visualize({
    min: 0.0,
    max: 0.4,
    palette: ['cyan', 'blue']
  });

  // Combine NDVI and NDWI into a mosaic
  return ee.ImageCollection([ndwiRGB, ndviRGB]).mosaic();
}

// Define a circular region of interest (ROI)
var roi = ee.Geometry.Point([117.4331, -0.6315]).buffer(40000); // 20 km radius

// Load Sentinel-2 SR dataset
var dataset = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterBounds(roi)
                  .filterDate('2017-04-01', '2024-01-30')
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(processImage); // Process each image



// Prepare mosaic collection for video
var mosaicForVideo = dataset.map(function(image) {
  return image.clip(roi); // Clip to ROI
});

// Add a sample mosaic layer to the map for preview
Map.centerObject(roi);
Map.addLayer(dataset.median().clip(roi), {}, 'Mosaic (NDVI + NDWI)');

// Export mosaic time-lapse video
Export.video.toDrive({
  collection: mosaicForVideo,
  description: 'NDVI_NDWI_Mosaic_TimeLapse',
  dimensions: 720,
  framesPerSecond: 1,
  region: roi,
  //scale: 10 // Adjust scale for desired resolution
});

 
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 // Function to process Sentinel-1 image: masking and visualization
function processSentinel1(image) {
  // Mask out low-quality data based on the angle
  var angleMask = image.select('angle').gte(30).and(image.select('angle').lte(45)); // Limit angle range
  var maskedImage = image.updateMask(angleMask);

  // Extract VV and VH polarizations
  var vv = maskedImage.select('VV').rename('VV');
  var vh = maskedImage.select('VH').rename('VH');

  // Calculate the VV/VH ratio
  var ratio = vv.divide(vh).rename('VV_VH_Ratio');

  // Create a water mask using VV backscatter (adjust threshold as needed)
  var waterMask = vv.lt(-18); // Water generally has lower backscatter in VV

  //Mask land areas, leaving only water
  var waterOnly = vv.updateMask(waterMask);

  /* Visualize VV for land and water separately
  var waterRGB = waterOnly.visualize({
    min: -30,
    max: -15,
    palette: ['blue', 'cyan', 'white'] // Emphasize water
  });

  var landRGB = vv.visualize({
    min: -15,
    max: 0,
    palette: ['brown', 'green', 'yellow'] // Emphasize land
  });
  */
  
  // Neon color palette
  var neonPaletteWater = ['#0000FF', '#00FFFF', '#FFFFFF']; // Neon Blue, Cyan, and White for water
  var neonPaletteLand = ['#FF00FF', '#00FF00', '#FFFF00']; // Neon Magenta, Green, and Yellow for land

  // Visualize VV for water with neon colors
  var waterRGB = waterOnly.visualize({
    min: -30,
    max: -15,
    palette: neonPaletteWater // Neon palette for water
  });
  
  // Visualize VV for land with neon colors
  var landRGB = vv.visualize({
    min: -15,
    max: 0,
    palette: neonPaletteLand // Neon palette for land
  });



  // Combine water and land visualizations into a mosaic
  return ee.ImageCollection([landRGB, waterRGB]).mosaic();
}

// Define a circular region of interest (ROI)
var roi3 = ee.Geometry.Point([117.4331, -0.6315]).buffer(40000); // 20 km radius

// Load Sentinel-1 GRD dataset
var dataset = ee.ImageCollection('COPERNICUS/S1_GRD')
                  .filterBounds(roi3)
                  .filterDate('2015-01-01', '2024-01-30')
                  .filter(ee.Filter.eq('instrumentMode', 'IW')) // Interferometric Wide Swath mode
                  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
                  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                  .filter(ee.Filter.eq('orbitProperties_pass', 'ASCENDING')) // Ascending pass
                  .map(processSentinel1); // Apply processing function



// Prepare mosaic collection for video
var mosaicForVideo = dataset.map(function(image) {
  return image.clip(roi3); // Clip to ROI
});

// Add a sample mosaic layer to the map for preview
Map.centerObject(roi3);
Map.addLayer(dataset.median().clip(roi3), {}, 'Sentinel-1 Mosaic');

// Add layers to map
//Map.addLayer(waterRGB, {}, 'Water (Neon)');
//Map.addLayer(landRGB, {}, 'Land (Neon)');


// Export mosaic time-lapse video
Export.video.toDrive({
  collection: mosaicForVideo,
  description: 'Sentinel1_LandSea_Mosaic_TimeLapse',
  dimensions: 720,
  framesPerSecond: 1,
  region: roi3,
  //scale: 10 // Adjust scale for desired resolution
});





 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
