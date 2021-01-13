dataSetVersion = "2021-01-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Team",
    key: "team",
    tooltip: "Check this to restrict to certain fielded teams.",
    checked: false,
    sub: [
       { name: "Anglerfish Team", key: "anglerfish" },
       { name: "Turtle Team", key: "turtle" },
       { name: "Hippo Team", key: "hippo" },
       { name: "Rabbit Team", key: "rabbit" },
       { name: "Duck Team", key: "duck" },
       { name: "Mallard Team", key: "mallard" },
       { name: "Leopon Team", key: "leopon" },
       { name: "Anteater Team", key: "anteater" },
       { name: "Shark Team", key: "shark" },
       { name: "St. Gloriana Girls High School", key: "gloriana" },
       { name: "Saunders Girls High School", key: "saunders" },
       { name: "Anzio Girls High School", key: "anzio" },
       { name: "Pravda Girls High School", key: "pravda" },
       { name: "Kuromorimine Girls High School", key: "kuromormine" },
       { name: "Chi-Ha-Tan Academy", key: "chihatan" },
       { name: "Jatkosota High School", key: "finland" },
       { name: "All-Stars University Team", key: "allstars" },
       { name: "Bellwall Academy", key: "bellwall"  },
       {
         name: "Tatenashi High School",
         key: "tatenashi"
       },
       {
         name: "Count High School",
         key: "count"
       },
       {
         name: "Maginot Girls' Academy",
         key: "maginot"
       },
       {
         name: "Bonple High School",
         key: "bonple"
       },
       {
         name: "Blue Division High School",
         key: "blue"
       },
       {
         name: "Koala Forest Academy",
         key: "koala"
       },
       {
         name: "Japan Sensha-Dō Federation",
         key: "senshado"
       }
      ]
  },
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to restrict to certain schools.",
    checked: false,
    sub: [
       {
         name: "Ooarai Girls Academy",
         key: "ooaraischool"
       },
       {
         name: "St. Gloriana Girls High School",
         key: "glorianaschool"
       },
       {
         name: "Saunders Girls High School",
         key: "saundersschool"
       },
       {
         name: "Anzio Girls High School",
         key: "anzioschool"
       },
       {
         name: "Pravda Girls High School",
         key: "pravdaschool"
       },
       {
         name: "Kuromorimine Girls High School",
         key: "kuromormineschool"
       },
       {
         name: "Chi-Ha-Tan Academy",
         key: "chihatanschool"
       },
       {
         name: "Jatkosota High School",
         key: "finlandschool"
       },
       {
         name: "Bellwall Academy",
         key: "bellwallschool"
       },
       {
         name: "Tatenashi High School",
         key: "tatenashischool"
       },
       {
         name: "Count High School",
         key: "countschool"
       },
       {
         name: "Maginot Girls' Academy",
         key: "maginotschool"
       },
       {
         name: "Bonple High School",
         key: "bonpleschool"
       },
       {
         name: "Blue Division High School",
         key: "blueschool"
       },
       {
         name: "Koala Forest Academy",
         key: "koalaschool"
       }
      ]
  },
  {
    name: "Remove non main cast",
    key: "pleb",
    tooltip: "This adds manga & OVA specific characters that aren't as well known."
  },
];

