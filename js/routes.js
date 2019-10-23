var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  {
    path: '/konfirmasi/',
    componentUrl: 'pages/konfirmasi.html',
  },
  
  {
    path: '/editbarang/',
    componentUrl: 'pages/edit_barang.html',
  },

  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
