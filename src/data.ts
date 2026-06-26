import { Product, BlogPost } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "glow-radiance-cream",
    name: "Glow Radiance Face Cream",
    description: "Deeply moisturizes and nourishes the skin to restore natural brightness and youthful suppleness.",
    benefits: [
      "Moisturizes dry layers for up to 24 hours.",
      "Improves elasticity and firmness.",
      "Gives a beautiful, radiant glow from within."
    ],
    price: 1499,
    category: "Skincare",
    skinType: "Suitable for dry and normal skin.",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Hyaluronic Acid", "Niacinamide", "Shea Butter", "Vitamin E"],
    rating: 4.8,
    reviewsCount: 142
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    description: "Reduces dark spots, evens skin tone, and protects against daily environmental stressors.",
    benefits: [
      "Fades pigmentation and dark spots effectively.",
      "Packed with antioxidants that fight free radicals.",
      "Stimulates natural skin vibrancy and texture."
    ],
    price: 1249,
    category: "Skincare",
    skinType: "Suitable for all skin types, especially uneven tone.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Pure Vitamin C (L-Ascorbic Acid)", "Ferulic Acid", "Hyaluronic Acid", "Aloe Base"],
    rating: 4.9,
    reviewsCount: 198
  },
  {
    id: "aloe-face-wash",
    name: "Aloe Vera Face Wash",
    description: "Removes dirt, makeup, and daily impurities gently without stripping away primary skin moisture.",
    benefits: [
      "Cleanses deep inside pores without tight sensation.",
      "Calms irritated, red, or sun-weathered skin.",
      "Provides instant freshness and water-locking hydration."
    ],
    price: 799,
    category: "Skincare",
    skinType: "Suitable for sensitive, combination, and oily skin.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Organic Aloe Vera Leaf Juice", "Green Tea Extract", "Glycerin", "Chamomile"],
    rating: 4.7,
    reviewsCount: 88
  },
  {
    id: "rose-lip-balm",
    name: "Rose Petal Lip Balm",
    description: "Provides long-lasting moisture, creating an ultra-soft protective barrier that keeps lips hydrated day and night.",
    benefits: [
      "Locks in hydration instantly for plumper lips.",
      "Subtle natural rose tint for a healthy look.",
      "Soothes dry, chapped, or peeling lips immediately."
    ],
    price: 549,
    category: "Skincare",
    skinType: "Suitable for cracked, dry lips.",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Rose Extract Oil", "Beeswax", "Jojoba Butter", "Almond Sweet Oil"],
    rating: 4.6,
    reviewsCount: 74
  },
  {
    id: "matte-foundation",
    name: "Matte Perfection Foundation",
    description: "Premium lightweight formula offering full buildable coverage with a flawless velvet finish.",
    benefits: [
      "Stays matte and gorgeous all day long.",
      "Feels completely weightless, like a second skin.",
      "Blurs pores, fine lines, and blemishes easily."
    ],
    price: 1849,
    category: "Makeup",
    skinType: "Suitable for normal, combination, and oily skin.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Silica Minerals", "Vitamin E", "Titanium Dioxide (SPF 15)", "Soothing Botanicals"],
    rating: 4.8,
    reviewsCount: 156
  },
  {
    id: "herbal-sunscreen",
    name: "Herbal Sunscreen SPF 50",
    description: "Broad-spectrum physical protection against UVA & UVB rays with a clean water-resistant formula.",
    benefits: [
      "High SPF-50 shield with zero white cast.",
      "Enriched with green tea and zinc oxide for organic healing.",
      "Water-resistant for 80 minutes of outdoor confidence."
    ],
    price: 1149,
    category: "Skincare",
    skinType: "Suitable for all skin types, including highly sensitive skin.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Zinc Oxide", "Green Tea Leaf Extract", "Coconut Oil Fractionated", "Calendula"],
    rating: 4.7,
    reviewsCount: 112
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "essential-skincare-tips",
    title: "5 Essential Skincare Tips for Healthy Skin",
    summary: "Healthy skin starts with cleansing, moisturizing, using sunscreen, staying hydrated, and maintaining a balanced diet.",
    category: "Skincare Advice",
    date: "June 14, 2026",
    readTime: "4 min read",
    author: "Elena Vasquez (Dermatologist)",
    image: "https://images.unsplash.com/photo-1590156546746-c22221b69a19?auto=format&fit=crop&w=600&q=80",
    content: `Achieving healthy, glowing skin is not a matter of overnight magic; it is a result of consistent, healthy habits. Our skin is our largest organ, and it deserves to be treated with care and premium ingredients. Here are five non-negotiable skincare practices recommended by dermatologist specialists to transform your skin:

1. **Gentle Double Cleansing**
Daily cleansing is essential to clear away natural oils, makeup, sweat, and pollutants that gather on your skin. A gentle cleanser like our Aloe Vera Face Wash unclogs pores without peeling away the oil barriers critical for moisturization.

2. **Hydration and Humectants**
Moisturizing is vital because it locks hydration into the upper skin layers. Applying a hyaluronic-rich moisturizer like our Glow Radiance Face Cream right after cleansing helps draw water molecules deep inside of your epidermis, creating a youthful plumpness.

3. **Broad-Spectrum Sun Protection**
Never skip sunscreen, even on gloomy overcast days. UV rays accelerate aging, produce hyperpigmentation, and break down vital collagen. Using a physical blocker such as our Herbal Sunscreen SPF 50 guards you from both UVA styling damage and UVB burns.

4. **Internal Hydration**
What goes inside your body matters as much as what goes on it. Drinking at least 8 glasses of pure water every single day flushes out toxins and ensures your skin cells stay nicely hydrated.

5. **A Balanced, Antioxidant-Rich Diet**
Supplement your skincare routine with nutrients. Foods rich in fatty acids, berries, leafy greens, and citrus promote collagen synthesis and fight free radicals from inside, giving you a natural glowing skin!`
  },
  {
    id: "vitamin-c-benefits",
    title: "Why Vitamin C Serum is Important for Your Skin",
    summary: "Vitamin C helps brighten the skin, reduce pigmentation, and protect against environmental damage.",
    category: "Skincare Ingredients",
    date: "June 10, 2026",
    readTime: "5 min read",
    author: "Dr. Marcus Thorne (Co-Founder)",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    content: `If there is one ingredient that skincare formulation chemists and dermatologists unanimously admire, it is **Vitamin C**. Celebrated for its remarkable anti-aging and brightening properties, this powerful antioxidant is an absolute game-changer for anyone's daily vanity table.

### The Power of Brightening
Our skin is regularly exposed to dark spot triggers, including sun exposure and post-acne inflammation. Vitamin C works by gently inhibiting tyrosinase, the enzyme responsible for melanin production. This helps slowly fade dark brown spots and evens out overall skin tone, revealing an immaculate complexion.

### Environmental Defense Force
Air pollutants, ozone, and ultraviolet radiation generate unstable molecules called free radicals. These damage skin tissue, causing premature lines. Vitamin C acts as a protective shield, neutralizing daily free radicals before they can degrade healthy skin collagen.

### Formulating the Perfect Routine
To get the absolute best out of Vitamin C:
*   Apply it in the morning to maximize its protective, sunscreen-boosting effects.
*   Apply our **Vitamin C Brightening Serum** directly to fresh, clean skin.
*   Follow up with a locking moisturizer and SPF 50 sunscreen to stay shielded from UV radiation all day long!`
  },
  {
    id: "choose-foundation-shade",
    title: "How to Choose the Right Foundation Shade",
    summary: "Selecting a foundation that matches your undertone ensures a natural and flawless makeup look.",
    category: "Makeup Tips",
    date: "May 28, 2026",
    readTime: "3 min read",
    author: "Mia Harper (Pro Makeup Artist)",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    content: `We've all been there: buying a foundation that looked like a perfect match under artificial store lights, only to find it looks mask-like or ash-gray in natural sunlight. Selecting your perfect match is not just about picking light or dark; it resides in understanding your unique undertone.

### Step 1: Decode Your Undertone
Your undertone is the color underneath your skin's surface. Unlike your overtone (which changes with sun exposure), your undertone remains constant:
*   **Cool Undertones:** Your skin has hints of pink, red, or blue. Silver jewelry looks striking on you, and your veins appear purple or blue.
*   **Warm Undertones:** Your skin has hints of gold, yellow, or peach. Gold jewelry compliments you beautifully, and your veins look olive-green.
*   **Neutral Undertones:** Your skin is a perfect balance of cool and warm. Both gold and silver look radiant on you, and your veins appear green-blue.

### Step 2: Jawline Swatching is King
Never test foundation shade colors on your hand or wrist! Your hands are usually darker or lighter than your face. Instead, apply three swatches of foundation along your lower jawline, blending down into your neck. The shade that completely "vanishes" into your skin is your perfect match.

Our **Matte Perfection Foundation** offers a lightweight, buildable mesh that self-adjusts seamlessly, preventing oxidization and dry-looking application lines.`
  },
  {
    id: "natural-ingredients-benefits",
    title: "Benefits of Using Natural Ingredients in Cosmetics",
    summary: "Natural ingredients provide nourishment while reducing the risk of irritation and harmful side effects.",
    category: "Philosophy",
    date: "May 15, 2026",
    readTime: "6 min read",
    author: "Sophia Sterling (Lead Herbal Chemist)",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    content: `Since ancient civilizations, humans have harnessed nature to beautify, heal, and moisturize their body. Modern science has allowed us to refine these botanical treasures, extracting pure, active ingredients to create clean cosmetics that work in tandem with our body's chemistry.

### Why Choose Natural Ingredients?
*   **High Biocompatibility:** Ingredients like Aloe Vera, Jojoba Oil, and Chamomile share natural fatty-acid structures and water content similar to our skin, ensuring higher absorption and faster results.
*   **Gentle on Sensitive Barriers:** Traditional synthetic cosmetics often contain sulfates, silicones, and heavy parabens. Natural ingredients decrease the chemical burden on delicate skin cells, vastly minimizing the risk of redness, rash breakout, or contact allergies.
*   **Rich in Synergy:** A single raw extract like Rose Petal contains complex networks of antioxidants, Vitamin C, and antibacterial oils that work in harmony. Synthetics often isolate single compounds, missing out on this natural synergy.

At Cosmetic Product, we promise that our formulas remain cruelty-free, skin-friendly, and eco-sustainable. We believe looking gorgeous should never demand compromising the beauty of our organic planet.`
  },
  {
    id: "morning-skincare-routine",
    title: "Daily Morning Skincare Routine",
    summary: "A proper morning skincare routine includes cleansing, applying serum, moisturizing, and using sunscreen for all-day protection.",
    category: "Skincare Guide",
    date: "April 29, 2026",
    readTime: "3 min read",
    author: "Elena Vasquez (Dermatologist)",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
    content: `While your evening skincare routine focuses on intensive recovery and exfoliation, your morning routine has one main mission: **Defend & Shield**. Preparing your skin correctly sets it up to survive humidity, sun, makeup layers, and air pollutants beautifully.

Follow this standard clinical morning guide for flawless, radiating skin:

### 1. The Fresh Start (Cleanse)
Start by removing overnight sweat and dead skin cells. Splash with lukewarm water or use a mild herbal face wash like our **Aloe Vera Face Wash** to purify without dehydrating your moisture mantle.

### 2. Spotless Energy (Serum)
While skin is slightly damp, apply 3-4 drops of your target active serum. Our **Vitamin C Brightening Serum** is perfect here, loading your skin with shielding antioxidants to resist ozone degradation and UV damage.

### 3. Deep Hydration (Moisturizer)
Lock the botanical goodness in. Apply a dime-sized amount of **Glow Radiance Face Cream** in circular, upward motions. This seals deep hydration and creates a smooth velvety canvas for makeup application.

### 4. Solar Shield (Sunscreen)
This is the absolute most critical step of any routine! Apply our physical **Herbal Sunscreen SPF 50** generously 15 minutes before leaving home. It guards your fresh, active skin cell layers from UV damage, stopping skin aging in its tracks.`
  }
];
