var Helpers = {
  camelCaseToHumanReadable: function (text) {
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.substring(1);
    }

    var words = text.match(/[A-Za-z][a-z]*/g);
    return words.map(capitalize).join(" ");
  }
}

module.exports = Helpers;