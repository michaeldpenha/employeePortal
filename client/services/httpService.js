app.service("httpService",['$q','$http','$rootScope',function(q,http,$rootScope){
	return {
		apiCall : function (method,url,params,formData){
            let me =this;
            let def = q.defer();
            let requestObj = {};

            (method) ? requestObj['method'] = method : '';
            (url) ? requestObj['url'] = url : '';
            (params) ? requestObj['params'] = params : '';

            http(requestObj).then((response)=>{
                    def.resolve(response);
                },(error)=>{
                    def.reject(error);
            });
            
            return def.promise;
        }
	};
}]);
