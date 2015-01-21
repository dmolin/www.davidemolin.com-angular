angular.module("app.common")
.directive("dmFeed", function($window, $timeout) {
    return {
        restrict: "AE",
        transclude: true,
        templateUrl: "common/dmFeeds/dm-feeds.html",
        scope: {
            type: "@?",
            title: "@?",
            url: "@",
            showTitle: "@?",
            showTimestamp: "@?",
            feedLink: "@?",
            feedTitle: "@?",
            feedText: "@?",
            maxLines: "@?",
            timeout: '@?'
        },
        controller: function($scope, $http) {
            var type = "application/" + ($scope.type || "json");
            $scope.feedLink = $scope.feedLink || "link";
            $scope.feedTitle = $scope.feedTitle || "title";
            $scope.feedText = $scope.feedText || "description";
            $scope.maxLines = $scope.maxLines || 150;
            $scope.showTitle = $scope.showTitle || true;
            $scope.feeds = {items:[]};
            $scope.loaded = false;

            $http.get(
                '/proxy.php?url=' + $scope.url + "&type=" + encodeURIComponent(type),
                {
                    transformResponse: function(data) {
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json(data);
                        var outcome = {
                            items: json.rss.channel.item
                        };
                        //parse CDATA sections
                        outcome.items = _.map(outcome.items, function(item) {
                            var txt = item[$scope.feedText]["__cdata"];
                            var p = document.createElement('p');
                            p.innerHTML = txt;
                            txt = p.childNodes.length === 0 ? "" : p.childNodes[0].nodeValue || p.childNodes[0].outerHTML;
                            item[$scope.feedText] = txt;
                            //I've still to figure out how to represent HTML entities with Angular....
                            //item["summary"] = p.childNodes[0] instanceof HTMLElement ? txt : txt.substring(0,$scope.maxLines);
                            if(p.childNodes[0] instanceof HTMLElement) {
                                txt = new Array($scope.maxLines+1).join(' ');
                            }
                            item["summary"] = txt.substring(0,$scope.maxLines);

                            return item;
                        })
                        return outcome;
                    }
                }).then(function(response) {
                    $scope.feeds.items = response.data.items;
                    $scope.loaded = true;
                });
        },
        link: function(scope, elements, attrs) {
            var parent = $(angular.element('.feed-list').parent());
            //run jQuery plugin function to bring the feed roller to life
            var feed = angular.element('.feed-list');

            scope.$watch('loaded', function() {
                if(scope.feeds.items.length === 0) return;

                $timeout(function(){
                    feed.cycle({
                        fx: 'fade',
                        slides: '> .slide',
                        timeout: scope.timeout || 10000,
                        speed: 3000
                    });
                });
            }, true)
        }
    };
});
