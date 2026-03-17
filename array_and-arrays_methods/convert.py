import os
from PIL import Image
import io

folder = r"C:\Users\kinya\Desktop\Sketchline_build\public"
output_folder = r"C:\Users\kinya\Desktop\Sketchline_build\public\New folder"

os.makedirs(output_folder, exist_ok=True)

MAX_WIDTH = 1400
TARGET_SIZE = 200 * 1024  # 200 KB

for file in os.listdir(folder):

    if file.lower().endswith((".jpg", ".jpeg", ".png")):

        path = os.path.join(folder, file)

        img = Image.open(path)
        width, height = img.size

        # Resize large images
        if width > MAX_WIDTH:
            ratio = MAX_WIDTH / width
            new_height = int(height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.LANCZOS)

        img = img.convert("RGB")

        name = os.path.splitext(file)[0]
        output_path = os.path.join(output_folder, f"{name}.webp")

        quality = 90

        while quality > 10:

            buffer = io.BytesIO()
            img.save(buffer, "WEBP", quality=quality, method=6)

            size = buffer.tell()

            if size <= TARGET_SIZE:
                with open(output_path, "wb") as f:
                    f.write(buffer.getvalue())
                break

            quality -= 5

        print(f"{file} → {name}.webp | quality={quality} | size={round(size/1024)}KB")
