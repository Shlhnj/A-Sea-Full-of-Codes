```python
#install earth engine
import ee

# Trigger the authentication flow.
ee.Authenticate()

# Initialize the library.
ee.Initialize(project='ee-shulhanj')

# Print the list of Earth Engine assets
print(ee.data.getAssetRoots())


#Assetlist
asset_list = ee.data.getAssetRoots()

print("Earth Engine Assets:")
for asset in asset_list:
  print(f"  ID: {asset['id']}")
  print(f"  Type: {asset['type']}")

#install library
%pip install geemap

#add map
Map = geemap.Map()
Map.add_basemap('SATELLITE')
asset_id = 'projects/ee-shulhanj/assets/20250807_betahwalang_sqbounds'
sq_bounds = ee.FeatureCollection(asset_id)

Map.addLayer(sq_bounds, {}, 'Betahwalang Square Bounds')
Map.centerObject(sq_bounds, 13)

Map

#set date
start_date = '2025-04-01'
end_date = '2025-04-30'

sentinel2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
hls_l30 = ee.ImageCollection('NASA/HLS/HLSL30/v002')
hls_s30 = ee.ImageCollection('NASA/HLS/HLSS30/v002')

sentinel2_filtered = sentinel2.filterDate(start_date, end_date)
hls_l30_filtered = hls_l30.filterDate(start_date, end_date)
hls_s30_filtered = hls_s30.filterDate(start_date, end_date)

latest_sentinel2 = sentinel2_filtered.sort('system:time_start', False).first()
latest_hls_l30 = hls_l30_filtered.sort('system:time_start', False).first()
latest_hls_s30 = hls_s30_filtered.sort('system:time_start', False).first()


aoi = sq_bounds


sentinel2_filtered_bands = sentinel2.filterDate(start_date, end_date).filterBounds(aoi).select(['B2', 'B3', 'B4', 'B8','B11','B12'])
hls_l30_filtered_bands = hls_l30.filterDate(start_date, end_date).filterBounds(aoi).select(['B2', 'B3', 'B4', 'B5','B6','B7'])
hls_s30_filtered_bands = hls_s30.filterDate(start_date, end_date).filterBounds(aoi).select(['B2', 'B3', 'B4', 'B8','B11','B12'])



sentinel2_filtered_bands = sentinel2_filtered_bands.select(
    ['B2', 'B3', 'B4', 'B8','B11','B12'],
    ['S2_B2', 'S2_B3', 'S2_B4', 'S2_B8','S2_B11','S2_B12']
)

hls_l30_filtered_bands = hls_l30_filtered_bands.select(
    ['B2', 'B3', 'B4', 'B5','B6','B7'],
    ['L30_B2', 'L30_B3', 'L30_B4', 'L30_B5','L30_B6','L30_B7']
)

hls_s30_filtered_bands = hls_s30_filtered_bands.select(
    ['B2', 'B3', 'B4', 'B8','B11','B12'],
    ['S30_B2', 'S30_B3', 'S30_B4', 'S30_B8','S30_B11','S30_B12']
)

# Define the number of sample points
num_sample_points = 5000

# Generate random sample points within the AOI using the correct method and arguments
sample_points = stacked_image.sample(
    region=aoi,
    scale=10,
    numPixels=num_sample_points,
    seed=0,
    geometries=True
)

latest_sentinel2_bands = sentinel2_filtered_bands.first()
latest_hls_l30_bands = hls_l30_filtered_bands.first()
latest_hls_s30_bands = hls_s30_filtered_bands.first()

stacked_image = ee.Image.cat([latest_sentinel2_bands, latest_hls_l30_bands, latest_hls_s30_bands])

correlation_matrix = sample_points.reduceColumns(
    reducer=ee.Reducer.spearmansCorrelation(),
    selectors=stacked_image.bandNames()
)


import pandas as pd

# Get the sampled data as a list of dictionaries
sampled_data = sample_points.getInfo()['features']

# Extract the band values into a list of dictionaries suitable for DataFrame
data_for_df = [feature['properties'] for feature in sampled_data]

# Create a pandas DataFrame
sampled_df = pd.DataFrame(data_for_df)

# Calculate the correlation matrix using pandas
correlation_matrix_df = sampled_df.corr(method='pearson') # Or 'spearman', 'kendall'

print("Correlation Matrix (Pandas):")
display(correlation_matrix_df)

import seaborn as sns
import matplotlib.pyplot as plt

# Set the figure size
plt.figure(figsize=(10, 8))

# Create a heatmap using seaborn
sns.heatmap(correlation_matrix_df, annot=True, cmap='coolwarm', fmt=".2f")

# Set the title of the heatmap
plt.title('Correlation Matrix of Sentinel-2, HLS L30, and HLS S30 Bands')

# Display the heatmap
plt.show()

correlation_matrix_df.to_csv('pandas_correlation_matrix.csv')
print("Pandas correlation matrix saved to 'pandas_correlation_matrix.csv'")
```
