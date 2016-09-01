'use strict';

/**
 * @ngdoc overview
 * @name PersonObj
 * @description
 * Defines an class for a PersonObj to use.
 *
 * param info
 *  An array of info about the PersonObj
 * param PersonObjs
 *  The keeper of all people.
 */
function PersonObj(info) {
  for (var key in info) {
    this[key] = info[key];
  }
  this.months = [];
}

/**
 * Adds the image for the requested year.
 */
PersonObj.prototype.addImage = function(year, image) {
  this.images[year] = image;
};

/**
 * Returns the image for the requested year.
 */
PersonObj.prototype.getImage = function(year) {
  var ke = Object.keys(this.images);
  return year ? this.images[year] : this.images[ke.shift()];
};

/**
 * @ngdoc overview
 * @name PersonObj
 * @description
 * Defines an class for a PersonObj to use.
 *
 * param info
 *  An array of info about the PersonObj
 * param PersonObjs
 *  The keeper of all people.
 */
function MonthObj(person, year, monthId) {
  this.year = year;
  this.monthId = monthId;
  if (Array.isArray(person)) {
    this.people = person;
  }
  else {
    this.people = [person];
  }
}

/**
 * Returns the image for the requested year.
 */
MonthObj.prototype.getDisplayName = function() {
  if (this.people.length === 1) {
    return this.people[0].name;
  }
  var ret = [];
  for (var key in this.people) {
    ret.push(this.people[key].name);
  }
  return ret.join('&');
};

/**
 * Returns the image for the requested year.
 */
MonthObj.prototype.getImage = function() {
  return this.people[0].getImage(this.year);
};

/**
 * Returns the month name.
 */
MonthObj.prototype.getMonthName = function(month) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  if (month === 'cover') {
    return 'Cover';
  }
  if (month === 'back') {
    return 'Back';
  }
  return monthNames[month? month : this.monthId];
};

/**
 * @ngdoc overview
 * @name Service calendar
 * @description
 * Defines an class for calendars.
 */

