AFRAME.registerComponent('color-change-obj', {
    schema: {
      color: {type: 'color', default: 'white'}
    },
    
    update: function () {
      var self = this;
      if (!this.el.getObject3D('mesh')) { return; }
      this.el.getObject3D('mesh').traverse( function (obj) {
        if (obj.isMesh) {
          obj.material.color.set(self.data.color);
        }
      });
    }
  });