function redimensionar() {
    $(document).ready(function() {
        var height = $(HTMLBodyElement).height();
        $('#fondo').height(height + 130);
        $('#conten').height(height + 130);
    });
}