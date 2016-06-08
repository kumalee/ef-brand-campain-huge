var CWebp = require('cwebp').CWebp;
var f = ['page-123','page-4','page-5','page-6','page-7','page-thanks']

for(i in f){
  var encoder = new CWebp('./images/' + f[i] + '.jpg');
  encoder.quality(60).write('./images/' + f[i] + '.webp', function(err){
    console.log(err || f[i] + 'encoded successfully');
  });
}
