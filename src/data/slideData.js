const slideData = [
  {
    id: 1,
    badge: { en: 'Cultural Wonder', kh: 'អាថ៌កំបាំងវប្បធម៌' },
    title: { en: 'The Majestic Angkor Wat', kh: 'អង្គរវត្តដ៏អស្ចារ្យ' },
    location: { en: 'Siem Reap, Cambodia', kh: 'សៀមរាប កម្ពុជា' },
    description: {
      en: 'Step back in time and explore the world’s largest religious monument, a masterpiece of Khmer architecture.',
      kh: 'ត្រឡប់ទៅមកពីអតីតកាល និងស្វែងយល់ពីអគារ religieuxធំជាងគេនៅក្នុងពិភពលោក ដែលជាស្នាដៃអក្សរសិល្ប៍កម្ពុជា។'
    },
    summary: {
      en: 'Angkor Wat offers breathtaking temple architecture, cultural storytelling, and unforgettable sunrise views.',
      kh: 'អង្គរវត្តផ្ដល់នូវស្ថាបត្យកម្មប្រាសាទដ៏អស្ចារ្យ ទំនាក់ទំនងវប្បធម៌ និងទិដ្ឋភាពព្រះអាទិត្យរះដ៏ចងចាំ។'
    },
    highlights: {
      en: ['Majestic temple corridors', 'Sunrise photo spots', 'Guided cultural tours'],
      kh: ['ផ្លូវប្រាសាទដ៏អស្ចារ្យ', 'កន្លែងថតរូបព្រះអាទិត្យរះ', 'ដំណើរជាដៃគូប្រវត្តិសាស្ត្រ']
    },
    bestTime: {
      en: 'Early morning for the best light and calm atmosphere',
      kh: 'ពេលព្រឹកសម្រាប់ពន្លឺល្អ និងបរិយាកាសស្ងប់ស្ងាត់'
    },
    entryFee: {
      en: '$37 entry ticket',
      kh: 'សំបុត្រចូល $37'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtp3lhc9frrwi1RLy15b_3k1EDMUBz-8cX3D-7EqqpPQ&s=10',
    link: '/explore/angkor-wat'
  },
  {
    id: 2,
    badge: { en: 'Island Escape', kh: 'ការលាលែងកោះ' },
    title: { en: 'Tropical Paradise Koh Rong', kh: 'កោះរ៉ុង' },
    location: { en: 'Sihanoukville, Cambodia', kh: 'ខេត្តព្រះសីហនុ កម្ពុជា' },
    description: {
      en: 'Relax on pristine white sands and swim in crystal-clear turquoise waters at Cambodia’s premier island destination.',
      kh: 'សម្រាកលើឆ្នេរថ្មពណ៌ស្កឹម និងហែលទឹកនៅក្នុងទឹកពណ៌ប៊ីរីច្បាស់នៅកន្លែងជំរាបកោះដ៏ល្បីរបស់កម្ពុជា។'
    },
    summary: {
      en: 'Koh Rong offers white-sand beaches, clear water, and peaceful island nightlife for an easy escape.',
      kh: 'កោះរ៉ុងផ្ដល់នូវឆ្នេរថ្មស្កឹម ទឹកច្បាស់ និងយប់កោះស្ងប់ស្ងាត់សម្រាប់ការលាលែង។'
    },
    highlights: {
      en: ['Long white beaches', 'Snorkeling spots', 'Island cafés and sunset views'],
      kh: ['ឆ្នេរថ្មយូរល្បី', 'កន្លែងហែលទឹក', 'កាហ្វេកោះ និងទិដ្ឋភាពលិចព្រះអាទិត្យ']
    },
    bestTime: {
      en: 'November to February for calm seas and warm weather',
      kh: 'មករាខណៈកុម្ភៈដល់កុម្ភៈសម្រាប់ទឹកស្ងប់ និងអាកាសធាតុក្តៅ'
    },
    entryFee: {
      en: 'Boat transfer and island fee apply',
      kh: 'ថ្លៃទាំងឡានទឹក និងថ្លៃកោះត្រូវតែបង់'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhseWVynGk_D5bdxkpNAVF4qYp1ybb8_E3n-Nt78UAXA&s=10',
    link: '/explore/koh-rong'
  },
  {
    id: 3,
    badge: { en: 'Wild Nature', kh: 'ធម្មជាតិដ៏ស្រស់ស្អាត' },
    title: { en: 'Eco-Adventure in Cardamom', kh: 'ការរីករាយធម្មជាតិក្នុងក្រវាត់កាពី' },
    location: { en: 'Koh Kong, Cambodia', kh: 'កោះកុង កម្ពុជា' },
    description: {
      en: 'Immerse yourself in one of Southeast Asia’s last great rainforests and discover rare wildlife and hidden waterfalls.',
      kh: 'សិក្សារួមជាមួយព្រៃកម្ពុជា ដ៏អស្ចារ្យមួយនៅឈានមុខកំពូលនៃអាស៊ីអាគ្នេយ៍ និងស្វែងរកសត្វកម្រិតកម្រិត។'
    },
    summary: {
      en: 'Cardamom offers jungle trails, wildlife sightings, and a refreshing break from busy city life.',
      kh: 'ក្រវាត់កាពីផ្ដល់នូវផ្លូវធ្វើដំណើរព្រៃ សត្វព្រៃ និងការលាឈប់ពីជីវិតទីក្រុង។'
    },
    highlights: {
      en: ['Rainforest trekking', 'Wildlife observation', 'Waterfall discovery'],
      kh: ['ដំណើរល trekking ព្រៃ', 'ការសង្កេតសត្វព្រៃ', 'ការស្វែងរកទឹកធ្លាក់']
    },
    bestTime: {
      en: 'Rainy season brings lush scenery and full waterfalls',
      kh: 'រដូវភ្លៀងធ្វើឱ្យទេសភាពបរិសុទ្ធ និងទឹកធ្លាក់ពេញលេញ'
    },
    entryFee: {
      en: 'Eco-tour package from $85',
      kh: 'កញ្ចប់ទេសចរណ៍បរិស្ថានពី $85'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAOA0wTStPpNHQljNBLvi9X3rlerk-Cb1D3SGTwcdyw&s=10',
    link: '/explore/cardamom'
  }
];
export default slideData;