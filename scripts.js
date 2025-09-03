document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Aquí puedes cargar dinámicamente las imágenes de la marquesina
    const images = [
        'IMAGENES/baño.png',
        // CORRECCIÓN: La ruta de la carpeta estaba mal escrita
        'IMAGENES/bosque.png',
        'IMAGENES/monte.png',
    ];

    images.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        carouselSlide.appendChild(img);
    });

    let counter = 0;
    // Esto podría dar error si las imágenes no están cargadas al momento de ejecutarse
    const size = carouselSlide.querySelector('img').clientWidth;

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const productGridContainer = document.querySelector('.product-grid-container');

    // Simulación de datos de productos (más adelante esto vendría del backend)
    const caballeroProducts = [
        {
            id: 'CAB001',
            name: 'Camisa Casual Outdoor',
            price: 49.99,
            imageUrl: 'IMAGENES/bosque.png', // Ruta a tu imagen
            logoUrl: 'IMAGENES/carrito.png' // Ruta a tu logo de carrito
        },
        {
            id: 'CAB002',
            name: 'Pantalón Cargo Urbano',
            price: 59.99,
            imageUrl: 'IMAGENES/pantalon_cargo_caballero.jpg',
            logoUrl: 'IMAGENES/carrito.png'
        },
        {
            id: 'CAB003',
            name: 'Chaqueta Impermeable',
            price: 89.99,
            imageUrl: 'IMAGENES/chaqueta_impermeable_caballero.jpg',
            logoUrl: 'IMAGENES/carrito.png'
        },
        {
            id: 'CAB004',
            name: 'Gorra Deportiva',
            price: 24.99,
            imageUrl: 'IMAGENES/gorra_deportiva_caballero.jpg',
            logoUrl: 'IMAGENES/carrito.png'
        },
        {
            id: 'CAB005',
            name: 'Zapatillas de Trekking',
            price: 75.00,
            imageUrl: 'IMAGENES/zapatillas_trekking_caballero.jpg',
            logoUrl: 'IMAGENES/carrito.png'
        }
        // Añade más productos aquí
    ];

    // Función para crear una tarjeta de producto
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    <img src="${product.logoUrl}" alt="Añadir al carrito" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">
                    Añadir
                </button>
            </div>
        `;
        return productCard;
    }

    // Cargar los productos en la cuadrícula
    caballeroProducts.forEach(product => {
        const card = createProductCard(product);
        productGridContainer.appendChild(card);
    });

    // Opcional: Añadir funcionalidad al botón "Añadir al Carrito"
    // Esto es un placeholder; la lógica real dependería de cómo manejes el carrito.
    productGridContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn') || event.target.closest('.add-to-cart-btn')) {
            const button = event.target.closest('.add-to-cart-btn');
            const productId = button.dataset.productId;
            alert(`Producto ${productId} añadido al carrito! (Esto es solo una simulación)`);
            // Aquí iría la lógica real para añadir al carrito
        }
    });
});

/* producto individual */

document.addEventListener('DOMContentLoaded', () => {
    // Simulación de datos del producto
    const productData = {
        name: 'Camisa Ultra-Ligera',
        description: 'Esta camisa es perfecta para tus aventuras al aire libre. Su tejido técnico ultra-ligero y transpirable te mantendrá fresco y cómodo.',
        technologies: ['Tecnología de secado rápido', 'Protección UV UPF 50+', 'Material resistente a la abrasión'],
        season: 'Verano y primavera',
        colors: [
            { name: 'Azul Marino', code: '#14213d' },
            { name: 'Verde Oliva', code: '#5c6c5b' },
            { name: 'Gris Carbón', code: '#333333' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        combinations: [
            'IMAGENES/outfit1.jpg',
            'IMAGENES/outfit2.jpg',
            'IMAGENES/outfit3.jpg'
        ]
    };

    // Referencias a los elementos del DOM
    const productName = document.getElementById('product-name');
    const productDescription = document.getElementById('product-description');
    const productTechList = document.getElementById('product-tech-list');
    const colorSwatches = document.getElementById('color-swatches');
    const sizeButtons = document.getElementById('size-buttons');
    const outfitGallery = document.getElementById('outfit-combinations');
    const mainProductImage = document.getElementById('main-product-image');

    // Función para renderizar el contenido
    function renderProductPage(data) {
        productName.textContent = data.name;
        productDescription.textContent = data.description;
        
        // Renderizar la lista de tecnologías
        productTechList.innerHTML = `
            <li>Tecnología y Características:</li>
            ${data.technologies.map(tech => `<li>${tech}</li>`).join('')}
            <li>Para la temporada: ${data.season}</li>
        `;

        // Renderizar los swatches de colores
        colorSwatches.innerHTML = ''; // Limpia el contenedor
        data.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.classList.add('swatch');
            swatch.style.backgroundColor = color.code;
            swatch.title = color.name;
            colorSwatches.appendChild(swatch);
        });

        // Renderizar los botones de talla
        sizeButtons.innerHTML = ''; // Limpia el contenedor
        data.sizes.forEach(size => {
            const button = document.createElement('button');
            button.classList.add('size-btn');
            button.textContent = size;
            sizeButtons.appendChild(button);
        });

        // Renderizar las imágenes de combinaciones
        outfitGallery.innerHTML = ''; // Limpia el contenedor
        data.combinations.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Combinación de outfit';
            outfitGallery.appendChild(imgElement);
        });
    }

    renderProductPage(productData);
});