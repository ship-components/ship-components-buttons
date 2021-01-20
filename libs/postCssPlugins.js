module.exports = function() {
    return [
        require('postcss-nested'),
        require('postcss-simple-vars')({
          variables: {
            'primary-color' : '#42aa65'
          }
        }),
        require('postcss-color-hex-alpha'),
        require('postcss-color-function'),
        require('postcss-calc'),
        require('autoprefixer')
      ];
};
