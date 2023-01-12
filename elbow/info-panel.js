/* global AFRAME */
AFRAME.registerComponent('panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.btn');
      
      this.partNameEl = document.querySelector('#partName');
      this.partDescriptionEl = document.querySelector('#partDescription');
  
      this.partInfo = {
        elbow_one: {
          name: 'Humerus',
          description: 'Hey! there. Content coming soon...'
        },
        elbow_two: {
          name: 'Ulna',
          description: 'Hey! there. Content coming soon...'
        },
        elbow_three: {
          name: 'Radius',
          description: 'Hey! there. Content coming soon...'
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

    addStyles: function () {
      var css =
        '.a-panel{border-radius: 10px; position: absolute; width: ' + this.data.width + 'px;' +
        'height: ' + this.data.height + 'px; background-color: white; border: 3px solid rgba(0,0,0,0.65);' +
        'bottom: 22px; left: 22px; color: rgb(51, 51, 51); padding: 20px 15px 0 15px;' +
        'font-size: 11pt; line-height: 20pt; z-index: 9999}' +
  
        '.a-panel a{border-bottom: 1px solid rgba(53,196,232,.15); color: #1497b8;' +
        'position: relative; text-decoration: none; transition: .05s ease;}' +
  
        '@media only screen and (min-width: 1200px) {' +
        '.a-panel {font-size: 12pt}}' +
  
        '@media only screen and (max-width: 600px) {' +
        '.a-panel {left: 20px; right: 20px; bottom: 60px; width: auto}}' +
  
        '@media only screen and (max-height: 600px) {' +
        '.a-panel {left: 20px; bottom: 20px; height: 250px}}' +
  
        '.a-close-button-info{width: 25px; height: 25px; padding: 0;' +
        'top: 10px; right: 10px; position: absolute; color: white;' +
        'font-size: 12px; line-height: 12px; border: none; background-color: #ef2d5e;' +
        'border-radius: 5px; font-weight: medium}' +
  
        '.a-close-button-info:hover{background-color: #b32146; color: white}' +
        '.a-panel-container {position: absolute; left: 100px; bottom: 20px;}' +
        '.a-panel-button {background: rgba(0, 0, 0, 0.35) ' + this.infoMessageButtonDataURI + ' 50% 50% no-repeat;}' +
        '.a-panel-button {background-size: 92% 90%; border: 0; bottom: 0; cursor: pointer; min-width: 78px; min-height: 34px; padding-right: 0; padding-top: 0; position: absolute; right: 0; transition: background-color .05s ease; -webkit-transition: background-color .05s ease; z-index: 9999; border-radius: 8px; touch-action: manipulation;}' +
        '.a-panel-button:active, .a-panel-button:hover {background-color: #ef2d5e;}';
      var style = document.createElement('style');
  
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
  
      document.getElementsByTagName('head')[0].appendChild(style);
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