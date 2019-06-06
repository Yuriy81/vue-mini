
function wine (name, type, year, region, maker, alcohol, image){
  return {
    name, type, year, region, maker, alcohol, image
  }
}
function log (text, status, date = new Date) {
  return {
    text, status, date
  }
}

const wines = [
  wine('Salon', 'Champagne', 1997, 'France', 'Salon', '12%', 'images/salon.jpg'),
  wine('Cabernet Sauvignon', 'Red Wine', 1994, 'USA', 'Screaming Eagle', '14%', 'images/cabernet-sauvignon.jpg'),
  wine('Dom Perignon', 'Champagne', 1996, 'France', 'Moet Chandon', '12.5%', 'images/dom_perignon.jpg'),
  wine('Penfolds Grange', 'Red Wine', 1993, 'Australia', 'Penfolds', '14.5%', 'images/penfolds-grange.jpg'),
  wine('Chianti', 'Red wine', 1995, 'Italy', 'Badia a Passignanti', '13%', 'images/badia_a_passi.jpg'),
  wine('Cabernet Sauvignon Red', 'Red Wine', 1992, 'USA', 'Alexander Valley', '13.9%', 'images/cabernet_sauvignon_1.jpg'),
  wine('Vega Sicilia Unico', 'Red Wine', 1990, 'Spain', 'Vega Sicilia', '13.5%', 'images/vega_sicilia.jpg'),
  wine('Sauvignon Blanc', 'White wine', 1997, 'New Zealand', 'Kim Krawford', '14%', 'images/white_sauvignon.jpg'),
  wine('Veuve Clicquot Ponsardin', 'Champagne', 1991, 'France', 'Veuve Clicquot', '12%', 'images/veuve_clicquot_ponsardin.jpg'),
  wine('Moët & Chandon', 'Champagne', 1999, 'France', 'Moet Chandon', '12%', 'images/moet_chandon.jpg'),
  ]

new Vue ({
  el: '#app',
  data: {
    wines: wines,
    wine: wines[0],
    selectedWineIndex: 0,
    makerVisibility: false,
    search: '',
    modalVisibility: false,
    logs: []
  },
  methods: {
    selectWine: function(index){
    this.wine = wines[index]
    this.selectedWineIndex = index
  },
  newOrder: function () {
    this.modalVisibility = false
    this.logs.push (
      log(`Success order: ${this.wine.name} - ${this.wine.type}`, 'ok')
    )
    },
  cancelOrder: function () {
    this.modalVisibility = false
    this.logs.push (
      log(`Cancelled order: ${this.wine.name} - ${this.wine.type}`, 'cnl')
    )
    }
    },
  computed: {
    wineBtnText: function () {
      return this.makerVisibility ? 'Hide developer' : 'Show developer'
    },
    filteredWines: function () {
      let self = this
      const filtered = this.wines.filter(function (wine) {
        return wine.name.indexOf(self.search) > -1 || wine.type.indexOf(self.search) > -1
      })
      return filtered
    }
  },
  filters: {
    date(value) {
      return value.toLocaleString()
    }
  }
})
