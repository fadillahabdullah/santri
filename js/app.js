// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

var pathweb ="http://localhost/e-money/api/";
// var pathweb ="http://emoney.crazycoding.info/api/";

var get_saldo = pathweb + "get_saldo.php";
var get_saldosantri = pathweb + "get_saldosantri.php";
var get_barang = pathweb + "get_barang.php";
var simpan_barang = pathweb + "simpan_barang.php";
var filter_barang = pathweb + "filter_barang.php";
var update_barang = pathweb + "update_barang.php";
var delete_barang = pathweb + "delete_barang.php";
var api_loginsantri = pathweb + "api_loginsantri.php";
var get_cekpin = pathweb + "get_cekpin.php";
var get_keluar = pathweb + "get_keluar.php";
var get_konfirmasi = pathweb + "get_konfirmasi.php";
var simpan_konfirmasi = pathweb + "simpan_konfirmasi.php";
