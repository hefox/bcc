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
      images: {1989: 'http://barechest.org/years/1995/1989_06_shadow_morto.jpg'},
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
      images: {1989: 'http://barechest.org/years/1995/1989_12_franklin_lim.jpg'},
    }),
    new PersonObj({
      name: 'Peter Austin',
      images: {1989: 'http://barechest.org/years/1995/1989_12_franklin_lim.jpg'},
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
      images: {1990: 'http://barechest.org/years/1995/1990_02_curtis_greenshaw.jpg'},
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
      images: {1992: 'http://barechest.org/years/1995/1992_05_michael_fiumara.jpg'},
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
    new PersonObj({
      name: 'Wolf Mirasol',
      images: {1993: 'http://barechest.org/years/1993/1993_01_wolf_mirasol.jpg'},
      // he's a fitness instructor?
    }),
    new PersonObj({
      name: 'Dieter Edwards',
      images: {1993: 'http://barechest.org/years/1993/1993_02_dieter_edwards.jpg'},
    }),
    new PersonObj({
      name: 'Nick Visconti',
      images: {1993: 'http://barechest.org/years/1993/1993_03_nick_visconti.jpg'},
    }),
    new PersonObj({
      name: 'Joe McMurray',
      images: {1993: 'http://barechest.org/years/1993/1993_04_joe_mcmurray.jpg'},
    }),
    new PersonObj({
      name: 'David Lomada',
      images: {1993: 'http://barechest.org/years/1993/1993_05_david_lomada.jpg'},
    }),
    new PersonObj({
      name: 'Lonnie Tuck',
      images: {1993: 'http://barechest.org/years/1993/1993_06_lonnie_tuck.jpg'},
      //http://dev.successcentersf.org/team/lonnie-truck/
    }),
    new PersonObj({
      name: 'Taylor Poff',
      images: {1993: 'http://barechest.org/years/1993/1993_08_taylor_poff.jpg'},
      // Maybe https://www.facebook.com/allen.t.poff
    }),
    new PersonObj({
      name: 'Michael Zwaan',
      images: {1993: 'http://barechest.org/years/1993/1993_09_michael_zwaan.jpg'},
    }),
    new PersonObj({
      name: 'Daniel DeLeon',
      images: {1993: 'http://barechest.org/years/1993/1993_10_daniel_deleon.jpg'},
    }),
    new PersonObj({
      name: 'Bob Harrison',
      images: {1993: 'http://barechest.org/years/1993/1993_11_bob_harrison.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1994/07/07/19940707_Harrison_Robert_Franklin_Bob/m19940707_0.jpg',
          text: 'Obituary'
        },
      ],
      dob: '04/15/1948',
      dod: '06/29/1994',
      desc: 'bob-harrison.html'
    }),
    new PersonObj({
      name: 'Chris Winkel',
      images: {1993: 'http://barechest.org/years/1993/1993_12_chris_winkel.jpg'},
    }),
    new PersonObj({
      name: 'Reed Morrow',
      images: {1994: 'http://barechest.org/years/1994/1994_02_reed_morrow.jpg'},
    }),
    new PersonObj({
      name: 'Albert Wyss',
      images: {1994: 'http://barechest.org/years/1994/1994_03_albert_wyss.jpg'},
    }),
    new PersonObj({
      name: 'Ted Downer',
      images: {1994: 'http://barechest.org/years/1994/1994_04_ted_downer.jpg'},
    }),
    new PersonObj({
      name: 'Jeff Olney',
      images: {1994: 'http://barechest.org/years/1994/1994_05_jeff_olney.jpg'},
    }),
    new PersonObj({
      name: 'Lee Tucker',
      images: {1994: 'http://barechest.org/years/1994/1994_06_lee_tucker.jpg'},
      // https://www.facebook.com/sfleetucker/about ??
    }),
    new PersonObj({
      // http://obit.glbthistory.org/olo/imagedb/1999/04/01/19990401_Austin_Mark/m19990401_0.jpg ??
      name: 'Mark Austin',
      images: {1994: 'http://barechest.org/years/1994/1994_07_mark_austin.jpg'},
    }),
    new PersonObj({
      name: 'Dennis Richards',
      images: {1994: 'http://barechest.org/years/1994/1994_08_dennis_richards.jpg'},
    }),
    new PersonObj({
      name: 'Jeff Kennedy',
      images: {1994: 'http://barechest.org/years/1994/1994_09_jeff_kennedy.jpg'},
    }),
    new PersonObj({
      name: 'Peter Dorian',
      images: {1994: 'http://barechest.org/years/1994/1994_10_peter_dorian.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/1995/11/16/19951116_Dorian_Peter/m19951116_0.jpg',
          text: 'Obituary'
        },
      ],
      dob: '06/29/1954',
      dod: '10/01/1995',
      desc: 'peter-dorian.html'
    }),
    new PersonObj({
      name: 'Sid Toress',
      images: {1994: 'http://barechest.org/years/1994/1994_11_sid_torres.jpg'},
    }),
    new PersonObj({
      name: 'Bruce Starr',
      images: {1994: 'http://barechest.org/years/1994/1994_12_bruce_starr.jpg'},
      links: [
        {
          url:'http://obit.glbthistory.org/olo/imagedb/2009/12/03/20091203_Starr_Bruce/m20091203_0.jpg',
          text: 'Obituary'
        },
      ],
      dob: '03/12/1956',
      dod: '10/28/2009',
      desc: 'bruce-starr.html'
    }),
    new PersonObj({
      name: 'Mikey Cross',
      images: {1995: 'http://barechest.org/years/1995/1995_01_mike_cross_mikey.jpg'},
    }),
    new PersonObj({
      name: 'Mike Torkildsen',
      images: {1995: 'http://barechest.org/years/1995/1995_03_mike_torkildsen.jpg'},
    }),
    new PersonObj({
      name: 'Eliot \'Buck\' Sierra',
      images: {1995: 'http://barechest.org/years/1995/1995_04_eliot_sierra.jpg'},
    }),
    new PersonObj({
      name: 'David Magness',
      images: {1995: 'http://barechest.org/years/1995/1995_05_david_magness.jpg'},
    }),
    new PersonObj({
      name: 'Charlie Seltz',
      images: {1995: 'http://barechest.org/years/1995/1995_06_charlie_seltz.jpg'},
    }),
    new PersonObj({
      name: 'Jim Gatteau',
      images: {1995: 'http://barechest.org/years/1995/1995_07_jim_gatteau.jpg'},
      // https://www.linkedin.com/in/jim-gatteau-58b66a95
    }),
    new PersonObj({
      name: 'Mark Johansen',
      images: {1995: 'http://barechest.org/years/1995/1995_08_mark_johansen.jpg'},
    }),
    new PersonObj({
      name: 'Alex Saldarriaga',
      images: {1995: 'http://barechest.org/years/1995/1995_09_alex_saldarriaga.jpg'},
      // https://www.facebook.com/alex.saldarriaga.14
      // http://www.sfexaminer.com/alex-saldarriaga-small-business-person-of-the-year/
    }),
    new PersonObj({
      name: 'Devin MacLachlan',
      images: {1995: 'http://barechest.org/years/1995/1995_10_devin_maclachlan.jpg'},
      // http://www.nytimes.com/2011/10/16/fashion/weddings/devin-maclachlan-bruce-marcus-weddings.html?_r=0 ?
      // http://www.ido.events/creative/ ??
    }),
    new PersonObj({
      name: 'Bob Toner',
      images: {1995: 'http://barechest.org/years/1995/1995_11_bob_toner.jpg'},
    }),
    new PersonObj({
      name: 'Robert \'Scott\' Sherrill',
      images: {1995: 'http://barechest.org/years/1995/1995_12_robert_sherrill.jpg'},
    }),
    new PersonObj({
      name: 'Tommy Reaves',
      images: {1996: 'http://barechest.org/years/1996/1996_02_tommy_reaves.jpg'},
    }),
    new PersonObj({
      name: 'Jim Donahue',
      images: {1996: 'http://barechest.org/years/1996/1996_03_jim_donahue.jpg'},
    }),
    new PersonObj({
      name: 'Kirke Watson',
      images: {1996: 'http://barechest.org/years/1996/1996_04_kirke_watson.jpg'},
    }),
    new PersonObj({
      name: 'Ron Telles',
      images: {1996: 'http://barechest.org/years/1996/1996_05_ron_telles.jpg'},
    }),
    new PersonObj({
      name: 'Wolf & Andy',
      images: {1996: 'http://barechest.org/thumbs_gallery_years/th_96_06_wolf-andy.jpg'},
    }),
    new PersonObj({
      name: 'Gary Lindstrum',
      images: {1996: 'http://barechest.org/years/1996/1996_07_gary_lindstrum.jpg'},
    }),
    new PersonObj({
      name: 'John Bleyle',
      images: {1996: 'http://barechest.org/years/1996/1996_08_john_bleyle.jpg'},
    }),
    new PersonObj({
      name: 'Jeff Buppert',
      images: {1996: 'http://barechest.org/years/1996/1996_09_jeff_buppert.jpg'},
    }),
    new PersonObj({
      name: 'Martyn Jones',
      images: {1996: 'http://barechest.org/years/1996/1996_10_martyn_jones.jpg'},
    }),
    new PersonObj({
      name: 'Mike Greenberg',
      images: {1996: 'http://barechest.org/years/1996/1996_11_mike_greenberg.jpg'},
    }),
    new PersonObj({
      name: 'Felix Novy',
      images: {1997: 'http://barechest.org/years/1997/1997_01_felix_novy.jpg'},
    }),
    new PersonObj({
      name: 'Joey Faria',
      images: {1997: 'http://barechest.org/years/1997/1997_02_joey_faria.jpg'},
    }),
    new PersonObj({
      name: 'Randy Wright',
      images: {1997: 'http://barechest.org/years/1997/1997_03_randy_wright.jpg'},
    }),
    new PersonObj({
      name: 'Thomas Powers',
      images: {1997: 'http://barechest.org/years/1997/1997_04_thomas_powers.jpg'},
    }),
    new PersonObj({
      name: 'Juan Carlos',
      images: {1997: 'http://barechest.org/years/1997/1997_05_juan_carlos.jpg'},
    }),
    new PersonObj({
      name: 'Stuart Kloda',
      images: {1997: 'http://barechest.org/years/1997/1997_06_stuart_kloda.jpg'},
    }),
    new PersonObj({
      name: '??',
      images: {1997: 'http://barechest.org/thumbs_gallery_years/th1997july.jpg'},
    }),
    new PersonObj({
      name: 'Lynn McCameron',
      images: {1997: 'http://barechest.org/years/1997/1997_08_lynn_mccameron.jpg'},
    }),
    new PersonObj({
      name: 'Michael Wieland',
      images: {1997: 'http://barechest.org/years/1997/1997_09_michael_wieland.jpg'},
    }),
    new PersonObj({
      name: 'Mike Rand',
      images: {1997: 'http://barechest.org/years/1997/1997_10_mike_rand.jpg'},
    }),
    new PersonObj({
      name: 'John Edwards',
      images: {1997: 'http://barechest.org/years/1997/1997_11_john_edwards.jpg'},
    }),
    new PersonObj({
      name: 'Alex Hill',
      images: {1997: 'http://barechest.org/years/1997/1997_12_alex_hill.jpg'},
    }),
    new PersonObj({
      name: 'Andre English',
      images: {1998: 'http://barechest.org/years/1998/1998_01_andre_english.jpg'},
    }),
    new PersonObj({
      name: 'Bob Goldfarb',
      images: {1998: 'http://barechest.org/years/1998/1998_02_bob_goldfarb.jpg'},
    }),
    new PersonObj({
      name: 'Jim Cassiol',
      images: {1998: 'http://barechest.org/years/1998/1998_03_jim_cassiol.jpg'},
    }),
    new PersonObj({
      name: 'Mark Seeba',
      images: {1998: 'http://barechest.org/years/1998/1998_04_mark_seeba.jpg'},
    }),
    new PersonObj({
      name: 'Christopher Ward',
      images: {1998: 'http://barechest.org/years/1998/1998_05_christopher_ward.jpg'},
    }),
    new PersonObj({
      name: 'David Edwards',
      images: {1998: 'http://barechest.org/years/1998/1998_06_david_edwards.jpg'},
    }),
    new PersonObj({
      name: 'Ken Lyght',
      images: {1998: 'http://barechest.org/years/1998/1998_07_ken_lyght.jpg'},
    }),
    new PersonObj({
      name: 'Mike Lion',
      images: {1998: 'http://barechest.org/years/1998/1998_08_mike_lion.jpg'},
    }),
    new PersonObj({
      name: 'Andy Shore',
      images: {1998: 'http://barechest.org/years/1998/1998_09_andy_shore.jpg'},
    }),
    new PersonObj({
      name: 'Cory Iwatsu',
      images: {1998: 'http://barechest.org/years/1998/1998_10_cory_iwatsu.jpg'},
    }),
    new PersonObj({
      name: 'Ingu Yun',
      images: {1998: 'http://barechest.org/years/1998/1998_11_ingu_yun.jpg'},
    }),
    new PersonObj({
      name: 'Glennon Sutter',
      images: {1998: 'http://barechest.org/years/1998/1998_12_glennon_sutter.jpg'},
    }),
    new PersonObj({
      name: 'Terry Gauchat',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_01_terry_gauchat.jpg'},
    }),
    new PersonObj({
      name: 'Frank Parker',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_02_frank_parker.jpg'},
    }),
    new PersonObj({
      name: 'Ali Shovieb',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_03_ali_shovieb.jpg'},
    }),
    new PersonObj({
      name: 'Paul Tucci',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_04_paul_tucci.jpg'},
    }),
    new PersonObj({
      name: 'Gregg Schamberger',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_999_05_gregg_schamberger.jpg'},
    }),
    new PersonObj({
      name: 'Doug Harrison',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_06_doug_harrison.jpg'},
    }),
    new PersonObj({
      name: 'Ben Greenwell',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_07_ben_greenwell.jpg'},
    }),
    new PersonObj({
      name: 'Perry Brandon',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_08_perry_brandon.jpg'},
    }),
    new PersonObj({
      name: 'Brent Cassidy',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_09_brent_cassidy.jpg'},
    }),
    new PersonObj({
      name: 'Joe Imbriani',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_10_joe_imbriani.jpg'},
    }),
    new PersonObj({
      name: 'Dutch Van Horn',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_11_dutch.jpg'},
    }),
    new PersonObj({
      name: 'Marvin Ross',
      images: {1999: 'http://barechest.org/thumbs_gallery_years/th_1999_12_marvin_ross.jpg'},
    }),
    new PersonObj({
      name: 'Bill Hubbard',
      images: {2000: 'http://barechest.org/years/2000/2000_01_bill_hubbard.jpg'},
    }),
    new PersonObj({
      name: 'Todd Bauer',
      images: {2000: 'http://barechest.org/years/2000/2000_02_todd_bauer.jpg'},
    }),
    new PersonObj({
      name: 'Chris Hummel',
      images: {2000: 'http://barechest.org/years/2000/2000_03_chris_hummel.jpg'},
    }),
    new PersonObj({
      name: 'Carl Battles',
      images: {2000: 'http://barechest.org/years/2000/2000_04_carl_battles.jpg'},
    }),
    new PersonObj({
      name: 'Dann Cantrell',
      images: {2000: 'http://barechest.org/years/2000/2000_05_dann_cantrell.jpg'},
    }),
    new PersonObj({
      name: 'David Polizzi',
      images: {2000: 'http://barechest.org/years/2000/2000_06_david_polizzi.jpg'},
    }),
    new PersonObj({
      name: 'Tom Wallace',
      images: {2000: 'http://barechest.org/years/2000/2000_07_tom_wallace.jpg'},
    }),
    new PersonObj({
      name: 'Dean Prager',
      images: {2000: 'http://barechest.org/years/2000/2000_08_dean_prager.jpg'},
    }),
    new PersonObj({
      name: 'Marshall Miller',
      images: {2000: 'http://barechest.org/years/2000/2000_09_marshall_miller.jpg'},
    }),
    new PersonObj({
      name: 'Ric Hunter',
      images: {2000: 'http://barechest.org/years/2000/2000_10_ric_hunter.jpg'},
    }),
    new PersonObj({
      name: 'Silvio Barretta',
      images: {2000: 'http://barechest.org/years/2000/2000_11_silvio_barretta.jpg'},
    }),
    new PersonObj({
      name: 'Nick Knight',
      images: {2001: 'http://barechest.org/years/2001/2001_01_nick_knight.jpg'},
    }),
    new PersonObj({
      name: 'Lance Gear',
      images: {2001: 'http://barechest.org/years/2001/2001_02_lance_gear.jpg'},
    }),
    new PersonObj({
      name: 'Paul Dawson',
      images: {2001: 'http://barechest.org/years/2001/2001_04_paul_dawson.jpg'},
    }),
    new PersonObj({
      name: 'Jeff Cilione',
      images: {2001: 'http://barechest.org/years/2001/2001_05_jeff_cilione.jpg'},
    }),
    new PersonObj({
      name: 'Seth Adams',
      images: {2001: 'http://barechest.org/years/2001/2001_06_seth_adams.jpg'},
    }),
    new PersonObj({
      name: 'Scott Strang',
      images: {2001: 'http://barechest.org/years/2001/2001_07_scott_strang.jpg'},
    }),
    new PersonObj({
      name: 'Art Arciniega',
      images: {2001: 'http://barechest.org/years/2001/2001_08_art_arciniega.jpg'},
    }),
    new PersonObj({ // September???
      name: '',
      images: {2001: ''},
    }),
    new PersonObj({
      name: 'Nolan & Sal',
      images: {2001: 'http://barechest.org/years/2001/2001_10_nolanfinn_salrinauro.jpg'},
    }),
    new PersonObj({
      name: 'Daniel Henderson',
      images: {2001: 'http://barechest.org/years/2001/2001_11_daniel_henderson.jpg'},
    }),
    new PersonObj({
      name: 'Ed Morgan',
      images: {2001: 'http://barechest.org/years/2001/2001_12_ed_morgan.jpg'},
    }),
  ];
  for (var key in p) {
    if (people[p[key].name]) {
      window.alert('dupliate ' + p[key].name);
    }
    people[p[key].name] = p[key];
  }
  people['Mitch Johnson'].addImage(1991, 'http://barechest.org/years/1991/1991_11_mitch_johnson.jpg');
  people['Brian Berger'].addImage(1988, 'http://barechest.org/years/1988/1988_04_brian_berger.jpg');
  people['Grant Dupont'].addImage(1992, 'http://barechest.org/years/1992/1992_02_grant_dupont.jpg');
  people['Kevin Sims'].addImage(1993, 'http://barechest.org/years/1993/1993_07_kevin_sims.jpg');
  people['Kevin Sims'].addImage(1994, 'http://barechest.org/years/1994/1994_01_kevin_sims.jpg');
  people['Kevin Sims'].addImage(2000, 'http://barechest.org/years/2000/2000_12_kevin_sims.jpg');

  people['Lee Tucker'].addImage(1995, 'http://barechest.org/years/1995/1995_02_lee_tucker.jpg');
  people['Wolf Mirasol'].addImage(1996, 'http://barechest.org/thumbs_gallery_years/th_96_06_wolf-andy.jpg');
  people['Devin MacLachlan'].addImage(1996, 'http://barechest.org/years/1996/1996_01_devin_maclachlan.jpg');
  people['Charlie Seltz'].addImage(1996, 'http://barechest.org/years/1996/1996_12_charlie_seltz.jpg');
  people['Mark Seeba'].addImage(2001, 'http://barechest.org/years/2001/2001_03_mark_seeba.jpg');

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
  this.calendar[1993] = {
    cover: 'http://barechest.org/years/1993/1993_fc_joe_mcmurray.jpg',
    coverMan: people['Joe McMurray'],
    backMan: people['Bob Harrison'],
    back: 'http://barechest.org/years/1993/1993_bc_bob_harrison.jpg',
    monthsUnprocessed: [
      people['Wolf Mirasol'],
      people['Dieter Edwards'],
      people['Nick Visconti'],
      people['Joe McMurray'],
      people['David Lomada'],
      people['Lonnie Tuck'],
      people['Kevin Sims'],
      people['Taylor Poff'],
      people['Michael Zwaan'],
      people['Daniel DeLeon'],
      people['Bob Harrison'],
      people['Chris Winkel'],
    ],
  };
  this.calendar[1994] = {
    cover: 'http://barechest.org/years/1994/1994_fc_jeff_kennedy.jpg',
    coverMan: people['Jeff Kennedy'],
    backMan: people['Albert Wyss'],
    back: 'http://barechest.org/years/1994/1994_bc_albert_wyss.jpg',
    monthsUnprocessed: [
      people['Kevin Sims'],
      people['Reed Morrow'],
      people['Albert Wyss'],
      people['Ted Downer'],
      people['Jeff Olney'],
      people['Lee Tucker'],
      people['Mark Austin'],
      people['Dennis Richards'],
      people['Jeff Kennedy'],
      people['Peter Dorian'],
      people['Sid Toress'],
      people['Bruce Starr'],
    ],
  };
  this.calendar[1995] = {
    cover: 'http://barechest.org/years/1995/1995_fc_mark_johansen.jpg',
    coverMan: people['Mark Johansen'],
    backMan: people['Alex Saldarriaga'],
    back: 'http://barechest.org/years/1995/1995_bc_alex_saldarriaga.jpg',
    monthsUnprocessed: [
      people['Mikey Cross'],
      people['Lee Tucker'],
      people['Mike Torkildsen'],
      people['Eliot \'Buck\' Sierra'],
      people['David Magness'],
      people['Charlie Seltz'],
      people['Jim Gatteau'],
      people['Mark Johansen'],
      people['Alex Saldarriaga'],
      people['Devin MacLachlan'],
      people['Bob Toner'],
      people['Robert \'Scott\' Sherrill'],
    ],
  };
  this.calendar[1996] = {
    cover: 'http://barechest.org/years/1996/1996_bc_wolf_mirasol.jpg',
    coverMan: people['Wolf Mirasol'],
    backMan: people['Jeff Buppert'],
    back: 'http://barechest.org/years/1996/1996_fc_jeff_buppert.jpg',
    monthsUnprocessed: [
      people['Devin MacLachlan'],
      people['Tommy Reaves'],
      people['Jim Donahue'],
      people['Kirke Watson'],
      people['Ron Telles'],
      people['Wolf & Andy'],
      people['Gary Lindstrum'],
      people['John Bleyle'],
      people['Jeff Buppert'],
      people['Martyn Jones'],
      people['Mike Greenberg'],
      people['Charlie Seltz'],
    ],
  };
  this.calendar[1997] = {
    cover: 'http://barechest.org/years/1997/1997_fc_michael_wieland.jpg',
    coverMan: people['Michael Wieland'],
    back: 'http://barechest.org/thumbs_gallery_years/th_97_bc_fourmen.jpg',
    monthsUnprocessed: [
      people['Felix Novy'],
      people['Joey Faria'],
      people['Randy Wright'],
      people['Thomas Powers'],
      people['Juan Carlos'],
      people['Stuart Kloda'],
      people['??'],
      people['Lynn McCameron'],
      people['Michael Wieland'],
      people['Mike Rand'],
      people['John Edwards'],
      people['Alex Hill'],
    ],
  };
  this.calendar[1998] = {
    cover: 'http://barechest.org/years/1998/1998-_c_mark_seeba.jpg',
    coverMan: people['Mark Seeba'],
    backMan: people['Ingu Yun'],
    back: 'http://barechest.org/years/1998/1998_bc_ingu_yun.jpg',
    monthsUnprocessed: [
      people['Andre English'],
      people['Bob Goldfarb'],
      people['Jim Cassiol'],
      people['Mark Seeba'],
      people['Christopher Ward'],
      people['David Edwards'],
      people['Ken Lyght'],
      people['Mike Lion'],
      people['Andy Shore'],
      people['Cory Iwatsu'],
      people['Ingu Yun'],
      people['Glennon Sutter'],
    ],
  };
  this.calendar[1999] = {
    cover: 'http://barechest.org/years/1999/1999_fc_ben_greenwell.jpg',
    coverMan: people['Ben Greenwell'],
    backMan: people['Paul Tucci'],
    back: 'http://barechest.org/years/1999/1999_bc_paul_tucci.jpg',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2000] = {
    cover: 'http://barechest.org/years/2000/2000_fc_ric_hunter.jpg',
    coverMan: people['Ric Hunter'],
    backMan: people['Kevin Sims'],
    back: 'http://barechest.org/years/2000/2000_bc_kevin_sims.jpg',
    monthsUnprocessed: [
      people['Bill Hubbard'],
      people['Todd Bauer'],
      people['Chris Hummel'],
      people['Carl Battles'],
      people['Dann Cantrell'],
      people['David Polizzi'],
      people['Tom Wallace'],
      people['Dean Prager'],
      people['Marshall Miller'],
      people['Ric Hunter'],
      people['Silvio Barretta'],
      people['Kevin Sims'],
    ],
  };
  this.calendar[2001] = {
    cover: 'http://barechest.org/years/2001/2001_fc_daniel_henderson.jpg',
    coverMan: people['Lance Gear'],
    backMan: people['Daniel Henderson'],
    back: 'http://barechest.org/years/2001/2001_bc_lance_gear.jpg',
    monthsUnprocessed: [
      people['Nick Knight'],
      people['Lance Gear'],
      people['Mark Seeba'],
      people['Paul Dawson'],
      people['Jeff Cilione'],
      people['Seth Adams'],
      people['Scott Strang'],
      people['Art Arciniega'],
      null,
      people['Nolan & Sal'],
      people['Daniel Henderson'],
      people['Ed Morgan'],
    ],
  };
  this.calendar[2002] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2003] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2004] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2005] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2006] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2007] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2008] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2009] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2010] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2011] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2012] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2013] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2014] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2015] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2016] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  this.calendar[2017] = {
    cover: '',
    coverMan: people[''],
    backMan: people[''],
    back: '',
    monthsUnprocessed: [
    ],
  };
  for (var year in this.calendar) {
    this.calendar[year].months = [];
    for (var monthId in this.calendar[year].monthsUnprocessed) {
      if (!this.calendar[year].monthsUnprocessed) {
        continue;
      }
      this.calendar[year].months[monthId] = new MonthObj(this.calendar[year].monthsUnprocessed[monthId], year, monthId);
      this.calendar[year].year = year;
      for (var pid in this.calendar[year].months[monthId].people) {
        if (this.calendar[year].months[monthId].people[pid]) {
          this.calendar[year].months[monthId].people[pid].months.push({year: year, monthId: monthId});
        }
      }
    }
    if (this.calendar[year].coverMan) {
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


