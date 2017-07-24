angular.module('app',[])
  .controller('selfcontrol',function($http){
    const vm = this
    vm.something = 'wow I really like code'
    $http.get('/firstNames').then((result)=>{
      console.log(res);
      vm.firstNames = res.data
    }).catch((err)=>{
      console.error(err);
    })
  })
