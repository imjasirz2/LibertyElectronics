const products = [
  {
    name: "TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV",
    price: "300000",
    image: "Assets/img/Products/TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV.webp",
    category: "LED",
    url: "TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV.html",
    brand: "TCL"
  },
  {
    name: "Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series",
    price: "23735",
    image: "assets/img/products/Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series.webp",
    category: "airconditioner",
    url: "Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series.html",
    brand: "Gree"
  },
  {
    name: "GS-18FITH6C/6S/6G GREE Split Ac 1.5 TON (Inverter)- Fairy Econo Series",
    price: "202000",
    image: "assets/img/products/GS-18FITH6C 6S 6G GREE Split Ac 1.5 TON (Inverter)- Fairy Econo Series.webp",
    category: "airconditioner",
    url: "GS-18FITH6C 6S 6G GREE Split Ac 1.5 TON (Inverter)- Fairy Econo Series.html",
    brand: "Gree"
  },
  {
    name: "Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series",
    price: "23735",
    image: "assets/img/products/Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series.webp",
    category: "airconditioner",
    url: "Gree 1 Ton Inverter AC Heat and Cool- Latest Model - GS-12PITH11W - Pular Series.html",
    brand: "Gree"
  },
  {
    name: "Gree 2 Ton 24PITH10W Cool Only Inverter Air Conditioner",
    price: "275000",
    image: "assets/img/products/Gree 2 Ton 24PITH10W Cool Only Inverter Air Conditioner.webp",
    category: "airconditioner",
    url: "Gree 2 Ton 24PITH10W Cool Only Inverter Air Conditioner.html",
    brand: "Gree"
  },
  {
    name: "GREE Split AC 2 TON Fiary (Inverter)",
    price: "353500",
    image: "assets/img/products/GREE Split AC 2 TON Fiary (Inverter).webp",
    category: "airconditioner",
    url: "GREE Split AC 2 TON Fiary (Inverter).html",
    brand: "Gree"
  },
  {
    name: "Hisense INVERTER SPLIT AC 18TQ 60HC - 1.5 TON",
    price: "160000",
    image: "assets/img/products/Hisense INVERTER SPLIT AC 18TQ 60HC - 1.5 TON.webp",
    category: "airconditioner",
    url: "Hisense INVERTER SPLIT AC 18TQ 60HC - 1.5 TON.html",
    brand: "Hisense"
  },
  {
    name: "Hisense INVERTER SPLIT AC 18TG 75HCI 2 TON - Black",
    price: "185000",
    image: "assets/img/products/Hisense INVERTER SPLIT AC 18TG 75HCI 2 TON - Black.webp",
    category: "airconditioner",
    url: "Hisense INVERTER SPLIT AC 18TG 75HCI 2 TON - Black.html",
    brand: "Hisense"
  },
  {
    name: "Hisense 24FS-CPA 2 Ton Round Shape Cabinet Non Inverter AC",
    price: "300000",
    image: "assets/img/products/Hisense 24FS-CPA 2 Ton Round Shape Cabinet Non Inverter AC.webp",
    category: "airconditioner",
    url: "Hisense 24FS-CPA 2 Ton Round Shape Cabinet Non Inverter AC.html",
    brand: "Hisense"
  },
  {
    name: "Hisense INVERTER SPLIT AC 24TV 60HC - 2 TON",
    price: "225000",
    image: "assets/img/products/Hisense INVERTER SPLIT AC 24TV 60HC - 2 TON.webp",
    category: "airconditioner",
    url: "Hisense INVERTER SPLIT AC 24TV 60HC - 2 TON.html",
    brand: "Hisense"
  },
  {
    name: "Kenwood ESupereme Inverter Split Air Conditioners Heat and Cool 1.0 Ton -KET-1246",
    price: "166650",
    image: "assets/img/products/Kenwood ESupereme Inverter Split Air Conditioners Heat and Cool 1.0 Ton -KET-1246.webp",
    category: "airconditioner",
    url: "Kenwood ESupereme Inverter Split Air Conditioners Heat and Cool 1.0 Ton -KET-1246.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood 1 Ton Split AC Upto 75% E-Smart Platinum KES-1261S",
    price: "202000",
    image: "assets/img/products/Kenwood 1 Ton Split AC Upto 75_ E-Smart Platinum KES-1261S.webp",
    category: "airconditioner",
    url: "Kenwood 1 Ton Split AC Upto 75% E-Smart Platinum KES-1261S.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood 2.0 Ton-KEI-2441 F E IMPERIAL PLUS Non Inverter Heat And Cool Floor Standing Cabinet",
    price: "292900",
    image: "assets/img/products/Kenwood 2.0 Ton-KEI-2441 F E IMPERIAL PLUS Non Inverter Heat And Cool Floor Standing Cabinet.webp",
    category: "airconditioner",
    url: "Kenwood 2.0 Ton-KEI-2441 F E IMPERIAL PLUS Non Inverter Heat And Cool Floor Standing Cabinet.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood 2.0 TON E Signature Inverter Floor Standing AC Model KEI-2447FHI",
    price: "404000",
    image: "assets/img/products/Kenwood 2.0 TON E Signature Inverter Floor Standing AC Model KEI-2447FHI.webp",
    category: "airconditioner",
    url: "Kenwood 2.0 TON E Signature Inverter Floor Standing AC Model KEI-2447FHI.html",
    brand: "Kenwood"
  },
  {
    name: "PEL ACE-APEX PRINVO-18K Inverter 1.5 Ton Heat and Cool Split AC",
    price: "188355",
    image: "assets/img/products/PEL ACE-APEX PRINVO-18K Inverter 1.5 Ton Heat and Cool Split AC.webp",
    category: "airconditioner",
    url: "PEL ACE-APEX PRINVO-18K Inverter 1.5 Ton Heat and Cool Split AC.html",
    brand: "Pel"
  },
  {
    name: "PEL Floor Standing Inverter Cabinet PFSAC-24K Bold 2.0 Ton",
    price: "354500",
    image: "assets/img/products/PEL Floor Standing Inverter Cabinet PFSAC-24K Bold 2.0 Ton.webp",
    category: "airconditioner",
    url: "PEL Floor Standing Inverter Cabinet PFSAC-24K Bold 2.0 Ton.html",
    brand: "Pel"
  },
  {
    name: "Pel PSAC 18 Majestic E52-4D Air Conditioner 1.5 Ton",
    price: "161085",
    image: "assets/img/products/Pel PSAC 18 Majestic E52-4D Air Conditioner 1.5 Ton.webp",
    category: "airconditioner",
    url: "Pel PSAC 18 Majestic E52-4D Air Conditioner 1.5 Ton.html",
    brand: "Pel"
  },
  {
    name: "Pel 24K Supreme Floor Standing Cabinet Inverter Heat And Cool 2.0 Ton Air Conditioner",
    price: "405000",
    image: "assets/img/products/Pel 24K Supreme Floor Standing Cabinet Inverter Heat And Cool 2.0 Ton Air Conditioner.webp",
    category: "airconditioner",
    url: "Pel 24K Supreme Floor Standing Cabinet Inverter Heat And Cool 2.0 Ton Air Conditioner.html",
    brand: "Pel"
  },
  {
    name: "Kenwood Steam Iron -ST-767",
    price: "28715",
    image: "assets/img/products/Kenwood Steam Iron -ST-767.webp",
    category: "Iron",
    url: "Kenwood Steam Iron -ST-767.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood Steam Iron -ISP-100 BL",
    price: "29088",
    image: "assets/img/products/Kenwood Steam Iron -ISP-100 BL.webp",
    category: "Iron",
    url: "Kenwood Steam Iron -ISP-100 BL.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood Steam Iron ISP200GR",
    price: "28278",
    image: "assets/img/products/Kenwood Steam Iron ISP200GR.webp",
    category: "Iron",
    url: "Kenwood Steam Iron ISP200GR.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood Steam Iron -ISP-201",
    price: "24983",
    image: "assets/img/products/Kenwood Steam Iron -ISP-201.webp",
    category: "Iron",
    url: "Kenwood Steam Iron -ISP-201.html",
    brand: "Kenwood"
  },
  {
    name: "National Gold (NG) - Dry Iron - 1200 W- NG786-186",
    price: "5555",
    image: "assets/img/products/National Gold (NG) - Dry Iron - 1200 W- NG786-186.webp",
    category: "Iron",
    url: "National Gold (NG) - Dry Iron - 1200 W- NG786-186.html",
    brand: "nationalgold"
  },
  {
    name: "National Gold Heavy Dry Iron Ng-786-M92",
    price: "6565",
    image: "assets/img/products/National Gold Heavy Dry Iron Ng-786-M92.webp",
    category: "Iron",
    url: "National Gold Heavy Dry Iron Ng-786-M92.html",
    brand: "nationalgold"
  },
  {
    name: "National Gold NG-124A Dry Iron 1000W",
    price: "5555",
    image: "assets/img/products/National Gold NG-124A Dry Iron 1000W.webp",
    category: "Iron",
    url: "National Gold NG-124A Dry Iron 1000W.html",
    brand: "nationalgold"
  },
  {
    name: "National Gold (M92B) - Dry Iron - Golden Plate - Heavy Weight",
    price: "6565",
    image: "assets/img/products/National Gold (M92B) - Dry Iron - Golden Plate - Heavy Weight.webp",
    category: "Iron",
    url: "National Gold (M92B) - Dry Iron - Golden Plate - Heavy Weight.html",
    brand: "nationalgold"
  },
  {
    name: "Panasonic Non-Stick Dry Iron NI-317T",
    price: "8500",
    image: "assets/img/products/Panasonic Non-Stick Dry Iron NI-317T.webp",
    category: "Iron",
    url: "Panasonic Non-Stick Dry Iron NI-317T.html",
    brand: "Panasonic"
  },
  {
    name: "Panasonic Automatic Dry Iron NI-25AWT",
    price: "15755",
    image: "assets/img/products/Panasonic Automatic Dry Iron NI-25AWT.webp",
    category: "Iron",
    url: "Panasonic Automatic Dry Iron NI-25AWT.html",
    brand: "Panasonic"
  },
  {
    name: "Panasonic Automatic Dry Iron, 1000W, NI-313",
    price: "10500",
    image: "assets/img/products/Panasonic Automatic Dry Iron, 1000W, NI-313.webp",
    category: "Iron",
    url: "Panasonic Automatic Dry Iron, 1000W, NI-313.html",
    brand: "Panasonic"
  },
  {
    name: "Panasonic Dry Iron NI-22AWTX",
    price: "13715",
    image: "assets/img/products/Panasonic Dry Iron NI-22AWTX.webp",
    category: "Iron",
    url: "Panasonic Dry Iron NI-22AWTX.html",
    brand: "Panasonic"
  },
  {
    name: "Westpoint Deluxe Steam Iron WF-2063",
    price: "9375",
    image: "assets/img/products/Westpoint Deluxe Steam Iron WF-2063.webp",
    category: "Iron",
    url: "Westpoint Deluxe Steam Iron WF-2063.html",
    brand: "Westpoint"
  },
  {
    name: "Westpoint Deluxe Dry Iron WF-772",
    price: "6250",
    image: "assets/img/products/Westpoint Deluxe Dry Iron WF-772.webp",
    category: "Iron",
    url: "Westpoint Deluxe Dry Iron WF-772.html",
    brand: "Westpoint"
  },
  {
    name: "Westpoint Deluxe Garment Steamer 2 Liter WF-1154",
    price: "22255",
    image: "assets/img/products/Westpoint Deluxe Garment Steamer 2 Liter WF-1154.webp",
    category: "Iron",
    url: "Westpoint Deluxe Garment Steamer 2 Liter WF-1154.html",
    brand: "Westpoint"
  },
  {
    name: "Westpoint Deluxe Handy Garment Steamer WF-1253",
    price: "9375",
    image: "assets/img/products/Westpoint Deluxe Handy Garment Steamer WF-1253.webp",
    category: "Iron",
    url: "Westpoint Deluxe Handy Garment Steamer WF-1253.html",
    brand: "Westpoint"
  },
  {
    name: "Dawlance Spectrum Series HD TV 32-Inches E3A HD TV",
    price: "45450",
    image: "assets/img/products/Dawlance Spectrum Series HD TV 32-Inches E3A HD TV.webp",
    category: "LED",
    url: "Dawlance Spectrum Series HD TV 32-Inches E3A HD TV.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance 50 - Inches 4K UHD LED TV Canvas series 50G3AP Narrow Bezel Screen",
    price: "156550",
    image: "assets/img/products/Dawlance 50 - Inches 4K UHD LED TV Canvas series 50G3AP Narrow Bezel Screen.webp",
    category: "LED",
    url: "Dawlance 50 - Inches 4K UHD LED TV Canvas series 50G3AP Narrow Bezel Screen.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance 55 - Inches 4K UHD LED TV Canvas series 55G3AP Narrow Bezel Screen",
    price: "181800",
    image: "assets/img/products/Dawlance 55 - Inches 4K UHD LED TV Canvas series 55G3AP Narrow Bezel Screen.webp",
    category: "LED",
    url: "Dawlance 55 - Inches 4K UHD LED TV Canvas series 55G3AP Narrow Bezel Screen.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance 65 - Inches 4K UHD LED TV Canvas series 65G3AP Narrow Bezel Screen",
    price: "277750",
    image: "assets/img/products/Dawlance 65 - Inches 4K UHD LED TV Canvas series 65G3AP Narrow Bezel Screen.webp",
    category: "LED",
    url: "Dawlance 65 - Inches 4K UHD LED TV Canvas series 65G3AP Narrow Bezel Screen.html",
    brand: "Dawlance"
  },
  {
    name: "Philips 8100 Series 55 inch 55PQT816998 4K Ultra HD QLED Smart TV with Dolby Vision, Dolby Atmos, Android TV, HDR10, Ambilight, and Voice Control",
    price: "260000",
    image: "assets/img/products/Philips 8100 Series 55 inch 55PQT816998 4K Ultra HD QLED Smart TV with Dolby Vision, Dolby Atmos, Android TV, HDR10, Ambilight, and Voice Control.webp",
    category: "LED",
    url: "Philips 8100 Series 55 inch 55PQT816998 4K Ultra HD QLED Smart TV with Dolby Vision, Dolby Atmos, Android TV, HDR10, Ambilight, and Voice Control.html",
    brand: "Philips"
  },
  {
    name: "Philips 43-Inches Ultra Slim Full HD Smart LED TV - 43PFT5813-98",
    price: "108838",
    image: "assets/img/products/Philips 43-Inches Ultra Slim Full HD Smart LED TV - 43PFT5813-98.webp",
    category: "LED",
    url: "Philips 43-Inches Ultra Slim Full HD Smart LED TV - 43PFT5813-98.html",
    brand: "Philips"
  },
  {
    name: "Philips 559M1RYV 55 inch 4K HDR display Monitor with Ambiglow",
    price: "557852",
    image: "assets/img/products/Philips 559M1RYV 55 inch 4K HDR display Monitor with Ambiglow.webp",
    category: "LED",
    url: "Philips 559M1RYV 55 inch 4K HDR display Monitor with Ambiglow.html",
    brand: "Philips"
  },
  {
    name: "Philips 6600 series, 65 inch 4K UHD LED Smart TV 4k 65PUT6654_98",
    price: "357216",
    image: "assets/img/products/Philips 6600 series, 65 inch 4K UHD LED Smart TV 4k 65PUT6654_98.webp",
    category: "LED",
    url: "Philips 6600 series, 65 inch 4K UHD LED Smart TV 4k 65PUT6654_98.html",
    brand: "Philips"
  },
  {
    name: "Samsung Smart Led TV 32T5300 - 32 Inches",
    price: "151500",
    image: "assets/img/products/Samsung Smart Led TV 32T5300 - 32 Inches.webp",
    category: "LED",
    url: "Samsung Smart Led TV 32T5300 - 32 Inches.html",
    brand: "Samsung"
  },
  {
    name: "Samsung 55 inch Crystal UHD 4K DU7000",
    price: "210999",
    image: "assets/img/products/Samsung 55 inch Crystal UHD 4K DU7000.webp",
    category: "LED",
    url: "Samsung 55 inch Crystal UHD 4K DU7000.html",
    brand: "Samsung"
  },
  {
    name: "Samsung 55 inch QLED 4K Q60D",
    price: "255999",
    image: "assets/img/products/Samsung 55 inch QLED 4K Q60D.webp",
    category: "LED",
    url: "Samsung 55 inch QLED 4K Q60D.html",
    brand: "Samsung"
  },
  {
    name: "Samsung 85 inch QLED 4K Q70D",
    price: "895000",
    image: "assets/img/products/Samsung 85 inch QLED 4K Q70D.webp",
    category: "LED",
    url: "Samsung 85 inch QLED 4K Q70D.html",
    brand: "Samsung"
  },
  {
    name: "TCL 189 cm (75 inches) 4K Ultra HD Smart QLED Google TV 75C655 (Black)",
    price: "400000",
    image: "assets/img/products/TCL 189 cm (75 inches) 4K Ultra HD Smart QLED Google TV 75C655 (Black).webp",
    category: "LED",
    url: "TCL 189 cm (75 inches) 4K Ultra HD Smart QLED Google TV 75C655 (Black).html",
    brand: "TCL"
  },
  {
    name: "TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV",
    price: "300000",
    image: "assets/img/products/TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV.webp",
    category: "LED",
    url: "TCL 32L5A, 32 Inch TV, FHD, HDR Smart TV Supported with Android TV.html",
    brand: "TCL"
  },
  {
    name: "TCL 55-P8K 55 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound",
    price: "300000",
    image: "assets/img/products/TCL 55-P8K 55 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound.webp",
    category: "LED",
    url: "TCL 55-P8K 55 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound.html",
    brand: "TCL"
  },
  {
    name: "TCL 65-P8K 65 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound",
    price: "300000",
    image: "assets/img/products/TCL 65-P8K 65 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound.webp",
    category: "LED",
    url: "TCL 65-P8K 65 inch 4K QLED HDR Smart TV, 4K Ultra HD, Google TV with 144Hz Motion Clarity Pro and Onkyo 2.1 sound.html",
    brand: "TCL"
  },
  {
    name: "Dawlance REF 9191 WB CHROME RRO 438LTR - 15 CFT",
    price: "136350",
    image: "assets/img/products/Dawlance REF 9191 WB CHROME RRO 438LTR - 15 CFT.webp",
    category: "Refrigerator",
    url: "Dawlance REF 9191 WB CHROME RRO 438LTR - 15 CFT.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance DSS-9055 INV INOX Double Door Refrigerator- 18 CFT",
    price: "338350",
    image: "assets/img/products/Dawlance DSS-9055 INV INOX Double Door Refrigerator- 18 CFT.webp",
    category: "Refrigerator",
    url: "Dawlance DSS-9055 INV INOX Double Door Refrigerator- 18 CFT.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTE Plus Inverter",
    price: "121200",
    image: "assets/img/products/Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTE Plus Inverter.webp",
    category: "Refrigerator",
    url: "Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTE Plus Inverter.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTE",
    price: "111100",
    image: "assets/img/products/Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTE.png",
    category: "Refrigerator",
    url: "Dawlance Glass Door Refrigerator 13 CFT 9169 WB AVANTEhtml",
    brand: "Dawlance"
  },
  {
    name: "Kenwood Sapphire Series Refrigerator (KRF-24457 GD)",
    price: "112989",
    image: "assets/img/products/Kenwood Sapphire Series Refrigerator KRF-24457 GD - 13 Cuft.webp",
    category: "Refrigerator",
    url: "Kenwood Sapphire Series Refrigerator KRF-24457 GD - 13 Cuft.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood Refrigerator Krf-22257 220-L (VCM) SHL Classic Plus",
    price: "77092",
    image: "assets/img/products/Kenwood Refrigerator Krf-22257 220-L (VCM) SHL Classic Plus.webp",
    category: "Refrigerator",
    url: "Kenwood Refrigerator Krf-22257 220-L (VCM) SHL Classic Plus.html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood Inverter Glass Door Freezer-on-top Refrigerator 18-CFT (KRF-26657)",
    price: "338350",
    image: "assets/img/products/Kenwood Inverter Glass Door Freezer-on-top Refrigerator 18-CFT (KRF-26657).webp",
    category: "Refrigerator",
    url: "Kenwood Inverter Glass Door Freezer-on-top Refrigerator 18-CFT (KRF-26657).html",
    brand: "Kenwood"
  },
  {
    name: "Kenwood KRF-25557 New Classic Plus VCM Refrigerator - 15 CFT",
    price: "107789",
    image: "assets/img/products/Kenwood KRF-25557 New Classic Plus VCM Refrigerator - 15 CFT.webp",
    category: "Refrigerator",
    url: "Kenwood KRF-25557 New Classic Plus VCM Refrigerator - 15 CFT.html",
    brand: "Kenwood"
  },
  {
    name: "Orient Refrigirator Marvel GD INV 350 Ltr",
    price: "69044",
    image: "assets/img/products/Orient Refrigirator Marvel GD INV 350 Ltr.webp",
    category: "Refrigerator",
    url: "Orient Refrigirator Marvel GD INV 350 Ltr.html",
    brand: "Orient"
  },
  {
    name: "Orient Refrigirator Crystal GD 380 Ltr",
    price: "107000",
    image: "assets/img/products/Orient Refrigirator Crystal GD 380 Ltr.webp",
    category: "Refrigerator",
    url: "Orient Refrigirator Crystal GD 380 Ltr.html",
    brand: "Orient"
  },
  {
    name: "Orient Refrigirator Grand VCM 545 Ltr",
    price: "114500",
    image: "assets/img/products/Orient Refrigirator Grand VCM 545 Ltr.webp",
    category: "Refrigerator",
    url: "Orient Refrigirator Grand VCM 545 Ltr.html",
    brand: "Orient"
  },
  {
    name: "Orient Refrigirator LVO VCM 260 Ltr",
    price: "77400",
    image: "assets/img/products/Orient Refrigirator LVO VCM 260 Ltr.webp",
    category: "Refrigerator",
    url: "Orient Refrigirator LVO VCM 260 Ltr.html",
    brand: "Orient"
  },
  {
    name: "PEL Refrigerator PRGD-2000 - 6 CFT",
    price: "69044",
    image: "assets/img/products/PEL Refrigerator PRGD-2000 - 6 CFT.webp",
    category: "Refrigerator",
    url: "PEL Refrigerator PRGD-2000 - 6 CFT.html",
    brand: "Pel"
  },
  {
    name: "Pel Glass Door Refrigerator - 16 CFT",
    price: "121988",
    image: "assets/img/products/Pel PRGD 22250 Glass Door Refrigerator - 16 CFT.webp",
    category: "Refrigerator",
    url: "Pel Glass Door Refrigerator - 16 CFT.html",
    brand: "Pel"
  },
  {
    name: "Pel Prinvo Inverteron Curved Glass Door Refrigerator - 16 CFT",
    price: "133487",
    image: "assets/img/products/Pel Prinvo GD 22250 Inverteron Curved Glass Door Refrigerator - 16 CFT.webp",
    category: "Refrigerator",
    url: "Pel Prinvo Inverteron Curved Glass Door Refrigerator - 16 CFT.html",
    brand: "Pel"
  },
  {
    name: "Pel Refrigerator PRL 2000 - 6 CFT",
    price: "65992",
    image: "assets/img/products/PEL Refrigerator PRGD-2000 - 6 CFT.webp",
    category: "Refrigerator",
    url: "Pel Refrigerator PRL 2000 - 6 CFT.html",
    brand: "Pel"
  },
  {
    name: "Boss Twin Tub Washing Machine KE-8500-BS (Gray) 9-Kg",
    price: "43430",
    image: "assets/img/products/Boss Twin Tub Washing Machine KE-8500-BS (Gray) 9-Kg.webp",
    category: "washingmachine",
    url: "Boss Twin Tub Washing Machine KE-8500-BS (Gray) 9-Kg.html",
    brand: "Boss"
  },
  {
    name: "Baby Washing Machine KE-600 (4Kg)",
    price: "25250",
    image: "assets/img/products/Baby Washing Machine KE-600 (4Kg).webp",
    category: "washingmachine",
    url: "Baby Washing Machine KE-600 (4Kg).html",
    brand: "Boss"
  },
  {
    name: "Boss Single Washing Machine K.E 4500-BS (Pure White Built In Sink) 12Kg",
    price: "29290",
    image: "assets/img/products/Boss Single Washing Machine K.E 4500-BS (Pure White Built In Sink) 12Kg.webp",
    category: "washingmachine",
    url: "Boss Single Washing Machine K.E 4500-BS (Pure White Built In Sink) 12Kg.html",
    brand: "Boss"
  },
  {
    name: "Boss Spin Dryer KE-400+BS-White 07Kg",
    price: "23735",
    image: "assets/img/products/Boss Spin Dryer KE-400+BS-White 07Kg.webp",
    category: "washingmachine",
    url: "Boss Spin Dryer KE-400+BS-White 07Kg.html",
    brand: "Boss"
  },
  {
    name: "Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg",
    price: "45450",
    image: "assets/img/products/Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg.webp",
    category: "washingmachine",
    url: "Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance DW-6550 Glass Lid Washing Machine 8KG",
    price: "59590",
    image: "assets/img/products/Dawlance DW-6550 Glass Lid Washing Machine 8KG.webp",
    category: "washingmachine",
    url: "Dawlance DW-6550 Glass Lid Washing Machine 8KG.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance DWT 270 C LVS+ Washing Machine 12KG",
    price: "117160",
    image: "assets/img/products/Dawlance DWT 270 C LVS+ Washing Machine 12KG.webp",
    category: "washingmachine",
    url: "Dawlance DWT 270 C LVS+ Washing Machine 12KG.html",
    brand: "Dawlance"
  },
  {
    name: "Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg",
    price: "45450",
    image: "assets/img/products/Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg.webp",
    category: "washingmachine",
    url: "Dawlance Single Tub Washing Machine DW-9100 CLEAR LID 12kg.html",
    brand: "Dawlance"
  },
  {
    name: "PEL Washing Machine PWMS 8050 - 8Kg",
    price: "34835",
    image: "assets/img/products/PEL Washing Machine PWMS 8050 - 8Kg.webp",
    category: "washingmachine",
    url: "PEL Washing Machine PWMS 8050 - 8Kg.html",
    brand: "Pel"
  },
  {
    name: "PEL PAWM-1100i Fully Auto Washing Machine - 11 KG",
    price: "114827",
    image: "assets/img/products/PEL PAWM-1100i Fully Auto Washing Machine - 11 KG.webp",
    category: "washingmachine",
    url: "PEL PAWM-1100i Fully Auto Washing Machine - 11 KG.html",
    brand: "Pel"
  },
  {
    name: "PEL PWMS-1050 Semi Auto Twin Tub Washing Machine - 10Kg",
    price: ".40746",
    image: "assets/img/products/PEL PWMS-1050 Semi Auto Twin Tub Washing Machine - 10Kg.webp",
    category: "washingmachine",
    url: "PEL PWMS-1050 Semi Auto Twin Tub Washing Machine - 10Kg.html",
    brand: "Pel"
  },
  {
    name: "PEL Washing Machine Fully Auto PAWM-900",
    price: "88176",
    image: "assets/img/products/PEL Washing Machine Fully Auto PAWM-900.webp",
    category: "washingmachine",
    url: "PEL Washing Machine Fully Auto PAWM-900.html",
    brand: "Pel"
  },
  {
    name: "Samsung Top Load Washing Machine WA-12CG5441BY - 12KG",
    price: "202000",
    image: "assets/img/products/Samsung Top Load Washing Machine WA-12CG5441BY - 12KG.webp",
    category: "washingmachine",
    url: "Samsung Top Load Washing Machine WA-12CG5441BY - 12KG.html",
    brand: "Samsung"
  },
  {
    name: "Samsung Fully-Automatic Front Load Washing Machine WW70J3283",
    price: "161600",
    image: "assets/img/products/Samsung Fully-Automatic Front Load Washing Machine WW70J3283.webp",
    category: "washingmachine",
    url: "Samsung Fully-Automatic Front Load Washing Machine WW70J3283.html",
    brand: "Samsung"
  },
  {
    name: "Samsung Washing Machine WA90T5260 Top Load 9kg",
    price: "141400",
    image: "assets/img/products/Samsung Washing Machine WA90T5260 Top Load 9kg.webp",
    category: "washingmachine",
    url: "Samsung Washing Machine WA90T5260 Top Load 9kg.html",
    brand: "Samsung"
  },
  {
    name: "Samsung WA13T5260BVURT Top Load Washing Machine (13 Kg)",
    price: "202000",
    image: "assets/img/products/Samsung WA13T5260BVURT Top Load Washing Machine (13 Kg).webp",
    category: "washingmachine",
    url: "Samsung WA13T5260BVURT Top Load Washing Machine (13 Kg).html",
    brand: "Samsung"
  },
  {
    name: "Homage Water Dispenser HWD-49332 P - Plastic, 3 Tap With Ref",
    price: "45450",
    image: "assets/img/products/Homage Water Dispenser HWD-49332 P - Plastic, 3 Tap With Ref.webp",
    category: "waterdispenser",
    url: "Homage Water Dispenser HWD-49332 P - Plastic, 3 Tap With Ref.html",
    brand: "Homage"
  },
  {
    name: "Homage 3 Taps Glass Door Water Dispenser Blue - HWD-49432",
    price: "46460",
    image: "assets/img/products/Homage 3 Taps Glass Door Water Dispenser Blue - HWD-49432.webp",
    category: "waterdispenser",
    url: "Homage 3 Taps Glass Door Water Dispenser Blue - HWD-49432.html",
    brand: "Homage"
  },
  {
    name: "Homage HWD-49331P Water Dispenser Without Refrigerator Cabinet",
    price: "40450",
    image: "assets/img/products/Homage HWD-49331P Water Dispenser Without Refrigerator Cabinet.webp",
    category: "waterdispenser",
    url: "Homage HWD-49331P Water Dispenser Without Refrigerator Cabinet.html",
    brand: "Homage"
  },
  {
    name: "Homage Table Top Water Dispenser HWD-49320",
    price: "40400",
    image: "assets/img/products/Homage Table Top Water Dispenser HWD-49320.webp",
    category: "waterdispenser",
    url: "Homage Table Top Water Dispenser HWD-49320.html",
    brand: "Homage"
  },
  {
    name: "PEL Water Dispenser PWD-425 Flat GD",
    price: "48490",
    image: "assets/img/products/PEL Water Dispenser PWD-425 Flat GD.webp",
    category: "waterdispenser",
    url: "PEL Water Dispenser PWD-425 Flat GD.html",
    brand: "Pel"
  },
  {
    name: "PEL 316 Premier Water Dispenser",
    price: "48700",
    image: "assets/img/products/PEL 316 Premier Water Dispenser.webp",
    category: "waterdispenser",
    url: "PEL 316 Premier Water Dispenser.html",
    brand: "Pel"
  },
  {
    name: "PEL Table-Top Classic 115 Water Dispenser",
    price: "38850",
    image: "assets/img/products/PEL Table-Top Classic 115 Water Dispenser.webp",
    category: "waterdispenser",
    url: "PEL Table-Top Classic 115 Water Dispenser.html",
    brand: "Pel"
  },
  {
    name: "Pel Water Dispenser PWD-315 Smart",
    price: "48470",
    image: "assets/img/products/Pel Water Dispenser PWD-315 Smart.webp",
    category: "waterdispenser",
    url: "Pel Water Dispenser PWD-315 Smart.html",
    brand: "Pel"
  }
];
          const product1Select = document.getElementById('product1');
          const product2Select = document.getElementById('product2');
          const comparisonResults = document.getElementById('comparison-results');
          
          // Populate first dropdown
          products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            product1Select.appendChild(option);
          });
          
          // When product1 changes
          product1Select.addEventListener('change', function () {
            const selectedProduct = products.find(p => p.name === this.value);
            if (!selectedProduct) return;
          
            // Reset and enable second dropdown
            product2Select.innerHTML = '<option value="" selected disabled>Select Second Product</option>';
            product2Select.disabled = false;
          
            // Populate second dropdown with products of same category but different name
            products.forEach(product => {
              if (
                product.category === selectedProduct.category &&
                product.name !== selectedProduct.name
              ) {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = product.name;
                product2Select.appendChild(option);
              }
            });
          
            // Hide previous result
            comparisonResults.classList.add('d-none');
          });
          
          // When product2 changes, show comparison
          product2Select.addEventListener('change', function () {
            const p1 = products.find(p => p.name === product1Select.value);
            const p2 = products.find(p => p.name === product2Select.value);
          
            if (p1 && p2) {
              document.getElementById('product1-name').textContent = p1.name;
              document.getElementById('product1-price').textContent = `Rs. ${Number(p1.price).toLocaleString()}`;
              document.getElementById('product1-brand').textContent = p1.brand;
              document.getElementById('product1-category').textContent = p1.category;
              document.getElementById('product1-img').src = p1.image;
            
              document.getElementById('product2-name').textContent = p2.name;
              document.getElementById('product2-price').textContent = `Rs. ${Number(p2.price).toLocaleString()}`;
              document.getElementById('product2-brand').textContent = p2.brand;
              document.getElementById('product2-category').textContent = p2.category;
              document.getElementById('product2-img').src = p2.image;
            
              comparisonResults.classList.remove('d-none');
            }
          });