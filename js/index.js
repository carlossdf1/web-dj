function redimensionar() {
    $(document).ready(function() {
        var height = $(HTMLBodyElement).height();
        $('#fondo').height(height + 300);
        $('#conten').height(height + 300);
    });
}