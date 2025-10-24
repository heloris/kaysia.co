// N8N Order Submission Webhook
const ORDER_WEBHOOK = "https://n8n.kaysia.co/webhook/order.submit";

// Veri Yapısı
const CATEGORIES = [
    { id: "pizza", name: "Pizzalar" },
    { id: "toast", name: "Ayvalık Tostu" },
    { id: "sandwich", name: "Soğuk Sandviç" },
    { id: "chicken-doner", name: "Tavuk Döner" },
    { id: "beef-doner", name: "Et Döner" },
    { id: "pasta", name: "Makarnalar" },
    { id: "manti", name: "Mantı" },
    { id: "hamburger", name: "Hamburger" },
    { id: "kofte", name: "Köfte Spesiyel" },
    { id: "aperatifler", name: "Aperatifler" },
    { id: "bistro", name: "Bistro" },
    { id: "salad", name: "Salata" },
    { id: "drinks", name: "İçecekler" }
];

const PRODUCTS = [
    // PIZZA KATEGORİSİ
    {
        id: "p1",
        categoryId: "pizza",
        name: "Margarita Yicem",
        price: 180,
        image: "Pizzalar/margarita.jpg",
        desc: "Mozarella Peyniri, Pizza Sosu, Fesleğen, Cherry Domates",
        contents: ["Pizza Sosu", "Fesleğen", "Cherry Domates"],
        options: [
            { id: "o1", label: "Small (1 Kişilik)", price: 0 },
            { id: "o2", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o3", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o4", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p2",
        categoryId: "pizza",
        name: "Mix Yicem",
        price: 240,
        image: "Pizzalar/mix-yicem-pizza.jpg",
        desc: "Mozarella Peyniri, Pizza Sosu, Sucuk, Sosis, Salam, Zeytin, Mısır, Mantar",
        contents: ["Pizza Sosu", "Sucuk", "Sosis", "Salam", "Zeytin", "Mısır", "Mantar"],
        options: [
            { id: "o5", label: "Small (1 Kişilik)", price: 0 },
            { id: "o6", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o7", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o8", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p3",
        categoryId: "pizza",
        name: "Kavurmalı Yicem",
        price: 300,
        image: "Pizzalar/kavurmali-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Dana Kavurma, Soğan, Biber, Kekik",
        contents: ["Pizza Sosu", "Dana Kavurma", "Soğan", "Biber", "Kekik"],
        options: [
            { id: "o9", label: "Small (1 Kişilik)", price: 0 },
            { id: "o10", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o11", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o12", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p4",
        categoryId: "pizza",
        name: "Tavuklu Yicem",
        price: 240,
        image: "Pizzalar/tavuklu-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Tavuk Göğsü, Mantar, Mısır, Jalapeno Biber, Kekik",
        contents: ["Pizza Sosu", "Tavuk Göğsü", "Mantar", "Mısır", "Jalapeno Biber", "Kekik"],
        options: [
            { id: "o13", label: "Small (1 Kişilik)", price: 0 },
            { id: "o14", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o15", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o16", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p5",
        categoryId: "pizza",
        name: "Dönerli Yicem",
        price: 300,
        image: "Pizzalar/donerli-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Et Döner, Mantar, Soğan, Biber, Kekik",
        contents: ["Pizza Sosu", "Et Döner", "Mantar", "Soğan", "Biber", "Kekik"],
        options: [
            { id: "o17", label: "Small (1 Kişilik)", price: 0 },
            { id: "o18", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o19", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o20", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p6",
        categoryId: "pizza",
        name: "Tonno Yicem",
        price: 260,
        image: "Pizzalar/tonno-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Ton Balığı, Domates, Soğan, Mısır",
        contents: ["Pizza Sosu", "Ton Balığı", "Domates", "Soğan", "Mısır"],
        options: [
            { id: "o21", label: "Small (1 Kişilik)", price: 0 },
            { id: "o22", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o23", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o24", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p7",
        categoryId: "pizza",
        name: "Sosisli Yicem",
        price: 240,
        image: "Pizzalar/sosisli-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Sosis, Mantar, Zeytin, Biber, Mısır, Kekik",
        contents: ["Pizza Sosu", "Sosis", "Mantar", "Zeytin", "Biber", "Mısır", "Kekik"],
        options: [
            { id: "o25", label: "Small (1 Kişilik)", price: 0 },
            { id: "o26", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o27", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o28", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p8",
        categoryId: "pizza",
        name: "Sucuklu Yicem",
        price: 240,
        image: "Pizzalar/sucuklu-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Sucuk, Mantar, Zeytin, Biber, Mısır, Kekik",
        contents: ["Pizza Sosu", "Sucuk", "Mantar", "Zeytin", "Biber", "Mısır", "Kekik"],
        options: [
            { id: "o29", label: "Small (1 Kişilik)", price: 0 },
            { id: "o30", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o31", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o32", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p9",
        categoryId: "pizza",
        name: "Diavola Yicem",
        price: 240,
        image: "Pizzalar/diavola-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Salam, Acı Sos, Mantar, Domates, Kekik",
        contents: ["Pizza Sosu", "Salam", "Acı Sos", "Mantar", "Domates", "Kekik"],
        options: [
            { id: "o33", label: "Small (1 Kişilik)", price: 0 },
            { id: "o34", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o35", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o36", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p10",
        categoryId: "pizza",
        name: "Klasik Vejeteryan",
        price: 240,
        image: "Pizzalar/klasik-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Mantar, Mısır, Biber, Zeytin, Cherry Domates",
        contents: ["Pizza Sosu", "Mantar", "Mısır", "Biber", "Zeytin", "Cherry Domates"],
        options: [
            { id: "o37", label: "Small (1 Kişilik)", price: 0 },
            { id: "o38", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o39", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o40", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p11",
        categoryId: "pizza",
        name: "4 Peynirli Yicem",
        price: 300,
        image: "Pizzalar/4-peynirli-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Ezine, Taze Kaşar, Bergama Tulumu, Fesleğen, Cherry Domates",
        contents: ["Pizza Sosu", "Ezine", "Taze Kaşar", "Bergama Tulumu", "Fesleğen", "Cherry Domates"],
        options: [
            { id: "o41", label: "Small (1 Kişilik)", price: 0 },
            { id: "o42", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o43", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o44", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p12",
        categoryId: "pizza",
        name: "Ispanak + Tulum Yicem",
        price: 250,
        image: "Pizzalar/ıspanak-tulum-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Bergama Tulumu, Taze Ispanak, Ceviz, Zeytin, Cherry Domates",
        contents: ["Pizza Sosu", "Bergama Tulumu", "Taze Ispanak", "Ceviz", "Zeytin", "Cherry Domates"],
        options: [
            { id: "o45", label: "Small (1 Kişilik)", price: 0 },
            { id: "o46", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o47", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o48", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },
    {
        id: "p13",
        categoryId: "pizza",
        name: "Brokoli Peynir Yicem",
        price: 250,
        image: "Pizzalar/brokoli-yicem.jpg",
        desc: "Mozarella, Pizza Sosu, Beyaz Peynir, Brokoli, Zeytin, Domates",
        contents: ["Pizza Sosu", "Beyaz Peynir", "Brokoli", "Zeytin", "Domates"],
        options: [
            { id: "o49", label: "Small (1 Kişilik)", price: 0 },
            { id: "o50", label: "Medium (1-2 Kişilik)", price: 60 },
            { id: "o51", label: "Large (2-3 Kişilik)", price: 120 },
            { id: "o52", label: "XLarge (3-4 Kişilik)", price: 180 }
        ],
        maxNoteLen: 120
    },

    // AYVALIK TOSTU KATEGORİSİ
    {
        id: "t1",
        categoryId: "toast",
        name: "Yicem Yengen",
        price: 170,
        image: "Ayvalik-Tostu/yicem-yengen.jpg",
        desc: "Sosis, Sucuk, Kaşar, Turşu, Ketçap, Mayonez",
        contents: ["Sosis", "Sucuk", "Kaşar", "Turşu", "Ketçap", "Mayonez"],
        options: [
            { id: "t1_o1", label: "Sade Tost", price: 0 },
            { id: "t1_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t2",
        categoryId: "toast",
        name: "Yicem Karışık",
        price: 170,
        image: "Ayvalik-Tostu/yicem-karisik.jpg",
        desc: "Kaşar, Sucuk, Salam, Sosis, Turşu, Domates, Rus Salatası, Ketçap, Mayonez",
        contents: ["Kaşar", "Sucuk", "Salam", "Sosis", "Turşu", "Domates", "Rus Salatası", "Ketçap", "Mayonez"],
        options: [
            { id: "t2_o1", label: "Sade Tost", price: 0 },
            { id: "t2_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t3",
        categoryId: "toast",
        name: "Yicem Mega Karışık",
        price: 190,
        image: "Ayvalik-Tostu/yicem-mega-karisik.jpg",
        desc: "Kaşar, Sucuk, Salam, Sosis, Jambon, Turşu, Domates, Rus Salatası, Ketçap, Mayonez",
        contents: ["Kaşar", "Sucuk", "Salam", "Sosis", "Jambon", "Turşu", "Domates", "Rus Salatası", "Ketçap", "Mayonez"],
        options: [
            { id: "t3_o1", label: "Sade Tost", price: 0 },
            { id: "t3_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t4",
        categoryId: "toast",
        name: "Yicem Süper Karışık",
        price: 220,
        image: "Ayvalik-Tostu/yicem-super-karisik.jpg",
        desc: "Çift Katlı Ekmek, Kaşar, Sucuk, Salam, Sosis, Turşu, Domates, Rus Salatası, Ketçap, Mayonez",
        contents: ["Çift Katlı Ekmek", "Kaşar", "Sucuk", "Salam", "Sosis", "Turşu", "Domates", "Rus Salatası", "Ketçap", "Mayonez"],
        options: [
            { id: "t4_o1", label: "Sade Tost", price: 0 },
            { id: "t4_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t5",
        categoryId: "toast",
        name: "Yicem Kavurma",
        price: 210,
        image: "Ayvalik-Tostu/yicem-kavurma.jpg",
        desc: "Kaşar, Kavurma (70gr), Turşu, Domates",
        contents: ["Kaşar", "Kavurma (70gr)", "Turşu", "Domates"],
        options: [
            { id: "t5_o1", label: "Sade Tost", price: 0 },
            { id: "t5_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t6",
        categoryId: "toast",
        name: "Yicem Dönerli",
        price: 300,
        image: "Ayvalik-Tostu/yicem-donerli.jpg",
        desc: "Kaşar, Et Döner (100gr), Marul, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez)",
        contents: ["Kaşar", "Et Döner (100gr)", "Marul", "Turşu", "Domates"],
        options: [
            { id: "t6_o1", label: "Sade Tost", price: 0 },
            { id: "t6_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t7",
        categoryId: "toast",
        name: "Yicem Sucuk",
        price: 130,
        image: "Ayvalik-Tostu/yicem-sucuklu.jpg",
        desc: "Kaşar, Sucuk, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez)",
        contents: ["Kaşar", "Sucuk", "Turşu", "Domates"],
        options: [
            { id: "t7_o1", label: "Sade Tost", price: 0 },
            { id: "t7_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t8",
        categoryId: "toast",
        name: "Yicem Schnitzel",
        price: 130,
        image: "Ayvalik-Tostu/yicem-schnitzel.jpg",
        desc: "Schnitzel, Marul, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez)",
        contents: ["Schnitzel", "Marul", "Turşu", "Domates"],
        options: [
            { id: "t8_o1", label: "Sade Tost", price: 0 },
            { id: "t8_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t9",
        categoryId: "toast",
        name: "Yicem Salam",
        price: 130,
        image: "Ayvalik-Tostu/yicem-salam.jpg",
        desc: "Salam, Kaşar, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez)",
        contents: ["Salam", "Kaşar", "Turşu", "Domates"],
        options: [
            { id: "t9_o1", label: "Sade Tost", price: 0 },
            { id: "t9_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t10",
        categoryId: "toast",
        name: "Yicem Kaşarlı Jambon",
        price: 130,
        image: "Ayvalik-Tostu/yicem-kasarli-jambon.jpg",
        desc: "Kaşar, Jambon, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez)",
        contents: ["Kaşar", "Jambon", "Turşu", "Domates"],
        options: [
            { id: "t10_o1", label: "Sade Tost", price: 0 },
            { id: "t10_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t11",
        categoryId: "toast",
        name: "Yicem Kaşar",
        price: 100,
        image: "Ayvalik-Tostu/yicem-kasarli.jpg",
        desc: "İsteğe Bağlı; Kaşar veya Beyaz Peynir, Siyah Zeytin, Ceviz, Domates, Yeşil Biber, Kekik",
        contents: ["Kaşar veya Beyaz Peynir", "Siyah Zeytin", "Ceviz", "Domates", "Yeşil Biber", "Kekik"],
        options: [
            { id: "t11_o1", label: "Sade Tost", price: 0 },
            { id: "t11_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t12",
        categoryId: "toast",
        name: "Yicem Ev Köfteli",
        price: 200,
        image: "Ayvalik-Tostu/yicem-evkofteli.jpg",
        desc: "Ev Köftesi (120gr), Marul, Turşu, Domates (İsteğe Bağlı Ketçap Mayonez Rus Salatası)",
        contents: ["Ev Köftesi (120gr)", "Marul", "Turşu", "Domates"],
        options: [
            { id: "t12_o1", label: "Sade Tost", price: 0 },
            { id: "t12_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "t13",
        categoryId: "toast",
        name: "Yicem Sanayi Tostu",
        price: 130,
        image: "Ayvalik-Tostu/sanayi-tostu.jpg",
        desc: "Taş Fırın Ekmeği, Sucuk, Kaşar, Salça",
        contents: ["Taş Fırın Ekmeği", "Sucuk", "Kaşar", "Salça"],
        options: [
            { id: "t13_o1", label: "Sade Tost", price: 0 },
            { id: "t13_o2", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        maxNoteLen: 120
    },

    // SOĞUK SANDVİÇ KATEGORİSİ
    {
        id: "s1",
        categoryId: "sandwich",
        name: "Yicem Soğuk Sandviç",
        price: 220,
        image: "Ayvalik-Tostu/soguk-sandvic.jpg",
        desc: "2 Ana Ürün + 4 Yan Ürün dahil, fazlası ekstra",
        contents: [],
        options: [
            { id: "s1_o1", label: "Menü (Cips + İçecek)", price: 80 }
        ],
        extras: {
            mainProducts: [
                { id: "main1", name: "Ton Balığı", price: 40 },
                { id: "main2", name: "Beyaz Peynir", price: 40 },
                { id: "main3", name: "Ezine", price: 40 },
                { id: "main4", name: "Salam", price: 40 },
                { id: "main5", name: "Jambon", price: 40 }
            ],
            sideProducts: [
                { id: "side1", name: "Siyah Zeytin", price: 20 },
                { id: "side2", name: "Mısır", price: 20 },
                { id: "side3", name: "Domates", price: 20 },
                { id: "side4", name: "Turşu", price: 20 },
                { id: "side5", name: "Jalepeno Biber", price: 20 },
                { id: "side6", name: "Yeşil Biber", price: 20 },
                { id: "side7", name: "Rus Salatası", price: 20 }
            ]
        },
        maxNoteLen: 120
    },

    // TAVUK DÖNER KATEGORİSİ
    {
        id: "cd1",
        categoryId: "chicken-doner",
        name: "Tavuk Döner",
        price: 160,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Tavuk Döner (100gr) - Ekmek seçeneği ile",
        contents: ["Tavuk Döner (100gr)", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd1_o1", label: "Dürüm", price: 0 },
            { id: "cd1_o2", label: "Gobit Ekmeği", price: 0 },
            { id: "cd1_o3", label: "Taş Fırın Ekmeği", price: 0 },
            { id: "cd1_o4", label: "Ayvalık Tost Ekmeği", price: 0 }
        ],
        extras: {
            menuOptions: [
                { id: "menu1", name: "Menü (Cips + Ayran)", price: 60 },
                { id: "kola1", name: "Kutu Kola Farkı", price: 20 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "cd2",
        categoryId: "chicken-doner",
        name: "Kaşarlı Tavuk Dürüm",
        price: 180,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Kaşarlı Tavuk Dürüm (100gr)",
        contents: ["Tavuk Döner (100gr)", "Kaşar", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd2_o1", label: "Ayran Menü (Cips + Ayran)", price: 60 },
            { id: "cd2_o2", label: "Kola Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "cd3",
        categoryId: "chicken-doner",
        name: "Tavuk İskender",
        price: 230,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Tavuk Döner Beyti (100gr) - İskender tarzı",
        contents: ["Tavuk Döner (100gr)", "Yoğurt", "Tereyağı", "Domates Sosu", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd3_o1", label: "Ayran Menü (Cips + Ayran)", price: 60 },
            { id: "cd3_o2", label: "Kola Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "cd4",
        categoryId: "chicken-doner",
        name: "Tavuk Döner Beyti",
        price: 250,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Tavuk Döner Beyti (100gr) - Özel sos ile",
        contents: ["Tavuk Döner (100gr)", "Özel Beyti Sosu", "Tereyağı", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd4_o1", label: "Ayran Menü (Cips + Ayran)", price: 60 },
            { id: "cd4_o2", label: "Kola Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "cd5",
        categoryId: "chicken-doner",
        name: "Tavuk Döner Porsiyon",
        price: 180,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Tavuk Döner Porsiyon (100gr) - Porsiyon tabağı",
        contents: ["Tavuk Döner (100gr)", "Pilav", "Salata", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd5_o1", label: "Ayran Menü (Cips + Ayran)", price: 60 },
            { id: "cd5_o2", label: "Kola Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "cd6",
        categoryId: "chicken-doner",
        name: "Pilavüstü Tavuk Döner",
        price: 230,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Pilavüstü Tavuk Döner (100gr) - Pilav üzerine",
        contents: ["Tavuk Döner (100gr)", "Pilav", "Salata", "Sos", "Marul", "Domates", "Turşu"],
        options: [
            { id: "cd6_o1", label: "Ayran Menü (Cips + Ayran)", price: 60 },
            { id: "cd6_o2", label: "Kola Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "cd7",
        categoryId: "chicken-doner",
        name: "3 Adet Tavuk Döner",
        price: 630,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "3 Adet Tavuk Döner (100gr) + Büyük Boy Cips + Litrelik İçecek",
        contents: ["3x Tavuk Döner (100gr)", "Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "cd8",
        categoryId: "chicken-doner",
        name: "5 Adet Tavuk Döner",
        price: 990,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "5 Adet Tavuk Döner + 2x Büyük Cips + Litrelik İçecek",
        contents: ["5x Tavuk Döner (100gr)", "2x Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },

    // ET DÖNER KATEGORİSİ
    {
        id: "bd1",
        categoryId: "beef-doner",
        name: "Et Döner (70gr)",
        price: 210,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Et Döner (70gr) - Ekmek seçeneği ile",
        contents: ["Et Döner (70gr)", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd1_o1", label: "Dürüm", price: 0 },
            { id: "bd1_o2", label: "Gobit Ekmeği", price: 0 },
            { id: "bd1_o3", label: "Taş Fırın Ekmeği", price: 0 },
            { id: "bd1_o4", label: "Ayvalık Tost Ekmeği", price: 0 }
        ],
        extras: {
            menuOptions: [
                { id: "bd1_menu1", name: "Cips + Ayran Menü", price: 60 },
                { id: "bd1_menu2", name: "Cips + Kola Menü", price: 80 },
                { id: "bd1_patates1", name: "Patates İlave", price: 10 },
                { id: "bd1_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd2",
        categoryId: "beef-doner",
        name: "Et Döner (100gr)",
        price: 290,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Et Döner (100gr) - Ekmek seçeneği ile",
        contents: ["Et Döner (100gr)", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd2_o1", label: "Dürüm", price: 0 },
            { id: "bd2_o2", label: "Gobit Ekmeği", price: 0 },
            { id: "bd2_o3", label: "Taş Fırın Ekmeği", price: 0 },
            { id: "bd2_o4", label: "Ayvalık Tost Ekmeği", price: 0 }
        ],
        extras: {
            menuOptions: [
                { id: "bd2_menu1", name: "Cips + Ayran Menü", price: 60 },
                { id: "bd2_menu2", name: "Cips + Kola Menü", price: 80 },
                { id: "bd2_patates1", name: "Patates İlave", price: 10 },
                { id: "bd2_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd3",
        categoryId: "beef-doner",
        name: "Porsiyon Et Döner",
        price: 310,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Porsiyon Et Döner (100gr) - Porsiyon tabağı",
        contents: ["Et Döner (100gr)", "Pilav", "Salata", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd3_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd3_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd3_patates1", name: "Patates İlave", price: 10 },
                { id: "bd3_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd4",
        categoryId: "beef-doner",
        name: "Soslu Et Döner",
        price: 310,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Soslu Et Döner (100gr) - Özel sos ile",
        contents: ["Et Döner (100gr)", "Özel Sos", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd4_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd4_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd4_patates1", name: "Patates İlave", price: 10 },
                { id: "bd4_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd5",
        categoryId: "beef-doner",
        name: "Et İskender",
        price: 350,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Et İskender (100gr) - İskender tarzı",
        contents: ["Et Döner (100gr)", "Yoğurt", "Tereyağı", "Domates Sosu", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd5_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd5_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd5_patates1", name: "Patates İlave", price: 10 },
                { id: "bd5_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd6",
        categoryId: "beef-doner",
        name: "Pilavüstü Et Döner",
        price: 350,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Pilavüstü Et Döner (100gr) - Pilav üzerine",
        contents: ["Et Döner (100gr)", "Pilav", "Salata", "Sos", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd6_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd6_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd6_patates1", name: "Patates İlave", price: 10 },
                { id: "bd6_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd7",
        categoryId: "beef-doner",
        name: "Soslu Kaşarlı Et Dürüm (70gr)",
        price: 230,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Soslu Kaşarlı Et Dürüm (70gr)",
        contents: ["Et Döner (70gr)", "Kaşar", "Özel Sos", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd7_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd7_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd7_patates1", name: "Patates İlave", price: 10 },
                { id: "bd7_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd8",
        categoryId: "beef-doner",
        name: "Soslu Kaşarlı Et Dürüm (100gr)",
        price: 310,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Soslu Kaşarlı Et Dürüm (100gr)",
        contents: ["Et Döner (100gr)", "Kaşar", "Özel Sos", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd8_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd8_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd8_patates1", name: "Patates İlave", price: 10 },
                { id: "bd8_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd9",
        categoryId: "beef-doner",
        name: "Ayvalık Et Dürüm (70gr)",
        price: 210,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Ayvalık Et Dürüm (70gr) - Ayvalık tarzı",
        contents: ["Et Döner (70gr)", "Ayvalık Sosu", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd9_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd9_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd9_patates1", name: "Patates İlave", price: 10 },
                { id: "bd9_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd10",
        categoryId: "beef-doner",
        name: "Ayvalık Kaşarlı Et Döner (70gr)",
        price: 230,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Ayvalık Kaşarlı Et Döner (70gr) - Ayvalık tarzı",
        contents: ["Et Döner (70gr)", "Kaşar", "Ayvalık Sosu", "Marul", "Domates", "Turşu"],
        options: [
            { id: "bd10_o1", label: "Cips + Ayran Menü", price: 60 },
            { id: "bd10_o2", label: "Cips + Kola Menü", price: 80 }
        ],
        extras: {
            menuOptions: [
                { id: "bd10_patates1", name: "Patates İlave", price: 10 },
                { id: "bd10_patates2", name: "Menü Patatesi", price: 30 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "bd11",
        categoryId: "beef-doner",
        name: "3 Adet Et Döner (70gr)",
        price: 780,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "3 Adet Et Döner (70gr) + Büyük Boy Cips + Litrelik İçecek",
        contents: ["3x Et Döner (70gr)", "Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "bd12",
        categoryId: "beef-doner",
        name: "3 Adet Et Döner (100gr)",
        price: 1020,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "3 Adet Et Döner (100gr) + Büyük Boy Cips + Litrelik İçecek",
        contents: ["3x Et Döner (100gr)", "Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "bd13",
        categoryId: "beef-doner",
        name: "5 Adet Et Döner (70gr)",
        price: 1240,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "5 Adet Et Döner (70gr) + 2x Büyük Boy Cips + Litrelik İçecek",
        contents: ["5x Et Döner (70gr)", "2x Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "bd14",
        categoryId: "beef-doner",
        name: "5 Adet Et Döner (100gr)",
        price: 1640,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "5 Adet Et Döner (100gr) + 2x Büyük Boy Cips + Litrelik İçecek",
        contents: ["5x Et Döner (100gr)", "2x Büyük Boy Cips", "Litrelik İçecek"],
        options: [],
        maxNoteLen: 120
    },

    // MAKARNALAR KATEGORİSİ
    {
        id: "pa1",
        categoryId: "pasta",
        name: "Alfredo",
        price: 200,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk Parçaları (100-120gr), Dağ Mantarı, Sarımsak, Krema, Fesleğen - Tavsiye Penne",
        contents: ["Jülyen Tavuk Parçaları (100-120gr)", "Dağ Mantarı", "Sarımsak", "Krema", "Fesleğen"],
        options: [
            { id: "pa1_o1", label: "Penne", price: 0 },
            { id: "pa1_o2", label: "Spagetti", price: 0 },
            { id: "pa1_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa1_drink1", name: "Ayran", price: 40 },
                { id: "pa1_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa1_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa2",
        categoryId: "pasta",
        name: "Napoliten",
        price: 200,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Domates, Sarımsak, Taze Fesleğen, Havuç, Baharat - Tavsiye Spagetti",
        contents: ["Domates", "Sarımsak", "Taze Fesleğen", "Havuç", "Baharat"],
        options: [
            { id: "pa2_o1", label: "Spagetti", price: 0 },
            { id: "pa2_o2", label: "Penne", price: 0 },
            { id: "pa2_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa2_drink1", name: "Ayran", price: 40 },
                { id: "pa2_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa2_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa3",
        categoryId: "pasta",
        name: "Bolonez",
        price: 200,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Dana Kıyma (100gr), Sarımsak, Soğan, Kereviz Sapı, Havuç, Defne Yaprağı, Baharat - Tavsiye Spagetti",
        contents: ["Dana Kıyma (100gr)", "Sarımsak", "Soğan", "Kereviz Sapı", "Havuç", "Defne Yaprağı", "Baharat"],
        options: [
            { id: "pa3_o1", label: "Spagetti", price: 0 },
            { id: "pa3_o2", label: "Penne", price: 0 },
            { id: "pa3_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa3_drink1", name: "Ayran", price: 40 },
                { id: "pa3_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa3_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa4",
        categoryId: "pasta",
        name: "Pesto",
        price: 200,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Sarımsak, Taze Fesleğen, Kekik, Krema, Baharat - Tavsiye Bütün Makarna Çeşitleri",
        contents: ["Sarımsak", "Taze Fesleğen", "Kekik", "Krema", "Baharat"],
        options: [
            { id: "pa4_o1", label: "Penne", price: 0 },
            { id: "pa4_o2", label: "Spagetti", price: 0 },
            { id: "pa4_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa4_drink1", name: "Ayran", price: 40 },
                { id: "pa4_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa4_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa5",
        categoryId: "pasta",
        name: "Arabiata",
        price: 200,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Domates, Sarımsak, Acı Sos, Dilim Siyah Zeytin - Tavsiye Penne, Spagetti",
        contents: ["Domates", "Sarımsak", "Acı Sos", "Dilim Siyah Zeytin"],
        options: [
            { id: "pa5_o1", label: "Penne", price: 0 },
            { id: "pa5_o2", label: "Spagetti", price: 0 },
            { id: "pa5_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa5_drink1", name: "Ayran", price: 40 },
                { id: "pa5_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa5_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa6",
        categoryId: "pasta",
        name: "Ton Balıklı",
        price: 250,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Ton Balığı (160gr), Krema, Zeytin, Mısır, Turşu - Tavsiye Penne, Spagetti",
        contents: ["Ton Balığı (160gr)", "Krema", "Zeytin", "Mısır", "Turşu"],
        options: [
            { id: "pa6_o1", label: "Penne", price: 0 },
            { id: "pa6_o2", label: "Spagetti", price: 0 },
            { id: "pa6_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa6_drink1", name: "Ayran", price: 40 },
                { id: "pa6_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa6_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "pa7",
        categoryId: "pasta",
        name: "Türk Usulü 4 Peynirli",
        price: 270,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        desc: "Bergama Tulumu, Ezine Peyniri, Kaşar, Beyaz Peynir, Krema, Fesleğen - Tavsiye Penne, Spagetti",
        contents: ["Bergama Tulumu", "Ezine Peyniri", "Kaşar", "Beyaz Peynir", "Krema", "Fesleğen"],
        options: [
            { id: "pa7_o1", label: "Penne", price: 0 },
            { id: "pa7_o2", label: "Spagetti", price: 0 },
            { id: "pa7_o3", label: "Fettuccine", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "pa7_drink1", name: "Ayran", price: 40 },
                { id: "pa7_drink2", name: "Kutu İçecek", price: 60 },
                { id: "pa7_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },

    // MANTI KATEGORİSİ
    {
        id: "ma1",
        categoryId: "manti",
        name: "Ev Yapımı Mantı",
        price: 200,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
        desc: "Haşlanmış Mantı, %100 Dana Kıyma (250gr), Tereyağında Kavrulmuş Pul Biber ve Nane Sosu",
        contents: ["Haşlanmış Mantı", "%100 Dana Kıyma (250gr)", "Tereyağında Kavrulmuş Pul Biber ve Nane Sosu"],
        options: [
            { id: "ma1_o1", label: "Sade Yoğurt", price: 0 },
            { id: "ma1_o2", label: "Sarımsaklı Yoğurt", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "ma1_drink1", name: "Ayran", price: 40 },
                { id: "ma1_drink2", name: "Kutu İçecek", price: 60 },
                { id: "ma1_drink3", name: "Litrelik İçecek", price: 90 }
            ]
        },
        maxNoteLen: 120
    },

    // HAMBURGER KATEGORİSİ
    {
        id: "h1",
        categoryId: "hamburger",
        name: "Hamburger",
        price: 250,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        desc: "120gr Ev Yapımı Köfte, Marul, Turşu, Domates",
        contents: ["120gr Ev Yapımı Köfte", "Marul", "Turşu", "Domates"],
        options: [
            { id: "h1_o1", label: "Sade Hamburger", price: 0 },
            { id: "h1_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "h2",
        categoryId: "hamburger",
        name: "Cheeseburger",
        price: 270,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        desc: "120gr Ev Yapımı Köfte, Cheddar Peyniri, Marul, Turşu, Domates",
        contents: ["120gr Ev Yapımı Köfte", "Cheddar Peyniri", "Marul", "Turşu", "Domates"],
        options: [
            { id: "h2_o1", label: "Sade Cheeseburger", price: 0 },
            { id: "h2_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "h3",
        categoryId: "hamburger",
        name: "Tavuk Burger",
        price: 170,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        desc: "Tavuk Burger, Marul, Turşu, Domates, Özel Sos",
        contents: ["Tavuk Burger", "Marul", "Turşu", "Domates", "Özel Sos"],
        options: [
            { id: "h3_o1", label: "Sade Tavuk Burger", price: 0 },
            { id: "h3_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },

    // KÖFTE SPESİYEL KATEGORİSİ
    {
        id: "k1",
        categoryId: "kofte",
        name: "Şefin Izgara Köftesi",
        price: 300,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "180gr Izgara Köfte, Pilav, Salata",
        contents: ["180gr Izgara Köfte", "Pilav", "Salata"],
        options: [
            { id: "k1_o1", label: "Sade Köfte", price: 0 },
            { id: "k1_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "k2",
        categoryId: "kofte",
        name: "Ekmek Arası Köfte",
        price: 200,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "120gr Ekmek Arası Köfte",
        contents: ["120gr Ekmek Arası Köfte"],
        options: [
            { id: "k2_o1", label: "Sade Ekmek Arası", price: 0 },
            { id: "k2_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },
    {
        id: "k3",
        categoryId: "kofte",
        name: "Ekmek Arası Kaşarlı Köfte",
        price: 220,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "120gr Ekmek Arası Kaşarlı Köfte",
        contents: ["120gr Ekmek Arası Kaşarlı Köfte"],
        options: [
            { id: "k3_o1", label: "Sade Kaşarlı Köfte", price: 0 },
            { id: "k3_o2", label: "Menü (Cips + Kola)", price: 80 }
        ],
        maxNoteLen: 120
    },

    // APERATİFLER KATEGORİSİ
    {
        id: "a1",
        categoryId: "aperatifler",
        name: "Elma Dilim Patates",
        price: 100,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        desc: "Elma Dilim Patates",
        contents: ["Elma Dilim Patates"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "a2",
        categoryId: "aperatifler",
        name: "Parmak Patates",
        price: 100,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        desc: "Parmak Patates",
        contents: ["Parmak Patates"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "a3",
        categoryId: "aperatifler",
        name: "Çıtır Tavuk Tabağı",
        price: 200,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        desc: "Çıtır Tavuk Taneleri ve Patates",
        contents: ["Çıtır Tavuk Taneleri"],
        options: [
            { id: "a3_o1", label: "Elma Dilim Patates", price: 0 },
            { id: "a3_o2", label: "Parmak Patates", price: 0 }
        ],
        maxNoteLen: 120
    },

    // BİSTRO KATEGORİSİ
    {
        id: "b1",
        categoryId: "bistro",
        name: "Chicken Stroganoff",
        price: 300,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tavuk Bonfile (200-250gr), Krema, Turşu, Mantar, Demiglass Sos, Patates Cipsi ve Akdeniz Yeşillikleri",
        contents: ["Tavuk Bonfile (200-250gr)", "Krema", "Turşu", "Mantar", "Demiglass Sos", "Patates Cipsi", "Akdeniz Yeşillikleri"],
        options: [],
        extras: {
            drinkOptions: [
                { id: "b1_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b1_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b2",
        categoryId: "bistro",
        name: "Tavuk Quesadilla",
        price: 300,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tortilla Lavaş İçerisinde Baharatlarla Tatlandırılmış Tavuk Parçaları (200-250gr), Kaşar Peyniri, Biber, Mısır, Zeytin ve Barbekü Sos",
        contents: ["Tavuk Parçaları (200-250gr)", "Kaşar Peyniri", "Biber", "Mısır", "Zeytin", "Barbekü Sos"],
        options: [],
        extras: {
            drinkOptions: [
                { id: "b2_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b2_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b3",
        categoryId: "bistro",
        name: "Kaşarlı Mantarlı Quesadilla",
        price: 230,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tortilla Lavaş İçerisinde Kaşar Peyniri, Mantar, Mısır ve Zeytin",
        contents: ["Kaşar Peyniri", "Mantar", "Mısır", "Zeytin"],
        options: [],
        extras: {
            drinkOptions: [
                { id: "b3_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b3_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b4",
        categoryId: "bistro",
        name: "Viyana Piliç Şinitzel",
        price: 300,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Panelenmiş Tavuk Göğsü (250-300gr), Akdeniz Yeşillikleri",
        contents: ["Panelenmiş Tavuk Göğsü (250-300gr)", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b4_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b4_o2", label: "Sade Makarna", price: 0 },
            { id: "b4_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b4_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b4_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b5",
        categoryId: "bistro",
        name: "Tavuk Wrap",
        price: 300,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tavuk Bonfile (200-250gr), Soğan, Sarımsak, Biber, Dağ Kekiği, Mantar, Kajun Baharatı, Patates Cipsi ve Salata",
        contents: ["Tavuk Bonfile (200-250gr)", "Soğan", "Sarımsak", "Biber", "Dağ Kekiği", "Mantar", "Kajun Baharatı", "Patates Cipsi", "Salata"],
        options: [],
        extras: {
            drinkOptions: [
                { id: "b5_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b5_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b6",
        categoryId: "bistro",
        name: "Dağ Kekiği Kremalı Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk (200-250gr), Krema, Karabiber, Kekik, Sarımsak, Biber, Mantar, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk (200-250gr)", "Krema", "Karabiber", "Kekik", "Sarımsak", "Biber", "Mantar", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b6_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b6_o2", label: "Sade Makarna", price: 0 },
            { id: "b6_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b6_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b6_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b7",
        categoryId: "bistro",
        name: "Mantarlı Köri Soslu Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk Parçaları (200-250gr), Krema, Mantar, Köri, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk Parçaları (200-250gr)", "Krema", "Mantar", "Köri", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b7_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b7_o2", label: "Sade Makarna", price: 0 },
            { id: "b7_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b7_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b7_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b8",
        categoryId: "bistro",
        name: "Cafe de Paris Soslu Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk (200-250gr), Krema, Cafe de Paris Sos, Karabiber, Sarımsak, Biber, Mantar, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk (200-250gr)", "Krema", "Cafe de Paris Sos", "Karabiber", "Sarımsak", "Biber", "Mantar", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b8_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b8_o2", label: "Sade Makarna", price: 0 },
            { id: "b8_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b8_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b8_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b9",
        categoryId: "bistro",
        name: "Barbekü Soslu Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk, Barbekü Sosu, Biber, Mantar, Dağ Kekiği, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk", "Barbekü Sosu", "Biber", "Mantar", "Dağ Kekiği", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b9_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b9_o2", label: "Sade Makarna", price: 0 },
            { id: "b9_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b9_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b9_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b10",
        categoryId: "bistro",
        name: "Tatlı Acı Soslu Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk, Chilli Sos, Biber, Mantar, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk", "Chilli Sos", "Biber", "Mantar", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b10_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b10_o2", label: "Sade Makarna", price: 0 },
            { id: "b10_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b10_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b10_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b11",
        categoryId: "bistro",
        name: "Mexicano Soslu Tavuk",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Jülyen Tavuk, Mexicano Sos, Jalepeno, Biber, Mantar, Akdeniz Yeşillikleri",
        contents: ["Jülyen Tavuk", "Mexicano Sos", "Jalepeno", "Biber", "Mantar", "Akdeniz Yeşillikleri"],
        options: [
            { id: "b11_o1", label: "Napoliten Makarna", price: 0 },
            { id: "b11_o2", label: "Sade Makarna", price: 0 },
            { id: "b11_o3", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b11_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b11_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b12",
        categoryId: "bistro",
        name: "Tavuk Menü",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tavuk Izgara (250-300gr)",
        contents: ["Tavuk Izgara (250-300gr)"],
        options: [
            { id: "b12_o1", label: "Makarna", price: 0 },
            { id: "b12_o2", label: "Pilav", price: 0 }
        ],
        extras: {
            drinkOptions: [
                { id: "b12_drink1", name: "Kutu İçecek", price: 60 }
            ],
            extraOptions: [
                { id: "b12_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },
    {
        id: "b13",
        categoryId: "bistro",
        name: "Tavuk Menü Diyet",
        price: 290,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        desc: "Tavuk Izgara (250-300gr), Fırında Patates, Sebze Garnitür",
        contents: ["Tavuk Izgara (250-300gr)", "Fırında Patates", "Sebze Garnitür"],
        options: [],
        extras: {
            drinkOptions: [
                { id: "b13_drink1", name: "Ayran", price: 40 }
            ],
            extraOptions: [
                { id: "b13_extra1", name: "Ekstra Baget Ekmek", price: 5 }
            ]
        },
        maxNoteLen: 120
    },

    // SALATA KATEGORİSİ
    {
        id: "s1",
        categoryId: "salad",
        name: "Diyet Tavuk Salata",
        price: 200,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Akdeniz Yeşillikleri, Kızarmış Tavuk Göğsü (150gr), Elma, Keten Tohumu, Cherry Domates, Tane Mısır ve Biber",
        contents: ["Akdeniz Yeşillikleri", "Kızarmış Tavuk Göğsü (150gr)", "Elma", "Keten Tohumu", "Cherry Domates", "Tane Mısır", "Biber"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "s2",
        categoryId: "salad",
        name: "Bahar Salata",
        price: 200,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Akdeniz Yeşillikleri, Beyaz Peynir, Cherry Domates, Tane Mısır, Biber ve Özel Yicem Sosu",
        contents: ["Akdeniz Yeşillikleri", "Beyaz Peynir", "Cherry Domates", "Tane Mısır", "Biber", "Özel Yicem Sosu"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "s3",
        categoryId: "salad",
        name: "Sezar Salata",
        price: 200,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Kızarmış Tavuk Göğsü (150gr), Akdeniz Yeşillikleri, Cherry Domates, Mısır, Biber, Kruton Ekmek, Parmesan Peyniri ve Özel Yicem Sosu",
        contents: ["Kızarmış Tavuk Göğsü (150gr)", "Akdeniz Yeşillikleri", "Cherry Domates", "Mısır", "Biber", "Kruton Ekmek", "Parmesan Peyniri", "Özel Yicem Sosu"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "s4",
        categoryId: "salad",
        name: "Çıtır Tavuk Salata",
        price: 200,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Çıtır Tavuk Parçaları (150gr), Akdeniz Yeşillikleri, Cherry Domates, Mısır, Biber ve Yicem Sosu",
        contents: ["Çıtır Tavuk Parçaları (150gr)", "Akdeniz Yeşillikleri", "Cherry Domates", "Mısır", "Biber", "Yicem Sosu"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "s5",
        categoryId: "salad",
        name: "Hellim Salata",
        price: 230,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Hellim Peyniri, Akdeniz Yeşillikleri, Cherry Domates, Mısır, Biber ve Kruton Ekmek",
        contents: ["Hellim Peyniri", "Akdeniz Yeşillikleri", "Cherry Domates", "Mısır", "Biber", "Kruton Ekmek"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "s6",
        categoryId: "salad",
        name: "Tonno Salata",
        price: 230,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        desc: "Ton Balığı (160gr), Akdeniz Yeşillikleri, Cherry Domates, Mısır ve Biber",
        contents: ["Ton Balığı (160gr)", "Akdeniz Yeşillikleri", "Cherry Domates", "Mısır", "Biber"],
        options: [],
        maxNoteLen: 120
    },

    // İÇECEKLER KATEGORİSİ
    {
        id: "d1",
        categoryId: "drinks",
        name: "RedBull",
        price: 100,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "RedBull Enerji İçeceği",
        contents: ["RedBull Enerji İçeceği"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d2",
        categoryId: "drinks",
        name: "Coca Cola",
        price: 60,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Coca Cola",
        contents: ["Coca Cola"],
        options: [
            { id: "d2_o1", label: "Coca Cola", price: 0 },
            { id: "d2_o2", label: "Coca Cola Zero", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d3",
        categoryId: "drinks",
        name: "Pepsi",
        price: 60,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Pepsi",
        contents: ["Pepsi"],
        options: [
            { id: "d3_o1", label: "Pepsi", price: 0 },
            { id: "d3_o2", label: "Pepsi Max", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d4",
        categoryId: "drinks",
        name: "Fanta",
        price: 60,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Fanta",
        contents: ["Fanta"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d5",
        categoryId: "drinks",
        name: "Sprite",
        price: 60,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Sprite",
        contents: ["Sprite"],
        options: [
            { id: "d5_o1", label: "Sprite", price: 0 },
            { id: "d5_o2", label: "7UP", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d6",
        categoryId: "drinks",
        name: "Ice Tea",
        price: 60,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Ice Tea",
        contents: ["Ice Tea"],
        options: [
            { id: "d6_o1", label: "Şeftali", price: 0 },
            { id: "d6_o2", label: "Limon", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d7",
        categoryId: "drinks",
        name: "Litrelik İçecek",
        price: 90,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Litrelik İçecek",
        contents: ["Litrelik İçecek"],
        options: [
            { id: "d7_o1", label: "Coca Cola", price: 0 },
            { id: "d7_o2", label: "Pepsi", price: 0 },
            { id: "d7_o3", label: "Fanta", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d8",
        categoryId: "drinks",
        name: "Yörükoğlu Ayran",
        price: 40,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Yörükoğlu Ayran",
        contents: ["Yörükoğlu Ayran"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d9",
        categoryId: "drinks",
        name: "Su",
        price: 20,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Su",
        contents: ["Su"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d10",
        categoryId: "drinks",
        name: "Soda",
        price: 30,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Soda",
        contents: ["Soda"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d11",
        categoryId: "drinks",
        name: "Şalgam",
        price: 40,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Şalgam",
        contents: ["Şalgam"],
        options: [
            { id: "d11_o1", label: "Normal", price: 0 },
            { id: "d11_o2", label: "Acılı", price: 0 }
        ],
        maxNoteLen: 120
    },
    {
        id: "d12",
        categoryId: "drinks",
        name: "Çay",
        price: 20,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Çay",
        contents: ["Çay"],
        options: [],
        maxNoteLen: 120
    },
    {
        id: "d13",
        categoryId: "drinks",
        name: "Türk Kahvesi",
        price: 70,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        desc: "Türk Kahvesi",
        contents: ["Türk Kahvesi"],
        options: [
            { id: "d13_o1", label: "Sade", price: 0 },
            { id: "d13_o2", label: "Orta", price: 0 },
            { id: "d13_o3", label: "Şekerli", price: 0 }
        ],
        maxNoteLen: 120
    }
];

// Global State
let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let selectedOptions = new Set();
let selectedExtras = new Set();
let removedContents = new Set();

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const productsSection = document.getElementById('productsSection');
const cartButton = document.getElementById('cartButton');
const cartBadge = document.getElementById('cartBadge');
const productModal = document.getElementById('productModal');
const cartModal = document.getElementById('cartModal');
const emptyCartState = document.getElementById('emptyCartState');

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2
    }).format(price);
}

function generateCartItemId(productId, selectedOptionIds, removedContentsSet = new Set(), selectedExtrasSet = new Set()) {
    const optionsPart = Array.from(selectedOptionIds).sort().join('_');
    const removedPart = Array.from(removedContentsSet).sort().join('_');
    const extrasPart = Array.from(selectedExtrasSet).sort().join('_');
    return `${productId}_${optionsPart}_${removedPart}_${extrasPart}`;
}

function calculateItemPrice(product, selectedOptionIds, selectedExtrasSet = new Set()) {
    const basePrice = product.price;
    const optionsPrice = product.options
        .filter(option => selectedOptionIds.has(option.id))
        .reduce((sum, option) => sum + option.price, 0);
    
    // Extras fiyatı (sandwich ve chicken-doner için)
    let extrasPrice = 0;
    if (product.categoryId === 'sandwich' && product.extras) {
        // Ana ürünler - ilk 2 ücretsiz, 3. ve sonrası ekstra
        const selectedMainProducts = product.extras.mainProducts
            .filter(extra => selectedExtrasSet.has(extra.id));
        
        if (selectedMainProducts.length > 2) {
            const extraMainProducts = selectedMainProducts.slice(2); // 3. ve sonrası
            extrasPrice += extraMainProducts.reduce((sum, extra) => sum + extra.price, 0);
        }
        
        // Yan ürünler - ilk 4 ücretsiz, 5. ve sonrası ekstra
        const selectedSideProducts = product.extras.sideProducts
            .filter(extra => selectedExtrasSet.has(extra.id));
        
        if (selectedSideProducts.length > 4) {
            const extraSideProducts = selectedSideProducts.slice(4); // 5. ve sonrası
            extrasPrice += extraSideProducts.reduce((sum, extra) => sum + extra.price, 0);
        }
           } else if ((product.categoryId === 'chicken-doner' || product.categoryId === 'beef-doner') && product.extras && product.extras.menuOptions) {
               // Tavuk döner ve et döner menü seçenekleri
               const selectedMenuOptions = product.extras.menuOptions
                   .filter(extra => selectedExtrasSet.has(extra.id));
               
               extrasPrice += selectedMenuOptions.reduce((sum, extra) => sum + extra.price, 0);
           } else if ((product.categoryId === 'pasta' || product.categoryId === 'manti') && product.extras && product.extras.drinkOptions) {
               // Makarna ve mantı içecek seçenekleri
               const selectedDrinkOptions = product.extras.drinkOptions
                   .filter(extra => selectedExtrasSet.has(extra.id));
               
               extrasPrice += selectedDrinkOptions.reduce((sum, extra) => sum + extra.price, 0);
           } else if (product.categoryId === 'bistro' && product.extras) {
               // Bistro ürünleri için içecek ve ekstra seçenekleri
               if (product.extras.drinkOptions) {
                   const selectedDrinkOptions = product.extras.drinkOptions
                       .filter(extra => selectedExtrasSet.has(extra.id));
                   
                   extrasPrice += selectedDrinkOptions.reduce((sum, extra) => sum + extra.price, 0);
               }
               
               if (product.extras.extraOptions) {
                   const selectedExtraOptions = product.extras.extraOptions
                       .filter(extra => selectedExtrasSet.has(extra.id));
                   
                   extrasPrice += selectedExtraOptions.reduce((sum, extra) => sum + extra.price, 0);
               }
           }
    
    return basePrice + optionsPrice + extrasPrice;
}

function calculateCartTotals() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return { total };
}

// LocalStorage Functions
function saveCartToStorage() {
    localStorage.setItem('yicem_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('yicem_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
}

// Cart Functions
function addToCart(product, quantity, selectedOptionIds, note = '', removedContentsSet = new Set(), selectedExtrasSet = new Set()) {
    const cartItemId = generateCartItemId(product.id, selectedOptionIds, removedContentsSet, selectedExtrasSet);
    const existingItemIndex = cart.findIndex(item => item.id === cartItemId);
    
    const itemPrice = calculateItemPrice(product, selectedOptionIds, selectedExtrasSet);
    const selectedOptionsList = product.options.filter(option => selectedOptionIds.has(option.id));
    const removedContentsList = Array.from(removedContentsSet);
    const selectedExtrasList = Array.from(selectedExtrasSet);
    
    if (existingItemIndex > -1) {
        // Aynı ürün, seçenekler, çıkarılan içerikler ve extras varsa adet artır
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Yeni ürün ekle
        const cartItem = {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            price: itemPrice,
            quantity: quantity,
            selectedOptions: selectedOptionsList,
            removedContents: removedContentsList,
            selectedExtras: selectedExtrasList,
            note: note,
            image: product.image
        };
        cart.push(cartItem);
    }
    
    saveCartToStorage();
    updateCartBadge();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCartToStorage();
    updateCartBadge();
}

function updateCartItemQuantity(cartItemId, newQuantity) {
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            item.quantity = newQuantity;
            saveCartToStorage();
            updateCartBadge();
        }
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartButton = document.getElementById('cartButton');
    
    cartBadge.textContent = totalItems;
    
    if (totalItems > 0) {
        cartBadge.classList.add('show');
        if (cartButton) {
            cartButton.classList.add('show');
        }
    } else {
        cartBadge.classList.remove('show');
        if (cartButton) {
            cartButton.classList.remove('show');
        }
    }
}

// Update user name display
function updateUserNameDisplay() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userNameText = document.getElementById('userNameText');
    
    if (userNameDisplay && userNameText) {
        const savedCustomerInfo = localStorage.getItem('yicem-customer-info');
        if (savedCustomerInfo) {
            try {
                const customerInfo = JSON.parse(savedCustomerInfo);
                if (customerInfo.name && customerInfo.name.trim()) {
                    userNameText.textContent = customerInfo.name.trim();
                    userNameDisplay.style.display = 'flex';
                } else {
                    userNameDisplay.style.display = 'none';
                }
            } catch (error) {
                console.error('Error parsing customer info:', error);
                userNameDisplay.style.display = 'none';
            }
        } else {
            userNameDisplay.style.display = 'none';
        }
    }
}

// Modal Functions
function openModal(modal) {
    modal.classList.add('modal--active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
        focusableElements[0].focus();
    }
}

function closeModal(modal) {
    modal.classList.remove('modal--active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function setupModalCloseHandlers(modal) {
    const closeButton = modal.querySelector('.modal__close');
    const overlay = modal.querySelector('.modal__overlay');
    
    if (closeButton) {
        closeButton.addEventListener('click', () => closeModal(modal));
    }
    if (overlay) {
        overlay.addEventListener('click', () => closeModal(modal));
    }
    
    // ESC key handler
    const handleEsc = (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
            closeModal(modal);
        }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Cleanup function
    return () => {
        document.removeEventListener('keydown', handleEsc);
    };
}

// Product Modal Functions
function openProductModal(product) {
    currentProduct = product;
    currentQuantity = 1;
    selectedOptions.clear();
    selectedExtras.clear();
    removedContents.clear();
    
    // Populate modal content
    document.getElementById('productDetailImage').src = product.image;
    document.getElementById('productDetailImage').alt = product.name;
    document.getElementById('productDetailName').textContent = product.name;
    document.getElementById('productDetailPrice').textContent = formatPrice(product.price);
    document.getElementById('productDetailDescription').textContent = product.desc;
    
    // Contents (sadece sandwich değilse göster)
    const contentsSection = document.querySelector('.product-detail__section:has(#productDetailContents)');
    const contentsList = document.getElementById('productDetailContents');
    
    if (product.categoryId === 'sandwich') {
        contentsSection.style.display = 'none';
    } else {
        contentsSection.style.display = 'block';
        contentsList.innerHTML = '';
        product.contents.forEach(content => {
            const li = document.createElement('li');
            li.className = 'product-detail__content-item';
            li.textContent = content;
            li.dataset.content = content;
            li.addEventListener('click', () => toggleContentRemoval(content, li));
            contentsList.appendChild(li);
        });
    }
    
    // Options
    const optionsContainer = document.getElementById('productDetailOptions');
    optionsContainer.innerHTML = '';
    
    // Menü seçeneği checkbox olarak (sadece sandwich için)
    if (product.categoryId === 'sandwich' && product.options.length > 0) {
        const menuOption = product.options[0];
        const menuDiv = document.createElement('div');
        menuDiv.className = 'product-detail__option';
        menuDiv.innerHTML = `
            <input type="checkbox" class="product-detail__option-checkbox" id="option_${menuOption.id}" value="${menuOption.id}">
            <label for="option_${menuOption.id}" class="product-detail__option-label">${menuOption.label}</label>
            <span class="product-detail__option-price">+${formatPrice(menuOption.price)}</span>
        `;
        optionsContainer.appendChild(menuDiv);
    } else {
        // Normal radio button seçenekleri (diğer ürünler için)
        product.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'product-detail__option';
            optionDiv.innerHTML = `
                <input type="radio" class="product-detail__option-radio" id="option_${option.id}" value="${option.id}" name="productOption">
                <label for="option_${option.id}" class="product-detail__option-label">${option.label}</label>
                <span class="product-detail__option-price">${option.price > 0 ? `+${formatPrice(option.price)}` : 'Ücretsiz'}</span>
            `;
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Extras (sandwich ve chicken-doner için)
    const extrasSection = document.getElementById('productDetailExtrasSection');
    const extrasContainer = document.getElementById('productDetailExtras');
    
    if (product.categoryId === 'sandwich' && product.extras) {
        extrasSection.style.display = 'block';
        extrasContainer.innerHTML = '';
        
        // Ana Ürünler
        const mainProductsDiv = document.createElement('div');
        mainProductsDiv.className = 'product-detail__extras-group';
        mainProductsDiv.innerHTML = '<h5 class="product-detail__extras-title">Ana Ürünler (Max 2 Ana Ürün seçin, diğerleri ekstra fiyat olacaktır.)</h5>';
        
        product.extras.mainProducts.forEach(extra => {
            const extraDiv = document.createElement('div');
            extraDiv.className = 'product-detail__extra';
            extraDiv.innerHTML = `
                <input type="checkbox" class="product-detail__extra-checkbox" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="main">
                <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
            `;
            mainProductsDiv.appendChild(extraDiv);
        });
        extrasContainer.appendChild(mainProductsDiv);
        
        // Yan Ürünler
        const sideProductsDiv = document.createElement('div');
        sideProductsDiv.className = 'product-detail__extras-group';
        sideProductsDiv.innerHTML = '<h5 class="product-detail__extras-title">Yan Ürünler (Max 4 Yan Ürün seçin, diğerleri ekstra fiyat olacaktır.)</h5>';
        
        product.extras.sideProducts.forEach(extra => {
            const extraDiv = document.createElement('div');
            extraDiv.className = 'product-detail__extra';
            extraDiv.innerHTML = `
                <input type="checkbox" class="product-detail__extra-checkbox" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="side">
                <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
            `;
            sideProductsDiv.appendChild(extraDiv);
        });
        extrasContainer.appendChild(sideProductsDiv);
    } else if ((product.categoryId === 'chicken-doner' || product.categoryId === 'beef-doner') && product.extras && product.extras.menuOptions) {
        // Tavuk döner ve et döner için menü seçenekleri
        extrasSection.style.display = 'block';
        extrasContainer.innerHTML = '';
        
        // Menü seçenekleri (radio button)
        const menuOptions = product.extras.menuOptions.filter(extra => 
            extra.name.includes('Cips + Ayran Menü') || extra.name.includes('Cips + Kola Menü')
        );
        
        if (menuOptions.length > 0) {
            const menuOptionsDiv = document.createElement('div');
            menuOptionsDiv.className = 'product-detail__extras-group';
            menuOptionsDiv.innerHTML = '<h5 class="product-detail__extras-title">Menü Seçenekleri</h5>';
            
            menuOptions.forEach(extra => {
                const extraDiv = document.createElement('div');
                extraDiv.className = 'product-detail__extra';
                extraDiv.innerHTML = `
                    <input type="radio" class="product-detail__extra-radio" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="menu" name="menuOption">
                    <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                    <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
                `;
                menuOptionsDiv.appendChild(extraDiv);
            });
            extrasContainer.appendChild(menuOptionsDiv);
        }
        
        // Patates seçenekleri (checkbox)
        const patatesOptions = product.extras.menuOptions.filter(extra => 
            extra.name.includes('Patates')
        );
        
        if (patatesOptions.length > 0) {
            const patatesOptionsDiv = document.createElement('div');
            patatesOptionsDiv.className = 'product-detail__extras-group';
            patatesOptionsDiv.innerHTML = '<h5 class="product-detail__extras-title">Patates Seçenekleri</h5>';
            
            patatesOptions.forEach(extra => {
                const extraDiv = document.createElement('div');
                extraDiv.className = 'product-detail__extra';
                extraDiv.innerHTML = `
                    <input type="checkbox" class="product-detail__extra-checkbox" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="patates">
                    <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                    <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
                `;
                patatesOptionsDiv.appendChild(extraDiv);
            });
            extrasContainer.appendChild(patatesOptionsDiv);
        }
    } else if ((product.categoryId === 'pasta' || product.categoryId === 'manti') && product.extras && product.extras.drinkOptions) {
        // Makarna ve mantı için içecek seçenekleri
        extrasSection.style.display = 'block';
        extrasContainer.innerHTML = '';
        
        const drinkOptionsDiv = document.createElement('div');
        drinkOptionsDiv.className = 'product-detail__extras-group';
        drinkOptionsDiv.innerHTML = '<h5 class="product-detail__extras-title">İçecek Seçenekleri</h5>';
        
        product.extras.drinkOptions.forEach(extra => {
            const extraDiv = document.createElement('div');
            extraDiv.className = 'product-detail__extra';
            extraDiv.innerHTML = `
                <input type="radio" class="product-detail__extra-radio" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="drink" name="drinkOption">
                <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
            `;
            drinkOptionsDiv.appendChild(extraDiv);
        });
        extrasContainer.appendChild(drinkOptionsDiv);
    } else if (product.categoryId === 'bistro' && product.extras) {
        // Bistro ürünleri için içecek ve ekstra seçenekleri
        extrasSection.style.display = 'block';
        extrasContainer.innerHTML = '';
        
        // İçecek seçenekleri (radio button)
        if (product.extras.drinkOptions && product.extras.drinkOptions.length > 0) {
            const drinkOptionsDiv = document.createElement('div');
            drinkOptionsDiv.className = 'product-detail__extras-group';
            drinkOptionsDiv.innerHTML = '<h5 class="product-detail__extras-title">İçecek Seçenekleri</h5>';
            
            product.extras.drinkOptions.forEach(extra => {
                const extraDiv = document.createElement('div');
                extraDiv.className = 'product-detail__extra';
                extraDiv.innerHTML = `
                    <input type="radio" class="product-detail__extra-radio" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="drink" name="drinkOption">
                    <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                    <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
                `;
                drinkOptionsDiv.appendChild(extraDiv);
            });
            extrasContainer.appendChild(drinkOptionsDiv);
        }
        
        // Ekstra seçenekler (checkbox)
        if (product.extras.extraOptions && product.extras.extraOptions.length > 0) {
            const extraOptionsDiv = document.createElement('div');
            extraOptionsDiv.className = 'product-detail__extras-group';
            extraOptionsDiv.innerHTML = '<h5 class="product-detail__extras-title">Ekstra Seçenekler</h5>';
            
            product.extras.extraOptions.forEach(extra => {
                const extraDiv = document.createElement('div');
                extraDiv.className = 'product-detail__extra';
                extraDiv.innerHTML = `
                    <input type="checkbox" class="product-detail__extra-checkbox" id="extra_${extra.id}" value="${extra.id}" data-price="${extra.price}" data-type="extra">
                    <label for="extra_${extra.id}" class="product-detail__extra-label">${extra.name}</label>
                    <span class="product-detail__extra-price">+${formatPrice(extra.price)}</span>
                `;
                extraOptionsDiv.appendChild(extraDiv);
            });
            extrasContainer.appendChild(extraOptionsDiv);
        }
    } else {
        extrasSection.style.display = 'none';
    }
    
    // Reset quantity
    document.getElementById('quantityValue').textContent = '1';
    document.getElementById('productNote').value = '';
    document.getElementById('noteCharCount').textContent = '0';
    
    updateProductTotal();
    openModal(productModal);
}

function updateProductTotal() {
    if (!currentProduct) return;
    
    const basePrice = currentProduct.price;
    const optionsPrice = currentProduct.options
        .filter(option => selectedOptions.has(option.id))
        .reduce((sum, option) => sum + option.price, 0);
    
    // Extras fiyatı (sandwich ve chicken-doner için)
    let extrasPrice = 0;
    if (currentProduct.categoryId === 'sandwich' && currentProduct.extras) {
        // Ana ürünler - ilk 2 ücretsiz, 3. ve sonrası ekstra
        const selectedMainProducts = currentProduct.extras.mainProducts
            .filter(extra => selectedExtras.has(extra.id));
        
        if (selectedMainProducts.length > 2) {
            const extraMainProducts = selectedMainProducts.slice(2); // 3. ve sonrası
            extrasPrice += extraMainProducts.reduce((sum, extra) => sum + extra.price, 0);
        }
        
        // Yan ürünler - ilk 4 ücretsiz, 5. ve sonrası ekstra
        const selectedSideProducts = currentProduct.extras.sideProducts
            .filter(extra => selectedExtras.has(extra.id));
        
        if (selectedSideProducts.length > 4) {
            const extraSideProducts = selectedSideProducts.slice(4); // 5. ve sonrası
            extrasPrice += extraSideProducts.reduce((sum, extra) => sum + extra.price, 0);
        }
    } else if ((currentProduct.categoryId === 'chicken-doner' || currentProduct.categoryId === 'beef-doner') && currentProduct.extras && currentProduct.extras.menuOptions) {
        // Tavuk döner ve et döner menü seçenekleri
        const selectedMenuOptions = currentProduct.extras.menuOptions
            .filter(extra => selectedExtras.has(extra.id));
        
        extrasPrice += selectedMenuOptions.reduce((sum, extra) => sum + extra.price, 0);
    }
    
    const total = (basePrice + optionsPrice + extrasPrice) * currentQuantity;
    document.getElementById('productTotalPrice').textContent = formatPrice(total);
}

function toggleContentRemoval(content, element) {
    if (removedContents.has(content)) {
        // Geri ekle
        removedContents.delete(content);
        element.classList.remove('product-detail__content-item--removed');
    } else {
        // Çıkar
        removedContents.add(content);
        element.classList.add('product-detail__content-item--removed');
    }
}


// Cart Modal Functions
function openCartModal() {
    renderCartContent();
    updateCartTotals();
    openModal(cartModal);
}

function renderCartContent() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCartState.style.display = 'flex';
        return;
    }
    
    cartContent.style.display = 'block';
    emptyCartState.style.display = 'none';
    
    cartContent.innerHTML = '';
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart__item';
        
        const optionsText = item.selectedOptions.length > 0 
            ? item.selectedOptions.map(opt => opt.label).join(', ')
            : '';
        
        const removedText = item.removedContents && item.removedContents.length > 0
            ? item.removedContents.map(content => `${content} çıkarıldı`).join(', ')
            : '';
        
        itemDiv.innerHTML = `
            <div class="cart__item-info">
                <div class="cart__item-name">${item.name}</div>
                ${optionsText ? `<div class="cart__item-options">${optionsText}</div>` : ''}
                ${removedText ? `<div class="cart__item-removed">${removedText}</div>` : ''}
                ${item.note ? `<div class="cart__item-note">Not: ${item.note}</div>` : ''}
            </div>
            <div class="cart__item-quantity">
                <button class="cart__item-quantity-btn" onclick="updateCartItemQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <span class="cart__item-quantity-value">${item.quantity}</span>
                <button class="cart__item-quantity-btn" onclick="updateCartItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div class="cart__item-price">${formatPrice(item.price * item.quantity)}</div>
            <div class="cart__item-actions">
                <button class="cart__item-action cart__item-action--edit" onclick="editCartItem('${item.id}')" title="Düzenle">✏️</button>
                <button class="cart__item-action cart__item-action--delete" onclick="removeFromCart('${item.id}')" title="Sil">🗑️</button>
            </div>
        `;
        
        cartContent.appendChild(itemDiv);
    });
}

function updateCartTotals() {
    const { total } = calculateCartTotals();
    
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

function editCartItem(cartItemId) {
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        const product = PRODUCTS.find(p => p.id === item.productId);
        if (product) {
            closeModal(cartModal);
            
            // Set current state for editing
            currentProduct = product;
            currentQuantity = item.quantity;
            selectedOptions = new Set(item.selectedOptions.map(opt => opt.id));
            
            // Open product modal with current values
            openProductModal(product);
            
            // Set current values
            document.getElementById('quantityValue').textContent = item.quantity.toString();
            document.getElementById('productNote').value = item.note;
            document.getElementById('noteCharCount').textContent = item.note.length.toString();
            
            // Check selected options
            item.selectedOptions.forEach(option => {
                const radio = document.getElementById(`option_${option.id}`);
                if (radio) radio.checked = true;
            });
            
            updateProductTotal();
        }
    }
}

// Category icon fallback function
function getCategoryIcon(categoryId) {
    const icons = {
        'pizza': '🍕',
        'toast': '🥪',
        'sandwich': '🥙',
        'chicken-doner': '🍗',
        'beef-doner': '🥩',
        'pasta': '🍝',
        'manti': '🥟',
        'hamburger': '🍔',
        'kofte': '🥩',
        'aperatifler': '🍟',
        'bistro': '🍽️',
        'salad': '🥗',
        'drinks': '🥤',
        'ayvalik': '🥪',
        'doner': '🥙',
        'izgara': '🔥',
        'makarna': '🍝',
        'salata': '🥗',
        'icecek': '🥤'
    };
    return icons[categoryId] || '🍽️';
}

// Category and Product Rendering
function renderCategories() {
    categoriesContainer.innerHTML = '';
    
    CATEGORIES.forEach(category => {
        const categoryElement = document.createElement('button');
        categoryElement.className = 'categories__category';
        categoryElement.setAttribute('data-category-id', category.id);
        
        categoryElement.innerHTML = `
            <span class="categories__category-icon">${getCategoryIcon(category.id)}</span>
            <span>${category.name}</span>
        `;
        
        categoryElement.addEventListener('click', () => {
            console.log('Category clicked:', category.id);
            scrollToCategory(category.id);
            setActiveCategory(category.id);
        });
        
        categoriesContainer.appendChild(categoryElement);
    });
    
    // Initialize category navigation
    initCategoryNavigation();
}

function renderProducts() {
    productsSection.innerHTML = '';
    
    CATEGORIES.forEach(category => {
        const categoryProducts = PRODUCTS.filter(product => product.categoryId === category.id);
        
        if (categoryProducts.length === 0) return;
        
        // Category section
        const categorySection = document.createElement('section');
        categorySection.className = 'products__category';
        categorySection.id = `category-${category.id}`;
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'products__category-title';
        
        categoryTitle.innerHTML = `
            <span class="products__category-icon">${getCategoryIcon(category.id)}</span>
            ${category.name}
        `;
        categorySection.appendChild(categoryTitle);
        
        // Pizza kategorisi için servis süresi bilgisi
        if (category.id === 'pizza') {
            const serviceTimeInfo = document.createElement('div');
            serviceTimeInfo.className = 'products__service-time';
            serviceTimeInfo.innerHTML = `
                <span class="products__service-time-icon">⏱️</span>
                <span class="products__service-time-text">Pizzalarımızın servis süresi minimum 25 dakikadır</span>
            `;
            categorySection.appendChild(serviceTimeInfo);
        }
        
        // Tost kategorisi için özel bilgi
        if (category.id === 'toast') {
            const toastInfo = document.createElement('div');
            toastInfo.className = 'products__service-time';
            toastInfo.innerHTML = `
                <span class="products__service-time-icon">🥪</span>
                <span class="products__service-time-text">Tostlarımız Kare Jumbo Kepekli Ekmek ile Yapılabilir</span>
            `;
            categorySection.appendChild(toastInfo);
        }
        
        // Tavuk döner kategorisi için özel bilgi
        if (category.id === 'chicken-doner') {
            const chickenInfo = document.createElement('div');
            chickenInfo.className = 'products__service-time';
            chickenInfo.innerHTML = `
                <span class="products__service-time-icon">🍗</span>
                <span class="products__service-time-text">Ustamızın ellerinden sizlere özel</span>
            `;
            categorySection.appendChild(chickenInfo);
        }
        
        // Et döner kategorisi için özel bilgi
        if (category.id === 'beef-doner') {
            const beefInfo = document.createElement('div');
            beefInfo.className = 'products__service-time';
            beefInfo.innerHTML = `
                <span class="products__service-time-icon">🥩</span>
                <span class="products__service-time-text">Ustamızın ellerinden sizlere özel</span>
            `;
            categorySection.appendChild(beefInfo);
        }
        
        // Makarnalar kategorisi için özel bilgi
        if (category.id === 'pasta') {
            const pastaInfo = document.createElement('div');
            pastaInfo.className = 'products__service-time';
            pastaInfo.innerHTML = `
                <span class="products__service-time-icon">🍝</span>
                <span class="products__service-time-text">Ustamızın Özel Soslarıyla</span>
            `;
            categorySection.appendChild(pastaInfo);
        }
        
        // Hamburger kategorisi için özel bilgi
        if (category.id === 'hamburger') {
            const hamburgerInfo = document.createElement('div');
            hamburgerInfo.className = 'products__service-time';
            hamburgerInfo.innerHTML = `
                <span class="products__service-time-icon">🍔</span>
                <span class="products__service-time-text">Ev Yapımı Hamburgerlerimiz</span>
            `;
            categorySection.appendChild(hamburgerInfo);
        }
        
        // Salata kategorisi için özel bilgi
        if (category.id === 'salad') {
            const saladInfo = document.createElement('div');
            saladInfo.className = 'products__service-time';
            saladInfo.innerHTML = `
                <span class="products__service-time-icon">🥗</span>
                <span class="products__service-time-text">Tüm Salata & Sebzelerimiz Sirkeli Suda Bekletilip Yıkandıktan sonra servis edilmektedir.</span>
            `;
            categorySection.appendChild(saladInfo);
        }
        
        // Products grid
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products__grid';
        
        categoryProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-card__image-container">
                    <img class="product-card__image" src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-card__content">
                    <h3 class="product-card__name">${product.name}</h3>
                    <p class="product-card__description">${product.desc}</p>
                    <div class="product-card__footer">
                        <span class="product-card__price">${formatPrice(product.price)}</span>
                        <button class="product-card__add-button" onclick="openProductModal(PRODUCTS.find(p => p.id === '${product.id}'))">+</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        categorySection.appendChild(productsGrid);
        productsSection.appendChild(categorySection);
    });
}

function scrollToCategory(categoryId) {
    console.log('Scrolling to category:', categoryId);
    const categoryElement = document.getElementById(`category-${categoryId}`);
    if (categoryElement) {
        console.log('Category element found, scrolling...');
        categoryElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.log('Category element not found:', `category-${categoryId}`);
    }
}

function setActiveCategory(categoryId) {
    // Remove active class from all categories
    document.querySelectorAll('.categories__category').forEach(cat => {
        cat.classList.remove('categories__category--active');
    });
    
    // Add active class to clicked category
    const categoryElements = document.querySelectorAll('.categories__category');
    const categoryIndex = CATEGORIES.findIndex(cat => cat.id === categoryId);
    if (categoryElements[categoryIndex]) {
        categoryElements[categoryIndex].classList.add('categories__category--active');
    }
}

// Category Navigation Functions
function initCategoryNavigation() {
    const prevBtn = document.getElementById('categoriesPrevBtn');
    const nextBtn = document.getElementById('categoriesNextBtn');
    const categoriesList = document.getElementById('categoriesContainer');
    const categoriesWrapper = document.getElementById('categoriesWrapper');
    
    let currentScroll = 0;
    const scrollAmount = 200;
    
    function updateNavButtons() {
        const maxScroll = categoriesList.scrollWidth - categoriesWrapper.clientWidth;
        
        prevBtn.disabled = currentScroll <= 0;
        nextBtn.disabled = currentScroll >= maxScroll;
    }
    
    function scrollCategories(direction) {
        const maxScroll = categoriesList.scrollWidth - categoriesWrapper.clientWidth;
        
        if (direction === 'prev') {
            currentScroll = Math.max(0, currentScroll - scrollAmount);
        } else {
            currentScroll = Math.min(maxScroll, currentScroll + scrollAmount);
        }
        
        categoriesList.style.transform = `translateX(-${currentScroll}px)`;
        updateNavButtons();
    }
    
    prevBtn.addEventListener('click', () => scrollCategories('prev'));
    nextBtn.addEventListener('click', () => scrollCategories('next'));
    
    // Initialize button states
    updateNavButtons();
    
    // Hide navigation buttons if all categories fit
    function checkIfNavigationNeeded() {
        const needsNavigation = categoriesList.scrollWidth > categoriesWrapper.clientWidth;
        prevBtn.style.display = needsNavigation ? 'flex' : 'none';
        nextBtn.style.display = needsNavigation ? 'flex' : 'none';
    }
    
    // Check on load and resize
    checkIfNavigationNeeded();
    window.addEventListener('resize', checkIfNavigationNeeded);
}

// Event Listeners
function setupEventListeners() {
    // Cart button
    cartButton.addEventListener('click', openCartModal);
    
    // Product modal events
    const productModalClose = document.getElementById('productModalClose');
    const productModalCancel = document.getElementById('productModalCancel');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    productModalClose.addEventListener('click', () => closeModal(productModal));
    productModalCancel.addEventListener('click', () => closeModal(productModal));
    
    addToCartBtn.addEventListener('click', () => {
        if (!currentProduct) return;
        
        const note = document.getElementById('productNote').value.trim();
        addToCart(currentProduct, currentQuantity, selectedOptions, note, removedContents, selectedExtras);
        closeModal(productModal);
        
        // Show success message (optional)
        showNotification('Ürün sepete eklendi!', 'success');
    });
    
    // Quantity controls
    const quantityDecrease = document.getElementById('quantityDecrease');
    const quantityIncrease = document.getElementById('quantityIncrease');
    const quantityValue = document.getElementById('quantityValue');
    
    quantityDecrease.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityValue.textContent = currentQuantity.toString();
            updateProductTotal();
        }
    });
    
    quantityIncrease.addEventListener('click', () => {
        if (currentQuantity < 20) {
            currentQuantity++;
            quantityValue.textContent = currentQuantity.toString();
            updateProductTotal();
        }
    });
    
    // Options change handler
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('product-detail__option-radio')) {
            const optionId = e.target.value;
            if (e.target.checked) {
                // Radio button için sadece bir seçenek seçilebilir
                selectedOptions.clear();
                selectedOptions.add(optionId);
            }
            updateProductTotal();
        } else if (e.target.classList.contains('product-detail__option-checkbox')) {
            // Checkbox seçenekleri (menü seçeneği)
            const optionId = e.target.value;
            if (e.target.checked) {
                selectedOptions.add(optionId);
            } else {
                selectedOptions.delete(optionId);
            }
            updateProductTotal();
           } else if (e.target.classList.contains('product-detail__extra-checkbox')) {
               // Extras checkbox'ları (patates seçenekleri ve ekstra seçenekler)
               const extraId = e.target.value;
               
               if (e.target.checked) {
                   selectedExtras.add(extraId);
               } else {
                   selectedExtras.delete(extraId);
               }
               updateProductTotal();
           } else if (e.target.classList.contains('product-detail__extra-radio')) {
               // Extras radio button'ları (menü seçenekleri ve içecek seçenekleri)
               const extraId = e.target.value;
               const dataType = e.target.getAttribute('data-type');
               
               if (e.target.checked) {
                   if (dataType === 'menu') {
                       // Menü seçenekleri için
                       const sameTypeRadios = document.querySelectorAll(`input[data-type="menu"][name="menuOption"]`);
                       sameTypeRadios.forEach(radio => {
                           if (radio.value !== extraId) {
                               selectedExtras.delete(radio.value);
                           }
                       });
                   } else if (dataType === 'drink') {
                       // İçecek seçenekleri için
                       const sameTypeRadios = document.querySelectorAll(`input[data-type="drink"][name="drinkOption"]`);
                       sameTypeRadios.forEach(radio => {
                           if (radio.value !== extraId) {
                               selectedExtras.delete(radio.value);
                           }
                       });
                   }
                   
                   selectedExtras.add(extraId);
               } else {
                   selectedExtras.delete(extraId);
               }
               updateProductTotal();
           }
    });
    
    // Note character counter
    const noteInput = document.getElementById('productNote');
    const noteCharCount = document.getElementById('noteCharCount');
    
    noteInput.addEventListener('input', () => {
        const length = noteInput.value.length;
        noteCharCount.textContent = length;
        
        if (length > 120) {
            noteInput.value = noteInput.value.substring(0, 120);
            noteCharCount.textContent = '120';
        }
    });
    
    // Cart modal events
    const cartModalClose = document.getElementById('cartModalClose');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    cartModalClose.addEventListener('click', () => closeModal(cartModal));
    continueShoppingBtn.addEventListener('click', () => closeModal(cartModal));
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        // Close cart modal and open checkout modal
        closeModal(cartModal);
        openCheckoutModal();
    });
    
    // Checkout modal events
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalClose = document.getElementById('checkoutModalClose');
    const checkoutCancelBtn = document.getElementById('checkoutCancelBtn');
    const checkoutSubmitBtn = document.getElementById('checkoutSubmitBtn');
    
    checkoutModalClose.addEventListener('click', () => closeModal(checkoutModal));
    checkoutCancelBtn.addEventListener('click', () => closeModal(checkoutModal));
    checkoutSubmitBtn.addEventListener('click', submitCheckoutOrder);
    
    // Success modal events
    const successModal = document.getElementById('successModal');
    const successModalClose = document.getElementById('successModalClose');
    const successCloseBtn = document.getElementById('successCloseBtn');
    
    if (successModalClose) {
        successModalClose.addEventListener('click', () => closeModal(successModal));
    }
    if (successCloseBtn) {
        successCloseBtn.addEventListener('click', () => closeModal(successModal));
    }
    
    // Form validation on input
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('checkout__input')) {
            e.target.classList.remove('checkout__input--error');
            const errorDiv = document.getElementById(e.target.name + 'Error');
            if (errorDiv) {
                errorDiv.textContent = '';
            }
        }
    });
    
    // Setup modal close handlers
    setupModalCloseHandlers(productModal);
    setupModalCloseHandlers(cartModal);
    setupModalCloseHandlers(checkoutModal);
    setupModalCloseHandlers(successModal);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for lazy loading and category highlighting
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const categoryId = entry.target.id.replace('category-', '');
                setActiveCategory(categoryId);
            }
        });
    }, {
        rootMargin: '-100px 0px -50% 0px'
    });
    
    // Observe all category sections
    document.querySelectorAll('.products__category').forEach(section => {
        observer.observe(section);
    });
}

// Initialize App
function init() {
    loadCartFromStorage();
    renderCategories();
    renderProducts();
    setupEventListeners();
    
    // Setup intersection observer after a short delay to ensure DOM is ready
    setTimeout(setupIntersectionObserver, 100);
    
    // Set first category as active
    if (CATEGORIES.length > 0) {
        setActiveCategory(CATEGORIES[0].id);
    }
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    initCheckoutForm();
    initPrivacyModal();
    initCookieBanner();
    initializeFeedbackModal();
    updateUserNameDisplay();
    updateRestaurantStatus();
});

// Checkout Modal Functions
function openCheckoutModal() {
    if (cart.length === 0) return;
    
    openModal(checkoutModal);
}


function validateCheckoutForm() {
    console.log('validateCheckoutForm called');
    const form = document.getElementById('checkoutForm');
    const formData = new FormData(form);
    let isValid = true;
    
    // Temizleme
    document.querySelectorAll('.checkout__error').forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    document.querySelectorAll('.checkout__input').forEach(input => {
        input.classList.remove('checkout__input--error');
    });
    
    // Ad Soyad kontrolü
    const customerName = formData.get('customerName');
    console.log('Customer name:', customerName);
    if (!customerName || customerName.trim().length < 2) {
        console.log('Customer name validation failed');
        showCheckoutFieldError('customerName', 'Ad soyad en az 2 karakter olmalıdır.');
        isValid = false;
    }
    
    // Telefon kontrolü
    const customerPhone = formData.get('customerPhone');
    console.log('Customer phone:', customerPhone);
    // Sadece rakamları al ve 10 karakter kontrolü yap
    const phoneDigits = customerPhone ? customerPhone.replace(/\D/g, '') : '';
    if (!customerPhone || phoneDigits.length !== 10) {
        console.log('Customer phone validation failed');
        showCheckoutFieldError('customerPhone', 'Geçerli bir telefon numarası giriniz. Format: 530 561 67 47');
        isValid = false;
    }
    
    // Lokasyon kontrolü
    const customerLocation = formData.get('customerLocation');
    console.log('Customer location:', customerLocation);
    if (!customerLocation || customerLocation.trim().length < 5) {
        console.log('Customer location validation failed');
        showCheckoutFieldError('customerLocation', 'Lokasyon seçmelisiniz.');
        isValid = false;
    }
    
    // Adres kontrolü
    const neighborhood = formData.get('neighborhood');
    const street = formData.get('street');
    const building = formData.get('building');
    const apartment = formData.get('apartment');
    
    console.log('Address fields:', { neighborhood, street, building, apartment });
    if (!neighborhood || !street || !building || !apartment) {
        console.log('Address validation failed');
        showCheckoutFieldError('deliveryAddress', 'Tüm adres bilgileri doldurulmalıdır.');
        isValid = false;
    }
    
    // Ödeme yöntemi kontrolü
    const paymentMethod = formData.get('paymentMethod');
    console.log('Payment method:', paymentMethod);
    if (!paymentMethod) {
        console.log('Payment method validation failed');
        showCheckoutFieldError('paymentMethod', 'Ödeme yöntemi seçmelisiniz.');
        isValid = false;
    }
    
    // Yemek kartı kontrolü
    if (paymentMethod === 'mealcard') {
        const mealCardType = formData.get('mealCardType');
        console.log('Meal card type:', mealCardType);
        if (!mealCardType) {
            console.log('Meal card type validation failed');
            showCheckoutFieldError('mealCardType', 'Yemek kartı türü seçmelisiniz.');
            isValid = false;
        }
    }
    
    console.log('Form validation result:', isValid);
    return isValid;
}

function showCheckoutFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorDiv = document.getElementById(fieldName + 'Error');
    
    if (field) {
        field.classList.add('checkout__input--error');
    }
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }
}

function submitCheckoutOrder() {
    console.log('submitCheckoutOrder called');
    
    if (!validateCheckoutForm()) {
        console.log('Form validation failed');
        return;
    }
    
    if (!cart || cart.length === 0) {
        console.log('Cart is empty');
        showNotification('Sepetinizde ürün bulunmuyor.', 'error');
        return;
    }
    
    console.log('Form validation passed, cart has items:', cart.length);
    
    // Form verilerini al
    const form = document.getElementById('checkoutForm');
    const formData = new FormData(form);
    const customerData = Object.fromEntries(formData.entries());
    
    // Adres bilgilerini birleştir
    let fullAddress = `${customerData.neighborhood} ${customerData.street} ${customerData.building} ${customerData.apartment}`;
    if (customerData.addressNote) {
        fullAddress += ` (${customerData.addressNote})`;
    }
    
    // Sipariş verisini oluştur
    const order = {
        id: 'ORD-' + Date.now(),
        customer: {
            name: customerData.customerName,
            phone: customerData.customerPhone,
            location: customerData.customerLocation,
            address: fullAddress,
            paymentMethod: customerData.paymentMethod,
            mealCardType: customerData.mealCardType || null,
            orderNote: customerData.orderNote || null
        },
        items: [...cart], // Sepet kopyası
        totals: calculateCartTotals(),
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    // Bilgileri kaydet checkbox kontrolü
    if (customerData.saveInfo) {
        saveCustomerInfo(customerData);
    }
    
    // Siparişi kaydet
    saveOrder(order);
    
    // n8n webhook'a sipariş gönder
    const orderData = {
        customer: {
            name: customerData.customerName,
            phone: customerData.customerPhone,
            location: customerData.customerLocation,
            address: {
                fullAddress: fullAddress,
                mahalle: customerData.neighborhood,
                cadde: customerData.street,
                apartman: customerData.building,
                daire: customerData.apartment,
                note: customerData.addressNote
            }
        },
        items: cart.map(item => ({
            productId: item.productId,
            name: item.name,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
            options: item.selectedOptions,
            removedContents: item.removedContents,
            note: item.note
        })),
        total: calculateCartTotals().total,
        paymentMethod: customerData.paymentMethod,
        mealCardType: customerData.mealCardType,
        orderNote: customerData.orderNote,
        timestamp: new Date().toISOString(),
        orderId: 'YC' + Date.now()
    };

    // n8n webhook'a gönder
    fetch('https://n8n.kaysia.co/webhook-test/ooDDibjSS8y3NiFt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (response.ok) {
            console.log('✅ Sipariş n8n\'e başarıyla gönderildi');
            return response.json();
        } else {
            console.error('❌ n8n webhook hatası:', response.status);
        }
    })
    .then(data => {
        console.log('n8n yanıtı:', data);
    })
    .catch(error => {
        console.error('❌ Webhook gönderim hatası:', error);
    });
    
    // Başarı modalını göster
    showSuccessModal(order);
    
    // Sepeti temizle
    cart = [];
    saveCartToStorage();
    updateCartBadge();
}

function saveOrder(order) {
    // Gerçek uygulamada bu veri API'ye gönderilir
    console.log('Sipariş oluşturuldu:', order);
    
    // Geçmiş siparişleri kaydet
    const orders = JSON.parse(localStorage.getItem('yicem_orders') || '[]');
    orders.push(order);
    localStorage.setItem('yicem_orders', JSON.stringify(orders));
}

function calculateEstimatedDelivery(deliveryTime) {
    const now = new Date();
    const deliveryTimes = {
        'asap': 30,
        '30min': 30,
        '1hour': 60,
        '2hour': 120
    };
    
    const minutes = deliveryTimes[deliveryTime] || 30;
    const estimatedTime = new Date(now.getTime() + minutes * 60000);
    
    return estimatedTime.toISOString();
}

function showSuccessModal(order) {
    // Ödeme modalını kapat
    closeModal(checkoutModal);
    
    // Başarı modalını doldur
    const customerNameElement = document.getElementById('customerNameSuccess');
    if (customerNameElement) {
        customerNameElement.textContent = order.customer.name;
    }
    
    // Kullanıcı adını güncelle
    updateUserNameDisplay();
    
    // Başarı modalını aç
    openModal(successModal);
    
    // 5 saniye countdown başlat
    let countdown = 5;
    const countdownElement = document.getElementById('successCountdown');
    
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdownElement) {
            countdownElement.textContent = countdown;
        }
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            closeModal(successModal);
        }
    }, 1000);
}

function getPaymentMethodText(method) {
    const methods = {
        'cash': 'Nakit',
        'card': 'Kredi/Banka Kartı',
        'qr': 'QR Mobil',
        'iban': 'IBAN',
        'mealcard': 'Yemek Kartları'
    };
    return methods[method] || method;
}

// Phone formatting function
function formatPhoneNumber(input) {
    let value = input.value;
    console.log('formatPhoneNumber called with:', value);
    
    // Sadece rakamları al
    let phonePart = value.replace(/\D/g, '');
    console.log('Digits only:', phonePart, 'Length:', phonePart.length);
    
    // Maksimum 10 karakter
    if (phonePart.length > 10) {
        phonePart = phonePart.substring(0, 10);
        console.log('Truncated to 10 digits:', phonePart);
    }
    
    // Format: 530 561 67 47
    let formatted = '';
    if (phonePart.length > 0) {
        if (phonePart.length <= 3) {
            formatted = phonePart;
        } else if (phonePart.length <= 6) {
            formatted = phonePart.substring(0, 3) + ' ' + phonePart.substring(3);
        } else if (phonePart.length <= 8) {
            formatted = phonePart.substring(0, 3) + ' ' + phonePart.substring(3, 6) + ' ' + phonePart.substring(6);
        } else if (phonePart.length === 9) {
            formatted = phonePart.substring(0, 3) + ' ' + phonePart.substring(3, 6) + ' ' + phonePart.substring(6, 8) + ' ' + phonePart.substring(8);
        } else if (phonePart.length === 10) {
            formatted = phonePart.substring(0, 3) + ' ' + phonePart.substring(3, 6) + ' ' + phonePart.substring(6, 8) + ' ' + phonePart.substring(8);
        }
    }
    
    console.log('Formatted result:', formatted);
    input.value = formatted;
}

// Çerez izni kontrolü
function hasLocationPermission() {
    // Basit çerez kontrolü - gerçek uygulamada daha detaylı olabilir
    return localStorage.getItem('yicem-cookie-consent') === 'accepted';
}

// Çerez onay modalı göster
function showCookieConsent() {
    // Basit çerez onayı - gerçek uygulamada modal olabilir
    const consent = confirm('Konum bilgisi almak için çerezleri kabul etmelisiniz. Kabul ediyor musunuz?');
    if (consent) {
        localStorage.setItem('yicem-cookie-consent', 'accepted');
        // Çerez kabul edildikten sonra konum almayı tekrar dene
        getCurrentLocation();
    }
}

// Get user location
function getCurrentLocation() {
    console.log('getCurrentLocation called');
    
    if (!navigator.geolocation) {
        alert('Tarayıcınız konum özelliğini desteklemiyor.');
        return;
    }
    
    const locationInput = document.getElementById('customerLocation');
    const locationBtn = document.getElementById('getLocationBtn');
    
    console.log('Location input:', locationInput);
    console.log('Location button:', locationBtn);
    
    locationInput.value = 'Konum alınıyor...';
    locationBtn.disabled = true;
    locationBtn.textContent = 'Alınıyor...';
    
    // Mobil cihazlarda daha agresif konum alma
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 dakika cache
    };
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // Antalya/Muratpaşa bölge kontrolü
            if (isInAntalyaMuratpasa(lat, lng)) {
                // Google Maps URL oluştur
                const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
                locationInput.value = mapsUrl;
                
                // Konum başarıyla alındı, localStorage'a kaydet
                localStorage.setItem('yicem-last-location', mapsUrl);
                
                // Detaylı adres bilgisi al
                getDetailedAddress(lat, lng, locationInput, locationBtn);
            } else {
                // Bölge dışındaysa uyarı ver
                locationInput.value = '';
                alert('Konumunuz Antalya/Muratpaşa bölgesi dışında. Lütfen manuel olarak giriniz.');
                locationBtn.disabled = false;
                locationBtn.textContent = 'Konumu Al';
            }
        },
        function(error) {
            let errorMessage = 'Konum alınamadı: ';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage += 'Konum izni reddedildi. Lütfen tarayıcı ayarlarından konum iznini açın.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage += 'Konum bilgisi mevcut değil.';
                    break;
                case error.TIMEOUT:
                    errorMessage += 'Konum alma zaman aşımına uğradı.';
                    break;
                default:
                    errorMessage += 'Bilinmeyen hata.';
                    break;
            }
            alert(errorMessage);
            locationInput.value = '';
            locationBtn.disabled = false;
            locationBtn.textContent = 'Konumu Al';
        },
        options
    );
}

// Antalya/Muratpaşa bölge kontrolü
function isInAntalyaMuratpasa(lat, lng) {
    // Antalya/Muratpaşa bölgesi koordinat aralıkları
    const antalyaBounds = {
        north: 36.95,  // Kuzey sınırı
        south: 36.85,  // Güney sınırı
        east: 30.75,   // Doğu sınırı
        west: 30.65    // Batı sınırı
    };
    
    return lat >= antalyaBounds.south && 
           lat <= antalyaBounds.north && 
           lng >= antalyaBounds.west && 
           lng <= antalyaBounds.east;
}

// Detaylı adres bilgisi alma
function getDetailedAddress(lat, lng, locationInput, locationBtn) {
    // Google Maps Geocoding API (ücretsiz alternatif: OpenStreetMap Nominatim)
    const geocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=tr`;
    
    fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.address) {
                const address = data.address;
                const city = address.city || address.town || address.village || 'Antalya';
                const district = address.suburb || address.quarter || address.neighbourhood || 'Muratpaşa';
                
                // Google Maps URL'sini koru, sadece adres bilgilerini doldur
                // locationInput.value zaten Google Maps URL'si ile doldurulmuş
                
                // Detaylı adres bilgilerini doldur
                autoFillDetailedAddress(address);
                
                // Form validasyonunu güncelle
                validateForm();
            }
        })
        .catch((error) => {
            console.error('Adres bilgisi alınamadı:', error);
        })
        .finally(() => {
            locationBtn.disabled = false;
            locationBtn.textContent = 'Konumu Al';
        });
}

// Auto-fill detailed address from GPS data
function autoFillDetailedAddress(addressData) {
    try {
        const neighborhoodInput = document.getElementById('neighborhood');
        const streetInput = document.getElementById('street');
        const buildingInput = document.getElementById('building');
        const apartmentInput = document.getElementById('apartment');
        
        // Mahalle bilgisi (eğer boşsa)
        if (neighborhoodInput && !neighborhoodInput.value) {
            const neighborhood = addressData.suburb || 
                               addressData.quarter || 
                               addressData.neighbourhood || 
                               addressData.hamlet || 
                               'Muratpaşa';
            neighborhoodInput.value = neighborhood;
        }
        
        // Cadde bilgisi (eğer boşsa)
        if (streetInput && !streetInput.value) {
            const street = addressData.road || 
                          addressData.street || 
                          addressData.pedestrian || 
                          addressData.footway || 
                          'Antalya';
            streetInput.value = street;
        }
        
        // Apartman bilgisi (eğer varsa ve boşsa)
        if (buildingInput && !buildingInput.value) {
            const building = addressData.house_number || 
                           addressData.building || 
                           addressData.amenity || 
                           '';
            if (building) {
                buildingInput.value = building;
            }
        }
        
        // Daire bilgisi (eğer varsa ve boşsa)
        if (apartmentInput && !apartmentInput.value) {
            const apartment = addressData.unit || 
                            addressData.level || 
                            addressData.floor || 
                            '';
            if (apartment) {
                apartmentInput.value = apartment;
            }
        }
        
        // Form validasyonunu güncelle
        validateForm();
    } catch (error) {
        console.error('Detaylı adres doldurma hatası:', error);
    }
}

// Legacy function for backward compatibility
function autoFillDeliveryAddress(geoData) {
    // Bu fonksiyon artık kullanılmıyor, autoFillDetailedAddress kullanılıyor
    autoFillDetailedAddress(geoData);
}

// Show/hide meal card options
function toggleMealCardOptions() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const mealCardGroup = document.getElementById('mealCardGroup');
    
    console.log('Payment method:', paymentMethod);
    console.log('Meal card group:', mealCardGroup);
    
    if (paymentMethod === 'mealcard') {
        mealCardGroup.style.display = 'block';
        document.getElementById('mealCardType').required = true;
        console.log('Meal card group shown');
    } else {
        mealCardGroup.style.display = 'none';
        document.getElementById('mealCardType').required = false;
        console.log('Meal card group hidden');
    }
    
    validateForm();
}

// Form validation for button state
function validateForm() {
    const form = document.getElementById('checkoutForm');
    const submitBtn = document.getElementById('checkoutSubmitBtn');
    
    if (!form || !submitBtn) {
        console.log('Form or submit button not found');
        return;
    }
    
    const formData = new FormData(form);
    const customerName = formData.get('customerName');
    const customerPhone = formData.get('customerPhone');
    const customerLocation = formData.get('customerLocation');
    const neighborhood = formData.get('neighborhood');
    const street = formData.get('street');
    const building = formData.get('building');
    const apartment = formData.get('apartment');
    const paymentMethod = formData.get('paymentMethod');
    const mealCardType = formData.get('mealCardType');
    
    let isValid = true;
    
    // Required fields check
    if (!customerName || customerName.trim().length < 2) isValid = false;
    // Telefon kontrolü: sadece rakamları al ve 10 karakter kontrolü yap
    const phoneDigits = customerPhone ? customerPhone.replace(/\D/g, '') : '';
    console.log('Phone validation - Original:', customerPhone, 'Digits:', phoneDigits, 'Length:', phoneDigits.length);
    if (!customerPhone || phoneDigits.length !== 10) {
        console.log('Phone validation failed - need 10 digits');
        isValid = false;
    }
    if (!customerLocation || customerLocation.trim().length < 5) isValid = false;
    if (!neighborhood || !street || !building || !apartment) isValid = false;
    if (!paymentMethod) isValid = false;
    if (paymentMethod === 'mealcard' && !mealCardType) isValid = false;
    
    console.log('Button validation result:', isValid);
    submitBtn.disabled = !isValid;
}

// Save customer info to localStorage
function saveCustomerInfo(customerData) {
    // Gizlilik politikası kabul edilmiş mi kontrol et
    if (!checkPrivacyAcceptance()) {
        showPrivacyModal();
        return;
    }
    
    const customerInfo = {
        name: customerData.customerName,
        phone: customerData.customerPhone,
        location: customerData.customerLocation,
        neighborhood: customerData.neighborhood,
        street: customerData.street,
        building: customerData.building,
        apartment: customerData.apartment,
        paymentMethod: customerData.paymentMethod,
        mealCardType: customerData.mealCardType,
        savedAt: new Date().toISOString()
    };
    
    localStorage.setItem('yicem_customer_info', JSON.stringify(customerInfo));
}

// Load customer info from localStorage
function loadCustomerInfo() {
    const savedInfo = localStorage.getItem('yicem_customer_info');
    if (!savedInfo) return;
    
    try {
        const customerInfo = JSON.parse(savedInfo);
        
        // Fill form fields
        document.getElementById('customerName').value = customerInfo.name || '';
        document.getElementById('customerPhone').value = customerInfo.phone || '';
        document.getElementById('customerLocation').value = customerInfo.location || '';
        document.getElementById('neighborhood').value = customerInfo.neighborhood || '';
        document.getElementById('street').value = customerInfo.street || '';
        document.getElementById('building').value = customerInfo.building || '';
        document.getElementById('apartment').value = customerInfo.apartment || '';
        document.getElementById('paymentMethod').value = customerInfo.paymentMethod || '';
        
        if (customerInfo.paymentMethod === 'mealcard') {
            document.getElementById('mealCardType').value = customerInfo.mealCardType || '';
            toggleMealCardOptions();
        }
        
        validateForm();
    } catch (error) {
        console.error('Müşteri bilgileri yüklenemedi:', error);
    }
}


// Initialize checkout form
function initCheckoutForm() {
    // Phone formatting
    const phoneInput = document.getElementById('customerPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            console.log('Input event triggered with:', this.value);
            console.log('Input length:', this.value.length);
            console.log('Input maxlength:', this.maxLength);
            formatPhoneNumber(this);
        });
        
        phoneInput.addEventListener('keydown', function(e) {
            console.log('Keydown event:', e.key, 'Current value:', this.value);
            console.log('Current length:', this.value.length, 'Maxlength:', this.maxLength);
            
            // Eğer maxlength'a ulaşıldıysa ve rakam giriliyorsa
            if (this.value.length >= this.maxLength && /[0-9]/.test(e.key)) {
                console.log('Maxlength reached, preventing input');
                e.preventDefault();
            }
        });
        
        phoneInput.addEventListener('paste', function(e) {
            e.preventDefault();
            let paste = (e.clipboardData || window.clipboardData).getData('text');
            let digitsOnly = paste.replace(/\D/g, '');
            if (digitsOnly.length <= 10) {
                this.value = digitsOnly;
                formatPhoneNumber(this);
            }
        });
    }
    
    // Location button
    const locationBtn = document.getElementById('getLocationBtn');
    if (locationBtn) {
        locationBtn.addEventListener('click', getCurrentLocation);
    }
    
    // Payment method change
    const paymentMethodSelect = document.getElementById('paymentMethod');
    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', toggleMealCardOptions);
    }
    
    // Form validation on input
    const form = document.getElementById('checkoutForm');
    if (form) {
        form.addEventListener('input', validateForm);
        form.addEventListener('change', validateForm);
    }
    
    // Privacy modal buttons
    const privacyAcceptBtn = document.getElementById('privacyAcceptBtn');
    if (privacyAcceptBtn) {
        privacyAcceptBtn.addEventListener('click', hidePrivacyModal);
    }
    
    const privacyModalClose = document.getElementById('privacyModalClose');
    if (privacyModalClose) {
        privacyModalClose.addEventListener('click', hidePrivacyModal);
    }
    
    // Cookie banner buttons
    const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', acceptCookies);
    }
    
    const cookieDeclineBtn = document.getElementById('cookieDeclineBtn');
    if (cookieDeclineBtn) {
        cookieDeclineBtn.addEventListener('click', declineCookies);
    }
    
    // Cookies modal buttons
    const cookiesModalClose = document.getElementById('cookiesModalClose');
    if (cookiesModalClose) {
        cookiesModalClose.addEventListener('click', hideCookiesModal);
    }
    
    const cookiesAcceptBtn = document.getElementById('cookiesAcceptBtn');
    if (cookiesAcceptBtn) {
        cookiesAcceptBtn.addEventListener('click', hideCookiesModal);
    }
    
    // Footer functionality
    initFooter();
    
    // Categories functionality
    console.log('Initializing categories...');
    initCategories();
    
    // Update categories position based on header height
    updateCategoriesPosition();
    
    // Footer links
    const footerCookiesLink = document.getElementById('footerCookiesLink');
    if (footerCookiesLink) {
        footerCookiesLink.addEventListener('click', (e) => {
            e.preventDefault();
            showCookiesInfo();
        });
    }
    
    const footerPrivacyLink = document.getElementById('footerPrivacyLink');
    if (footerPrivacyLink) {
        footerPrivacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPrivacyInfo();
        });
    }
    
    const footerKVKKLink = document.getElementById('footerKVKKLink');
    if (footerKVKKLink) {
        footerKVKKLink.addEventListener('click', (e) => {
            e.preventDefault();
            showKVKKInfo();
        });
    }
    
    // Load saved customer info
    loadCustomerInfo();
    
    // Load last location if available
    loadLastLocation();
    
    // Initialize meal card options
    toggleMealCardOptions();
}

// Load last saved location
function loadLastLocation() {
    const lastLocation = localStorage.getItem('yicem-last-location');
    if (lastLocation) {
        const locationInput = document.getElementById('customerLocation');
        if (locationInput && !locationInput.value) {
            locationInput.value = lastLocation;
            validateForm();
        }
    }
}

// Privacy Modal Functions
function showPrivacyModal() {
    const privacyModal = document.getElementById('privacyModal');
    if (privacyModal) {
        openModal(privacyModal);
    }
}

function hidePrivacyModal() {
    const privacyModal = document.getElementById('privacyModal');
    if (privacyModal) {
        closeModal(privacyModal);
        // Gizlilik politikası kabul edildi olarak işaretle
        localStorage.setItem('yicem-privacy-accepted', 'true');
    }
}

// Check if privacy policy was accepted
function checkPrivacyAcceptance() {
    const privacyAccepted = localStorage.getItem('yicem-privacy-accepted');
    return privacyAccepted === 'true';
}

// Show privacy modal on first visit
function initPrivacyModal() {
    if (!checkPrivacyAcceptance()) {
        // İlk ziyaret, gizlilik politikası göster
        setTimeout(() => {
            showPrivacyModal();
        }, 1000); // 1 saniye sonra göster
    }
}

// Cookie Banner Functions
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.add('show');
    }
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
}

function acceptCookies() {
    localStorage.setItem('yicem-cookie-consent', 'accepted');
    hideCookieBanner();
}

function declineCookies() {
    localStorage.setItem('yicem-cookie-consent', 'declined');
    hideCookieBanner();
}

function checkCookieConsent() {
    return localStorage.getItem('yicem-cookie-consent');
}

function initCookieBanner() {
    const consent = checkCookieConsent();
    if (!consent) {
        // Çerez onayı verilmemiş, banner göster
        setTimeout(() => {
            showCookieBanner();
        }, 3000); // 3 saniye sonra göster
    } else {
        // Çerez onayı verilmiş, banner'ı gizle
        hideCookieBanner();
    }
}

// Category Info Function
function showCategoryInfo(categoryId) {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    if (!category) return;
    
    const categoryInfoModal = document.getElementById('categoryInfoModal');
    const categoryInfoTitle = document.getElementById('categoryInfoTitle');
    const categoryInfoText = document.getElementById('categoryInfoText');
    const categoryInfoIcon = document.getElementById('categoryInfoIcon');
    
    if (categoryInfoModal && categoryInfoTitle && categoryInfoText && categoryInfoIcon) {
        categoryInfoTitle.textContent = category.name;
        categoryInfoIcon.textContent = category.icon;
        
        // Kategoriye özel mesajlar
        const messages = {
            'pizza': 'Pizzalarımızın servis süresi minimum 25 dakikadır. Small 1 Kişilik | Medium 1-2 Kişilik | Large 2-3 Kişilik | XLarge 3-4 Kişilik'
        };
        
        categoryInfoText.textContent = messages[categoryId] || 'Bu kategori hakkında özel bilgi bulunmamaktadır.';
        
        openModal(categoryInfoModal);
        
        // 5 saniye sonra otomatik kapat
        setTimeout(() => {
            closeModal(categoryInfoModal);
            // Kategoriye scroll yap
            const categorySection = document.getElementById(`category-${categoryId}`);
            if (categorySection) {
                categorySection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 5000);
    }
}

// Categories Functions
function updateCategoriesPosition() {
    const header = document.querySelector('.header');
    const categories = document.querySelector('.categories');
    
    if (header && categories) {
        const headerHeight = header.offsetHeight;
        categories.style.top = headerHeight + 'px';
    }
}

function initCategories() {
    const categoriesMenu = document.getElementById('categoriesMenu');
    const categoriesToggle = document.getElementById('categoriesToggle');
    const prevBtn = document.getElementById('categoriesPrevBtn');
    const nextBtn = document.getElementById('categoriesNextBtn');
    const mobilePrevBtn = document.getElementById('categoriesMobilePrevBtn');
    const mobileNextBtn = document.getElementById('categoriesMobileNextBtn');
    
    if (!categoriesMenu || !categoriesToggle) return;
    
    // Mobile toggle functionality (disabled - always visible on mobile)
    categoriesToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Categories toggle clicked, window width:', window.innerWidth);
        
        // Only toggle on desktop (mobile is always visible now)
        if (window.innerWidth > 767) {
            console.log('Desktop mode - toggling categories menu');
            categoriesMenu.classList.toggle('expanded');
            console.log('Categories menu classes:', categoriesMenu.className);
        }
    });
    
    // Touch/Swipe functionality for categories
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (categoriesContainer) {
        // Touch start
        categoriesContainer.addEventListener('touchstart', (e) => {
            if (window.innerWidth <= 767) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isDragging = false;
            }
        });
        
        // Touch move
        categoriesContainer.addEventListener('touchmove', (e) => {
            if (window.innerWidth <= 767) {
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const diffX = Math.abs(currentX - startX);
                const diffY = Math.abs(currentY - startY);
                
                // Horizontal swipe detection
                if (diffX > diffY && diffX > 10) {
                    isDragging = true;
                    e.preventDefault(); // Prevent scrolling
                }
            }
        });
        
        // Touch end
        categoriesContainer.addEventListener('touchend', (e) => {
            if (window.innerWidth <= 767 && isDragging) {
                const endX = e.changedTouches[0].clientX;
                const diffX = startX - endX;
                
                // Swipe left (next category)
                if (diffX > 50) {
                    navigateCategories(1);
                }
                // Swipe right (previous category)
                else if (diffX < -50) {
                    navigateCategories(-1);
                }
                
                isDragging = false;
            }
        });
    }
    
    // Click outside to close (only on desktop now)
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 767) {
            if (!categoriesMenu.contains(e.target)) {
                categoriesMenu.classList.remove('expanded');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            // Desktop mode
            categoriesMenu.classList.remove('expanded');
            // Enable arrow buttons on desktop
            if (prevBtn && nextBtn) {
                prevBtn.style.pointerEvents = 'auto';
                nextBtn.style.pointerEvents = 'auto';
                prevBtn.style.opacity = '1';
                nextBtn.style.opacity = '1';
            }
        } else {
            // Mobile mode - always show categories
            categoriesMenu.classList.add('expanded');
            // Enable arrow buttons on mobile
            if (prevBtn && nextBtn) {
                prevBtn.style.pointerEvents = 'auto';
                nextBtn.style.pointerEvents = 'auto';
                prevBtn.style.opacity = '1';
                nextBtn.style.opacity = '1';
            }
        }
        
        // Update categories position
        updateCategoriesPosition();
    });
    
    // Arrow key navigation (only on desktop)
    document.addEventListener('keydown', (e) => {
        if (window.innerWidth > 767 && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            navigateCategories(e.key === 'ArrowRight' ? 1 : -1);
        }
    });
    
    // Disable arrow button clicks on mobile
    
    if (prevBtn && nextBtn) {
        // Set initial state based on screen size
        if (window.innerWidth <= 767) {
            // Mobile mode - always show categories
            categoriesMenu.classList.add('expanded');
            prevBtn.style.pointerEvents = 'auto';
            nextBtn.style.pointerEvents = 'auto';
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        } else {
            // Desktop mode - hide categories initially
            categoriesMenu.classList.remove('expanded');
        }
        
        prevBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                e.stopPropagation();
                scrollCategories('prev'); // Previous category
            }
        });
        
        nextBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                e.stopPropagation();
                scrollCategories('next'); // Next category
            }
        });
    }
    
    // Mobile navigation buttons
    if (mobilePrevBtn && mobileNextBtn) {
        mobilePrevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateCategories(-1);
        });
        
        mobileNextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateCategories(1);
        });
    }
}

function navigateCategories(direction) {
    const categoryElements = document.querySelectorAll('.categories__category');
    const activeCategory = document.querySelector('.categories__category--active');
    
    if (!activeCategory || categoryElements.length === 0) return;
    
    const currentIndex = Array.from(categoryElements).indexOf(activeCategory);
    let newIndex = currentIndex + direction;
    
    // Wrap around
    if (newIndex < 0) {
        newIndex = categoryElements.length - 1;
    } else if (newIndex >= categoryElements.length) {
        newIndex = 0;
    }
    
    // Set new active category
    const newCategory = categoryElements[newIndex];
    if (newCategory) {
        const categoryId = newCategory.getAttribute('data-category-id');
        if (categoryId) {
            setActiveCategory(categoryId);
            scrollToCategory(categoryId);
        }
    }
}

// Footer Functions
function initFooter() {
    const footer = document.getElementById('restaurantFooter');
    if (!footer) return;
    
    let isExpanded = false;
    
    // Click to toggle footer
    footer.addEventListener('click', (e) => {
        // Don't toggle if clicking on links
        if (e.target.closest('a')) {
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        isExpanded = !isExpanded;
        footer.classList.toggle('expanded', isExpanded);
        
        // Adjust body padding based on screen size
        if (isExpanded) {
            if (window.innerWidth <= 767) {
                document.body.style.paddingBottom = '320px';
            } else {
                document.body.style.paddingBottom = '320px';
            }
        } else {
            if (window.innerWidth <= 767) {
                document.body.style.paddingBottom = '50px';
            } else {
                document.body.style.paddingBottom = '60px';
            }
        }
    });
    
    // Click outside to close (only on mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 767 && isExpanded && !footer.contains(e.target)) {
            isExpanded = false;
            footer.classList.remove('expanded');
            document.body.style.paddingBottom = '50px';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            // On desktop, maintain expanded state but adjust padding
            if (isExpanded) {
                document.body.style.paddingBottom = '320px';
            } else {
                document.body.style.paddingBottom = '60px';
            }
        } else {
            // On mobile, maintain expanded state but adjust padding
            if (isExpanded) {
                document.body.style.paddingBottom = '320px';
            } else {
                document.body.style.paddingBottom = '50px';
            }
        }
    });
}

function updateRestaurantStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi
    const hour = now.getHours();
    
    const isSunday = day === 0;
    const isOpenHours = hour >= 9 && hour < 21;
    
    const isOpen = !isSunday && isOpenHours;
    
    // Footer status elements
    const statusText = document.getElementById('statusText');
    const statusIndicator = document.getElementById('statusIndicator');
    
    if (statusText && statusIndicator) {
        if (isOpen) {
            statusText.textContent = 'Açık';
            statusIndicator.classList.remove('closed');
        } else {
            statusText.textContent = 'Kapalı';
            statusIndicator.classList.add('closed');
        }
    }
    
    // Legacy restaurant status elements (if they exist)
    const statusElement = document.getElementById('restaurantStatus');
    const statusIcon = document.getElementById('statusIcon');
    
    if (statusElement && statusIcon) {
        if (isOpen) {
            statusElement.textContent = 'AÇIK';
            statusElement.className = 'restaurant-status open';
            statusIcon.textContent = '🟢';
        } else {
            statusElement.textContent = 'KAPALI';
            statusElement.className = 'restaurant-status closed';
            statusIcon.textContent = '🔴';
        }
    }
}

// Footer Link Functions
function showCookiesInfo() {
    // Footer'daki çerez linkine tıklandığında sadece modal açılsın
    // Banner'ı tekrar gösterme
    const cookiesModal = document.getElementById('cookiesModal');
    if (cookiesModal) {
        openModal(cookiesModal);
    }
}

function hideCookiesModal() {
    const cookiesModal = document.getElementById('cookiesModal');
    if (cookiesModal) {
        closeModal(cookiesModal);
    }
}

function showPrivacyInfo() {
    showPrivacyModal();
}

function showKVKKInfo() {
    showPrivacyModal();
}

// Feedback Modal Functions
let feedbackRatings = {
    lezzet: 0,
    hiz: 0,
    personel: 0,
    temizlik: 0
};

function openFeedbackModal() {
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) {
        openModal(feedbackModal);
        resetFeedbackForm();
    }
}

function closeFeedbackModal() {
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) {
        closeModal(feedbackModal);
    }
}

function resetFeedbackForm() {
    // Reset ratings
    feedbackRatings = {
        lezzet: 0,
        hiz: 0,
        personel: 0,
        temizlik: 0
    };
    
    // Remove selected class from all emoji buttons
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Reset textarea
    const feedbackText = document.getElementById('feedbackText');
    if (feedbackText) {
        feedbackText.value = '';
        updateFeedbackCharCount();
    }
}

function selectEmojiRating(category, rating) {
    // Remove selected class from all buttons in this category
    const categoryContainer = document.querySelector(`[data-category="${category}"]`);
    if (categoryContainer) {
        categoryContainer.querySelectorAll('.emoji-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked button
        const selectedBtn = categoryContainer.querySelector(`[data-rating="${rating}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }
    }
    
    // Update rating
    feedbackRatings[category] = rating;
}

function updateFeedbackCharCount() {
    const feedbackText = document.getElementById('feedbackText');
    const charCount = document.getElementById('feedbackCharCount');
    
    if (feedbackText && charCount) {
        const currentLength = feedbackText.value.length;
        charCount.textContent = currentLength;
        
        // Change color if approaching limit
        if (currentLength > 100) {
            charCount.style.color = '#DC2626';
        } else if (currentLength > 80) {
            charCount.style.color = '#F59E0B';
        } else {
            charCount.style.color = '#6B7280';
        }
    }
}

function submitFeedback() {
    const totalScore = Object.values(feedbackRatings).reduce((sum, rating) => sum + rating, 0);
    const feedbackText = document.getElementById('feedbackText');
    const comment = feedbackText ? feedbackText.value.trim() : '';
    
    // Check if at least one rating is selected
    if (totalScore === 0) {
        alert('Lütfen en az bir kategori için değerlendirme yapın.');
        return;
    }
    
    // Prepare feedback data
    const feedbackData = {
        ratings: feedbackRatings,
        comment: comment,
        totalScore: totalScore,
        timestamp: new Date().toISOString()
    };
    
    // Log feedback (in real implementation, this would be sent to server)
    console.log('Feedback submitted:', feedbackData);
    
    // Show thank you message
    showFeedbackThankYou(totalScore);
    
    // Close modal
    closeFeedbackModal();
}

function showFeedbackThankYou(totalScore) {
    let message = 'Teşekkürler! Geri bildiriminiz bizim için çok kıymetli.';
    
    // Show special message if total score is 15 or higher
    if (totalScore >= 15) {
        message = 'İyi ki varsınız! 🎉\n\n' + message;
    }
    
    // Create and show thank you modal
    const thankYouModal = document.createElement('div');
    thankYouModal.className = 'modal modal--active';
    thankYouModal.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__content modal__content--success">
            <div class="modal__body">
                <div class="success">
                    <div class="success__icon">${totalScore >= 15 ? '🎉' : '💝'}</div>
                    <h3 class="success__title">Teşekkürler!</h3>
                    <p class="success__text">${message}</p>
                </div>
            </div>
            <div class="modal__footer">
                <div class="modal__actions">
                    <button class="btn btn--primary" onclick="closeThankYouModal()">Tamam</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(thankYouModal);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeThankYouModal();
    }, 5000);
}

function closeThankYouModal() {
    const thankYouModal = document.querySelector('.modal--active');
    if (thankYouModal && thankYouModal.querySelector('.success__icon')) {
        thankYouModal.remove();
    }
}

// Initialize feedback modal event listeners
function initializeFeedbackModal() {
    // Feedback link click
    const feedbackLink = document.getElementById('footerFeedbackLink');
    if (feedbackLink) {
        feedbackLink.addEventListener('click', (e) => {
            e.preventDefault();
            openFeedbackModal();
        });
    }
    
    // Feedback modal close buttons
    const feedbackModalClose = document.getElementById('feedbackModalClose');
    const feedbackModalOverlay = document.getElementById('feedbackModalOverlay');
    const feedbackCancelBtn = document.getElementById('feedbackCancelBtn');
    
    if (feedbackModalClose) {
        feedbackModalClose.addEventListener('click', closeFeedbackModal);
    }
    
    if (feedbackModalOverlay) {
        feedbackModalOverlay.addEventListener('click', closeFeedbackModal);
    }
    
    if (feedbackCancelBtn) {
        feedbackCancelBtn.addEventListener('click', closeFeedbackModal);
    }
    
    // Feedback submit button
    const feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');
    if (feedbackSubmitBtn) {
        feedbackSubmitBtn.addEventListener('click', submitFeedback);
    }
    
    // Emoji rating buttons
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.closest('[data-category]').dataset.category;
            const rating = parseInt(btn.dataset.rating);
            selectEmojiRating(category, rating);
        });
    });
    
    // Feedback textarea character count
    const feedbackText = document.getElementById('feedbackText');
    if (feedbackText) {
        feedbackText.addEventListener('input', updateFeedbackCharCount);
    }
}

// Make functions globally available for inline event handlers
window.openProductModal = openProductModal;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.editCartItem = editCartItem;
window.showCategoryInfo = showCategoryInfo;
window.formatPhoneNumber = formatPhoneNumber;
window.getCurrentLocation = getCurrentLocation;
window.toggleMealCardOptions = toggleMealCardOptions;
window.validateForm = validateForm;
window.hidePrivacyModal = hidePrivacyModal;
window.acceptCookies = acceptCookies;
window.declineCookies = declineCookies;
window.showCookiesInfo = showCookiesInfo;
window.hideCookiesModal = hideCookiesModal;
window.showPrivacyInfo = showPrivacyInfo;
window.showKVKKInfo = showKVKKInfo;
window.openFeedbackModal = openFeedbackModal;
window.closeFeedbackModal = closeFeedbackModal;
window.closeThankYouModal = closeThankYouModal;
