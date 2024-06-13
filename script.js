// Мы можем добавить некоторые дополнительные настройки или обработчики событий для видеоплеера.
document.addEventListener("DOMContentLoaded", function() {
    var player = videojs('my-video');

    player.ready(function() {
        console.log('Player is ready');
        // Здесь можно добавить дополнительные события или настройки для вашего видеоплеера
    });
});
