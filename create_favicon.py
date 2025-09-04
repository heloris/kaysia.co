from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    # Create a 64x64 image for high quality
    size = 64
    img = Image.new('RGBA', (size, size), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    # Try to use a system font, fallback to default
    try:
        font = ImageFont.truetype("arial.ttf", 28)
    except:
        try:
            font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 28)
        except:
            font = ImageFont.load_default()
    
    # Calculate text position
    text = "k."
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - 2
    
    # Draw shadow first
    shadow_color = (0, 0, 0, 30)
    draw.text((x + 1, y + 1), text, font=font, fill=shadow_color)
    
    # Draw main text with blue color (matching Kaysia primary color)
    text_color = (37, 99, 235, 255)  # #2563eb
    draw.text((x, y), text, font=font, fill=text_color)
    
    # Save as PNG
    img.save('favicon.png')
    print("Favicon created successfully!")

if __name__ == "__main__":
    create_favicon()