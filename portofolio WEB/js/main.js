// saat di klik
$('.scroll').on('click', function (e){
	// mengambil href
	var tujuan = $(this).attr('href');  // nama "tujuan" itu bebas boleh di ganti
	// untuk menangkap tujuan
	var elementujuan = $(tujuan);
	// ke halaman yang di tuju dengan efek smooth
	$('body').animate({
		scrollTop: elementujuan.offset().top -40
	}) ;


	e.preventDefault();
})