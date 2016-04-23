var active = true;

try {
    chrome.storage.sync.get({
        activate: true
    }, function (items) {
        active = items.activate;
        if (active) {
            run();
        }
    });
} catch (e) {
    if (active) {
        run();
    }
}
function run() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-76830237-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = 'https://ssl.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    (function () {
        var t_self = {
            tswizzlifyImgs: [
                'http://www.tvweek.com/wp-content/uploads/2014/09/taylor-swift.jpg', 'http://cdn.playbuzz.com/cdn/20a56b83-dcc7-4b01-833a-7c612c0bd96b/22fe4638-d675-47f8-9726-5f43e27bb084.jpg', 'https://celebdial.s3.amazonaws.com/celeb_pic/taylor-swift-hot-taylor-swift-18776371-1163-1492.jpg', 'http://cdn.cultofmac.com/wp-content/uploads/2015/06/Taylor_Swift002.jpg','https://cbsradionews.files.wordpress.com/2014/08/taylorswift-770_2.jpg?w=620&h=349&crop=1','http://www.hypebot.com/.a/6a00d83451b36c69e201b8d1589f0f970c-800wi','http://7-themes.com/data_images/out/20/6837871-taylor-swift.jpg','http://7-themes.com/data_images/out/61/6980034-taylor-swift-hot.jpg','http://7-themes.com/data_images/out/64/6991057-taylor-swift-look.jpg','http://media1.santabanta.com/full1/Global%20Celebrities(F)/Taylor%20Swift/taylor-swift-36a.jpg','https://calatoriameamuzicala.files.wordpress.com/2015/08/taylor-swift-2013c.jpg','http://project4gallery.com/wp-content/uploads/2016/03/taylor-swift-hot-red-lipstick-taylor-swift-31650397-1600-1200.jpg','http://www.showbiz411.com/wp-content/uploads/2012/10/Taylor.Swift_.0121.jpg','http://vignette2.wikia.nocookie.net/thevoiceusa/images/e/ef/6a00e552403d2f883301a511e3b484970c-500wi.png/revision/latest?cb=20140927235134','http://blog.ticketprocess.com/wp-content/uploads/2012/12/taylor-swift-2013-red-tour.jpg','http://rollingout.com/wp-content/uploads/2013/05/Taylor-Swift.jpg?a5de54','https://regmedia.co.uk/2015/01/13/taylor_swift_shrunk.jpg?x=648&y=348&crop=1','http://star98radio.com/wp-content/uploads/2015/02/Taylor-Swift-2013.jpg','https://celebdial.s3.amazonaws.com/celeb_pic/taylor-swift-hot-taylor-swift-18776371-1163-1492.jpg','http://images.boomsbeat.com/data/images/full/1174/taylor-swift-presenting-jpg.jpg','http://cdn.playbuzz.com/cdn/20a56b83-dcc7-4b01-833a-7c612c0bd96b/22fe4638-d675-47f8-9726-5f43e27bb084.jpg','http://cdn.cultofmac.com/wp-content/uploads/2015/06/Taylor_Swift002.jpg','http://project4gallery.com/wp-content/uploads/2016/03/taylor-swift-hot-3.jpg','http://images1.mtv.com/uri/mgid:file:docroot:cmt.com:/sitewide/assets/img/artists/swift_taylor/getty/453476898-x600.jpg?enlarge=false&matte=true&matteColor=black&quality=0.85','http://taylorpictures.net/albums/photoshoots/2014/1989/normal_014.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1212938131.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/83792119.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1212170352.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1244280631.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1237403113.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1237403113.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1245045937.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1245045937.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1223754455.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1217708259.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1213881479.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1274561735.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1223754462.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1245825054.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1239763011.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1223754457.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1239762964.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1234456263.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1272239539.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1241577286.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1232793877.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1221385617.jpg','http://i747.photobucket.com/albums/xx118/justinbieber344/Taylor%20Swift/taylor_swift_1239465828.jpg' 
            ],
            imgIndex: 0,
            resetIfNeeded: function(l){
                if (t_self.imgIndex >= l) {
                    t_self.imgIndex = 0;
                }
            },
            shuffle: function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
                }

                return array;
            },
            setImage: function(img, lstImgs) {
                var h = img.offsetHeight;
                var w = img.offsetWidth;
                img.style.width = w + 'px';
                img.style.height = h + 'px';
                t_self.resetIfNeeded(lstImgs.length);
                img.src = lstImgs[t_self.imgIndex++];
            },

            loadImage: function(img, lstImgs) {
                img.onerror = function(){
                    var index = lstImgs.indexOf(this.src);
                    if (index > -1) {
                        lstImgs.splice(index, 1);
                    }
                    t_self.setImage(img, lstImgs);
                };
                t_self.setImage(img, lstImgs);
            },
            handleImages: function (lstImgs, time) {
                var imgs = document.getElementsByTagName("img");
                for (var i = imgs.length - 1; i >= 0; i--) {
                    var item = imgs[i];
                    if (!~lstImgs.indexOf(item.src)) {
                        if (!item.offsetHeight && !item.offsetWidth) {
                            if (!~lstImgs.indexOf(item.src)) {
                                item.onload = function(){
                                    t_self.loadImage(item, lstImgs);
                                };
                            }
                        } else {
                            t_self.loadImage(item, lstImgs);
                        }
                    }
                }
                if (time > 0) {
                    setTimeout(function () { t_self.handleImages(lstImgs, time); }, time);
                }
            }
        };
        t_self.handleImages(t_self.shuffle(t_self.tswizzlifyImgs), 1000);
        document.tswizzlify = t_self;
    })();
}
