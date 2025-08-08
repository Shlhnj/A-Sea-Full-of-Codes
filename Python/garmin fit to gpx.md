
```python

!pip install fitparse gpxpy

import zipfile
import fitparse
import gpxpy
import gpxpy.gpx
import os

def fit_contains_gps_data(fit_file_path):
    """Check if the FIT file contains GPS data (latitude and longitude fields)."""
    fitfile = fitparse.FitFile(fit_file_path)
    for record in fitfile.get_messages("record"):
        fields = {data.name for data in record}
        # Check if both latitude and longitude are present in the record fields
        if 'position_lat' in fields and 'position_long' in fields:
            return True
    return False

def fit_to_gpx(fit_file_path, gpx_file_path):
    """Convert FIT file to GPX format if it contains GPS data."""
    fitfile = fitparse.FitFile(fit_file_path)

    # Create a new GPX object
    gpx = gpxpy.gpx.GPX()
    gpx_track = gpxpy.gpx.GPXTrack()
    gpx.tracks.append(gpx_track)
    gpx_segment = gpxpy.gpx.GPXTrackSegment()
    gpx_track.segments.append(gpx_segment)

    # Iterate over the FIT file messages to find GPS data
    for record in fitfile.get_messages("record"):
        latitude = None
        longitude = None
        elevation = None
        time = None

        for data in record:
            if data.name == "position_lat":
                latitude = data.value * (180 / 2**31)  # Convert from semicircles to degrees
            elif data.name == "position_long":
                longitude = data.value * (180 / 2**31)  # Convert from semicircles to degrees
            elif data.name == "altitude":
                elevation = data.value
            elif data.name == "timestamp":
                time = data.value

        # Add point to GPX segment if both latitude and longitude are present
        if latitude is not None and longitude is not None:
            gpx_segment.points.append(
                gpxpy.gpx.GPXTrackPoint(latitude, longitude, elevation=elevation, time=time)
            )

    # Save the GPX data to a file
    with open(gpx_file_path, "w") as gpx_file:
        gpx_file.write(gpx.to_xml())
    print(f"GPX file saved to {gpx_file_path}")

def process_zip(zip_file_path, output_folder):
    """Extract ZIP and process each FIT file, saving only those with GPS data."""
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extractall(output_folder)

    # Process each FIT file in the extracted folder
    for root, dirs, files in os.walk(output_folder):
        for file in files:
            if file.endswith('.fit'):
                fit_file_path = os.path.join(root, file)
                gpx_file_path = os.path.join(output_folder, f"{os.path.splitext(file)[0]}.gpx")

                # Check if the FIT file contains GPS data
                if fit_contains_gps_data(fit_file_path):
                    fit_to_gpx(fit_file_path, gpx_file_path)
                else:
                    print(f"Skipping {file}: no GPS data found.")

# Usage example
zip_file_path = "/content/UploadedFiles_0-_Part1.zip"
output_folder = "/content/"
process_zip(zip_file_path, output_folder)


# prompt: move all gpx file to new folder and fit file to new folder

import shutil
import os

def move_files_to_folders(directory):
  """
  Moves all .gpx files to a new folder named 'gpx_files' and all .fit files
  to a new folder named 'fit_files' within the specified directory.
  """

  gpx_folder = os.path.join(directory, 'gpx_files')
  fit_folder = os.path.join(directory, 'fit_files')

  os.makedirs(gpx_folder, exist_ok=True)
  os.makedirs(fit_folder, exist_ok=True)

  for filename in os.listdir(directory):
    file_path = os.path.join(directory, filename)

    if os.path.isfile(file_path):
      if filename.endswith('.gpx'):
        shutil.move(file_path, gpx_folder)
      elif filename.endswith('.fit'):
        shutil.move(file_path, fit_folder)


# Example usage:
directory_to_process = "/content/"
move_files_to_folders(directory_to_process)

```
