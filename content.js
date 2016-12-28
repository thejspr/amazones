function locationShouldRedirect(url) {
  return url.indexOf('amazon.com') != -1;
}

if (locationShouldRedirect(window.location.host)) {
  if (confirm('Go to amazon.co.uk ?')) {
    var currentUrl = window.location.toString();
    var newUrl = currentUrl.replace('amazon.com', 'amazon.co.uk');

    window.location = newUrl;
  }
}