dataSet[dataSetVersion].characterData = [
 {
   name: "Miho Nishizumi",
   img: "Miho_Victory.png",
   opts: {
     team: ['anglerfish'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Saori Takebe",
   img: "Saoriofficial.png",
   opts: {
     team: ['anglerfish'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Hana Isuzu",
   img: "Hanaofficial.png",
   opts: {
     team: ['anglerfish'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Yukari Akiyama",
   img: "Yukariofficial.png",
   opts: {
     team: ['anglerfish'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Mako Reizi",
   img: "Makoofficial.png",
   opts: {
     team: ['anglerfish'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Anzu Kadotani",
   img: "AnzuOfficial.png",
   opts: {
     team: ['turtle'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Momo Kawashima",
   img: "Momoofficial.png",
   opts: {
     team: ['turtle'],
     school: ['ooaraischool'],
     pleb: false
   }
 },
 {
   name: "Yuzu Koyama",
   img: "Yuzuofficial.png",
   opts: {
     team: ['turtle'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Erwin",
   img: "Erwinofficial.png",
   opts: {
     team: ['hippo'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Caesar",
   img: "Caesarofficial.png",
   opts: {
     team: ['hippo'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Saemonza",
   img: "Saemonzaofficial.png",
   opts: {
     team: ['hippo'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Oryou",
   img: "Oryouofficial.png",
   opts: {
     team: ['hippo'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Azusa Sawa",
   img: "Azusaofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Ayumi Yamagou",
   img: "Ayumiofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Aya Oono",
   img: "Ayaofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Yuuki Utsugi",
   img: "Yuukiofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Karina Sakaguchi",
   img: "Karinaofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Saki Maruyama",
   img: "Sakiofficial.png",
   opts: {
     team: ['rabbit'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Noriko Isobe",
   img: "Norikoofficial.png",
   opts: {
     team: ['duck'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Taeko Kondou",
   img: "Taekoofficial.png",
   opts: {
     team: ['duck'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Shinobu Kawanishi",
   img: "Shinobuofficial.png",
   opts: {
     team: ['duck'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Akebi Sasaki",
   img: "Akebiofficial.png",
   opts: {
     team: ['duck'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Midoriko Sono",
   img: "Sodokoofficial.png",
   opts: {
     team: ['mallard'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Moyoko Gotou",
   img: "Moyokoofficial.png",
   opts: {
     team: ['mallard'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Nozomi Konparu",
   img: "Nozomiofficial.png",
   opts: {
     team: ['mallard'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Satoko Nakajima",
   img: "Nakajimaofficial.png",
   opts: {
     team: ['leopon'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Hoshino",
   img: "Hoshinoofficial.png",
   opts: {
     team: ['leopon'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Suzuki",
   img: "Suzukiofficial.png",
   opts: {
     team: ['leopon'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Tsuchiya",
   img: "Tsuchiya.png",
   opts: {
     team: ['leopon'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Nekota",
   img: "Nakotaofficial.png",
   opts: {
     team: ['anteater'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Piyotan",
   img: "Piyotanofficial.png",
   opts: {
     team: ['anteater'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Momoga",
   img: "Momogaofficial.png",
   opts: {
     team: ['anteater'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Ogin",
   img: "Ogin.png",
   opts: {
     team: ['shark'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Murakami",
   img: "Murakami.png",
   opts: {
     team: ['shark'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Cutlass",
   img: "Cutlass.png",
   opts: {
     team: ['shark'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Flint",
   img: "Flint.png",
   opts: {
     team: ['shark'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Rum",
   img: "Rum.png",
   opts: {
     team: ['shark'],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Taiga Ou",
   img: "Taiga_Ou_1.png",
   opts: {
     team: [''],
     school: ['ooaraischool'],
     pleb: false
  }
 },
 {
   name: "Sadoka",
   img: "Sadoka1.png",
   opts: {
     team: [''],
     school: ['ooaraischool'],
     pleb: true
  }
 },
 {
   name: "Mazoe",
   img: "Mazoe.png",
   opts: {
     team: [''],
     school: ['ooaraischool'],
     pleb: true
  }
 },
 {
   name: "Darjeeling",
   img: "025_darjeeling.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Orange Pekoe",
   img: "Orangepekoeofficial.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Assam",
   img: "Assamofficial.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Rukuriri",
   img: "Rukuririofficial.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Nilgiri",
   img: "Nilgiri_transp.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Rosehip",
   img: "Rosehipnormaluniform.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: false
  }
 },
 {
   name: "Earl Grey",
   img: "Earl_Grey.png",
   opts: {
     team: ['gloriana'],
     school: ['glorianaschool'],
     pleb: true
   }
 },
 {
   name: "Kay",
   img: "Kay.png",
   opts: {
     team: ['saunders'],
     school: ['saundersschool'],
     pleb: false
   }
 },
 {
   name: "Alisa",
   img: "Alisa.png",
   opts: {
     team: ['saunders'],
     school: ['saundersschool'],
     pleb: false
   }
 },
 {
   name: "Naomi",
   img: "Naomi.png",
   opts: {
     team: ['saunders'],
     school: ['saundersschool'],
     pleb: false
   }
 },
 {
   name: "Helmet-Chan",
   img: "Helmet_Chan_Portrait.png",
   opts: {
     team: ['saunders'],
     school: ['saundersschool'],
     pleb: true
   }
 },
 {
   name: "Anchovy",
   img: "Anchovy.png",
   opts: {
     team: ['anzio'],
     school: ['anzioschool'],
     pleb: false
   }
 },
 {
   name: "Carpaccio",
   img: "Carpaccio.png",
   opts: {
     team: ['anzio'],
     school: ['anzioschool'],
     pleb: false
   }
 },
 {
   name: "Pepperoni",
   img: "Peperonie.png",
   opts: {
     team: ['anzio'],
     school: ['anzioschool'],
     pleb: false
   }
 },
 {
   name: "Amaretto",
   img: "Siko_Profile.png",
   opts: {
     team: ['anzio'],
     school: ['anzioschool'],
     pleb: true
   }
 },
 {
   name: "Katyusha",
   img: "Katyusha.png",
   opts: {
     team: ['pravda'],
     school: ['pravdaschool'],
     pleb: false
   }
 },
 {
   name: "Nonna",
   img: "Nonna.png",
   opts: {
     team: ['pravda'],
     school: ['pravdaschool'],
     pleb: false
   }
 },
 {
   name: "Nina",
   img: "Ninanormaluniforn.png",
   opts: {
     team: ['pravda'],
     school: ['pravdaschool'],
     pleb: false
   }
 },
 {
   name: "Alina",
   img: "Alina_with_KV-tan.png",
   opts: {
     team: ['pravda'],
     school: ['pravdaschool'],
     pleb: false
   }
 },
 {
   name: "Klara",
   img: "Klaraofficial.png",
   opts: {
     team: ['pravda'],
     school: ['pravdaschool'],
     pleb: false
   }
 },
 {
   name: "Maho Nishizumi",
   img: "Mahoofficial.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: false
   }
 },
 {
   name: "Erika Itsumi",
   img: "Erikaofficial.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: false
   }
 },
 {
   name: "Koume Akaboshi",
   img: "Koume1.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: false
   }
 },
 {
   name: "Emi Kojima",
   img: "EmiKojima.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Geshiko",
   img: "Panther_Commander_Portrait_HD.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Sangou",
   img: "Panzer_III_Commander.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Mauko",
   img: "Maus_Commander_Portrait-0.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Leila Rou",
   img: "Leila_Rou.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Sheska",
   img: "Sheska_Profile.png",
   opts: {
     team: ['kuromormine'],
     school: ['kuromormineschool'],
     pleb: true
   }
 },
 {
   name: "Kinuyo Nishi",
   img: "Nishi.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Fukuda",
   img: "Fukuda.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Haru Tamada",
   img: "Haru_Tamada.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Hosomi",
   img: "Hosomiofficials.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Nagura",
   img: "Nagura.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Hamada",
   img: "Hamada.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Teramoto",
   img: "Teramoto.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Ikeda",
   img: "Ikeda.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Kubota",
   img: "Kubota.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Nishihara",
   img: "Nishihara.png",
   opts: {
     team: ['chihatan'],
     school: ['chihatanschool'],
     pleb: false
   }
 },
 {
   name: "Mika",
   img: "Micahofficial.png",
   opts: {
     team: ['finland'],
     school: ['finlandschool'],
     pleb: false
   }
 },
 {
   name: "Aki",
   img: "Akiofficial.png",
   opts: {
     team: ['finland'],
     school: ['finlandschool'],
     pleb: false
   }
 },
 {
   name: "Mikko",
   img: "Mikkoofficial.png",
   opts: {
     team: ['finland'],
     school: ['finlandschool'],
     pleb: false
   }
 },
 {
   name: "Alice Shimada",
   img: "Shimadaofficial.png",
   opts: {
     team: ['allstars'],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Azumi",
   img: "Azumiofficial.png",
   opts: {
     team: ['allstars'],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Megumi",
   img: "Megumiofficial.png",
   opts: {
     team: ['allstars'],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Rumi",
   img: "Rumiofficial.png",
   opts: {
     team: ['allstars'],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Marie",
   img: "MarieTransp.png",
   opts: {
     team: ['bcfreedom'],
     school: ['bcfreedomschool'],
     pleb: false
   }
 },
 {
   name: "Andou",
   img: "AndouTransp.png",
   opts: {
     team: ['bcfreedom'],
     school: ['bcfreedomschool'],
     pleb: false
   }
 },
 {
   name: "Oshida",
   img: "OshidaTransp.png",
   opts: {
     team: ['bcfreedom'],
     school: ['bcfreedomschool'],
     pleb: false
   }
 },
 {
   name: "Asparagus",
   img: "Asparagus-0.png",
   opts: {
     team: ['bcfreedom'],
     school: ['bcfreedomschool'],
     pleb: true
   }
 },
 {
   name: "Emi Nakasuga",
   img: "Emi_Nagasuka_Profile_Mk_2.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Hitomi Yuzumoto",
   img: "Hitomi_Yuzumoto_Profile.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Kita",
   img: "Kita_Color.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Takami",
   img: "Takami.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Nagisa Shiratori",
   img: "Nagisa_Shiratori_Color.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Neko Yamamori",
   img: "Neko_Yamamori_Profile.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Chifuyu Doi",
   img: "Doi_Chifuyu_Profile.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Youko Minami",
   img: "Youkuo-minami.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Kashiwaba Sisters",
   img: "Kawashiba_Sisters_Profile.png",
   opts: {
     team: ['bellwall'],
     school: ['bellwallschool'],
     pleb: true
   }
 },
 {
   name: "Shizuka Tsuruki",
   img: "Shizuka1.png",
   opts: {
     team: ['tatenashi'],
     school: ['tatenashischool'],
     pleb: true
   }
 },
 {
   name: "Rin Matsukaze",
   img: "Rin.png",
   opts: {
     team: ['tatenashi'],
     school: ['tatenashischool'],
     pleb: true
   }
 },
 {
   name: "Haruka Endou",
   img: "Harukaendou.png",
   opts: {
     team: ['tatenashi'],
     school: ['tatenashischool'],
     pleb: false
   }
 },
 {
   name: "Noemi Kohiyama",
   img: "NoemiTranspColored.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Anna Masukura",
   img: "AnnaTrans.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Nachigami Sisters",
   img: "NachigamiTwins.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Marina Constantinescu",
   img: "MarinaConstantinescu.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Mizuki Ikarashi",
   img: "MizukiTrans.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Witch Senpai",
   img: "SenpaiHotTransp.png",
   opts: {
     team: ['count'],
     school: ['countschool'],
     pleb: true
   }
 },
 {
   name: "Éclair",
   img: "Eclair.png",
   opts: {
     team: ['maginot'],
     school: ['maginotschool'],
     pleb: true
   }
 },
 {
   name: "Fondue",
   img: "Fondue.png",
   opts: {
     team: ['maginot'],
     school: ['maginotschool'],
     pleb: true
   }
 },
 {
   name: "Galette",
   img: "Galette.png",
   team: ['maginot'],
   school: ['maginotschool'],
   pleb: true
 },
 {
   name: "Madeleine",
   img: "Madeleine.png",
   opts: {
     team: ['maginot'],
     school: ['maginotschool'],
     pleb: true
   }
 },
 {
   name: "Jajka",
   img: "Jajka1.png",
   opts: {
     team: ['bonple'],
     school: ['bonpleschool'],
     pleb: true
   }
 },
 {
   name: "Uszka",
   img: "UszkaTransparant.png",
   opts: {
     team: ['bonple'],
     school: ['bonpleschool'],
     pleb: true
   }
 },
 {
   name: "Pierogi",
   img: "Pierogi.png",
   opts: {
     team: ['bonple'],
     school: ['bonpleschool'],
     pleb: true
   }
 },
 {
   name: "Maiko",
   img: "Maiko.png",
   opts: {
     team: ['bonple'],
     school: ['bonpleschool'],
     pleb: true
   }
 },
 {
   name: "El",
   img: "ElTransparant.png",
   opts: {
     team: ['blue'],
     school: ['blueschool'],
     pleb: false
   }
 },
 {
   name: "Tristana",
   img: "Tristana.png",
   opts: {
     team: ['blue'],
     school: ['blueschool'],
     pleb: false
   }
 },
 {
   name: "Viridiana",
   img: "Viridiana.png",
   opts: {
     team: ['blue'],
     school: ['blueschool'],
     pleb: false
   }
 },
 {
   name: "Wallaby",
   img: "Wallaby.png",
   opts: {
     team: ['koala'],
     school: ['koalaschool'],
     pleb: false
   }
 },
 {
   name: "Platypus",
   img: "Kamonohashi.png",
   opts: {
     team: ['koala'],
     school: ['koalaschool'],
     pleb: false
   }
 },
 {
   name: "Ami Chōno",
   img: "AmiTransp.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Shiho Nishizumi",
   img: "Shiho.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Chiyo Shimada",
   img: "Shimada_screenshot.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Kanon Sasagawa",
   img: "KanonTransp.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Remi Takashima",
   img: "RemiTransp.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Hibiki Inatomi",
   img: "HibikiTransp.png",
   opts: {
     team: [''],
     school: [''],
     pleb: false
   }
 },
 {
   name: "Kikuyo Idegami",
   img: "KikuyoKMM.png",
   opts: {
     team: [''],
     school: [''],
     pleb: true
   }
 }
];
