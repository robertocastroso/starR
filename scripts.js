document.addEventListener('DOMContentLoaded', () => {

    // Lógica para la marquesina (carousel) en la página de inicio
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const images = [
            'IMAGENES/baño.png',
            'IMAGENES/bosque.png',
            'IMAGENES/monte.png',
        ];

        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            carouselSlide.appendChild(img);
        });

        let counter = 0;
        let size = carouselSlide.querySelector('img') ? carouselSlide.querySelector('img').clientWidth : 0;
        
        if (size > 0) {
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
        }
    }

    // Datos de todos los productos de las categorías (con más detalles para la página de producto)
    const productData = {
        caballeros: {
            title: 'Colección Caballeros',
            description: 'Descubre lo último en moda para el hombre moderno.',
            products: [
                {
                    id: 'CAB001',
                    name: 'Camisa Casual Outdoor',
                    price: 49.99,
                    imageUrl: 'IMAGENES/camisa_caballero_outdoor.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Una camisa ligera y transpirable, perfecta para actividades al aire libre o un look casual de fin de semana.',
                        technologies: ['Tela de secado rápido', 'Protección UV'],
                        season: 'Primavera-Verano',
                        colors: [{ name: 'Azul', code: '#1a4175' }, { name: 'Verde', code: '#5c751a' }],
                        sizes: ['S', 'M', 'L', 'XL'],
                        combinations: ['IMAGENES/outfit1.jpg', 'IMAGENES/outfit2.jpg']
                    }
                },
                {
                    id: 'CAB002',
                    name: 'Pantalón Cargo Urbano',
                    price: 59.99,
                    imageUrl: 'IMAGENES/pantalon_cargo_caballero.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Diseño moderno y funcional con múltiples bolsillos, ideal para el uso diario en la ciudad.',
                        technologies: ['Tejido elástico', 'Corte ajustado'],
                        season: 'Todas las temporadas',
                        colors: [{ name: 'Negro', code: '#000000' }, { name: 'Caqui', code: '#b4a78a' }],
                        sizes: ['30', '32', '34', '36'],
                        combinations: ['IMAGENES/outfit3.jpg', 'IMAGENES/outfit4.jpg']
                    }
                },
                {
                    id: 'CAB003',
                    name: 'Chaqueta Impermeable',
                    price: 89.99,
                    imageUrl: 'IMAGENES/chaqueta_impermeable_caballero.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Chaqueta ligera y resistente al agua, perfecta para cualquier aventura, protegiéndote de la lluvia y el viento.',
                        technologies: ['Cierre de cremallera sellado', 'Capucha ajustable'],
                        season: 'Todas las estaciones',
                        colors: [{ name: 'Gris', code: '#6c757d' }, { name: 'Rojo', code: '#dc3545' }],
                        sizes: ['S', 'M', 'L'],
                        combinations: ['IMAGENES/outfit5.jpg', 'IMAGENES/outfit6.jpg']
                    }
                }
            ]
        },
        dama: {
            title: 'Colección Dama',
            description: 'Descubre lo último en moda para la mujer moderna.',
            products: [
                {
                    id: 'DAM001',
                    name: 'Vestido de Verano',
                    price: 45.99,
                    imageUrl: 'IMAGENES/vestido_dama_verano.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Un vestido fresco y elegante con un patrón floral, ideal para días soleados y paseos por la playa.',
                        technologies: ['Tejido ligero', 'Silueta fluida'],
                        season: 'Verano',
                        colors: [{ name: 'Floral', code: '#f3c1a8' }],
                        sizes: ['XS', 'S', 'M', 'L'],
                        combinations: ['IMAGENES/outfit_dama1.jpg', 'IMAGENES/outfit_dama2.jpg']
                    }
                },
                {
                    id: 'DAM002',
                    name: 'Pantalón Cargo Casual',
                    price: 55.99,
                    imageUrl: 'IMAGENES/pantalon_cargo_dama.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Pantalón cómodo y versátil con un diseño de múltiples bolsillos, perfecto para un look casual y práctico.',
                        technologies: ['Corte relajado', 'Cintura ajustable'],
                        season: 'Todas las temporadas',
                        colors: [{ name: 'Beige', code: '#e0cda9' }, { name: 'Marrón', code: '#795548' }],
                        sizes: ['28', '30', '32', '34'],
                        combinations: ['IMAGENES/outfit_dama3.jpg', 'IMAGENES/outfit_dama4.jpg']
                    }
                },
                {
                    id: 'DAM003',
                    name: 'Blusa de Lino',
                    price: 39.99,
                    imageUrl: 'IMAGENES/blusa_dama_lino.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Blusa ligera de lino, ideal para mantenerte fresca y elegante. Perfecta para cualquier ocasión casual.',
                        technologies: ['Tejido transpirable', 'Suavizado prelavado'],
                        season: 'Primavera-Verano',
                        colors: [{ name: 'Blanco', code: '#ffffff' }, { name: 'Lila', code: '#c6b9d6' }],
                        sizes: ['S', 'M', 'L'],
                        combinations: ['IMAGENES/outfit_dama5.jpg', 'IMAGENES/outfit_dama6.jpg']
                    }
                }
            ]
        },
        ninos: {
            title: 'Colección Niños',
            description: 'Ropa divertida, cómoda y duradera para los más pequeños.',
            products: [
                {
                    id: 'NIN001',
                    name: 'Camiseta de Aventuras',
                    price: 19.99,
                    imageUrl: 'IMAGENES/camiseta_nino.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Camiseta de algodón suave con estampados divertidos, ideal para el día a día y juegos al aire libre.',
                        technologies: ['100% algodón', 'Estampado duradero'],
                        season: 'Todas las estaciones',
                        colors: [{ name: 'Azul', code: '#1a4175' }, { name: 'Amarillo', code: '#ffc107' }],
                        sizes: ['2T', '3T', '4T', '5T'],
                        combinations: ['IMAGENES/outfit_nino1.jpg']
                    }
                }
            ]
        },
        descuentos: {
            title: 'Ofertas y Descuentos',
            description: '¡Aprovecha nuestras promociones especiales por tiempo limitado!',
            products: [
                {
                    id: 'DSC001',
                    name: 'Vestido de Verano Floral',
                    originalPrice: 45.99,
                    discountPrice: 29.99,
                    imageUrl: 'IMAGENES/vestido_dama_verano.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Un vestido fresco y elegante con un patrón floral, ideal para días soleados y paseos por la playa.',
                        technologies: ['Tejido ligero', 'Silueta fluida'],
                        season: 'Verano',
                        colors: [{ name: 'Floral', code: '#f3c1a8' }],
                        sizes: ['XS', 'S', 'M', 'L'],
                        combinations: ['IMAGENES/outfit_dama1.jpg', 'IMAGENES/outfit_dama2.jpg']
                    }
                },
                {
                    id: 'DSC002',
                    name: 'Pantalón Cargo Urbano',
                    originalPrice: 59.99,
                    discountPrice: 41.99,
                    imageUrl: 'IMAGENES/pantalon_cargo_caballero.jpg',
                    logoUrl: 'IMAGENES/carrito.png',
                    details: {
                        description: 'Pantalón cómodo y versátil con un diseño de múltiples bolsillos, perfecto para un look casual y práctico.',
                        technologies: ['Corte relajado', 'Cintura ajustable'],
                        season: 'Todas las temporadas',
                        colors: [{ name: 'Beige', code: '#e0cda9' }, { name: 'Marrón', code: '#795548' }],
                        sizes: ['30', '32', '34', '36'],
                        combinations: ['IMAGENES/outfit3.jpg', 'IMAGENES/outfit4.jpg']
                    }
                }
            ]
        }
    };

    // Lógica para las páginas de categorías y buscador
    const productGridContainer = document.querySelector('.product-grid-container');
    const allProducts = Object.values(productData).flatMap(category => category.products);

    if (productGridContainer) {
        const categoryTitle = document.getElementById('category-title');
        const categoryDescription = document.getElementById('category-description');
        const navLinks = document.querySelectorAll('.navbar a');
        const searchInput = document.getElementById('search-input');
        const searchResultsContainer = document.getElementById('search-results');

        function createProductCard(product) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            let priceHTML;
            if (product.originalPrice) {
                priceHTML = `<p class="original-price">$${product.originalPrice.toFixed(2)}</p><p class="discount-price">$${product.discountPrice.toFixed(2)}</p>`;
            } else {
                priceHTML = `<p class="price">$${product.price.toFixed(2)}</p>`;
            }

            productCard.innerHTML = `
                <a href="producto-individual.html?id=${product.id}">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        ${priceHTML}
                        <button class="add-to-cart-btn" data-product-id="${product.id}" onclick="event.preventDefault();">
                            <img src="IMAGENES/carrito.png" alt="Añadir al carrito" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">
                            Añadir
                        </button>
                    </div>
                </a>
            `;
            return productCard;
        }

        function renderProducts(category) {
            productGridContainer.innerHTML = '';
            const currentData = productData[category];
            if (!currentData) {
                console.error('Categoría no encontrada');
                return;
            }
            if (categoryTitle) categoryTitle.textContent = currentData.title;
            if (categoryDescription) categoryDescription.textContent = currentData.description;

            currentData.products.forEach(product => {
                const card = createProductCard(product);
                productGridContainer.appendChild(card);
            });
        }

        function renderSearchResults(query) {
            const normalizedQuery = query.toLowerCase();
            const filteredProducts = allProducts.filter(product => 
                product.name.toLowerCase().includes(normalizedQuery)
            );
            
            searchResultsContainer.innerHTML = '';

            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const card = createProductCard(product);
                    searchResultsContainer.appendChild(card);
                });
            } else {
                searchResultsContainer.innerHTML = '<p class="no-results-message">Lo sentimos, no se encontraron productos.</p>';
            }
        }
        
        // Lógica para la página de categorías
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    const category = event.target.dataset.category;
                    if (category) {
                        event.preventDefault();
                        renderProducts(category);
                    }
                });
            });

            const urlParams = new URLSearchParams(window.location.search);
            const initialCategory = urlParams.get('category');
            if (initialCategory && productData[initialCategory]) {
                renderProducts(initialCategory);
            } else if (document.querySelector('.category-page')) {
                renderProducts('caballeros');
            }
        }

        // Lógica para el buscador
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value;
                renderSearchResults(query);
            });
        }
    }

    // Lógica para la página de producto individual
    const productPage = document.querySelector('.product-page');
    if (productPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId) {
            let product = allProducts.find(p => p.id === productId);

            if (product) {
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-description').textContent = product.details.description;
                document.getElementById('main-product-image').src = product.imageUrl;
                document.getElementById('product-price').textContent = `$${product.price ? product.price.toFixed(2) : product.discountPrice.toFixed(2)}`;

                const productTechList = document.getElementById('product-tech-list');
                productTechList.innerHTML = `
                    ${product.details.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    <li>Para la temporada: ${product.details.season}</li>
                `;

                const colorSwatches = document.getElementById('color-swatches');
                colorSwatches.innerHTML = '';
                product.details.colors.forEach(color => {
                    const swatch = document.createElement('div');
                    swatch.classList.add('swatch');
                    swatch.style.backgroundColor = color.code;
                    swatch.title = color.name;
                    colorSwatches.appendChild(swatch);
                });

                const sizeButtons = document.getElementById('size-buttons');
                sizeButtons.innerHTML = '';
                product.details.sizes.forEach(size => {
                    const button = document.createElement('button');
                    button.classList.add('size-btn');
                    button.textContent = size;
                    sizeButtons.appendChild(button);
                });

                const outfitGallery = document.getElementById('outfit-combinations');
                outfitGallery.innerHTML = '';
                product.details.combinations.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image;
                    imgElement.alt = 'Combinación de outfit';
                    outfitGallery.appendChild(imgElement);
                });

            } else {
                console.error('Producto no encontrado');
            }
        } else {
            console.error('ID de producto no especificado en la URL');
        }
    }

    // Lógica para el probador
    const userForm = document.getElementById('user-form');
    const scannerSection = document.getElementById('scanner-section');
    const displayElement = document.getElementById('display-name');
    const scanInput = document.getElementById('scan-input');
    const itemsListContainer = document.getElementById('items-list-container');
    const itemsList = document.getElementById('items-list');

    let scannedItems = [];

    if (userForm) {
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = document.getElementById('user-name').value;
            if (userName) {
                displayElement.textContent = userName;
                userForm.style.display = 'none';
                scannerSection.style.display = 'block';
                itemsListContainer.style.display = 'block';
                scanInput.focus();
            }
        });

        scanInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const scannedId = scanInput.value.toUpperCase().trim();
                
                let product = allProducts.find(p => p.id === scannedId);

                if (product && !scannedItems.some(item => item.id === product.id)) {
                    scannedItems.push(product);
                    const listItem = document.createElement('li');
                    listItem.textContent = product.name;
                    itemsList.appendChild(listItem);
                    console.log(`Prenda añadida: ${product.name}`);
                } else if (scannedItems.some(item => item.id === product.id)) {
                    alert('Esta prenda ya ha sido escaneada.');
                } else {
                    alert('Código de producto no válido.');
                }

                scanInput.value = '';
            }
        });
    }

    // Lógica del modal de búsqueda
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalSearchInput = document.getElementById('modal-search-input');
    const modalSearchResults = document.getElementById('modal-search-results');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchModal.style.display = 'block';
            modalSearchInput.focus();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            searchModal.style.display = 'none';
            modalSearchInput.value = '';
            modalSearchResults.innerHTML = '';
        });
    }

    // Cierra el modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === searchModal) {
            searchModal.style.display = 'none';
            modalSearchInput.value = '';
            modalSearchResults.innerHTML = '';
        }
    });

    if (modalSearchInput) {
        modalSearchInput.addEventListener('input', () => {
            const query = modalSearchInput.value.toLowerCase().trim();
            modalSearchResults.innerHTML = '';
            
            if (query.length > 0) {
                const filteredProducts = allProducts.filter(product =>
                    product.name.toLowerCase().includes(query)
                );

                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        const productItem = document.createElement('a');
                        productItem.href = `producto-individual.html?id=${product.id}`;
                        productItem.classList.add('modal-product-item');
                        productItem.innerHTML = `
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <h4>${product.name}</h4>
                        `;
                        modalSearchResults.appendChild(productItem);
                    });
                } else {
                    modalSearchResults.innerHTML = '<p>No se encontraron productos.</p>';
                }
            }
        });
    }
});