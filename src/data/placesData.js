const placesData = [
    {
        id: 1,
        title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
        location: { en: 'Siem Reap', kh: 'សៀមរាប' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
        isPopular: true
    },
    {
        id: 2,
        title: { en: 'Koh Rong Sanloem Island', kh: 'កោះកុងសែន' },
        location: { en: 'Sihanoukville', kh: 'ព្រះសីហនុ' },
        category: { en: 'Beaches', kh: 'ឆ្នេរខ្សាច់' },
        rating: 4.8,
        reviews: 850,
        price: '$25',
        image: 'https://dontforgettomove.com/wp-content/uploads/2015/06/Saracen-Bay-Resort.jpg',
        isPopular: true
    },
    {
        id: 3,
        title: { en: 'Bokor National Park', kh: 'ឧទ្យានជាតិបូកគោ' },
        location: { en: 'Kampot', kh: 'កំពត' },
        category: { en: 'Nature', kh: 'ធម្មជាតិ' },
        rating: 4.6,
        reviews: 420,
        price: 'Free',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco-LlaonMIofcG8QZp_U1FHLUmDEHMNnA2gLQ-Zofgt_KqR52IbU14WY&s=10',
        isPopular: false
    },
    {
        id: 4,
        title: { en: 'Royal Palace & Silver Pagoda', kh: 'ព្រះបរមរាជវាំងចតុមុខមង្គល' },
        location: { en: 'Phnom Penh', kh: 'ភ្នំពេញ' },
        category: { en: 'Culture', kh: 'វប្បធម៌' },
        rating: 4.7,
        reviews: 960,
        price: '$10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8oBFhRGVIjXwMdJ9Ju14ZYT9NytIYrUMpUs6NSwmnzzT22DVgMcybk4&s=10',
        isPopular: false
    },
    {
        id: 5,
        title: { en: 'Kirirom Pine Forest', kh: 'ព្រៃក្តារីរំ' },
        location: { en: 'Kampong Speu', kh: 'កំពងស្ពឺ' },
        category: { en: 'Adventure', kh: 'ការជំរុញ' },
        rating: 4.5,
        reviews: 310,
        price: '$5',
        image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/methode/2019/04/08/4c398e80-575b-11e9-a3ae-f2742b367090_image_hires_140430.jpg?itok=OrrdOs3K&v=1554703484',
        isPopular: false
    },
    {
        id: 6,
        title: { en: 'Phnom Kulen Waterfalls', kh: 'ទឹកធ្លាក់ភ្នំគូលែន' },
        location: { en: 'Siem Reap', kh: 'សៀមរាប' },
        category: { en: 'Nature', kh: 'ធម្មជាតិ' },
        rating: 4.8,
        reviews: 640,
        price: '$20',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/PhnomKulen.jpg',
        isPopular: true
    },
    {
        id: 7,
        title: { en: 'Koh Ker Temple', kh: 'ប្រាសាទកោះកេរ' },
        location: { en: 'Preah Vihear', kh: 'ព្រះវិហារ' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpc4gseANd8bV2nrHko1K3qglInGzNFCAUQGQxVh2t1ZkM-eFVnw6XtuWK&s=10',
        isPopular: true
    },
    {
        id: 8,
        title: { en: 'Ta Prum Temple', kh: 'ប្រាសាទតាព្រហ្ម' },
        location: { en: 'Siem Reap', kh: 'សៀមរាប' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87nxm5yS04HAx8dEhakG1j-HRgyQEw86CrewDUPznoQ&s=10',
        isPopular: true
    },
    {
        id: 9,
        title: { en: ' Preah Vihear Temple', kh: 'ប្រាសាទព្រះវិហារ' },
        location: { en: 'Preah Vihear', kh: 'ព្រះវិហារ' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Temple_of_Preah_Vihear-129338.jpg?utm_source=km.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
        isPopular: true
    },
     {
        id: 10,
        title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
        location: { en: 'Siem Reap', kh: 'សៀមរាប' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
        isPopular: true
    },
    {
        id: 11,
        title: { en: 'Angkor Wat Temple', kh: 'ប្រាសាទអង្គរវត្ត' },
        location: { en: 'Siem Reap', kh: 'សៀមរាប' },
        category: { en: 'Historical', kh: 'ប្រវត្តិសាស្ត្រ' },
        rating: 4.9,
        reviews: 1280,
        price: '$37',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd0HqXmRD3nJfTKZ_v-PudV_oMtWeFM_AK20WIvBETCo6Jfmh90RAxJlJOeBD9ycOpQ7xIejDxDj1pOZ_-hkr5rstuDgCQC4ZxMSYttGzGVQqxZDncVAjcbMFdDiZmHz9wP9E=s680-w680-h510-rw',
        isPopular: true
    },
]
export default placesData;