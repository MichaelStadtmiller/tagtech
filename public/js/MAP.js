  globals = {
      lookdownAngle: -50
  };

  AFRAME.registerComponent('map-component', {
      tick: function() {
        var rotation = this.el.getAttribute('rotation');
        if (rotation != null) {
          if (rotation.x < globals.lookdownAngle) {
            document.getElementById("map").setAttribute('visible', true);
          } else {
            document.getElementById("map").setAttribute('visible', false);
          }
      }}});