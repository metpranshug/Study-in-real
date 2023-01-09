/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.btn');
      
      this.partNameEl = document.querySelector('#partName');
      this.partDescriptionEl = document.querySelector('#partDescription');
  
      this.partInfo = {
        brain_one: {
          name: 'Cerebellum',
          description: 'Hey! there. Content coming soon...'
        },
        brain_four: {
          name: 'Right Cerebrum',
          description: 'The right is more visual and intuitive. It’s our analog brain. It helps us in imagination, holistic thinking, intuition, arts, rhythm, nonverbal cues, feelings visualisation and daydreaming'
        },
        brain_three: {
          name: 'Brain Stem',
          description: 'It is responsible for many vital functions of life, such as breathing, consciousness, blood pressure, heart rate, and sleep. '
        },
        brain_two: {
          name: 'Left Cerebrum',
          description: 'The left understands words, is analytic and orderly . It helps us in logic, sequencing, linear thinking, mathematics , facts and thinking in words.'
        }
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
      this.partDescriptionEl.setAttribute('text', 'value', partInfo.description);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
    }
  });