/* global AFRAME */
AFRAME.registerComponent('panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.btn');
      
      this.partNameEl = document.querySelector('#partName');
  
      this.partInfo = {
        elbow_one: {
          name: 'Humerus',
        },
        elbow_two: {
          name: 'Ulna',
        },
        elbow_three: {
          name: 'Radius',
        },
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
    },
onMenuButtonClick: function (evt) {
      var partInfo = this.partInfo[evt.currentTarget.id];
  
      this.backgroundEl.object3D.scale.set(1, 1, 1);
  
      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      this.partNameEl.setAttribute('text', 'value', partInfo.name);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
    }
  });