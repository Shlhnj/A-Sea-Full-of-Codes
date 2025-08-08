```python

# prompt: convert this to dd and negative lat updated
# Titik Koordinat Batas Zona Pemanfaatan Terbatas
# 1	110° 32' 38,611"	6° 47' 42,105"
# 2	110° 32' 50,151"	6° 47' 2,626"
# 3	110° 32' 50,360"	6° 47' 1,912"
# 4	110° 33' 54,453"	6° 47' 19,459"
# 5	110° 33' 54,450"	6° 47' 19,499"
# 6	110° 33' 53,101"	6° 47' 20,785"
# 7	110° 33' 52,085"	6° 47' 23,172"
# 8	110° 33' 51,443"	6° 47' 24,094"
# 9	110° 33' 50,732"	6° 47' 25,114"
# 10	110° 33' 50,357"	6° 47' 25,652"
# 11	110° 33' 48,982"	6° 47' 27,647"
# 12	110° 33' 48,809"	6° 47' 27,947"
# 13	110° 33' 47,527"	6° 47' 30,178"
# 14	110° 33' 46,842"	6° 47' 31,835"
# 15	110° 33' 46,703"	6° 47' 32,172"
# 16	110° 33' 46,366"	6° 47' 33,091"
# 17	110° 33' 46,082"	6° 47' 33,866"
# 18	110° 33' 46,046"	6° 47' 33,963"
# 19	110° 33' 45,426"	6° 47' 35,654"
# 20	110° 33' 45,391"	6° 47' 35,749"
# 21	110° 33' 44,651"	6° 47' 37,767"
# 22	110° 33' 44,509"	6° 47' 38,154"
# 23	110° 33' 44,366"	6° 47' 38,544"
# 24	110° 33' 44,339"	6° 47' 38,620"
# 25	110° 33' 44,324"	6° 47' 38,662"
# 26	110° 33' 43,927"	6° 47' 39,764"
# 27	110° 33' 43,848"	6° 47' 39,919"
# 28	110° 33' 43,782"	6° 47' 40,048"
# 29	110° 33' 43,744"	6° 47' 40,124"
# 30	110° 33' 43,741"	6° 47' 40,129"
# 31	110° 33' 43,740"	6° 47' 40,132"
# 32	110° 33' 43,666"	6° 47' 40,281"
# 33	110° 33' 43,466"	6° 47' 40,681"
# 34	110° 33' 43,392"	6° 47' 40,829"
# 35	110° 33' 43,313"	6° 47' 40,989"
# 36	110° 33' 43,189"	6° 47' 41,237"
# 37	110° 33' 41,174"	6° 47' 43,655"
# 38	110° 33' 41,155"	6° 47' 43,678"
# 39	110° 33' 41,117"	6° 47' 43,723"
# 40	110° 33' 40,992"	6° 47' 43,874"
# 41	110° 33' 39,301"	6° 47' 45,904"
# 42	110° 33' 39,048"	6° 47' 46,208"
# 43	110° 33' 38,531"	6° 47' 46,829"
# 44	110° 33' 38,160"	6° 47' 47,275"
# 45	110° 33' 38,160"	6° 47' 47,275"
# 46	110° 33' 38,160"	6° 47' 47,275"
# 47	110° 33' 38,118"	6° 47' 47,326"
# 48	110° 33' 37,447"	6° 47' 48,131"
# 49	110° 33' 36,243"	6° 47' 49,966"
# 50	110° 33' 35,910"	6° 47' 50,474"
# 51	110° 33' 35,890"	6° 47' 50,512"
# 52	110° 33' 35,825"	6° 47' 50,632"
# 53	110° 33' 35,471"	6° 47' 51,286"
# 54	110° 33' 35,032"	6° 47' 52,098"
# 55	110° 33' 34,742"	6° 47'

# The provided text contains duplicate data for Zona Inti and Zona Terbatas.
# We will use the first set of data provided for each zone.

# Updated Zona Inti DMS with correct number of coordinates for pairs
zona_inti_dms = [
    "110° 32' 38,611\"", "6° 47' 42,105\"",
    "110° 32' 50,151\"", "6° 47' 2,626\"",
    "110° 32' 50,360\"", "6° 47' 1,912\"",
    "110° 33' 54,453\"", "6° 47' 19,459\"",
    "110° 33' 54,450\"", "6° 47' 19,499\"",
    "110° 33' 53,101\"", "6° 47' 20,785\"",
    "110° 33' 52,085\"", "6° 47' 23,172\"",
    "110° 33' 51,443\"", "6° 47' 24,094\"",
    "110° 33' 50,732\"", "6° 47' 25.114\"", # Corrected comma to dot
    "110° 33' 50,357\"", "6° 47' 25,652\"",
    "110° 33' 48,982\"", "6° 47' 27,647\"",
    "110° 33' 48,809\"", "6° 47' 27,947\"",
    "110° 33' 47,527\"", "6° 47' 30,178\"",
    "110° 33' 46,842\"", "6° 47' 31,835\"",
    "110° 33' 46,703\"", "6° 47' 32,172\"",
    "110° 33' 46,366\"", "6° 47' 33,091\"",
    "110° 33' 46,082\"", "6° 47' 33,866\"",
    "110° 33' 46,046\"", "6° 47' 33,963\"",
    "110° 33' 45,426\"", "6° 47' 35,654\"",
    "110° 33' 45,391\"", "6° 47' 35,749\"",
    "110° 33' 44,651\"", "6° 47' 37,767\"",
    "110° 33' 44,509\"", "6° 47' 38,154\"",
    "110° 33' 44,366\"", "6° 47' 38,544\"",
    "110° 33' 44,339\"", "6° 47' 38,620\"",
    "110° 33' 44,324\"", "6° 47' 38,662\"",
    "110° 33' 43,927\"", "6° 47' 39,764\"",
    "110° 33' 43,848\"", "6° 47' 39,919\"",
    "110° 33' 43,782\"", "6° 47' 40,048\"",
    "110° 33' 43,744\"", "6° 47' 40,124\"",
    "110° 33' 43,741\"", "6° 47' 40,129\"",
    "110° 33' 43,740\"", "6° 47' 40,132\"",
    "110° 33' 43,666\"", "6° 47' 40,281\"",
    "110° 33' 43,466\"", "6° 47' 40,681\"",
    "110° 33' 43,392\"", "6° 47' 40,829\"",
    "110° 33' 43,313\"", "6° 47' 40,989\"",
    "110° 33' 43,189\"", "6° 47' 41,237\"",
    "110° 33' 41,174\"", "6° 47' 43,655\"",
    "110° 33' 41,155\"", "6° 47' 43,678\"",
    "110° 33' 41,117\"", "6° 47' 43,723\"",
    "110° 33' 40,992\"", "6° 47' 43,874\"",
    "110° 33' 39,301\"", "6° 47' 45,904\"",
    "110° 33' 39,048\"", "6° 47' 46,208\"",
    "110° 33' 38,531\"", "6° 47' 46,829\"",
    "110° 33' 38,160\"", "6° 47' 47,275\"",
    "110° 33' 38,160\"", "6° 47' 47,275\"",
    "110° 33' 38,160\"", "6° 47' 47,275\"",
    "110° 33' 38,118\"", "6° 47' 47,326\"",
    "110° 33' 37,447\"", "6° 47' 48,131\"",
    "110° 33' 36,243\"", "6° 47' 49,966\"",
    "110° 33' 35,910\"", "6° 47' 50,474\"",
    "110° 33' 35,890\"", "6° 47' 50,512\"",
    "110° 33' 35,825\"", "6° 47' 50,632\"",
    "110° 33' 35,471\"", "6° 47' 51,286\"",
    "110° 33' 35,032\"", "6° 47' 52.098\"", # Corrected comma to dot
    "110° 33' 34.742\"", "6° 47' 52.879\"", # Corrected comma to dot
    "110° 33' 34.618\"", "6° 47' 53.214\"", # Corrected comma to dot
    "110° 33' 34.507\"", "6° 47' 53.944\"", # Corrected comma to dot
    "110° 33' 34.456\"", "6° 47' 54.279\"", # Corrected comma to dot
    "110° 33' 34.398\"", "6° 47' 54.661\"", # Corrected comma to dot
    "110° 33' 34.399\"", "6° 47' 54.665\"", # Corrected comma to dot
    "110° 33' 34.431\"", "6° 47' 54.884\"", # Corrected comma to dot
    "110° 33' 34.635\"", "6° 47' 56.235\"", # Corrected comma to dot
    "110° 34' 6.352\"", "6° 47' 59.655\"", # Corrected comma to dot
    "110° 34' 6.442\"", "6° 48' 0.140\"",  # Corrected comma to dot
    "110° 34' 6.354\"", "6° 48' 0.143\"",  # Corrected comma to dot
    "110° 34' 6.000\"", "6° 48' 0.128\"",  # Corrected comma to dot
    "110° 34' 5.555\"", "6° 48' 0.154\"",  # Corrected comma to dot
    "110° 33' 12.688\"", "6° 47' 52.058\"",
    "110° 32' 49.556\"", "6° 47' 17.036\"",
    "110° 32' 53.195\"", "6° 47' 4.293\"",
    "110° 33' 7.106\"", "6° 47' 8.062\"",
    "110° 33' 2.995\"", "6° 47' 16.217\"",
    "110° 33' 2.956\"", "6° 47' 22.417\"",
    "110° 32' 53.369\"", "6° 47' 21.005\"",
    "110° 33' 21.100\"", "6° 47' 50.900\"",
    "110° 33' 30.672\"", "6° 47' 40.567\"",
    "110° 33' 39.860\"", "6° 47' 45.233\"",
    "110° 33' 34.635\"", "6° 47' 56.235\""
]

# Updated Zona Terbatas DMS with correct number of coordinates for pairs
zona_terbatas_dms = [
    "110° 32' 38,611\"", "6° 47' 42,105\"",
    "110° 32' 50,151\"", "6° 47' 2,626\"",
    "110° 32' 50,360\"", "6° 47' 1,912\"",
    "110° 33' 54,453\"", "6° 47' 19,459\"",
    "110° 33' 54,450\"", "6° 47' 19,499\"",
    "110° 33' 53,101\"", "6° 47' 20,785\"",
    "110° 33' 52,085\"", "6° 47' 23,172\"",
    "110° 33' 51,443\"", "6° 47' 24,094\"",
    "110° 33' 50,732\"", "6° 47' 25.114\"", # Corrected comma to dot
    "110° 33' 50,357\"", "6° 47' 25,652\"",
    "110° 33' 48,982\"", "6° 47' 27,647\"",
    "110° 33' 48,809\"", "6° 47' 27,947\"",
    "110° 33' 47,527\"", "6° 47' 30,178\"",
    "110° 33' 46,842\"", "6° 47' 31,835\"",
    "110° 33' 46,703\"", "6° 47' 32,172\"",
    "110° 33' 46,366\"", "6° 47' 33,091\"",
    "110° 33' 46,082\"", "6° 47' 33,866\"",
    "110° 33' 46,046\"", "6° 47' 33,963\"",
    "110° 33' 45,426\"", "6° 47' 35,654\"",
    "110° 33' 45,391\"", "6° 47' 35,749\"",
    "110° 33' 44,651\"", "6° 47' 37,767\"",
    "110° 33' 44,509\"", "6° 47' 38,154\"",
    "110° 33' 44,366\"", "6° 47' 38,544\"",
    "110° 33' 44,339\"", "6° 47' 38,620\"",
    "110° 33' 44,324\"", "6° 47' 38,662\"",
    "110° 33' 43,927\"", "6° 47' 39,764\"",
    "110° 33' 43,848\"", "6° 47' 39,919\"",
    "110° 33' 43,782\"", "6° 47' 40,048\"",
    "110° 33' 43,744\"", "6° 47' 40,124\"",
    "110° 33' 43,741\"", "6° 47' 40,129\"",
    "110° 33' 43,740\"", "6° 47' 40,132\"",
    "110° 33' 43,666\"", "6° 47' 40,281\"",
    "110° 33' 43.466\"", "6° 47' 40.681\"", # Corrected comma to dot
    "110° 33' 43.392\"", "6° 47' 40.829\"", # Corrected comma to dot
    "110° 33' 43.313\"", "6° 47' 40.989\"", # Corrected comma to dot
    "110° 33' 43.189\"", "6° 47' 41.237\"", # Corrected comma to dot
    "110° 33' 41.174\"", "6° 47' 43.655\"", # Corrected comma to dot
    "110° 33' 41.155\"", "6° 47' 43.678\"", # Corrected comma to dot
    "110° 33' 41.117\"", "6° 47' 43.723\"", # Corrected comma to dot
    "110° 33' 40.992\"", "6° 47' 43.874\"", # Corrected comma to dot
    "110° 33' 39.301\"", "6° 47' 45.904\"", # Corrected comma to dot
    "110° 33' 39.048\"", "6° 47' 46.208\"", # Corrected comma to dot
    "110° 33' 38.531\"", "6° 47' 46.829\"", # Corrected comma to dot
    "110° 33' 38.160\"", "6° 47' 47.275\"",
    "110° 33' 38.160\"", "6° 47' 47.275\"",
    "110° 33' 38.160\"", "6° 47' 47.275\"",
    "110° 33' 38.118\"", "6° 47' 47.326\"",
    "110° 33' 37.447\"", "6° 47' 48.131\"",
    "110° 33' 36.243\"", "6° 47' 49.966\"",
    "110° 33' 35.910\"", "6° 47' 50.474\"",
    "110° 33' 35.890\"", "6° 47' 50.512\"",
    "110° 33' 35.825\"", "6° 47' 50.632\"",
    "110° 33' 35.471\"", "6° 47' 51.286\"",
    "110° 33' 35.032\"", "6° 47' 52.098\"",
    "110° 33' 34.742\"", "6° 47' 52.879\"",
    "110° 33' 34.618\"", "6° 47' 53.214\"",
    "110° 33' 34.507\"", "6° 47' 53.944\"",
    "110° 33' 34.456\"", "6° 47' 54.279\"",
    "110° 33' 34.398\"", "6° 47' 54.661\"",
    "110° 33' 34.399\"", "6° 47' 54.665\"",
    "110° 33' 34.431\"", "6° 47' 54.884\"",
    "110° 33' 34.635\"", "6° 47' 56.235\"",
    "110° 34' 6.352\"", "6° 47' 59.655\"",
    "110° 34' 6.442\"", "6° 48' 0.140\"",
    "110° 34' 6.354\"", "6° 48' 0.143\"",
    "110° 34' 6.000\"", "6° 48' 0.128\"",
    "110° 34' 5.555\"", "6° 48' 0.154\"",
    "110° 33' 12.688\"", "6° 47' 52.058\"",
    "110° 32' 49.556\"", "6° 47' 17.036\"",
    "110° 32' 53.195\"", "6° 47' 4.293\"",
    "110° 33' 7.106\"", "6° 47' 8.062\"",
    "110° 33' 2.995\"", "6° 47' 16.217\"",
    "110° 33' 2.956\"", "6° 47' 22.417\"",
    "110° 32' 53.369\"", "6° 47' 21.005\"",
    "110° 33' 21.100\"", "6° 47' 50.900\"",
    "110° 33' 30.672\"", "6° 47' 40.567\"",
    "110° 33' 39.860\"", "6° 47' 45.233\"",
    "110° 33' 34.635\"", "6° 47' 56.235\""
]


def dms_to_dd_updated(dms_str):
    """Converts a DMS coordinate string to decimal degrees, handling commas as decimal points."""
    # Replace comma with dot for consistent float conversion
    dms_str = dms_str.replace(',', '.')
    parts = dms_str.replace('°', ' ').replace("'", ' ').replace('"', ' ').split()
    degrees = float(parts[0])
    minutes = float(parts[1])
    seconds = float(parts[2])
    return degrees + minutes/60 + seconds/3600

# Convert DMS to Decimal Degrees and make latitudes negative
zona_inti_dd = []
for i in range(0, len(zona_inti_dms), 2):
    lon_dd = dms_to_dd_updated(zona_inti_dms[i])
    lat_dd = -dms_to_dd_updated(zona_inti_dms[i+1]) # Make latitude negative
    zona_inti_dd.extend([lon_dd, lat_dd])

zona_terbatas_dd = []
for i in range(0, len(zona_terbatas_dms), 2):
    lon_dd = dms_to_dd_updated(zona_terbatas_dms[i])
    lat_dd = -dms_to_dd_updated(zona_terbatas_dms[i+1]) # Make latitude negative
    zona_terbatas_dd.extend([lon_dd, lat_dd])


print("Zona Inti (Decimal Degrees):")
print(zona_inti_dd)
print("\nZona Terbatas (Decimal Degrees):")
print(zona_terbatas_dd)

# Combine the decimal degree coordinates into pairs (longitude, latitude) and add an index
zona_inti_pairs_indexed = [(i+1, zona_inti_dd[i*2], zona_inti_dd[i*2+1]) for i in range(len(zona_inti_dd)//2)]
zona_terbatas_pairs_indexed = [(i+1, zona_terbatas_dd[i*2], zona_terbatas_dd[i*2+1]) for i in range(len(zona_terbatas_dd)//2)]

# Save to CSV files
with open('zona_inti_dd_updated.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Index', 'Longitude', 'Latitude']) # Write header with Index
    writer.writerows(zona_inti_pairs_indexed)

with open('zona_terbatas_dd_updated.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Index', 'Longitude', 'Latitude']) # Write header with Index
    writer.writerows(zona_terbatas_pairs_indexed)

print("\nDecimal degree coordinates with index saved to 'zona_inti_dd_updated.csv' and 'zona_terbatas_dd_updated.csv'")

# Recreate the coordinate pairs for GeoJSON and Folium (without index)
zona_inti_pairs = [(zona_inti_dd[i*2], zona_inti_dd[i*2+1]) for i in range(len(zona_inti_dd)//2)]
zona_terbatas_pairs = [(zona_terbatas_dd[i*2], zona_terbatas_dd[i*2+1]) for i in range(len(zona_terbatas_dd)//2)]

# Create GeoJSON Features for each zone
zona_inti_feature = create_geojson_feature(zona_inti_pairs, "Zona Inti")
zona_terbatas_feature = create_geojson_feature(zona_terbatas_pairs, "Zona Terbatas")

# Create a FeatureCollection
geojson_feature_collection = {
    "type": "FeatureCollection",
    "features": [zona_inti_feature, zona_terbatas_feature]
}

# Convert to JSON string
geojson_data = json.dumps(geojson_feature_collection, indent=2)

print("\nGeoJSON Data:")
print(geojson_data)

# Load the GeoJSON data into a GeoDataFrame
geojson_str = json.dumps(geojson_feature_collection)
geodata = gpd.GeoDataFrame.from_features(geojson_feature_collection["features"], crs="EPSG:4326")

# Save the GeoDataFrame to a shapefile
output_filename = "zones_updated.shp"
geodata.to_file(output_filename, driver='ESRI Shapefile')

print(f"\nShapefile '{output_filename}' created successfully.")

# Create a map centered around the approximate middle of the coordinates
# Using updated decimal degrees
all_lats = [pair[1] for pair in zona_inti_pairs + zona_terbatas_pairs]
all_lons = [pair[0] for pair in zona_inti_pairs + zona_terbatas_pairs]
center_lat = (min(all_lats) + max(all_lats)) / 2
center_lon = (min(all_lons) + max(all_lons)) / 2

m = folium.Map(location=[center_lat, center_lon], zoom_start=14)

# Add GeoJSON layers for each zone
folium.GeoJson(
    zona_inti_feature,
    name='Zona Inti',
    style_function=lambda feature: {
        'fillColor': 'blue',
        'color': 'blue',
        'weight': 2,
        'fillOpacity': 0.2
    }
).add_to(m)

folium.GeoJson(
    zona_terbatas_feature,
    name='Zona Terbatas',
    style_function=lambda feature: {
        'fillColor': 'red',
        'color': 'red',
        'weight': 2,
        'fillOpacity': 0.2
    }
).add_to(m)

# Add layer control to toggle layers
folium.LayerControl().add_to(m)

# Display the map
m

```
