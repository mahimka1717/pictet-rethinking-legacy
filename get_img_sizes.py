import os
from PIL import Image

# Папка с изображениями
img_dir = "public/images"
# Список нужных файлов
img_files = [f"ill-{i}.png" for i in range(1, 5)]

for fname in img_files:
    path = os.path.join(img_dir, fname)
    if os.path.exists(path):
        with Image.open(path) as img:
            w, h = img.size
            print(f"{fname}: {w//2}px x {h//2}px")
    else:
        print(f"{fname} not found")
