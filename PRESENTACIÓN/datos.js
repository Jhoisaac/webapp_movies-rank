document.ready
var datos;
$.get('https://graph.facebook.com/60972098632/feed?fields=message,shares,comments,link&limit=20,from&access_token=EAACEdEose0cBAKaAj9ZA6pMN6VN3j9SxIA9qZAhwZBCbOsfHl6Lh4ietgOgXuhE7OjUuX0YZBbVxbXEN3100Jo9S1SlvgD3fKzqgaLe3ItKbi1UDJOLy7ohyu9pi4MASyVDdI7DSdQH91uCqLKY5rnUsRFM2cm6NROZBMJRkwj3Gp7qQxeZArDIcw4IsUVWQhwFtnlWXloJgZDZD')
  .done(function( data ) {
     var content = (data);
     console.log(datos = content);
     $('#datos').val(datos.message);
     console.log(datos.data[0].message);
  });