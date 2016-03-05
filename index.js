var Xray = require('x-ray');
var x = Xray();

x('http://www.totalwine.com/spirits/scotch/c/000885?pagesize=200&spiritsvarietaltype=single-malt&tab=fullcatalog', 'li', [{
    Name: '.plp-product-title',
    Price: '.price'
    }])
.paginate('.pager-next@onClick')
.write('prices.json')
