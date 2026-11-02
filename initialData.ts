import { ServiceItem, CelebrationPackage, GalleryItem, FaqItem, BusinessInfo } from '../types';

export const initialBusinessInfo: BusinessInfo = {
  businessName: 'Sweet Creations',
  tagline: 'Cakes · Desserts · Mehendi · Party Hire',
  whatsappNumber: '+61400000000', // Configurable placeholder for owner approval
  email: 'hello@sweetcreationsstudio.com',
  serviceArea: 'Servicing Metropolitan & Surrounding Suburbs (Delivery & Setup Available)',
  instagramHandle: '@sweetcreations_official',
  facebookPage: 'SweetCreationsParty',
  leadNotice: 'Please allow 2–4 weeks notice for bespoke cakes & event hire. Enquiries are confirmed upon consultation.'
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-cakes',
    slug: 'custom-cakes',
    category: 'cakes',
    title: 'Custom Celebration Cakes',
    tagline: 'Artisanal tiered cakes handcrafted for your milestone moments',
    shortDescription: 'From intimate birthdays to majestic multi-tier wedding centrepieces, each cake is tailored to your flavour profile, guest count, and design vision.',
    fullDescription: 'Every celebration deserves a show-stopping centrepiece. At Sweet Creations, our bespoke cakes are designed with culinary artistry and visual balance. We work with smooth velvet swiss meringue buttercream, delicate sugar florals, gold foil leafing, and modern architectural textures. Each tier is baked fresh using premium ingredients to ensure an unforgettable taste experience.',
    image: '/src/assets/images/custom_cakes_showcase_1792550725256.jpg',
    features: [
      'Tailored serving guides (from 12 to 150+ guests)',
      'Single, two-tier, three-tier, and sculptural floating tiers',
      'Fresh floral crowns, dried botanical accents, or sugar blooms',
      'Hand-applied 24k edible gold leaf and textured palette detailing',
      'Dietary consideration options available on request'
    ],
    options: [
      {
        label: 'Popular Cake Flavours',
        items: [
          'Madagascan Vanilla Bean with Raspberry Coulis',
          'Rich Belgian Chocolate Truffle & Salted Caramel',
          'White Chocolate & Rosewater Infusion',
          'Spiced Cardamom & Pistachio Crème',
          'Zesty Lemon Curd & Elderflower',
          'Classic Red Velvet with Velvet Cream Cheese'
        ]
      },
      {
        label: 'Finishes & Techniques',
        items: [
          'Smooth Contemporary Buttercream',
          'Rustic Semi-Naked with Fresh Berries',
          'Textured Palette Knife Florals',
          'Subtle Blush Ombré Gradient',
          'Wafer Paper Botanical Sculptures'
        ]
      }
    ],
    specifications: [
      { label: 'Notice Period', value: 'Minimum 2 to 4 weeks recommended' },
      { label: 'Servings Available', value: 'Coffee or dessert serving sizes' },
      { label: 'Delivery', value: 'Specialist climate-controlled venue delivery available' }
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Pricing is customised per design complexity, tier count, and guest servings. Request a quote for an itemised proposal.'
  },
  {
    id: 'srv-desserts',
    slug: 'desserts-and-sweet-treats',
    category: 'desserts',
    title: 'Desserts & Sweet Treats',
    tagline: 'Delectable individual bites, dessert cups, and artisan gift boxes',
    shortDescription: 'Petite treats curated to complement your event theme, perfect for grazing tables, dessert spreads, and thoughtful guest favours.',
    fullDescription: 'Indulge your guests with a lavish assortment of handcrafted miniature desserts. We blend classic patisserie traditions with modern aesthetic styling, creating a harmonious palette of colours, textures, and delicate flavours that elevate any celebration table.',
    image: '/src/assets/images/dessert_table_spread_1792550726678.jpg',
    features: [
      'Artisan French macarons in bespoke event colour palettes',
      'Mini Belgian chocolate ganache & fruit curd tartlets',
      'Layered dessert shooter cups (Panna Cotta, Tiramisu, Mango Mousse)',
      'Gourmet cupcakes with delicate piping and floral toppers',
      'Individually boxed celebration treats and favour sets'
    ],
    options: [
      {
        label: 'Treat Selections',
        items: [
          'French Macarons (Raspberry, Salted Caramel, Pistachio, Rose)',
          'Miniature Fruit & Curd Tartlets with edible florals',
          'Bespoke Cakesicles & Chocolate Gems',
          'Delicate Meringue Kisses & Marshmallow Cubes',
          'Artisan Brownie & Blondie Bites'
        ]
      }
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Available in dozens and tailored party platters. Request a quote for quantity pricing.'
  },
  {
    id: 'srv-displays',
    slug: 'dessert-decorations-and-displays',
    category: 'displays',
    title: 'Dessert Displays & Styling',
    tagline: 'Elevate your desserts with tiered stands, vintage platters & floral styling',
    shortDescription: 'Complete dessert table presentation styling including elegant stands, gold pedestal platters, acrylic risers, and floral dressing.',
    fullDescription: 'A gorgeous dessert deserves an equally striking presentation. We provide curated dessert table styling, matching vintage pedestals, polished gold tiers, and acrylic risers with soft drapery and floral accents that transform your sweet treats into an artistic installation.',
    image: '/src/assets/images/dessert_table_spread_1792550726678.jpg',
    features: [
      'Multi-height antique gold and white ceramic cake stands',
      'Tiered macaron towers and crystal-cut platters',
      'Sleek clear acrylic plinths and dessert risers',
      'Coordinated table linen runners and floral table garlands',
      'Full delivery, on-site setup, and post-event collection'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Hire packages available standalone or alongside sweet orders.'
  },
  {
    id: 'srv-mehendi',
    slug: 'mehendi-art',
    category: 'mehendi',
    title: 'Bespoke Mehendi Art',
    tagline: 'Intricate bridal henna, party sittings & contemporary fusion designs',
    shortDescription: 'Hand-crafted bridal, festive, and celebration henna art using 100% natural organic henna paste for deep, rich, long-lasting stains.',
    fullDescription: 'Mehendi is a timeless art of celebration, love, and sacred memory. With gentle precision and artistic passion, we create intricate bridal henna suites, delicate modern wristbands, floral mandalas, and festive group sittings. We strictly formulate our henna paste using 100% natural, triple-sifted organic henna leaves and pure essential oils—never chemical dyes.',
    image: '/src/assets/images/bridal_mehendi_art_1792550727834.jpg',
    features: [
      'Bridal Henna Suites (Full arms, palms, backs & feet)',
      'Pre-wedding Mehendi Night group & guest party appointments',
      'Contemporary minimalist wrist cuffs and mandala palms',
      '100% organic, skin-safe henna paste with dark stain guarantee guidance',
      'Mobile studio appointments in the comfort of your home or venue'
    ],
    options: [
      {
        label: 'Booking Types',
        items: [
          'Full Bridal Package (Consultation + bespoke bridal application)',
          'Sangeet / Mehendi Night Hourly Group Booking',
          'Maternity Henna / Milestone Celebration Henna',
          'Private Individual Sitting'
        ]
      }
    ],
    specifications: [
      { label: 'Henna Quality', value: '100% Natural Organic Paste (No black henna or chemicals)' },
      { label: 'Bridal Booking', value: '4 to 8 weeks advance reservation advised' }
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Hourly rates and custom bridal packages. Request a quote with guest numbers and design scope.'
  },
  {
    id: 'srv-gifts',
    slug: 'gift-packs-and-goodie-bags',
    category: 'gifts',
    title: 'Gift Packs & Goodie Bags',
    tagline: 'Thoughtful curated sweet favours for weddings, baby showers & guests',
    shortDescription: 'Custom packaged sweet gift boxes, personalized ribbon favours, and celebration goodie bags designed to match your event theme.',
    fullDescription: 'Express gratitude to your guests with beautifully boxed artisan treats. From luxury macaron gift sleeves to personalised goodie bags with custom tags, ribbons, and wax seals, every favour is prepared with meticulous care.',
    image: '/src/assets/images/dessert_table_spread_1792550726678.jpg',
    features: [
      'Personalised favor boxes with custom foiled names and dates',
      'Single, double, and quad macaron luxury packaging',
      'Artisan cookies with custom stamped initials or messaging',
      'Children party celebration goodie bags with party themes',
      'Corporate thank-you packs and festive celebration gift boxes'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Minimum batch quantities apply. Customised quote provided based on contents.'
  },
  {
    id: 'srv-party-supplies',
    slug: 'party-needs-and-supplies',
    category: 'party-supplies',
    title: 'Party Needs & Supplies',
    tagline: 'Curated celebration accessories, tableware accents & themed styling essentials',
    shortDescription: 'Boutique party supplies, designer candles, decorative toppers, themed tableware, and bespoke celebration accessories.',
    fullDescription: 'Complete your party setup with carefully chosen accents. We supply premium celebration tableware, artisanal beeswax and taper candles, acrylic cake toppers, and coordinated party essentials that harmonize with your theme.',
    image: '/src/assets/images/event_backdrop_hire_1792550727932.jpg',
    features: [
      'Acrylic and wooden laser-cut cake toppers',
      'Premium designer party tableware and napkins',
      'Bespoke signage, acrylic welcome boards, and easel stands',
      'Milestone number candles and luxury sparklers'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Add onto your cake or hire booking for seamless coordination.'
  },
  {
    id: 'srv-hire',
    slug: 'tables-chairs-and-bouncy-castle-hire',
    category: 'hire',
    title: 'Tables, Chairs & Bouncy Castle Hire',
    tagline: 'Sturdy, clean party equipment hire for indoor and outdoor celebrations',
    shortDescription: 'Essential hire equipment including round and trestle tables, stylish event seating, and commercial-grade bouncy castles for kids celebrations.',
    fullDescription: 'Take the stress out of event planning with clean, reliable party hire equipment. We offer durable guest tables, elegant cross-back or white gladiator chairs, and child-safe bouncy castles. All equipment is sanitised between bookings, delivered on time, and installed following strict safety protocols.',
    image: '/src/assets/images/event_backdrop_hire_1792550727932.jpg',
    features: [
      'White Tiffany and French Bistro event chairs',
      'Trestle and round banquet dining tables',
      'Commercial-grade bouncy castle for children (safety compliant)',
      'Drop-off, professional setup, and post-event packdown',
      'Weather safety assessment and anchoring equipment included'
    ],
    specifications: [
      { label: 'Safety Guidelines', value: 'Bouncy castle requires level grass or secure surface & power outlet' },
      { label: 'Weather Policy', value: 'High winds (>35km/h) or heavy rain require indoor relocation or rescheduling' },
      { label: 'Cleanliness', value: 'Commercial sanitisation before and after every booking' }
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Hire rates depend on item quantities, delivery distance, and hire duration.'
  },
  {
    id: 'srv-backdrops',
    slug: 'backdrops-and-event-decorations',
    category: 'backdrops',
    title: 'Backdrops & Event Styling',
    tagline: 'Picture-perfect focal backdrops, floral arches & organic balloon installations',
    shortDescription: 'Custom event backdrops, shimmering walls, circular gold frames, and organic floral styling designed as your celebration photo focal point.',
    fullDescription: 'Create unforgettable photo moments with our signature backdrop styling. Whether you are hosting a whimsical baby shower, an elegant engagement party, or a vibrant birthday, our backdrops blend architectural arches, cascading florals, and balloon installations to match your aesthetic.',
    image: '/src/assets/images/event_backdrop_hire_1792550727932.jpg',
    features: [
      'Circular gold moongate arches & white sailboard panels',
      'Custom organic balloon garlands in matte, pastel & chrome finishes',
      'Faux silk and fresh botanical floral arrangements',
      'Neon lighting accents ("Better Together", "Happy Birthday", etc.)',
      'Custom vinyl lettering with celebrant names and milestone ages'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceNote: 'Customised according to backdrop dimensions, floral density, and balloon styling.'
  }
];

export const initialPackages: CelebrationPackage[] = [
  {
    id: 'pkg-intimate',
    title: 'The Intimate Elegance Suite',
    subtitle: 'Perfect for boutique birthdays, micro-weddings & anniversaries',
    description: 'A thoughtfully harmonised package combining an artisanal celebration cake, a curated assortment of miniature desserts, and delicate table presentation.',
    image: '/src/assets/images/custom_cakes_showcase_1792550725256.jpg',
    idealFor: '15 to 30 Guests',
    inclusions: [
      'Single or two-tier bespoke celebration cake (up to 30 dessert portions)',
      'Two dozen handcrafted French macarons in custom theme colours',
      'Two dozen mini chocolate ganache or fruit tartlets',
      'Rental of two antique gold cake stands and tiered platters',
      'Custom acrylic cake topper matching your milestone'
    ],
    optionalAddons: [
      'Bespoke favour boxes for each guest',
      'Fresh floral garland for the dessert table',
      'On-site delivery and styling setup'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceGuide: 'Custom Quote Available'
  },
  {
    id: 'pkg-bridal-bloom',
    title: 'The Bridal Bloom Mehendi & Cake Suite',
    subtitle: 'The ultimate signature combination for bridal ceremonies',
    description: 'Celebrate your pre-wedding festivities with our signature organic bridal henna experience alongside a show-stopping engagement cake and celebration desserts.',
    image: '/src/assets/images/bridal_mehendi_art_1792550727834.jpg',
    idealFor: 'Bridal Festivities & Sangeet Ceremonies',
    inclusions: [
      'Complete bespoke bridal mehendi application (elbows & feet)',
      '100% natural organic henna paste and post-care aftercare kit',
      '2-tier artisanal celebration cake with floral styling',
      'Three dozen dessert cups & macarons for family and guests',
      'Pre-wedding design consultation to align bridal motif with attire'
    ],
    optionalAddons: [
      'Additional hourly rate for guest & bridal party mehendi',
      'Specialist bridal seating cushion & backdrop draping'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceGuide: 'Custom Quote Available'
  },
  {
    id: 'pkg-celebration-gala',
    title: 'The Complete Celebration Experience',
    subtitle: 'Full-service celebration styling, backdrop, cake & hire',
    description: 'Sit back and enjoy your milestone while Sweet Creations brings your entire celebration to life—from photo backdrop to dessert table, tables, and seating.',
    image: '/src/assets/images/event_backdrop_hire_1792550727932.jpg',
    idealFor: '40 to 80+ Guests (Birthdays, Baby Showers, Engagements)',
    inclusions: [
      'Feature gold arch or sailboard backdrop with custom organic balloon garland',
      'Custom vinyl lettering signage with the celebrant’s name',
      'Two or three-tier bespoke centrepiece cake',
      'Extensive luxury dessert grazing table with assorted treats',
      'Complete cake stand and dessert display hire setup',
      'Delivery, setup before guests arrive, and post-party packdown'
    ],
    optionalAddons: [
      'Table & chair hire for guests',
      'Bouncy castle hire for kids celebrations',
      'Customised guest goodie bags & favor boxes'
    ],
    isPublished: true,
    priceConfirmed: false,
    priceGuide: 'Custom Quote Available'
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Signature Bridal Mehendi & Celebration Cake Suite',
    category: 'cakes',
    image: '/assets/aistudio/Romantic_Henna_Dessert_Celebration__1__15481021.png',
    caption: 'Exquisite harmony of intricate bridal henna art, handcrafted tiered celebration cake with deep burgundy and blush roses, and fairy-lit floral backdrop.',
    isRepresentative: false,
    tags: ['Bridal', 'Mehendi', 'Bespoke Cake', 'Floral Arch']
  },
  {
    id: 'gal-2',
    title: 'Four-Tier Ombré Floral Masterpiece',
    category: 'cakes',
    image: '/src/assets/images/custom_cakes_showcase_1792550725256.jpg',
    caption: 'Soft blush ombré gradient with intricate floral lace bas-relief embroidery and golden botanical toppers.',
    isRepresentative: true,
    tags: ['Wedding', 'Artisanal', 'Bas Relief', 'Luxury']
  },
  {
    id: 'gal-3',
    title: 'Grand Patisserie Dessert Bar',
    category: 'desserts',
    image: '/src/assets/images/dessert_table_spread_1792550726678.jpg',
    caption: 'Tiered French macarons, raspberry chocolate tarts, mousse shooter cups, and antique candelabras.',
    isRepresentative: true,
    tags: ['Dessert Table', 'Macarons', 'Tartlets', 'Catering']
  },
  {
    id: 'gal-4',
    title: 'Intricate Bridal Henna Suite',
    category: 'mehendi',
    image: '/src/assets/images/bridal_mehendi_art_1792550727834.jpg',
    caption: 'Traditional and contemporary bridal henna featuring delicate mandalas, symmetrical cuffs, and natural organic paste.',
    isRepresentative: true,
    tags: ['Bridal', 'Organic Henna', 'Traditional', 'Mandala']
  },
  {
    id: 'gal-5',
    title: 'Boutique Gold Arch & Floral Backdrop',
    category: 'backdrops',
    image: '/src/assets/images/event_backdrop_hire_1792550727932.jpg',
    caption: 'Circular antique gold moongate arch framed with pastel organic balloon garland, fresh blooms, and banquet seating.',
    isRepresentative: true,
    tags: ['Backdrop', 'Hire', 'Balloons', 'Floral Arch']
  },
  {
    id: 'gal-6',
    title: 'Artisan Dessert Platter & Risers',
    category: 'displays',
    image: '/src/assets/images/dessert_table_spread_1792550726678.jpg',
    caption: 'Curated dessert display hire including gold rimmed pedestals and elegant dessert shooters.',
    isRepresentative: true,
    tags: ['Display Hire', 'Cake Stands', 'Party Styling']
  }
];

export const initialFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'orders',
    question: 'How far in advance should I place my order or request a quote?',
    answer: 'We recommend enquiring 2 to 4 weeks in advance for celebration cakes and party hire, and 4 to 8 weeks for wedding cakes and bridal mehendi bookings. While we do our best to accommodate short-notice requests subject to availability, our calendar fills quickly during peak celebration seasons.'
  },
  {
    id: 'faq-2',
    category: 'orders',
    question: 'Does submitting a quote enquiry guarantee my date?',
    answer: 'Submitting an enquiry does not confirm your booking. Availability, pricing, design scope, and payment terms will be discussed and verified with you before your reservation is officially secured with a deposit.'
  },
  {
    id: 'faq-3',
    category: 'cakes',
    question: 'Can you cater to dietary requirements and allergies?',
    answer: 'We can accommodate selected dietary requests, such as eggless, gluten-friendly, or nut-free options on request. However, please note our kitchen handles dairy, wheat, eggs, and nuts, so trace elements cannot be 100% ruled out. Please specify any severe allergies in your quotation form.'
  },
  {
    id: 'faq-4',
    category: 'mehendi',
    question: 'What type of henna do you use for mehendi appointments?',
    answer: 'We exclusively use 100% natural, freshly prepared organic henna paste mixed with pure eucalyptus or lavender essential oils. We never use commercial black henna or chemical dyes. A detailed aftercare guide is provided to ensure your stain develops into a rich mahogany colour.'
  },
  {
    id: 'faq-5',
    category: 'hire',
    question: 'What are the safety requirements and weather policies for bouncy castle hire?',
    answer: 'Our bouncy castles require a clear, level grass or firm ground surface with safe clearance from walls and overhead trees, plus access to a standard electrical outlet. For safety, inflatables cannot be operated in high winds (>35 km/h) or heavy rain. We work with you to plan an indoor backup or reschedule where feasible.'
  },
  {
    id: 'faq-6',
    category: 'hire',
    question: 'Do you deliver, set up, and collect hire equipment?',
    answer: 'Yes! We handle delivery, professional installation, safety anchoring, and collection at the conclusion of your hire window across our metropolitan service area.'
  },
  {
    id: 'faq-7',
    category: 'cakes',
    question: 'Can I provide reference photos for my cake or backdrop design?',
    answer: 'Absolutely! Our smart quotation form allows you to upload photos of your favourite cakes, invitation themes, colour swatches, or venue aesthetic. We take inspiration from your vision while adding our signature Sweet Creations artistic flair.'
  }
];
