// ============================================================
// Pamukkale Digital Menu — Menu Data
// Authentic Turkish Restaurant Menu
// Reflecting real Pamukkale dish plating, garnish & photography
// ============================================================

export const categories = [
  { id: 'breakfast',    label: { en: 'Breakfast',        de: 'Frühstück' },      icon: '🌅' },
  { id: 'soups',        label: { en: 'Soups',            de: 'Suppen' },         icon: '🥣' },
  { id: 'salads',       label: { en: 'Salads',           de: 'Salate' },         icon: '🥗' },
  { id: 'starters',     label: { en: 'Starters & Meze',  de: 'Vorspeisen & Meze' }, icon: '🫙' },
  { id: 'grill',        label: { en: 'Charcoal Grill',   de: 'Holzkohlegrill' }, icon: '🔥' },
  { id: 'pide',         label: { en: 'Pide & Lahmacun',  de: 'Pide & Lahmacun' },icon: '🫓' },
  { id: 'vegetarian',   label: { en: 'Vegetarian',       de: 'Vegetarisch' },    icon: '🌿' },
  { id: 'doner',        label: { en: 'Döner Specialties', de: 'Döner-Spezialitäten' }, icon: '🌯' },
  { id: 'desserts',     label: { en: 'Desserts',         de: 'Desserts' },       icon: '🍮' },
  { id: 'cold-drinks',  label: { en: 'Cold Drinks',      de: 'Kaltgetränke' },   icon: '🧊' },
  { id: 'hot-drinks',   label: { en: 'Hot Drinks',       de: 'Heißgetränke' },   icon: '☕' },
  { id: 'alcoholic',    label: { en: 'Alcoholic Drinks', de: 'Alkohol' },        icon: '🍷' },
  { id: 'wines',        label: { en: 'Wines',            de: 'Weine' },          icon: '🍾' },
];

// Allergen key:
// A = Gluten, B = Crustaceans, C = Eggs, D = Fish, E = Peanuts,
// F = Soya, G = Milk/Dairy, H = Nuts, I = Celery, J = Mustard,
// K = Sesame, L = Sulphites, M = Lupin, N = Molluscs

