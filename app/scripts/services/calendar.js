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
  this.people = getPeople();
  var people = this.people ;
  this.calendar = {};
  this.calendar[1985] = {
    cover: 'http://barechest.org/years/1985/1985_fc.jpg',
    back: '',
    monthsUnprocessed: [
      people['Michael Merriot'],
      people['Steve Green'],
      people['Miles Mitchell'],
      people['Jim Cvitanich'],
      people['(Unknown)'], // @todo who is he!
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
    back: 'http://barechest.org/thumbs_gallery_years/th_97_bc_fourmen.jpg', // @todo
    monthsUnprocessed: [
      people['Felix Novy'],
      people['Joey Faria'],
      people['Randy Wright'],
      people['Thomas Powers'],
      people['Juan Carlos'],
      people['Stuart Kloda'],
      people['??'], // @todo missing name, full image
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
      people['Terry Gauchat'],
      people['Frank Parker'],
      people['Ali Shovieb'],
      people['Paul Tucci'],
      people['Gregg Schamberger'],
      people['Doug Harrison'],
      people['Ben Greenwell'],
      people['Perry Brandon'],
      people['Brent Cassidy'],
      people['Joe Imbriani'],
      people['Dutch Van Horn'],
      people['Marvin Ross'],
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
      null,// @todo Missing person & image
      people['Nolan & Sal'], // Todo last names
      people['Daniel Henderson'],
      people['Ed Morgan'],
    ],
  };
  this.calendar[2002] = {
    cover: '', // @todo Missing cover
    //coverMan: people['Peter Jackson'],
    backMan: people['Doug Roenicke'],
    back: 'http://barechest.org/years/2002/2002_bc_peter_jackson.jpg',
    monthsUnprocessed: [
      people['Scott Brogan'],
      people['Tony Smith'],
      people['Enrique Massa'],
      people['Greg Graziani'],
      people['Nico Letunic'],
      people['Doug Roenicke'],
      people['Terry West'],
      people['Gary Fruhling'],
      people['Peter Jackson'],
      people['Joe Bonafede'],
      people['Kurt Cooper'],
      people['Paul Larson'],
    ],
  };
  this.calendar[2003] = {
    cover: 'http://barechest.org/years/2003/coverman2003.jpg',
    coverMan: people['Ken Ferraris'],
    backMan: people['Troy Anicete'],
    back: 'http://barechest.org/years/2003/2003bc.jpg',
    monthsUnprocessed: [
      people['Joe Potter'],
      people['Ken Ferraris'],
      people['Tim Chanaud'],
      people['Eric Robbins'],
      people['Troy Anicete'],
      people['Corey Caballero'],
      people['Jeff Taylor'],
      people['Tim Ault'],
      people['Didier Carmagnolle'],
      people['Julian Marshburn'],
      people['Mike Romero'],
      people['Dax Berg'],
    ],
  };
  this.calendar[2004] = {
    cover: 'http://barechest.org/years/2004/images/810pr25.jpg',
    coverMan: people['Chris Harrill'],
    backMan: people['David Lemier'],
    back: 'http://barechest.org/years/2004/images/810pr26.jpg',
    monthsUnprocessed: [
      people['Art Leigel'],
      people['Neil Guillot'],
      people['Bill Simpson'],
      people['Damon  Holzum'],
      people['Oscar Mendez'],
      people['Tony Wakin'],
      people['J Michael Leiden'],
      people['George Delmar'],
      people['James Holloway'],
      people['Engracio Clemena'],
      people['David Lemier'],
      people['Chris Harrill'],
    ],
  };
  this.calendar[2005] = {
    cover: 'http://barechest.org/years/2005/images/2005_fc.jpg', // @todo who??
    coverMan: null,
    backMan: people['David Haase'],
    back: 'http://barechest.org/years/2005/images/2005_01_david_lang.jpg',
    monthsUnprocessed: [
      people['David Lang'],
      people['Dan Lauten &Scott Nichols'],
      people['Dale St. Pierre'],
      people['Michael Bond'],
      people['Drew Ugrinow'],
      people['David Haase'],
      people['Nick Aitken'],
      people['George Delmar'],
      people['Dodger Allen'],
      null,// ??
      people['Terry Anderson'],
      people['Scott Brogan'],
    ],
  };
  this.calendar[2006] = {
    cover: 'http://barechest.org/years/2006/2006_fc_dan.gif',
    coverMan: people['Dan Baker'],
    backMan: people['Allen Silver'],
    back: 'http://barechest.org/years/2006/2006_bc_allen.gif',
    monthsUnprocessed: [
      people['James Girard'],
      people['Valter Vangelisti'],
      people['Jay Glass'],
      people['Dan Baker'],
      people['Jefe Kraybill'],
      people['Mark Hollenstein'],
      people['Allen Silver'],
      people['Chris Duncan'],
      people['Barry Skown'],
      people['Reece Joyner'],
      people['Alan Breslaw'],
      people['Thom Grant'],
    ],
  };
  /*this.calendar[2007] = {
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
  };*/
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
  if (calendar.back) {
    return calendar.back;
  }
  for (var key in calendar.months) {
    var image = calendar.months[key].getImage();
    if (image) {
      return image;
    }
  }
  return '';
};


