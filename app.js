var assignment1ScriptUrl = 'https://cdn.rawgit.com/ZhangYiJiang/cs3216-groups/master/scripts/groups.js';
var studentPageUrl = 'https://cs3216.github.io/students/';

d3.html(studentPageUrl, function(err, html) {
  if(err) {
    console.warn(err);
  }
  var HtmlSelection = d3.select(html);
  HtmlSelection
    .selectAll('.student-thumbnail')
    .attr('style', function() {
      return replaceUrl(d3.select(this).attr('style'));
    });
  HtmlSelection
    .select('.navbar-brand')
    .select('img')
    .attr('src', function() {
      return replaceUrl(d3.select(this).attr('src'));
    });
  document.body.appendChild(html);
  d3.text(assignment1ScriptUrl, function(err, js) {
    if(err) {
      console.warn(err);
    }
    eval(js);
  });
});

function replaceUrl(string) {
  return string.replace('/img/', 'https://cs3216.github.io/img/');
}