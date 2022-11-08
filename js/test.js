document.querySelector(document).ready(function ($) {
  (function initPlayVideo() {
    const $videoCover = $('.f-video-cover');
    const $videoPlayer = $('.f-video-player');
    const $videoUrl = $('.f-video-cover').data('video');

    $videoCover.on('click', function () {
      $videoCover.fadeOut();
      $videoPlayer.html(
        '<iframe src="https://www.youtube.com/embed/' +
          $videoUrl +
          '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
    });
  })();
});
