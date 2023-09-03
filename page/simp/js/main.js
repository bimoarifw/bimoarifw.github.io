$(document).on('click', '.project__filter li', function () {
    $(this).addClass('project__filter-active').siblings().removeClass('project__filter-active')
});

$(document).ready(function () {
    $('.project-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.project__box').show('1000');
        }
        else {
            $('.project__box').not('.' + value).hide('1000');
            $('.project__box').filter('.' + value).show('1000');
        }
    });
});


// 


var words = ['Hi!', 'Currently, I\'m learning to be a front end developer', 'I\'m a beginner and a longlife learner', 'I\'m not a professional', 'Just an ordinary person,', 'who wants to learn to create something.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 50;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

//  
// Modal
function modal(){
  var modal = document.getElementById('modal');
  modal.classList.toggle('active')
}

