const express = require('express');
const router = express.Router();

// Datos de ejemplo (luego los reemplazarás con datos de tu base de datos)
const sampleProducts = {
  recent: [
    {
      id: 1,
      name: "Reloj Vintage de Colección",
      description: "Reloj antiguo en perfecto estado, fabricado en 1960.",
      currentBid: 120,
      bidCount: 15,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      name: "Cámara Reflex Profesional",
      description: "Cámara profesional con lentes incluidos, poco uso.",
      currentBid: 340,
      bidCount: 22,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 3,
      name: "Guitarra Acústica",
      description: "Guitarra de calidad profesional, sonido excelente.",
      currentBid: 180,
      bidCount: 9,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 4,
      name: "Juego de Vajilla Antigua",
      description: "Vajilla completa de porcelana, diseño clásico.",
      currentBid: 85,
      bidCount: 7,
      imageUrl: "https://picsum.photos/300/200?random=1"
    }
  ],
  popular: [
    {
      id: 5,
      name: "iPhone 12 Pro Max",
      description: "Como nuevo, con todos los accesorios y garantía.",
      currentBid: 650,
      bidCount: 42,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 6,
      name: "Consola PlayStation 5",
      description: "Edición especial con 3 juegos incluidos.",
      currentBid: 520,
      bidCount: 38,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 7,
      name: "Pintura al Óleo Firmada",
      description: "Obra de artista local reconocido, marco incluido.",
      currentBid: 420,
      bidCount: 27,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 8,
      name: "Bicicleta de Montaña",
      description: "Bicicleta profesional, suspensión completa, muy poco uso.",
      currentBid: 380,
      bidCount: 19,
      imageUrl: "https://picsum.photos/300/200?random=1"
    }
  ],
  flash: [
    {
      id: 9,
      name: "Auriculares Bluetooth",
      description: "Cancelación de ruido, calidad de sonido premium.",
      currentBid: 75,
      bidCount: 14,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 10,
      name: "SmartWatch Ultima Generación",
      description: "Resistente al agua, monitor de actividad avanzado.",
      currentBid: 95,
      bidCount: 21,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 11,
      name: "Zapatillas Deportivas Edición Limitada",
      description: "Talla 42, nuevas en caja original.",
      currentBid: 125,
      bidCount: 18,
      imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 12,
      name: "Tablet Android 12 pulgadas",
      description: "Almacenamiento de 256GB, perfecto estado.",
      currentBid: 210,
      bidCount: 16,
      imageUrl: "https://picsum.photos/300/200?random=1"
    }
  ]
};

// Ruta principal
router.get('/', (req, res) => {
  res.render('index', {
    recentProducts: sampleProducts.recent,
    popularProducts: sampleProducts.popular,
    flashProducts: sampleProducts.flash
  });
});

module.exports = router;