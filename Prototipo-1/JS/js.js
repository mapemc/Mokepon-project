new Vue({
    el: '#app',
    data: {
        images: [
            { id: 1, url: 'ruta_imagen_1.jpg', alt: 'Imagen 1' },
            { id: 2, url: 'ruta_imagen_2.jpg', alt: 'Imagen 2' },
            { id: 3, url: 'ruta_imagen_3.jpg', alt: 'Imagen 3' }
            // Agrega más imágenes al array según necesites
        ]
    },
    mounted() {
        this.$nextTick(function () {
            // Configuración del carrusel usando Slick Carousel
            $('.image-slider').slick({
                arrows: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
    }
});