function CalendarService () {
  var people = {};
  var p = [new PersonObj({
      name: 'Michael Merriot',
      images: {1985: 'http://barechest.org/years/1985/1985_01_michael_merriot.jpg'},
    }),
    new PersonObj({
      name: 'Steve Green',
      images: {1985: 'http://barechest.org/years/1985/1985_02_steve_green.jpg'},
    }),
    new PersonObj({
      name: 'Miles Mitchell',
      images: {1985: 'http://barechest.org/years/1985/1985_03_miles_mitchell.jpg'},
    }),
    new PersonObj({
      name: 'Jim Cvitanich',
      images: {1985: 'http://barechest.org/years/1985/1985_04_jim_cvitanich.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1991/03/07/19910307_Cvitanich_James_Michael_Jim/m19910307_0.jpg',
          text: 'Obituary'
        },
        {
          url: 'http://ebar.com/bartab/article.php?sec=barchive&article=42',
          text: 'Behind Men Behind Bars'
        },
        {
          url: 'http://aidsquilttouch.org/panels/03847-3/91211',
          text: 'AIDS quilt panel'
        }
      ],
      dob: '08/28/1951',
      dod: '02/27/1991',
      desc: 'jim-cvitanich.html'
    }),
    new PersonObj({
      name: '(Unknown)',
      images: {1985: 'http://barechest.org/years/1985/1985_05_unknown.jpg'},
    }),
    new PersonObj({
      name: 'Mike Hatcher',
      images: {1985: 'http://barechest.org/years/1985/1985_06_mike_hatcher.jpg'},
    }),
    new PersonObj({
      name: 'Kym Whittington',
      images: {1985: 'http://barechest.org/years/1985/1985_07_kym_whittington.jpg'},
    }),
    new PersonObj({
      name: 'John Carnvalino',
      images: {1985: 'http://barechest.org/years/1985/1985_08_john_carnvalino.jpg'},
    }),
    new PersonObj({
      name: 'Jimmy Smith',
      images: {1985: 'http://barechest.org/years/1985/1985_09_jimmy_smith.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1994/05/19/19940519_Smith_James_Wilbert_Jimmy/m19940519_0.jpg',
          text: 'Obituary'
        },
      ],
      dob: '12/20/1944',
      dod: '05/08/1994',
      desc: 'jimmy-smith.html'
    }),
    new PersonObj({
      name: 'Michael Russo',
      images: {1985: 'http://barechest.org/years/1985/1985_10_michael_russo.jpg'},
    }),
    new PersonObj({
      name: 'George Aral',
      images: {1985: 'http://barechest.org/years/1985/1985_11_george_aral.jpg'},
    }),
    new PersonObj({
      name: 'Bill Robinson',
      images: {1985: 'http://barechest.org/years/1985/1985_12_bill_robison.jpg'},
    }),
    new PersonObj({
      name: 'Rob Thorton',
      images: {1986: 'http://barechest.org/years/1986/1986_01_rog_thorton.jpg'},
    }),
    new PersonObj({
      name: 'Michael Rose',
      images: {1986: 'http://barechest.org/years/1986/1986_02_michael_rose.jpg'},
    }),
    new PersonObj({
      name: 'Buzz Handley',
      images: {1986: 'http://barechest.org/years/1986/1986_03_buzz_handley.jpg'},
    }),
    new PersonObj({
      name: 'Mack Lyon',
      images: {1986: 'http://barechest.org/years/1986/1986_04_mack_lyon.jpg'},
    }),
    new PersonObj({
      name: 'Pete Pettine',
      display: 'Pete Pettine aka "BUTCH"',
      nickname: 'Butch',
      images: {1986: 'http://barechest.org/years/1986/1986_05_pete_pettine-butch.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1991/06/06/19910606_Pettine_Vito_Pete/m19910606_0.jpg',
          text: 'Obituary'
        },
        {
          url: 'http://aidsquilttouch.org/panels/02177-7/49596',
          text: 'AIDS Quilt panel (group)',
        },
        {
          url: 'http://aidsquilttouch.org/panels/01820-6/39211',
          text: 'AIDS Quilt panel',
        }
      ],
      dob: '02/25/1950',
      dod: '05/21/1991',
      desc: 'pete-pettine.html'
    }),
    new PersonObj({
      name: 'Brian Berger',
      images: {1986: 'http://barechest.org/years/1986/1986_06_brian_berger.jpg'},
    }),
    new PersonObj({
      name: 'Richard Ruggiero',
      images: {1986: 'http://barechest.org/years/1986/1986_07_richard_ruggiero.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1988/07/14/19880714_Ruggiero_Richard/m19880714_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '04/24/1950',
      dod: '06/13/1988',
      desc: 'richard-ruggiero.html'
    }),
    new PersonObj({
      name: 'Bill Tillman',
      images: {1986: 'http://barechest.org/years/1986/1986_08_bill_tillman.jpg'},
    }),
    new PersonObj({
      name: 'Mark Ferrari',
      images: {1986: 'http://barechest.org/years/1986/1986_09_mark_ferrari.jpg'},
    }),
    new PersonObj({
      name: 'Zoltan Araki',
      images: {1986: 'http://barechest.org/years/1986/1986_10_zoltan_araki.jpg'},
    }),
    new PersonObj({
      name: 'Richard Kirkorian',
      images: {1986: 'http://barechest.org/years/1986/1986_11_richard_krikorian.jpg'},
    }),
    new PersonObj({
      name: 'David Barrett',
      images: {1986: 'http://barechest.org/years/1986/1986_12_david_barrett.jpg'},
    }),
    new PersonObj({
      name: 'Ron Caspi',
      images: {1987: 'http://barechest.org/years/1987/1987_01_ron_caspi.jpg'},
    }),
    new PersonObj({
      name: 'John Brown',
      images: {1987: 'http://barechest.org/years/1987/1987_02_john_brown.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1988/03/24/19880324_Brown_John_K/m19880324_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '05/28/1961',
      dod: '03/18/1988',
      desc: 'john-brown.html'
    }),
    new PersonObj({
      name: 'Jim Ashley',
      images: {1987: 'http://barechest.org/years/1987/1987_03_jim_ashley.jpg'},
    }),
    new PersonObj({
      name: 'Ron Mikkelson',
      images: {1987: 'http://barechest.org/years/1987/1987_04_ron_mikkelson.jpg'},
    }),
    new PersonObj({
      name: 'David Duran',
      images: {1987: 'http://barechest.org/years/1987/1987_05_david_duran.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1991/03/21/19910321_Duran_David_Anthony/m19910321_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '09/11/1959',
      dod: '03/18/1991',
      desc: 'david-duran.html'
    }),
    new PersonObj({
      name: 'Leonard James-chip',
      images: {1987: 'http://barechest.org/years/1987/1987_06_leonard_chip_james.jpg'},
    }),
    new PersonObj({
      name: 'Bill Barker',
      images: {1987: 'http://barechest.org/years/1987/1987_07_bill_barker.jpg'},
    }),
    new PersonObj({
      name: 'Michael Chase',
      images: {1987: 'http://barechest.org/years/1987/1987_08_michael_chase.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1995/02/09/19950209_Chase_Michael_Ray/m19950209_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '08/13/1958',
      dod: '01/20/1995',
      desc: 'michael-chase.html'
    }),
    new PersonObj({
      name: 'Joe Nucatola',
      images: {1987: 'http://barechest.org/years/1987/1987_09_joe_nucatola.jpg'},
    }),
    new PersonObj({
      name: 'Bob Runyon',
      images: {1987: 'http://barechest.org/years/1987/1987_10_bob_runyon.jpg'},
    }),
    new PersonObj({
      name: 'Brian Casey',
      images: {1987: 'http://barechest.org/years/1987/1987_11_brian_casey.jpg'},
      // Possible Obituary http://obit.glbthistory.org/olo/imagedb/1996/10/31/19961031_Casey_Brian_D/m19961031_0.jpg
    }),
    new PersonObj({
      name: 'Ron Beauchemin',
      images: {1987: 'http://barechest.org/years/1987/1987_12_ron_beauchemin.jpg'},
    }),
    new PersonObj({
      name: 'Daniel Nemer',
      images: {1988: 'http://barechest.org/years/1988/1988_01_daniel_nemer.jpg'},
    }),
    new PersonObj({
      name: 'Joe Nickerson',
      images: {1988: 'http://barechest.org/years/1988/1988_02_joe_nickerson.jpg'},
    }),
    new PersonObj({
      name: 'Jarvis Payne',
      images: {1988: 'http://barechest.org/years/1988/1988_03_jarvis_payne.jpg'},
    }),
    new PersonObj({
      name: 'Scott Shelton',
      images: {1988: 'http://barechest.org/years/1988/1988_05_scott_shelton.jpg'},
    }),
    new PersonObj({
      name: 'Robert Genet',
      images: {1988: 'http://barechest.org/years/1988/1988_06_robert_genet.jpg'},
    }),
    new PersonObj({
      name: 'Garry DaFour',
      images: {1988: 'http://barechest.org/years/1988/1988_07_garry_dafour.jpg'},
    }),
    new PersonObj({
      name: 'Marty Johnson',
      images: {1988: 'http://barechest.org/years/1988/1988_08_marty_johnson.jpg'},
    }),
    new PersonObj({
      name: 'Eric Jazmen',
      images: {1988: 'http://barechest.org/years/1988/1988_09_eric_jazmen.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1994/01/20/19940120_Jazmen_Eric/m19940120_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '09/14/1956',
      dod: '01/01/1994',
      desc: 'eric-jazmen.html'
    }),
    new PersonObj({
      name: 'Joe Falco',
      images: {1988: 'http://barechest.org/years/1988/1988_10_joe_falco.jpg'},
    }),
    new PersonObj({
      name: 'Chad Sebold',
      images: {1988: 'http://barechest.org/years/1988/1988_11_chad_seibold.jpg'},
    }),
    new PersonObj({
      name: 'James Buhler',
      images: {1988: 'http://barechest.org/years/1988/1988_12_james_buhler.jpg'},
    }),
    new PersonObj({
      name: 'Jon DeLeon',
      images: {1989: 'http://barechest.org/years/1989/1989_01_jon_deleon.jpg'},
    }),
    new PersonObj({
      name: 'Tyronne Howze',
      images: {1989: 'http://barechest.org/years/1989/1989_02_tyronne_howze.jpg'},
    }),
    new PersonObj({
      name: 'Steve Conrad',
      images: {1989: 'http://barechest.org/years/1989/1989_03_steve_conrad.jpg'},
      links: [
        {
          url:'http://aidsquilttouch.org/panels/04960-1/636486',
          text: 'AIDS memorial Quilt Panel'
        },
        {
          url:'http://www.familytreenow.com/record/SjQJQBbAKCOIWk_4w0RCdQ',
          text: 'Death Record'
        }
      ],
      dob: '02/22/1949',
      dod: '04/25/1996',
      desc: 'steve-conrad.html'
    }),
    new PersonObj({
      name: 'Kim Davis',
      images: {1989: 'http://barechest.org/years/1989/1989_04_kim_davis.jpg'},
    }),
    new PersonObj({
      name: 'Blake Jenks',
      images: {1989: 'http://barechest.org/years/1989/1989_05_blake_jenks.jpg'},
    }),
    new PersonObj({
      name: 'Shadow MB Reed',
      images: {1989: 'http://barechest.org/thumbs_gallery_years/th_1989_06_shadow_morto.jpg'},
    }),
    new PersonObj({
      name: 'Gregg Filips',
      images: {1989: 'http://barechest.org/years/1989/1989_07_gregg_filips.jpg'},
    }),
    new PersonObj({
      name: 'Clayton Aravjo',
      images: {1989: 'http://barechest.org/years/1989/1989_08_clayton_aravjo.jpg'},
    }),
    new PersonObj({
      name: 'Phil Tuggle',
      images: {1989: 'http://barechest.org/years/1989/1989_09_phil_tuggle.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1992/01/09/19920109_Tuggle_Philip_F/m19920109_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '04/30/1953',
      dod: '12/28/1991',
      desc: 'phil-tuggle.html'
    }),
    new PersonObj({
      name: 'Jeff Hettmansperger',
      images: {1989: 'http://barechest.org/years/1989/1989_10_jeff_hettmansperge.jpg'},
    }),
    new PersonObj({
      name: 'Ken McMullen',
      images: {1989: 'http://barechest.org/years/1989/1989_11_ken_mcmullen.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1994/06/30/19940630_McMullen_Ken/m19940630_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '09/09/1958',
      dod: '06/23/1994',
      desc: 'ken-mcmullen.html'
    }),
    new PersonObj({
      name: 'Franklin Liam Liao',
      images: {1989: 'http://barechest.org/thumbs_gallery_years/th_1989_12_franklin_lim.jpg'},
    }),
    new PersonObj({
      name: 'Peter Austin',
      images: {1989: 'http://barechest.org/thumbs_gallery_years/th_1989_12_franklin_lim.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1991/02/21/19910221_Austin_Peter_James/m19910221_0.jpg',
          text: 'Obituary'
        },
        {
          url:'http://aidsquilttouch.org/panels/05710-5/620443',
          text: 'AIDS memorial quilt panel'
        },
        {
          url:'http://aidsquilttouch.org/panels/05217-5/605058',
          text: 'AIDS memorial quilt panel 2'
        },
        {
          url:'http://aidsquilttouch.org/panels/01795-5/38721',
          text: 'AIDS memorial quilt panel 3'
        },
        {
          url:'http://www.findagrave.com/cgi-bin/fg.cgi?page=gr&GRid=95112240',
          text: 'Memorial listing for him written by family, attributing his death to cancer.'
        }
      ],
      dob: '12/06/1955',
      dod: '02/13/1991',
      desc: 'peter-austin.html'
    }),
    new PersonObj({
      name: 'Wally Hanson',
      images: {1990: 'http://barechest.org/years/1990/1990_01_wally_hanson.jpg'},
    }),
    new PersonObj({
      name: 'Curtis Greenshaw',
      images: {1990: 'http://barechest.org/thumbs_gallery_years/th_1990_02_curtis_greenshaw.jpg'},
    }),
    new PersonObj({
      name: 'Brett Lancaster',
      images: {1990: 'http://barechest.org/years/1990/1990_03_brett_lancaster.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1994/08/04/19940804_Lancaster_Brett_Elvira/m19940804_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '09/25/1964',
      dod: '07/29/1994',
      desc: 'brett-lancester.html'
    }),
    new PersonObj({
      name: 'Bruce Combs',
      images: {1990: 'http://barechest.org/years/1990/1990_04_bruce_combs.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1993/04/22/19930422_Combs_Bruce/m19930422_0.jpg',
          text: 'Obituary'
        }
      ],
      dob: '04/05/1947',
      dod: '04/12/1993',
      desc: 'bruce-combs.html'
    }),
    new PersonObj({
      name: 'Stewart Siegal',
      images: {1990: 'http://barechest.org/years/1990/1990_05_stewart_siegal.jpg'},
    }),
    new PersonObj({
      name: 'John Dopp',
      images: {1990: 'http://barechest.org/years/1990/1990_06_john_dopp.jpg'},
    }),
    new PersonObj({
      name: 'Bradley Cavalier',
      images: {1990: 'http://barechest.org/years/1990/1990_07_bradley_cavalier.jpg'},
      desc: 'bradley-cavalier.html'
    }),
    new PersonObj({
      name: 'Darrell McQueen',
      images: {1990: 'http://barechest.org/years/1990/1990_08_darrell_mcqueen.jpg'},
    }),
    new PersonObj({
      name: 'James Rueth',
      images: {1990: 'http://barechest.org/years/1990/1990_09_james_rueth.jpg'},
    }),
    new PersonObj({
      name: 'Andrew Vasquez',
      images: {1990: 'http://barechest.org/years/1990/1990_10_andrew_vasquez.jpg'},
    }),
    new PersonObj({
      name: 'Mitch Johnson',
      images: {1990: 'http://barechest.org/years/1990/1990_11_mitch_johnson.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1993/12/16/19931216_Johnson_Mitchell_Alan/m19931216_0.jpg',
          text: 'Obituary'
        },
        {
          url:'http://aidsquilttouch.org/panel-all/05710-5',
          text: 'AIDS Memorial Quilt panel'
        }
      ],
      dob: '02/13/1958',
      dod: '12/10/1993',
      desc: 'mitch-johnson.html'
    }),
    new PersonObj({
      name: 'Mike Ferguson',
      images: {1990: 'http://barechest.org/years/1990/1990_12_mike_ferguson.jpg'},
    }),
    new PersonObj({
      name: 'Rodney Felix',
      images: {1991: 'http://barechest.org/years/1991/1991_01_rodney_felix.jpg'},
    }),
    new PersonObj({
      name: 'David Thompson',
      images: {1991: 'http://barechest.org/years/1991/1991_02_david_thompson.jpg'},
    }),
    new PersonObj({
      name: 'Jeffrey Weil',
      images: {1991: 'http://barechest.org/years/1991/1991_03_jeffrey_weil.jpg'},
    }),
    new PersonObj({
      name: 'Joe Mancini',
      images: {1991: 'http://barechest.org/years/1991/1991_04_joe_mancini.jpg'},
    }),
    new PersonObj({
      name: 'Grant Dupont',
      images: {1991: 'http://barechest.org/years/1991/1991_05_grant_dupont.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/2000/01/13/20000113_Dupont_Grant/m20000113_0.jpg',
          text: 'Obituary'
        },
        {
          url:'http://aidsquilttouch.org/panels/05710-5/620438',
          text: 'AIDS Memorial Quilt panel'
        },
      ],
      dob: '02/06/1962',
      dod: '12/30/1999',
      desc: 'grant-dupont.html'
    }),
    new PersonObj({
      name: 'Joe Fiorentino',
      images: {1991: 'http://barechest.org/years/1991/1991_06_joe_fiorentino.jpg'},
    }),
    new PersonObj({
      name: 'Tom Rodgers',
      images: {1991: 'http://barechest.org/years/1991/1991_07_tom_rodgers.jpg'},
      desc: 'tom-rodgers.html'
    }),
    new PersonObj({
      name: 'John Dimeo',
      images: {1991: 'http://barechest.org/years/1991/1991_08_john_dimeo.jpg'},
    }),
    new PersonObj({
      name: 'Rod Brush',
      images: {1991: 'http://barechest.org/years/1991/1991_09_rod_brush.jpg'},
    }),
    new PersonObj({
      name: 'Chuck Russell',
      images: {1991: 'http://barechest.org/years/1991/1991_10_chuck_russell.jpg'},
    }),
    new PersonObj({
      name: 'Andrew Pear',
      images: {1991: 'http://barechest.org/years/1991/1991_12_andrew_pear.jpg'},
    }),
    new PersonObj({
      name: 'Chris Minor',
      images: {1990: 'http://barechest.org/years/1990/1990_bc_chris_minor.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1992/11/12/19921112_Minor-Mullholland_Chris/m19921112_0.jpg',
          text: 'Obituary'
        },
        {
          url:'http://aidsquilttouch.org/panels/05710-5/620433',
          text: 'AIDS Memorial Quilt panel'
        },
        {
          url:'http://aidsquilttouch.org/panels/03027-5/69596',
          text: 'AIDS Memorial Quilt panel 2'
        },
      ],
      dob: '07/13/1965',
      dod: '11/07/1992',
      desc: 'chris-minor.html'
    }),
    new PersonObj({
      name: 'Terry Cameron',
      images: {1992: 'http://barechest.org/years/1992/1992_01_terry_cameron.jpg'},
    }),
    new PersonObj({
      name: 'Dan Davis',
      images: {1992: 'http://barechest.org/years/1992/1992_03_dan_davis.jpg'},
    }),
    new PersonObj({
      name: 'Michael Holloway',
      images: {1992: 'http://barechest.org/years/1992/1992_04_michael_holloway.jpg'},
    }),
    new PersonObj({
      name: 'Michael Fiumara',
      images: {1992: 'http://barechest.org/thumbs_gallery_years/th_1992_05_michael_fiumara.jpg'},
      links: [
        {
          url:'https://books.google.com/books?id=c5MCAAAAMBAJ&lpg=PP1&dq=New%20York%20Magazine%20Jun%2020%2C%201994&pg=PP1#v=onepage&q&f=false',
          text: 'New York Magazine Jun 20, 1994 - Well Oiled Machines -'
        },
      ],
      desc: 'michael-fiumara.html'
    }),
    new PersonObj({
      name: 'Richard Gorelnick',
      images: {1992: 'http://barechest.org/years/1992/1992_06_richard_gorelnick.jpg'},
    }),
    new PersonObj({
      name: 'Michael Howe',
      images: {1992: 'http://barechest.org/years/1992/1992_07_michael_howe.jpg'},
      // possible obituary http://barechest.org/years/1992/1992_07_michael_howe.html
    }),
    new PersonObj({
      name: 'Pete Sentowski',
      images: {1992: 'http://barechest.org/years/1992/1992_08_pete_sentkowski.jpg'},
    }),
    new PersonObj({
      name: 'Kevin Ware',
      images: {1992: 'http://barechest.org/years/1992/1992_09_kevin_ware.jpg'},
    }),
    new PersonObj({
      name: 'Kevin Sims',
      images: {1992: 'http://barechest.org/years/1992/1992_10_kevin_sims.jpg'},
    }),
    new PersonObj({
      name: 'Andy Anderson',
      images: {1992: 'http://barechest.org/years/1992/1992_11_andy_anderson.jpg'},
    }),
    new PersonObj({
      name: 'Art Tomaszewski',
      images: {1992: 'http://barechest.org/years/1992/1992_12_art_tomaszewski.jpg'},
      desc: 'art-tomaszewski.html'
    }),
  ];
  for (var key in p) {
    people[p[key].name] = p[key];
  }
  people['Mitch Johnson'].addImage(1991, 'http://barechest.org/years/1991/1991_11_mitch_johnson.jpg');
  people['Brian Berger'].addImage(1988, 'http://barechest.org/years/1988/1988_04_brian_berger.jpg');
  people['Grant Dupont'].addImage(1992, 'http://barechest.org/years/1992/1992_02_grant_dupont.jpg');
  this.people = people;



  this.calendar = {};
  this.calendar[1985] = {
    cover: 'http://barechest.org/years/1985/1985_fc.jpg',
    back: '',
    monthsUnprocessed: [
      people['Michael Merriot'],
      people['Steve Green'],
      people['Miles Mitchell'],
      people['Jim Cvitanich'],
      people['(Unknwon)'],
      people['Mike Hatcher'],
      people['Kym Whittington'],
      people['John Carnvalino'],
      people['Jimmy Smith'],
      people['Michael Russo'],
      people['George Aral'],
      people['Bill Robinson'],
    ],
  };
  this.calendar[1986] = {
    cover: '',
    back: '',
    monthsUnprocessed: [
      people['Rob Thorton'],
      people['Michael Rose'],
      people['Buzz Handley'],
      people['Mack Lyon'],
      people['Pete Pettine'],
      people['Brian Berger'],
      people['Richard Ruggiero'],
      people['Bill Tillman'],
      people['Mark Ferrari'],
      people['Zoltan Araki'],
      people['Richard Kirkorian'],
      people['David Barrett'],
    ],
  };
  this.calendar[1987] = {
    cover: 'http://barechest.org/years/1987/1987_fc_ron_beauchemin.jpg',
    back: 'http://barechest.org/years/1987/1987_bc_john_brown.jpg',
    coverMan: people['Ron Beauchemin'],
    backMan: people['John Brown'],
    monthsUnprocessed: [
      people['Ron Caspi'],
      people['John Brown'],
      people['Jim Ashley'],
      people['Ron Mikkelson'],
      people['David Duran'],
      people['Leonard James-chip'],
      people['Bill Barker'],
      people['Michael Chase'],
      people['Joe Nucatola'],
      people['Bob Runyon'],
      people['Brian Casey'],
      people['Ron Beauchemin'],
    ],
  };
  this.calendar[1988] = {
    cover: 'http://barechest.org/years/1988/1988_fc_robert_genet.jpg',
    back: 'http://barechest.org/years/1988/1988_bc_brian_berger.jpg',
    coverMan: people['Robert Genet'],
    backMan: people['Brian Berger'],
    monthsUnprocessed: [
      people['Daniel Nemer'],
      people['Joe Nickerson'],
      people['Jarvis Payne'],
      people['Brian Berger'],
      people['Scott Shelton'],
      people['Robert Genet'],
      people['Garry DaFour'],
      people['Marty Johnson'],
      people['Eric Jazmen'],
      people['Joe Falco'],
      people['Chad Sebold'],
      people['James Buhler'],
    ],
  };
  this.calendar[1989] = {
    cover: 'http://barechest.org/years/1989/1989_fc_peter_austin.jpg',
    back: 'http://barechest.org/years/1989/1989_bc_clayton_aravjo.jpg',
    coverMan: people['Peter Austin'],
    backMan: people['Clayton Aravio'],
    monthsUnprocessed: [
      people['Jon DeLeon'],
      people['Tyronne Howze'],
      people['Steve Conrad'],
      people['Kim Davis'],
      people['Blake Jenks'],
      people['Shadow MB Reed'],
      people['Gregg Filips'],
      people['Clayton Aravjo'],
      people['Phil Tuggle'],
      people['Jeff Hettmansperger'],
      people['Ken McMullen'],
      [people['Franklin Liam Liao'], people['Peter Austin']],
    ],
  };
  this.calendar[1990] = {
    cover: 'http://barechest.org/years/1990/1990_fc_bradley_cavalier.jpg',
    coverMan: people['Bradley Cavalier'],
    backMan: people['Chris Minor'],
    back: 'http://barechest.org/years/1990/1990_bc_chris_minor.jpg',
    monthsUnprocessed: [
      people['Wally Hanson'],
      people['Curtis Greenshaw'],
      people['Brett Lancaster'],
      people['Bruce Combs'],
      people['Stewart Siegal'],
      people['John Dopp'],
      people['Bradley Cavalier'],
      people['Darrell McQueen'],
      people['James Rueth'],
      people['Andrew Vasquez'],
      people['Mitch Johnson'],
      people['Mike Ferguson'],
    ],
  };
  this.calendar[1991] = {
    cover: 'http://barechest.org/years/1991/1991_fc_mitch_johnson.jpg',
    coverMan: people['Mitch Johnson'],
    backMan: people['Andrew Pear'],
    back: 'http://barechest.org/years/1991/1991_bc_andrew_pear.jpg',
    monthsUnprocessed: [
      people['Rodney Felix'],
      people['David Thompson'],
      people['Jeffrey Weil'],
      people['Joe Mancini'],
      people['Grant Dupont'],
      people['Joe Fiorentino'],
      people['Tom Rodgers'],
      people['John Dimeo'],
      people['Rod Brush'],
      people['Chuck Russell'],
      people['Mitch Johnson'],
      people['Andrew Pear'],
    ],
  };
  this.calendar[1992] = {
    cover: 'http://barechest.org/years/1992/1992_fc_andy_anderson.jpg',
    coverMan: people['Andy Anderson'],
    backMan: people['Art Tomaszewski'],
    back: 'http://barechest.org/years/1992/1992_bc_art_tomaszewski.jpg',
    monthsUnprocessed: [
      people['Terry Cameron'],
      people['Grant Dupont'],
      people['Dan Davis'],
      people['Michael Holloway'],
      people['Michael Fiumara'],
      people['Richard Gorelnick'],
      people['Michael Howe'],
      people['Pete Sentowski'],
      people['Kevin Ware'],
      people['Kevin Sims'],
      people['Andy Anderson'],
      people['Art Tomaszewski'],
    ],
  };
  for (var year in this.calendar) {
    this.calendar[year].months = [];
    for (var monthId in this.calendar[year].monthsUnprocessed) {
      this.calendar[year].months[monthId] = new MonthObj(this.calendar[year].monthsUnprocessed[monthId], year, monthId);
      this.calendar[year].year = year;
      for (var pid in this.calendar[year].months[monthId].people) {
        if (this.calendar[year].months[monthId].people[pid]) {
          this.calendar[year].months[monthId].people[pid].months.push({year: year, monthId: monthId});
        }
      }
    }
    if (this.calendar[year].coverMan) {
      console.log(this.calendar[year].coverMan);
      this.calendar[year].coverMan.months.push({year: year, monthId: 'cover'});
    }
    if (this.calendar[year].backMan) {
      this.calendar[year].backMan.months.push({year: year, monthId: 'back'});
    }
  }
}

/**
 * Returns calendar information.
 *
 * @param year (optional)
 *  If year is specified, returns for that year.
 */
CalendarService.prototype.getCalendar = function(year) {
  return year ? this.calendar[year] : this.calendar;
};

/**
 * Returns calendar information.
 *
 * @param year (optional)
 *  If year is specified, returns for that year.
 */
CalendarService.prototype.getPeople = function() {
  return this.people;
};

/**
 * Returns all the years.
 */
CalendarService.prototype.getYears = function() {
  return Object.keys(this.calendar);
};

/**
 * Returns the cover page for a calendar.
 *
 * @param year (required)
 *  If year is specified, returns for that year.
 */
CalendarService.prototype.getCalendarCover = function(calendar) {
  if (calendar.cover) {
    return calendar.cover;
  }
  for (var key in calendar.months) {
    var image = calendar.months[key].getImage();
    if (image) {
      return image;
    }
  }
  return '';
};


