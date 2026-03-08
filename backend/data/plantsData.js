const plants = [
{ id:1, name:"Rice", scientific_name:"Oryza sativa", season:"Kharif", water_requirement:"High", soil_type:"Clay" },
{ id:2, name:"Wheat", scientific_name:"Triticum aestivum", season:"Rabi", water_requirement:"Medium", soil_type:"Loamy" },
{ id:3, name:"Maize", scientific_name:"Zea mays", season:"Kharif", water_requirement:"Medium", soil_type:"Loamy" },
{ id:4, name:"Barley", scientific_name:"Hordeum vulgare", season:"Rabi", water_requirement:"Low", soil_type:"Loamy" },
{ id:5, name:"Millet", scientific_name:"Pennisetum glaucum", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },

{ id:6, name:"Sorghum", scientific_name:"Sorghum bicolor", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },
{ id:7, name:"Ragi", scientific_name:"Eleusine coracana", season:"Kharif", water_requirement:"Low", soil_type:"Red" },
{ id:8, name:"Oats", scientific_name:"Avena sativa", season:"Rabi", water_requirement:"Medium", soil_type:"Loamy" },
{ id:9, name:"Corn", scientific_name:"Zea mays", season:"Kharif", water_requirement:"Medium", soil_type:"Loamy" },
{ id:10, name:"Quinoa", scientific_name:"Chenopodium quinoa", season:"Winter", water_requirement:"Low", soil_type:"Sandy" },

{ id:11, name:"Sugarcane", scientific_name:"Saccharum officinarum", season:"All", water_requirement:"High", soil_type:"Alluvial" },
{ id:12, name:"Cotton", scientific_name:"Gossypium", season:"Kharif", water_requirement:"Medium", soil_type:"Black" },
{ id:13, name:"Jute", scientific_name:"Corchorus", season:"Kharif", water_requirement:"High", soil_type:"Alluvial" },
{ id:14, name:"Flax", scientific_name:"Linum usitatissimum", season:"Rabi", water_requirement:"Low", soil_type:"Loamy" },
{ id:15, name:"Hemp", scientific_name:"Cannabis sativa", season:"Summer", water_requirement:"Medium", soil_type:"Loamy" },

{ id:16, name:"Soybean", scientific_name:"Glycine max", season:"Kharif", water_requirement:"Medium", soil_type:"Loamy" },
{ id:17, name:"Groundnut", scientific_name:"Arachis hypogaea", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },
{ id:18, name:"Mustard", scientific_name:"Brassica juncea", season:"Rabi", water_requirement:"Low", soil_type:"Loamy" },
{ id:19, name:"Sunflower", scientific_name:"Helianthus annuus", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },
{ id:20, name:"Sesame", scientific_name:"Sesamum indicum", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },

{ id:21, name:"Lentil", scientific_name:"Lens culinaris", season:"Rabi", water_requirement:"Low", soil_type:"Loamy" },
{ id:22, name:"Chickpea", scientific_name:"Cicer arietinum", season:"Rabi", water_requirement:"Low", soil_type:"Sandy" },
{ id:23, name:"Green Gram", scientific_name:"Vigna radiata", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },
{ id:24, name:"Black Gram", scientific_name:"Vigna mungo", season:"Kharif", water_requirement:"Low", soil_type:"Loamy" },
{ id:25, name:"Pigeon Pea", scientific_name:"Cajanus cajan", season:"Kharif", water_requirement:"Low", soil_type:"Loamy" },

{ id:26, name:"Kidney Beans", scientific_name:"Phaseolus vulgaris", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:27, name:"Peas", scientific_name:"Pisum sativum", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:28, name:"Cowpea", scientific_name:"Vigna unguiculata", season:"Summer", water_requirement:"Low", soil_type:"Sandy" },
{ id:29, name:"Horse Gram", scientific_name:"Macrotyloma uniflorum", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },
{ id:30, name:"Cluster Beans", scientific_name:"Cyamopsis tetragonoloba", season:"Kharif", water_requirement:"Low", soil_type:"Sandy" },

{ id:31, name:"Potato", scientific_name:"Solanum tuberosum", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:32, name:"Tomato", scientific_name:"Solanum lycopersicum", season:"All", water_requirement:"Medium", soil_type:"Loamy" },
{ id:33, name:"Onion", scientific_name:"Allium cepa", season:"All", water_requirement:"Medium", soil_type:"Loamy" },
{ id:34, name:"Garlic", scientific_name:"Allium sativum", season:"Winter", water_requirement:"Low", soil_type:"Loamy" },
{ id:35, name:"Carrot", scientific_name:"Daucus carota", season:"Winter", water_requirement:"Medium", soil_type:"Sandy" },

{ id:36, name:"Cabbage", scientific_name:"Brassica oleracea", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:37, name:"Cauliflower", scientific_name:"Brassica oleracea var botrytis", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:38, name:"Spinach", scientific_name:"Spinacia oleracea", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:39, name:"Broccoli", scientific_name:"Brassica oleracea var italica", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:40, name:"Lettuce", scientific_name:"Lactuca sativa", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },

{ id:41, name:"Mango", scientific_name:"Mangifera indica", season:"Summer", water_requirement:"Medium", soil_type:"Loamy" },
{ id:42, name:"Banana", scientific_name:"Musa", season:"All", water_requirement:"High", soil_type:"Loamy" },
{ id:43, name:"Papaya", scientific_name:"Carica papaya", season:"All", water_requirement:"Medium", soil_type:"Loamy" },
{ id:44, name:"Guava", scientific_name:"Psidium guajava", season:"All", water_requirement:"Low", soil_type:"Loamy" },
{ id:45, name:"Pomegranate", scientific_name:"Punica granatum", season:"Winter", water_requirement:"Low", soil_type:"Sandy" },

{ id:46, name:"Apple", scientific_name:"Malus domestica", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:47, name:"Orange", scientific_name:"Citrus sinensis", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:48, name:"Lemon", scientific_name:"Citrus limon", season:"All", water_requirement:"Medium", soil_type:"Loamy" },
{ id:49, name:"Grapes", scientific_name:"Vitis vinifera", season:"Summer", water_requirement:"Medium", soil_type:"Loamy" },
{ id:50, name:"Watermelon", scientific_name:"Citrullus lanatus", season:"Summer", water_requirement:"Medium", soil_type:"Sandy" },

{ id:51, name:"Coconut", scientific_name:"Cocos nucifera", season:"All", water_requirement:"High", soil_type:"Sandy" },
{ id:52, name:"Arecanut", scientific_name:"Areca catechu", season:"All", water_requirement:"High", soil_type:"Loamy" },
{ id:53, name:"Cashew", scientific_name:"Anacardium occidentale", season:"Summer", water_requirement:"Low", soil_type:"Sandy" },
{ id:54, name:"Almond", scientific_name:"Prunus dulcis", season:"Spring", water_requirement:"Low", soil_type:"Sandy" },
{ id:55, name:"Walnut", scientific_name:"Juglans regia", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },

{ id:56, name:"Tea", scientific_name:"Camellia sinensis", season:"All", water_requirement:"High", soil_type:"Acidic" },
{ id:57, name:"Coffee", scientific_name:"Coffea arabica", season:"All", water_requirement:"High", soil_type:"Loamy" },
{ id:58, name:"Rubber", scientific_name:"Hevea brasiliensis", season:"All", water_requirement:"High", soil_type:"Loamy" },
{ id:59, name:"Tobacco", scientific_name:"Nicotiana tabacum", season:"Winter", water_requirement:"Medium", soil_type:"Loamy" },
{ id:60, name:"Turmeric", scientific_name:"Curcuma longa", season:"Kharif", water_requirement:"Medium", soil_type:"Loamy" }
];

module.exports = plants;