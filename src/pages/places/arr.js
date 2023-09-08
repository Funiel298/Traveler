const countrysideImages = [
  {
    name: "Switzerland",
    code: "CH",
    description: "The picturesque Swiss countryside with rolling hills and mountains.",
    imageUrl: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    littleInformation: "Switzerland is renowned for its pristine landscapes, which encompass the majestic Alps, serene lakes, and charming villages. It boasts a high standard of living, efficient public transportation, and a legacy of precision craftsmanship.",
    geography: "Switzerland is a landlocked country nestled in the heart of Europe. Its geography is dominated by the towering Alps in the south and the Jura mountains in the northwest. These natural features have heavily influenced its climate, culture, and way of life. The country's numerous lakes, including Lake Geneva and Lake Zurich, contribute to its breathtaking scenery."
  },
  {
    name: "Italy",
    code: "IT",
    description: "Beautiful Tuscany with its rolling hills, vineyards and cypress trees.",
    imageUrl: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Italy is a country of unparalleled cultural heritage, famous for its art, architecture, and exquisite cuisine. Tuscany, with its rolling hills, iconic cypress trees, and vineyards, represents the quintessential Italian rural beauty.",
    geography: "Italy is a boot-shaped peninsula in the Mediterranean Sea, surrounded by the Alps in the north. Tuscany lies in the central part of the country and is characterized by its hilly terrain. The region's temperate climate and fertile soil have made it a hub for agriculture and wine production."
  },
  {
    name: "France",
    code: "FR",
    description: "Charming French countryside with fields of lavender and sunflowers.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "France is celebrated for its rich history, art, and culinary excellence. The French countryside is a haven of natural beauty, from the iconic lavender fields of Provence to the sunflower-dotted landscapes of the Loire Valley.",
    geography: "France is located in Western Europe and is characterized by its diverse geography. The countryside varies from the rugged coastlines of Brittany to the gentle slopes of Burgundy. The country is also known for its extensive vineyards, particularly in regions like Bordeaux and Champagne."
  },
  {
    name: "Spain",
    code: "ES",
    description: "Beautiful Spanish countryside with olive groves and rolling hills.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Spain is known for its vibrant culture, historic cities, and diverse landscapes. The Spanish countryside, with its olive groves, vineyards, and traditional villages, offers a glimpse into the country's rural charm.",
    geography: "Spain's geography is diverse, ranging from the Pyrenees mountains in the north to the sun-soaked coasts along the Mediterranean Sea. The countryside is marked by fertile plains, rolling hills, and picturesque valleys. Each region has its own unique climate and cultural traditions."
  },
  {
    name: "United Kingdom",
    code: "GB",
    description: "The stunning Scottish Highlands with its rugged landscapes and scenic lochs.",
    imageUrl: "https://images.unsplash.com/photo-1609673497536-6c723cfbc28f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    littleInformation: "The United Kingdom is a land of contrasts, with bustling cities and serene countryside. The Scottish Highlands are famous for their rugged beauty, characterized by majestic mountains, glacial valleys, and pristine lochs.",
    geography: "The United Kingdom comprises four countries: England, Scotland, Wales, and Northern Ireland. The Scottish Highlands are part of Scotland and are known for their dramatic landscapes shaped by glaciers and volcanic activity. The region is sparsely populated and home to various species of wildlife."
  },
  {
    name: "Ireland",
    code: "IE",
    description: "Green rolling hills of the Irish countryside with traditional stone walls.",
    imageUrl: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXJlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    littleInformation: "Ireland is known for its lush landscapes, ancient history, and vibrant culture. The Irish countryside is characterized by its rolling green hills, quaint villages, and iconic stone walls.",
    geography: "Ireland, also known as the Emerald Isle, is an island nation located in the North Atlantic. The countryside is marked by its fertile plains, coastal cliffs, and scattered lakes. The country's weather is influenced by the surrounding seas, resulting in a temperate maritime climate."
  },
  {
    name: "Greece",
    code: "GR",
    description: "Picturesque Greek countryside with white-washed houses and blue-domed churches.",
    imageUrl: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    littleInformation: "Greece is a land of ancient history, mythology, and stunning landscapes. The Greek countryside is a tapestry of olive groves, charming villages, and iconic blue-domed churches.",
    geography: "Greece is situated at the crossroads of Europe, Asia, and Africa, with a vast coastline along the Mediterranean Sea. The Greek countryside varies from mountainous regions to fertile plains. The country's islands, including Crete and Rhodes, contribute to its diverse geography."
  },
  {
    name: "Portugal",
    code: "PT",
    description: "Stunning landscapes of the Douro Valley in Portugal, known for its wine production.",
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHVnYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Portugal offers a blend of history, culture, and natural beauty. The Douro Valley is renowned for its terraced vineyards and wine production, making it a UNESCO World Heritage site.",
    geography: "Portugal occupies the westernmost part of the Iberian Peninsula and has a diverse geography. The Douro Valley is a prime example of the country's diverse landscapes, with its steep hillsides along the Douro River. Portugal's coastline along the Atlantic Ocean is dotted with picturesque beaches."
  },
  {
    name: "Germany",
    code: "DE",
    description: "Picturesque Bavarian countryside with its traditional architecture and rolling hills.",
    imageUrl: "https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    littleInformation: "Germany is known for its engineering prowess, historic sites, and captivating landscapes. The Bavarian countryside, with its traditional villages, rolling hills, and charming architecture, reflects the country's rich heritage.",
    geography: "Germany is located in Central Europe and has a diverse geography. The Bavarian region is characterized by its alpine landscapes and charming villages. The country is also known for its river valleys, such as the Rhine and Danube, and its expansive forests like the Black Forest."
  },
  {
    name: "Belarus",
    code: "BY",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1597986775867-1d871fad81fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Belarus is known for its historical sites, welcoming locals, and natural beauty. The countryside features a mix of picturesque landscapes, charming towns, and cultural heritage.",
    geography: "Belarus is a landlocked country in Eastern Europe, characterized by its vast forests, rolling plains, and thousands of lakes. The countryside showcases diverse ecosystems, including wetlands and primeval woodlands, making it a haven for nature enthusiasts."
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1611474494831-363035161328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2F6YWtoc3RhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Kazakhstan is the world's largest landlocked country, known for its vast steppes, diverse culture, and historical heritage. The countryside offers a unique blend of natural beauty and nomadic traditions.",
    geography: "Kazakhstan's geography encompasses the Caspian Sea to the west and the Altai Mountains to the east. The country's landscapes range from arid deserts to lush grasslands. The steppes are a defining feature of the Kazakh countryside, where nomadic herding has been a way of life for centuries."
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1629340038197-191832a53546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a3lyZ3l6c3RhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Kyrgyzstan is a country of breathtaking mountain landscapes, nomadic culture, and warm hospitality. The countryside features rugged terrain, high-altitude lakes, and yurt-dotted pastures.",
    geography: "Kyrgyzstan is nestled in the Tien Shan and Pamir-Alai mountain ranges of Central Asia. The country's landscapes are dominated by towering peaks, including the majestic Ala-Too Range. The countryside is known for its alpine meadows and pristine lakes, such as Issyk-Kul."
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1575285272212-d52e915d01c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emltYmFid2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Zimbabwe is known for its captivating wildlife, iconic landmarks, and rich cultural heritage. The countryside is a blend of open savannas, lush forests, and vibrant cities.",
    geography: "Zimbabwe is situated in southern Africa and is characterized by diverse landscapes. The country is home to the famous Victoria Falls, as well as national parks like Hwange, known for its abundant wildlife. The countryside reflects the country's history and natural beauty."
  },
  {
    name: "Russia",
    code: "RU",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVzc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Russia is the world's largest country, known for its diverse landscapes, rich history, and cultural contributions. The Russian countryside spans from the European part to Siberia, showcasing a wide range of environments.",
    geography: "Russia's geography is vast and varied, covering over one-eighth of Earth's landmass. The European part of the country features rolling plains, forests, and historic cities. Siberia, in contrast, is characterized by its immense size, taiga forests, and expansive tundra."
  },
  {
    name: "Ukraine",
    code: "UA",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1561629625-edea42c6da34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Ukraine is a country of cultural richness, historical significance, and diverse landscapes. The countryside showcases everything from fertile plains and dense forests to ancient castles and vibrant traditions.",
    geography: "Ukraine is located in Eastern Europe and boasts a varied geography. The Carpathian Mountains define its western border, while the central regions are marked by fertile steppes and the iconic Dnieper River. The countryside reflects Ukraine's complex history and cultural identity."
  },
  {
    name: "United States of America",
    code: "US",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "The United States is a nation of vastness and diversity, known for its iconic landmarks, cultural melting pot, and stunning natural landscapes. The countryside ranges from the towering Rocky Mountains to the expansive Great Plains.",
    geography: "The United States is situated in North America and is characterized by its diverse geography. The country spans from the Atlantic Ocean to the Pacific Ocean, showcasing a wide range of environments, including deserts, forests, mountains, and coastal areas."
  },
  {
    name: "Turkey",
    code: "TR",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5JTVEfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Turkey is a blend of history, culture, and breathtaking landscapes. The Turkish countryside features ancient ruins, lush valleys, and the stunning shores of the Mediterranean and Aegean Seas.",
    geography: "Turkey spans two continents, Europe and Asia, with a diverse geography to match. The Anatolian Peninsula is the Asian part and is known for its plateaus, mountains, and fertile plains. The Mediterranean and Aegean coasts offer pristine beaches and turquoise waters."
  },
  {
    name: "Brazil",
    code: "BR",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1656288227038-28aaa4f6b8ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hJTIwYnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Brazil is known for its vibrant culture, lush rainforests, and vast landscapes. The Brazilian countryside offers a mix of Amazonian wilderness, stunning beaches, and lively cities.",
    geography: "Brazil is the largest country in South America and boasts diverse geography. The Amazon Rainforest covers a significant portion of the country and is a vital part of its ecosystem. The Brazilian countryside also includes the Pantanal wetlands, tropical savannas, and coastal regions."
  },
  {
    name: "Argentina",
    code: "AR",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJnZW50aW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    littleInformation: "Argentina is celebrated for its tango music, juicy steaks, and breathtaking landscapes. The Argentine countryside features the iconic Pampas grasslands, the Andes mountains, and the captivating Iguazu Falls.",
    geography: "Argentina's geography is varied, ranging from the Andes mountains in the west to the fertile Pampas plains in the east. The countryside reflects this diversity, from the high-altitude regions of northern Argentina to the grassy plains and glaciers of Patagonia."
  },
  {
    name: "China",
    code: "CN",
    description: "The Austrian Alps with its snow-capped mountains and green valleys.",
    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    littleInformation: "China is a country steeped in history, culture, and natural wonders. The Chinese countryside offers ancient villages, vast rice terraces, and stunning landscapes such as the Karst mountains in Guilin.",
    geography: "China's geography is diverse and spans from the Himalayas in the southwest to the Gobi Desert in the north. The countryside features iconic landmarks like the Great Wall and the Yangtze River. The landscapes vary from towering peaks to serene rice paddies."
  }
];