export const menuItems = [
  // ──────────────────────────────────────────
  // SOUPS (Suppen)
  // ──────────────────────────────────────────
  {
    id: 's1',
    category: 'soups',
    name: { en: 'Lentil Soup (Mercimek Çorbası)', de: 'Linsensuppe (Mercimek Çorbası)' },
    description: {
      en: 'Traditional Anatolian creamy red lentil soup, served in a rustic ceramic bowl with a fresh lemon wedge and heated paprika-chilli butter swirl.',
      de: 'Traditionelle anatolische rote Linsensuppe, serviert in einer rustikalen Keramikschale mit frischer Zitronenspalte und heißer Paprika-Chilibutter.',
    },
    price: 6.50,
    image: '/images/dishes/lentil-soup.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['A', 'I'],
  },
  {
    id: 's2',
    category: 'soups',
    name: { en: 'Tripe Soup (İşkembe Çorbası)', de: 'Kuttelsuppe (İşkembe Çorbası)' },
    description: {
      en: 'Slow-simmered rich tripe soup in a speckled ceramic bowl, served with garlic vinegar dressing and melted red chilli butter.',
      de: 'Langsam gekochte traditionelle Kuttelsuppe in der Keramikschale, serviert mit Knoblauch-Essig-Dressing und geschmolzener Chilibutter.',
    },
    price: 7.50,
    image: '/images/dishes/tripe-soup.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: true,
    allergens: ['G'],
  },

  // ──────────────────────────────────────────
  // STARTERS & MEZE (Vorspeisen & Meze)
  // ──────────────────────────────────────────
  {
    id: 'st1',
    category: 'starters',
    dishNumber: '30',
    name: { en: 'Hummus with Falafel', de: 'Hummus mit Falafel' },
    description: {
      en: 'Silky smooth chickpea & tahini purée served in an authentic Ottoman Iznik patterned ceramic dish, crowned with golden sesame falafel, black sesame seeds, lemon, and cherry tomato.',
      de: 'Cremiges Kichererbsen-Tahini-Püree im osmanischen Iznik-Keramikteller, gekrönt mit goldener Sesam-Falafel, Schwarzkümmel, Zitrone und Kirschtomate.',
    },
    price: 8.50,
    image: '/images/dishes/hummus.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['K'],
  },
  {
    id: 'st2',
    category: 'starters',
    dishNumber: '27',
    name: { en: 'Acılı Ezme', de: 'Acılı Ezme (Pikanter Tomatendip)' },
    description: {
      en: 'Finely hand-minced ripe tomatoes, sweet & hot red peppers, and fresh parsley, drizzled with thick dark pomegranate molasses (nar ekşisi), served in a decorative ceramic boat.',
      de: 'Fein gehackte Tomaten, rote Paprika und frische Petersilie, verfeinert mit edlem Granatapfelsirup (Nar Ekşisi), serviert im dekorativen Iznik-Schälchen.',
    },
    price: 7.90,
    image: '/images/dishes/ezme.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: true,
    allergens: [],
  },
  {
    id: 'st5',
    category: 'starters',
    dishNumber: '26',
    name: { en: 'Cacık', de: 'Cacık (Knoblauch-Gurken-Joghurt)' },
    description: {
      en: 'Thick strained Turkish yoghurt with crispy diced cucumber, garlic, and dried Anatolian mint, garnished with a Kalamata olive and fresh mint leaves.',
      de: 'Cremiger türkischer Süzme-Joghurt mit feinen Gurkenwürfeln, Knoblauch und Minze, garniert mit einer schwarzen Olive und frischer Minze.',
    },
    price: 6.90,
    image: '/images/dishes/cacik.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['G'],
  },
  {
    id: 'st6',
    category: 'starters',
    dishNumber: '32',
    name: { en: 'Baba Ganoush (Patlıcan Ezmesi)', de: 'Baba Ganoush (Auberginenpüree)' },
    description: {
      en: 'Fire-roasted smoked aubergine mashed with garlic yoghurt and tahini, garnished with a ripe black olive, lemon slice, and cherry tomato in an Iznik plate.',
      de: 'Über Holzkohle geröstetes Auberginenpüree mit Knoblauch-Joghurt und Tahini, garniert mit schwarzer Olive, Zitrone und Tomate im Keramikteller.',
    },
    price: 8.20,
    image: '/images/dishes/baba-ganoush.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['G', 'K'],
  },
  {
    id: 'st4',
    category: 'starters',
    name: { en: 'Grand Meze Platter (Gemischte Meze-Platte)', de: 'Große Meze-Platte (6 Köstlichkeiten)' },
    description: {
      en: 'A magnificent wooden presentation board featuring 6 artisanal cold mezes in Ottoman Iznik ceramic dishes: Haydari with crispy börek, Kısır with pomegranate, Baba Ganoush, Hummus with Falafel, Acılı Ezme, and Cacık.',
      de: 'Prächtige Holztafel mit 6 traditionellen kalten Meze-Spezialitäten in blau-weißen Keramikschalen: Haydari mit Börek, Kısır mit Granatapfel, Baba Ganoush, Hummus mit Falafel, Acılı Ezme und Cacık.',
    },
    price: 18.90,
    image: '/images/dishes/meze-platter.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G', 'K'],
  },

  // ──────────────────────────────────────────
  // CHARCOAL GRILL (Holzkohlegrill)
  // ──────────────────────────────────────────
  {
    id: 'g1',
    category: 'grill',
    dishNumber: '60',
    name: { en: 'Adana Kebab', de: 'Adana Kebab' },
    description: {
      en: 'Hand-minced spiced lamb & beef grilled on wide flat skewers over natural charcoal. Served on toasted flatbread with a blistered green pepper, roasted tomato, red bulgur pilaf, sumac-rubbed red onions with parsley, and white vermicelli rice.',
      de: 'Handgehacktes gewürztes Lamm- und Rindfleisch am Flachspieß über Holzkohle gegrillt. Serviert auf Fladenbrot mit gegrillter Peperoni, Grilltomate, rotem Bulgur, Sumak-Zwiebel-Salat und feinem Reis.',
    },
    price: 22.90,
    image: '/images/dishes/adana-kebab.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: true,
    allergens: ['A'],
  },
  {
    id: 'g2',
    category: 'grill',
    dishNumber: '69',
    name: { en: 'Kuzu Şiş (Lamb Shish Kebab)', de: 'Kuzu Şiş (Lammfleischspieß)' },
    description: {
      en: 'Prime tender lamb cubes marinated in Anatolian herbs and charcoal-grilled on skewers. Laid over grilled flatbread, flanked by roasted tomato, charred green pepper, sumac red onions, bulgur, and rice.',
      de: 'Zarte marinierte Lammfleischwürfel über Holzkohle saftig gegrillt. Auf gegrilltem Fladenbrot mit geschmorter Tomate, Peperoni, roten Sumak-Zwiebeln, Bulgurpilaf und Reis.',
    },
    price: 23.90,
    image: '/images/dishes/sis-kebab.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A'],
  },
  {
    id: 'g3',
    category: 'grill',
    dishNumber: '75',
    name: { en: 'Tavuk Pirzola (Chicken Cutlets / Skewer)', de: 'Tavuk Pirzola (Hähnchen-Koteletts)' },
    description: {
      en: 'Tender boneless chicken marinated in spiced Turkish yoghurt and char-grilled over open coals. Served with white vermicelli rice, fresh sumac red onions with parsley, roasted tomato, and red bulgur.',
      de: 'Saftig marinierte Hähnchensteaks über glühender Holzkohle gegrillt. Serviert mit feinem Reis, frischen Sumak-Zwiebeln mit Petersilie, geschmorter Tomate und rotem Bulgur.',
    },
    price: 19.90,
    image: '/images/dishes/tavuk-sis.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G'],
  },
  {
    id: 'g5',
    category: 'grill',
    dishNumber: '62',
    name: { en: 'Sarma Beyti Kebab', de: 'Sarma Beyti Kebab' },
    description: {
      en: 'Grilled spiced minced meat wrapped in thin lavash bread, sliced and arranged in a circular wreath in a traditional hammered copper platter. Center of garlic yoghurt and bulgur, drizzled with foaming tomato butter sauce.',
      de: 'Fein gewürztes Grillfleisch in zartem Lavash-Brot gerollt, tranchiert und kranzförmig im traditionellen gehämmerten Kupferteller angerichtet. In der Mitte Knoblauch-Joghurt und Bulgur, übergossen mit zischender Tomatenbutter.',
    },
    price: 24.90,
    image: '/images/dishes/beyti-kebab.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G'],
  },
  {
    id: 'g6',
    category: 'grill',
    dishNumber: '65',
    name: { en: 'Ali Nazik Kebab', de: 'Ali Nazik Kebab' },
    description: {
      en: 'Sautéed tender lamb cubes in rich meat butter sauce, served atop a warm, velvety bed of fire-smoked aubergine and garlic yoghurt purée in a hammered copper platter, with sliced tomato and green peppers.',
      de: 'Zarte gebratene Lammfleischwürfel in aromatischer Fleischbutter, serviert auf warmem, cremigem Rauch-Auberginen-Knoblauch-Joghurtpüree im Kupferteller mit Tomaten und Peperoni.',
    },
    price: 24.50,
    image: '/images/dishes/ali-nazik.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['G'],
  },
  {
    id: 'g7',
    category: 'grill',
    dishNumber: '71',
    name: { en: 'Kuzu Pirzola (Grilled Lamb Chops)', de: 'Kuzu Pirzola (Lammkoteletts)' },
    description: {
      en: '4 tender French-trimmed lamb chops with distinct charcoal sear marks, presented on a sizzling cast-iron skillet with roasted tomatoes, blistered green peppers, toasted pita triangles, and mezze side bowls.',
      de: '4 zarte Lammkoteletts mit Grillstreifen über Holzkohle gegrillt, serviert auf einer zischenden Gusseisen-Platte mit Grilltomaten, grünen Peperoni, knusprigen Pita-Ecken und Meze-Schälchen.',
    },
    price: 26.90,
    image: '/images/dishes/kuzu-pirzola.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A'],
  },
  {
    id: 'g8',
    category: 'grill',
    dishNumber: '68',
    name: { en: 'Kuzu Lokum (Tenderloin Sizzler)', de: 'Kuzu Lokum (Lammfilet-Medaillons)' },
    description: {
      en: 'Melt-in-your-mouth tender cuts of lamb tenderloin fillet served sizzling on a cast-iron skillet with blistered green peppers, charred tomatoes, and crispy toasted flatbread.',
      de: 'Butterzarte Lammfilet-Medaillons auf zischender Gusseisenplatte serviert, mit gegrillten Peperoni, geschmorten Tomaten und gerösteten Fladenbrotecken.',
    },
    price: 27.50,
    image: '/images/dishes/kuzu-lokum.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A'],
  },
  {
    id: 'g4',
    category: 'grill',
    dishNumber: '79',
    name: { en: 'Pamukkale Special Mixed Grill (for 2)', de: 'Pamukkale Spezial-Grillplatte (für 2 Personen)' },
    description: {
      en: 'A grand charcoal-grilled feast served on an elongated engraved hammered copper banquet tray over a bed of red bulgur pilaf: Adana kebab, Urfa kebab, lamb chops (pirzola), chicken skewers, lamb cubes, grilled tomatoes, peppers, and crispy mini lahmacun on both ends.',
      de: 'Prächtige Grilltafel auf einer großen gehämmerten Kupferplatte über rotem Bulgurpilaf: Adana Kebab, Urfa Kebab, Lammkoteletts (Pirzola), Hähnchenspieße, Lammwürfel, Grilltomaten, Peperoni und knusprige Mini-Lahmacun an beiden Enden.',
    },
    price: 49.90,
    priceNote: { en: 'for 2 persons', de: 'für 2 Personen' },
    image: '/images/dishes/pamukkale-special-platter.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G'],
  },
  {
    id: 'g9',
    category: 'grill',
    name: { en: 'Dana Antrikot (Ribeye / Rumpsteak)', de: 'Dana Antrikot (Gegrilltes Rindersteak)' },
    description: {
      en: 'Charcoal-grilled premium beef ribeye steak, carved on a rustic wood board with coarse sea salt crystals, peppercorns, and vine-ripened cherry tomatoes.',
      de: 'Über Holzkohle gegrilltes Rumpsteak / Antrikot vom Rind, serviert auf Holzbrett mit grobem Meersalz, Pfefferkörnern und frischen Rispentomaten.',
    },
    price: 28.90,
    image: '/images/dishes/steak.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: [],
  },

  // ──────────────────────────────────────────
  // PIDE & LAHMACUN
  // ──────────────────────────────────────────
  {
    id: 'p2',
    category: 'pide',
    dishNumber: '40',
    name: { en: 'Sucuklu Kaşarlı Pide', de: 'Sucuklu Kaşarlı Pide (mit Knoblauchwurst)' },
    description: {
      en: 'Stone-oven baked boat-shaped pide with golden crust encrusted with sesame & nigella seeds, melted Kaşar cheese, and slices of spicy Turkish beef sucuk, served on a tailored oval wooden board.',
      de: 'Im Steinofen gebackenes Fladenbrot-Schiffchen mit knusprigem Sesam- und Schwarzkümmelrand, geschmolzenem Kaşar-Käse und würziger türkischer Knoblauchwurst (Sucuk) auf maßgefertigtem Holzbrett.',
    },
    price: 13.90,
    image: '/images/dishes/sucuklu-pide.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G', 'K'],
  },
  {
    id: 'p1',
    category: 'pide',
    dishNumber: '52',
    name: { en: 'Kıymalı & Biberli Pide', de: 'Kıymalı Pide (mit Hackfleisch & Paprika)' },
    description: {
      en: 'Traditional boat flatbread with seasoned minced beef, diced red & green sweet peppers, melted cheese, and a sesame-nigella crust, diagonally sliced on a wooden board.',
      de: 'Traditionelle Pide mit gewürztem Rinderhackfleisch, bunten Paprikawürfeln, geschmolzenem Käse und Sesam-Schwarzkümmel-Kruste, diagonal aufgeschnitten.',
    },
    price: 13.90,
    image: '/images/dishes/kiymali-pide.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G', 'K'],
  },
  {
    id: 'p4',
    category: 'pide',
    dishNumber: '48',
    name: { en: 'Sebzeli & Mantarlı Pide', de: 'Sebzeli Pide (mit Gemüse & Champignons)' },
    description: {
      en: 'Vegetarian stone-baked pide with sliced mushrooms, courgettes, aubergines, diced bell peppers, melted cheese, and toasted sesame seeds, served with a terracotta bowl of garlic yoghurt dip.',
      de: 'Vegetarische Steinofen-Pide mit frischen Champignons, Zucchini, Auberginen, bunten Paprikastreifen und Käse auf Holzbrett, serviert mit Knoblauch-Joghurt-Dip.',
    },
    price: 12.90,
    image: '/images/dishes/sebzeli-pide.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G', 'K'],
  },
  {
    id: 'p5',
    category: 'pide',
    dishNumber: '51',
    name: { en: 'Falafelli Pide', de: 'Falafelli Pide (mit Falafel & Hummus)' },
    description: {
      en: 'Crispy boat pide with sesame crust, spread with warm chickpea hummus, topped with golden falafel chunks and fresh garden herbs.',
      de: 'Knuspriges Fladenbrot mit Sesamrand, cremigem Kichererbsen-Hummus-Boden, belegt mit goldbraunen Falafelstücken und frischen Kräutern.',
    },
    price: 12.50,
    image: '/images/dishes/falafelli-pide.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['A', 'K'],
  },
  {
    id: 'p3',
    category: 'pide',
    dishNumber: '56',
    name: { en: 'Lahmacun (Turkish Stone-Oven Flatbread)', de: 'Lahmacun (Türkische Steinofen-Pizza)' },
    description: {
      en: 'Two paper-thin, crispy stone-baked Anatolian flatbreads topped with finely spiced minced beef and lamb, tomatoes, and peppers. Served on a wooden board with sumac red onions with parsley, fresh lemon quarters, and spicy ezme dip.',
      de: 'Zwei hauchdünne, knusprig gebackene anatolische Fladenbrote mit fein gewürztem Rinder- und Lammhack, Tomaten und Paprika. Serviert mit Sumak-Zwiebeln, Petersilie, Zitronenvierteln und Ezme-Dip.',
    },
    price: 9.90,
    priceNote: { en: '2 pieces with sides', de: '2 Stück mit Beilagen' },
    image: '/images/dishes/lahmacun.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: true,
    allergens: ['A'],
  },

  // ──────────────────────────────────────────
  // VEGETARIAN (Vegetarisch)
  // ──────────────────────────────────────────
  {
    id: 'v3',
    category: 'vegetarian',
    dishNumber: '99',
    name: { en: 'Falafel Teller (Falafel Platter)', de: 'Falafel-Teller mit Hummus & Bulgur' },
    description: {
      en: '4 golden, sesame-crusted crunchy falafels resting on a pool of creamy hummus with cherry tomatoes, flanked on both sides by generous mounds of red bulgur pilaf in an oval ceramic platter.',
      de: '4 goldbraun gebackene, mit Sesam verfeinerte Falafelbällchen auf feinem Kichererbsen-Hummus mit Kirschtomaten, begleitet von zwei Portionen rotem Bulgurpilaf im Keramikteller.',
    },
    price: 14.90,
    image: '/images/dishes/falafel-teller.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['K'],
  },
  {
    id: 'v1',
    category: 'vegetarian',
    name: { en: 'Imam Bayıldı', de: 'Imam Bayıldı' },
    description: {
      en: 'Whole roasted aubergine stuffed with slow-caramelised onions, tomatoes, and garlic in extra virgin olive oil, served with warm flatbread.',
      de: 'Ganze im Ofen geschmorte Aubergine gefüllt mit karamellisierten Zwiebeln, Tomaten und Knoblauch in Olivenöl, mit warmem Brot serviert.',
    },
    price: 14.50,
    image: '/images/dishes/sebzeli-pide.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },

  // ──────────────────────────────────────────
  // DÖNER SPECIALTIES
  // ──────────────────────────────────────────
  {
    id: 'd3',
    category: 'doner',
    dishNumber: '84',
    name: { en: 'İskender Kebab', de: 'İskender Kebab (im Kupferteller)' },
    description: {
      en: 'Thinly sliced roasted döner meat layered over toasted pide bread cubes soaked in savoury stock, smothered in hot tomato sauce and foaming melted butter, served in an engraved oval hammered copper platter with thick Turkish yoghurt and grilled peppers.',
      de: 'Hauchdünn geschnittenes Dönerfleisch auf gerösteten Pide-Brotwürfeln, übergossen mit würziger Tomatensauce und heißer aufgeschäumter Butter, serviert im gehämmerten Kupferteller mit cremigem Joghurt und Peperoni.',
    },
    price: 19.90,
    image: '/images/dishes/iskender-kebab.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G'],
  },
  {
    id: 'd1',
    category: 'doner',
    name: { en: 'Beef Döner Plate', de: 'Rindfleisch-Döner-Teller' },
    description: {
      en: 'Thinly sliced vertical-roasted beef döner served with rice pilaf, fresh salad, and garlic yoghurt sauce.',
      de: 'Dünn geschnittener Rindfleisch-Döner vom Drehspieß mit Reis, knackigem Salat und Knoblauchsauce.',
    },
    price: 16.90,
    image: '/images/dishes/iskender-kebab.png',
    isVegetarian: false,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G'],
  },

  // ──────────────────────────────────────────
  // DESSERTS (Desserts & Tatlılar)
  // ──────────────────────────────────────────
  {
    id: 'de1',
    category: 'desserts',
    dishNumber: '105',
    name: { en: 'Havuç Dilim Baklava (with Maraş Ice Cream / Kaymak)', de: 'Havuç Dilim Baklava (mit Maraş-Eis / Kaymak)' },
    description: {
      en: 'Spectacular oversized carrot-slice triangle of 40 ultra-thin golden filo layers glistening with syrup, stuffed with bright Gaziantep pistachios and thick traditional Maraş dondurma / kaymak cream, heavily dusted with pistachio crumble.',
      de: 'Spektakuläre, große dreieckige „Karottenschnitt“-Baklava aus 40 hauchdünnen Blätterteigschichten, gefüllt mit echten Gaziantep-Pistazien und dickem Maraş-Eis / Kaymak, großzügig mit Pistazienstaub garniert.',
    },
    price: 8.90,
    image: '/images/dishes/baklava.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'H', 'G'],
  },
  {
    id: 'de3',
    category: 'desserts',
    dishNumber: '106',
    name: { en: 'Künefe (Knafeh in Traditional Pan)', de: 'Künefe (frisch im Pfännchen serviert)' },
    description: {
      en: 'Crisp shredded kadayıf pastry baked with melted sweet unsalted Hatay cheese inside, served directly in the traditional round metal baking pan, soaked in hot syrup and crowned with a heap of vivid green ground pistachios.',
      de: 'Knusprig gebackene Teigfäden (Kadayıf) gefüllt mit geschmolzenem Hatay-Käse, frisch im traditionellen runden Pfännchen serviert, mit heißem Zuckersirup getränkt und mit reichlich grünen Pistazien bestreut.',
    },
    price: 9.50,
    image: '/images/dishes/kunefe.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'G', 'H'],
  },
  {
    id: 'de4',
    category: 'desserts',
    dishNumber: '107',
    name: { en: 'Trileçe (Tres Leches Milk Cake)', de: 'Trileçe (Balkankuchen mit Karamell)' },
    description: {
      en: 'Light and airy sponge cake soaked in three milks, sitting in a pool of fresh cold cream, topped with a glistening amber caramel glaze with white feathered piping on a modern slate plate.',
      de: 'Luftiger Biskuitkuchen, getränkt in einer feinen Drei-Milch-Mischung, liegend in frischer Milchcreme, überzogen mit glänzender bernsteinfarbener Karamellglasur auf Schieferplatte.',
    },
    price: 6.90,
    image: '/images/dishes/trilece.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'C', 'G'],
  },

  // ──────────────────────────────────────────
  // BREAKFAST (Frühstück)
  // ──────────────────────────────────────────
  {
    id: 'b1',
    category: 'breakfast',
    name: { en: 'Turkish Breakfast Platter', de: 'Türkisches Frühstück' },
    description: {
      en: 'A generous spread of white cheese, black & green olives, tomatoes, cucumbers, butter, honey with clotted cream, homemade jam, and warm stone-baked flatbread.',
      de: 'Ein üppiges Frühstück mit Weißkäse, schwarzen und grünen Oliven, Tomaten, Gurken, Butter, Honig mit Kaymak, hausgemachter Marmelade und frischem Steinofenbrot.',
    },
    price: 14.90,
    image: '/images/dishes/meze-platter.png',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['A', 'C', 'G'],
  },

  // ──────────────────────────────────────────
  // SALADS (Salate)
  // ──────────────────────────────────────────
  {
    id: 'sa1',
    category: 'salads',
    name: { en: 'Çoban Salatası (Shepherd’s Salad)', de: 'Çoban Salatası (Hirtensalat)' },
    description: {
      en: 'Finely diced ripe vine tomatoes, crunchy cucumbers, green peppers, red onions, and fresh flat-leaf parsley, dressed with extra virgin olive oil and lemon.',
      de: 'Fein gewürfelte Rispentomaten, Gurken, milde Peperoni, rote Zwiebeln und glatte Petersilie mit nativem Olivenöl und frischer Zitrone.',
    },
    price: 7.50,
    image: '/images/dishes/ezme.png',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },

  // ──────────────────────────────────────────
  // COLD DRINKS (Kaltgetränke)
  // ──────────────────────────────────────────
  {
    id: 'cd1',
    category: 'cold-drinks',
    name: { en: 'Ayran', de: 'Ayran' },
    description: {
      en: 'Traditional chilled salted yoghurt drink — freshly frothed, the perfect refreshing companion to charcoal-grilled meats.',
      de: 'Traditionelles erfrischendes Joghurtgetränk — frisch aufgeschlagen mit einer Prise Salz.',
    },
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    isVegetarian: true,
    isVegan: false,
    isSpicy: false,
    allergens: ['G'],
  },
  {
    id: 'cd2',
    category: 'cold-drinks',
    name: { en: 'Fresh Lemonade with Mint', de: 'Hausgemachte Minz-Limonade' },
    description: {
      en: 'Hand-squeezed lemons with fresh garden mint leaves, pure cane sugar, and sparkling water.',
      de: 'Handgepresste Zitronen mit frischen Minzblättern, Rohrzucker und erfrischendem Quellwasser.',
    },
    price: 4.90,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },
  {
    id: 'cd3',
    category: 'cold-drinks',
    name: { en: 'Şalgam Suyu', de: 'Şalgam Suyu (Würziger Rübensaft)' },
    description: {
      en: 'Fermented black carrot and purple turnip juice with hot pepper — authentic, savoury, and beloved in Adana.',
      de: 'Fermentierter violetter Rübensaft mit Schärfe — die authentische Spezialität zu Grillgerichten.',
    },
    price: 3.90,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },

  // ──────────────────────────────────────────
  // HOT DRINKS (Heißgetränke)
  // ──────────────────────────────────────────
  {
    id: 'hd1',
    category: 'hot-drinks',
    name: { en: 'Turkish Tea (Çay)', de: 'Türkischer Tee (Çay)' },
    description: {
      en: 'Authentic black tea from the Rize Black Sea coast, brewed in a double-stacked samovar (çaydanlık), served in traditional tulip-shaped glasses.',
      de: 'Kräftiger schwarzer Rize-Tee aus dem traditionellen Doppel-Teekocher (Çaydanlık), serviert im typischen Tulpenglas.',
    },
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },
  {
    id: 'hd2',
    category: 'hot-drinks',
    name: { en: 'Turkish Mokka (Türk Kahvesi)', de: 'Türkischer Mokka (Türk Kahvesi)' },
    description: {
      en: 'Finely ground Anatolian coffee slow-simmered in a copper cezve pot with thick crema foam, served with traditional lokum (Turkish delight).',
      de: 'Fein gemahlener Mokka, langsam in der traditionellen Kupferkanne (Cezve) gekocht, mit feinem Schaum und einem Stück Lokum serviert.',
    },
    price: 3.90,
    image: 'https://images.unsplash.com/photo-1517705892914-1a4b1df0b0ab?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },

  // ──────────────────────────────────────────
  // ALCOHOLIC DRINKS (Alkohol & Weine)
  // ──────────────────────────────────────────
  {
    id: 'al1',
    category: 'alcoholic',
    name: { en: 'Efes Pilsen (0.33L)', de: 'Efes Pilsen (0,33L)' },
    description: {
      en: 'The classic Mediterranean Turkish pilsner — crisp, refreshing, and perfectly balanced with grilled meats.',
      de: 'Das legendäre türkische Lagerbier — erfrischend herb und vollmundig.',
    },
    price: 4.90,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['A'],
  },
  {
    id: 'al2',
    category: 'alcoholic',
    name: { en: 'Yeni Rakı (4cl)', de: 'Yeni Rakı (4cl)' },
    description: {
      en: 'Anise-distilled national spirit of Turkey, known as "Lion\'s Milk" (Aslan Sütü). Served with cold mineral water and ice.',
      de: 'Der berühmte türkische Anisschnaps („Löwenmilch“). Traditionell mit kaltem Wasser und Eis serviert.',
    },
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: [],
  },
  {
    id: 'w1',
    category: 'wines',
    name: { en: 'Kavaklıdere Yakut Rotwein', de: 'Kavaklıdere Yakut Rotwein' },
    description: {
      en: 'Turkey’s most celebrated red wine from Eastern Anatolia. Rich ruby colour with notes of ripe dark cherries, blackberries, and subtle spice.',
      de: 'Der beliebteste türkische Rotwein. Intensives Rubinrot mit Noten von reifen Kirschen, Brombeeren und feiner Würze.',
    },
    price: 8.50,
    priceNote: { en: 'per glass 0.2L', de: 'pro Glas 0,2L' },
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['L'],
  },
  {
    id: 'w2',
    category: 'wines',
    name: { en: 'Kavaklıdere Çankaya Weißwein', de: 'Kavaklıdere Çankaya Weißwein' },
    description: {
      en: 'Crisp and elegant Turkish white wine with refreshing citrus, peach, and delicate white blossom aromas.',
      de: 'Eleganter, spritziger türkischer Weißwein mit Aromen von Zitrusfrüchten, Pfirsich und weißen Blüten.',
    },
    price: 8.50,
    priceNote: { en: 'per glass 0.2L', de: 'pro Glas 0,2L' },
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
    isVegetarian: true,
    isVegan: true,
    isSpicy: false,
    allergens: ['L'],
  },
];

// Allergen descriptions
export const allergenLabels = {
  A: { en: 'Gluten (Wheat)', de: 'Gluten (Weizen)' },
  B: { en: 'Crustaceans', de: 'Krebstiere' },
  C: { en: 'Eggs', de: 'Eier' },
  D: { en: 'Fish', de: 'Fisch' },
  E: { en: 'Peanuts', de: 'Erdnüsse' },
  F: { en: 'Soya', de: 'Soja' },
  G: { en: 'Milk & Dairy', de: 'Milch & Laktose' },
  H: { en: 'Nuts (Pistachios/Walnuts)', de: 'Schalenfrüchte (Pistazien/Walnüsse)' },
  I: { en: 'Celery', de: 'Sellerie' },
  J: { en: 'Mustard', de: 'Senf' },
  K: { en: 'Sesame', de: 'Sesam' },
  L: { en: 'Sulphites', de: 'Sulfite' },
  M: { en: 'Lupin', de: 'Lupinen' },
  N: { en: 'Molluscs', de: 'Weichtiere' },
};
