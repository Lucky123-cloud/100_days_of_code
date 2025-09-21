# qrcodegen.py
# Generates a premium-looking QR code for: https://blueoceancleaning.co.ke/

from PIL import Image, ImageDraw, ImageFilter, ImageFont
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import CircleModuleDrawer
from qrcode.image.styles.colormasks import RadialGradiantColorMask  # note spelling 'Gradiant' is correct

URL = "https://blueoceancleaning.co.ke/"
OUTFILE = "blueocean_stylish_qr.png"

# --- Canvas settings ---
CANVAS = (1200, 1200)          # final export size
CARD_RADIUS = 96               # rounded card radius
MARGIN = 90                    # inner margin around the QR
SHADOW_BLUR = 48
CARD_INSET = 60                 # space from canvas edge to card

# --- Colors ---
CENTER = (0, 145, 255)          # bright azure
EDGE   = (3, 20, 45)            # deep navy
CANVAS_BG = (240, 246, 252)     # very light blue-gray
CARD_BG = (255, 255, 255)       # white card
SHADOW = (0, 0, 0, 90)          # shadow alpha

# --- 1) Make the styled QR as RGBA with circle modules & radial gradient ---
qr = qrcode.QRCode(
    version=None,  # let it auto-size
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # strong for logo/badge
    box_size=18,   # dot size; affects final QR size
    border=1       # minimal border; we'll add our own spacing
)
qr.add_data(URL)
qr.make(fit=True)

qr_img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=CircleModuleDrawer(),
    color_mask=RadialGradiantColorMask(
        center_color=CENTER,
        edge_color=EDGE
    ),
).convert("RGBA")

# --- 2) Build a soft background: card + drop shadow ---
W, H = CANVAS
canvas = Image.new("RGBA", CANVAS, CANVAS_BG + (255,))

# Card rectangle
card = Image.new("RGBA", (W - 2 * CARD_INSET, H - 2 * CARD_INSET), (0, 0, 0, 0))
card_draw = ImageDraw.Draw(card)
# Rounded white card
card_draw.rounded_rectangle(
    [(0, 0), (card.width, card.height)],
    radius=CARD_RADIUS,
    fill=CARD_BG
)

# Shadow layer
shadow = Image.new("RGBA", (card.width, card.height), (0, 0, 0, 0))
shadow_draw = ImageDraw.Draw(shadow)
shadow_draw.rounded_rectangle(
    [(0, 0), (shadow.width, shadow.height)],
    radius=CARD_RADIUS,
    fill=SHADOW
)
shadow = shadow.filter(ImageFilter.GaussianBlur(SHADOW_BLUR))

# Paste shadow and card on canvas
card_pos = (CARD_INSET, CARD_INSET)
canvas.alpha_composite(shadow, (card_pos[0] + 12, card_pos[1] + 18))  # slight offset for depth
canvas.alpha_composite(card, card_pos)

# --- 3) Resize QR to fit nicely inside the card with margin ---
available_w = card.width - 2 * MARGIN
available_h = card.height - 2 * MARGIN
target_side = min(available_w, available_h)
qr_img = qr_img.resize((target_side, target_side), Image.LANCZOS)

# Position QR centered on the card
qr_pos = (card_pos[0] + (card.width - target_side) // 2,
          card_pos[1] + (card.height - target_side) // 2)
canvas.alpha_composite(qr_img, qr_pos)

# --- 4) Add a circular center badge (with "BO") ---
badge_d = int(target_side * 0.22)  # badge diameter relative to QR size
badge = Image.new("RGBA", (badge_d, badge_d), (0, 0, 0, 0))
bd = ImageDraw.Draw(badge)
bd.ellipse([(0, 0), (badge_d, badge_d)], fill=(255, 255, 255, 235))

# Thin ring
ring_w = max(2, badge_d // 28)
bd.ellipse([(ring_w, ring_w), (badge_d - ring_w, badge_d - ring_w)],
           outline=CENTER, width=ring_w)

# Text "BO"
try:
    font = ImageFont.truetype("arial.ttf", size=int(badge_d * 0.42))
except:
    font = ImageFont.load_default()

text = "BO"
bbox = bd.textbbox((0, 0), text, font=font)   # Pillow ≥10 safe
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
tx = (badge_d - tw) // 2
ty = (badge_d - th) // 2
bd.text((tx, ty), text, font=font, fill=EDGE)

# Position badge in the center of the QR
badge_pos = (qr_pos[0] + (target_side - badge_d) // 2,
             qr_pos[1] + (target_side - badge_d) // 2)
canvas.alpha_composite(badge, badge_pos)

# --- 5) Export ---
canvas.convert("RGB").save(OUTFILE, "PNG", optimize=True)
print(f"✅ Saved {OUTFILE}")
