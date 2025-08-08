# prompt: remove background of this image, then export to png ("/content/foto_sunglasses.jpeg")

!pip install rembg # for library
!pip install "rembg[cli]" # for library + cli
!pip install onnxruntime

from rembg import remove
from PIL import Image
import io

input_path = "/content/a.jpg"
output_path = "/content/a_no_bg.png"

with open(input_path, 'rb') as i:
    with open(output_path, 'wb') as o:
        input_data = i.read()
        output_data = remove(input_data)
        o.write(output_data)
