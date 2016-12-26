var featureSwitch = (function() {
  function getQueryStringValues(key) {
    var qd = {};
    location.search.substr(1).split("&").forEach(function(item) {
      var s = item.split("=");
      var k = s[0];
      var v = s[1] && decodeURIComponent(s[1]);
      //(k in qd) ? qd[k].push(v) : qd[k] = [v]
      (qd[k] = qd[k] || []).push(v) //short-circuit
    })
    if(key) {
      return qd[key];
    }
    return qd;
  }

  var featuresOn = getQueryStringValues('_on');
  if (featuresOn) {
    featuresOn.map(function(value) {
      localStorage.setItem('_on='+value, true)
    });
  }

  var featuresOff = getQueryStringValues('_off');
  if (featuresOff) {
    featuresOff.map(function(value) {
      localStorage.removeItem('_on='+value)
    });
  }
}());
