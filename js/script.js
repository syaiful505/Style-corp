const sideNav = document.querySelectorAll('.sidenav'); //manggil dg cara dom conts variabel sideNav tangkap elemen dokumen.query javscrip cariin elemen nama selector kelas sidenav
    M.Sidenav.init(sideNav); //kalau sudah panggil M punya materialize  panggil Sidenav lalu di init elemen sideNav
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false, //indikatornya tidak ada kasih koma kalau mau ditambahin lagi
        height: 500, //tingginya
        transition: 600, //efek transisinya tulisan muncul
        interval: 3000 //efek ganti gambar jika sudah tdk ad opsi tdk usah pakai koma
    });
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax)
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});