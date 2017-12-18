exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^(app)/,
      'js/vendor.js': /^node_modules/
    }
  },
  stylesheets: { joinTo: 'css/app.css' }
};

exports.plugins = {
  babel: { presets: ['latest', 'stage-0'] },
  pleeease: {
    sass: true,
    autoprefixer: {
      browsers: ['> 1%']
    }
  },
  copycat: {
    fonts: ['node_modules/uikit/dist/fonts'],
    onlyChanged: true
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['js/initialize']
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    uikit: 'uikit',
    jqueryValidation: 'jquery-validation'
  },
  styles: {
    uikit: ['dist/css/uikit.css']
  }
};
