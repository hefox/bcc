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
  return this.images[year];
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
MonthObj.prototype.getMonthName = function() {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[this.monthId];
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
    }),
    new PersonObj({
      name: '(Unknwon)',
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
    }),
    new PersonObj({
      name: 'Brian Berger',
      images: {1986: 'http://barechest.org/years/1986/1986_06_brian_berger.jpg'},
    }),
    new PersonObj({
      name: 'Richard Ruggiero',
      images: {1986: 'http://barechest.org/years/1986/1986_07_richard_ruggiero.jpg'},
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
      name: 'Steve Condrad',
      images: {1989: 'http://barechest.org/years/1989/1989_03_steve_conrad.jpg'},
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
    }),
    new PersonObj({
      name: 'Jeff Hettmansperger',
      images: {1989: 'http://barechest.org/years/1989/1989_10_jeff_hettmansperge.jpg'},
    }),
    new PersonObj({
      name: 'Ken McMullen',
      images: {1989: 'http://barechest.org/years/1989/1989_11_ken_mcmullen.jpg'},
    }),
    new PersonObj({
      name: 'Franklin Liam Liao',
      images: {1989: 'http://barechest.org/thumbs_gallery_years/th_1989_12_franklin_lim.jpg'},
    }),
    new PersonObj({
      name: 'Peter Austin',
      images: {1989: 'http://barechest.org/thumbs_gallery_years/th_1989_12_franklin_lim.jpg'},
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
    }),
    new PersonObj({
      name: 'Bruce Combs',
      images: {1990: 'http://barechest.org/years/1990/1990_04_bruce_combs.jpg'},
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
    }),
    new PersonObj({
      name: 'Joe Fiorentino',
      images: {1991: 'http://barechest.org/years/1991/1991_06_joe_fiorentino.jpg'},
    }),
    new PersonObj({
      name: 'Tom Rodgers',
      images: {1991: 'http://barechest.org/years/1991/1991_07_tom_rodgers.jpg'},
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
    }, people)];
  for (var key in p) {
    people[p[key].name] = p[key];
  }
  people['Mitch Johnson'].addImage(1991, 'http://barechest.org/years/1991/1991_11_mitch_johnson.jpg');
  people['Brian Berger'].addImage(1988, 'http://barechest.org/years/1988/1988_04_brian_berger.jpg');


  this.calendar = {
    1985 : {
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
    },
    1986 : {
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
    },
    1987 : {
      cover: 'http://barechest.org/years/1987/1987_fc_ron_beauchemin.jpg',
      back: 'http://barechest.org/years/1987/1987_bc_john_brown.jpg',
      coverMan: 'Ron Beauchemin',
      backMan: 'John Brown',
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
    },
    1988 : {
      cover: 'http://barechest.org/years/1988/1988_fc_robert_genet.jpg',
      back: 'http://barechest.org/years/1988/1988_bc_brian_berger.jpg',
      coverMan: 'Robert Genet',
      backMan: 'Brian Berger',
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
    },
    1989 : {
      cover: 'http://barechest.org/years/1989/1989_fc_peter_austin.jpg',
      back: 'http://barechest.org/years/1989/1989_bc_clayton_aravjo.jpg',
      coverMan: 'Peter Austin',
      backMan: 'Clayton Aravio',
      monthsUnprocessed: [
        people['Jon DeLeon'],
        people['Tyronne Howze'],
        people['Steve Condrad'],
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
    },
    1990 : {
      cover: 'http://barechest.org/years/1990/1990_fc_bradley_cavalier.jpg',
      coverMan: 'Bradley Cavalier',
      backMan: 'Chris Minor',
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
    },
    1991 : {
      cover: 'http://barechest.org/years/1991/1991_fc_mitch_johnson.jpg',
      coverMan: 'Mitch Johnson',
      backMan: 'Andrew Pear',
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
    },
  };
  for (var year in this.calendar) {
    this.calendar[year].months = [];
    for (var monthId in this.calendar[year].monthsUnprocessed) {
      this.calendar[year].months[monthId] = new MonthObj(this.calendar[year].monthsUnprocessed[monthId], year, monthId);
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


