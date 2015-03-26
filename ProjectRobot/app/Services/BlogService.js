app.factory('BlogService', function ($http, $q) {


    //GET
    function blogData() {
        var def = $q.defer(); // SET        
        $http({
            url: 'https://chirpermessage.firebaseio.com/blog/.json',
            method: 'GET'
        }).success(function (data) {
            if (data == 'null') {
                blogs.push({ title: "This is a test!" });

            }
            else {
                blogs = [];
                for (var i in data) {
                    data[i].Id = i;
                    console.log(i, data[i]);
                    blogs.push(data[i]);
                }
            }
            //console.log("xdata", data.length, data);
            //console.log("xContacts", blogData.length);
            def.resolve(data);
        })
        return def.promise;
    };

    // POST - AJAX function
    function blogArticle(blogData) {
        var def = $q.defer(); // POST PROMISE
        $http({
            url: 'https://chirpermessage.firebaseio.com/blog/.json',
            method: 'POST',
            data: blogData
        }).success(function (data) {
            console.log('POST Success', data);
            def.resolve(data);
        }).error(function () {
            console.log('POST Error');
            def.reject();
        });
        return def.promise;
    }
    return {
        blogData: blogData,
        addBlogArticle: blogArticle
    }
});